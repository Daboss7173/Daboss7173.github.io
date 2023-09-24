var GameMods = {
	available: [
		{
			id: "WalkSpeed",
			patch: "initWalkSpeedMod"
		},
		{
			id: "FastGameSpeed",
			patch: "initFastGameSpeedMod"
		},
		{
			id: "RebalancedBattles",
			patch: "initRebalancedBattleMod"
		}
	]
};

class ModHandler {
	constructor(e) {
		this.game = e;
		this.animations = new (class {
			constructor(e) {
				this.animations = [];
			}
			getAll() {
				let ret = [];
				for (let i = 0; i < this.animations.length; i++)
					ret.push(this.animations[i].animation);
				return ret
			}
			register(animation, speed) {
				this.animations.push({
					animation: animation,
					baseSpeed: speed
				})
			}
			clear() {
				this.animations = []
			}
		})();
		this.tweens = new (class {
			constructor(e) {
				this.tweens = [];
			}
			getAll() {
				return this.tweens
			}
			getTweens() {
				let ret = [];
				for (let i = 0; i < this.tweens.length; i++)
					ret.push(this.tweens[i].tween);
				return ret
			}
			register(tweenParent, addedTween, delay, duration) {
				this.tweens.push({
					tween: addedTween,
					_parent: tweenParent,
					baseDelay: delay,
					baseDuration: duration
				})
			}
			clear() {
				this.tweens = [];
			}
		})()
	}
	
	log(message) {
		if (Util.isDefined(message)) {
			console.log("%c %c %c " + message + " %c %c ",
			"background: #1724",
			"background: #172a",
			"background: #172f; color: #FFF",
			"background: #172a",
			"background: #1724")
		}
	}
	
	info(message) {
		if (Util.isDefined(message)) {
			console.log("%c %c %c " + message + " %c %c ",
			"background: #14b4",
			"background: #14ba",
			"background: #14bf; color: #FFF",
			"background: #14ba",
			"background: #14b4")
		}
	}
	
	error(message) {
		if (Util.isDefined(message)) {
			console.log("%c %c %c " + message + " %c %c ",
			"background: #a114",
			"background: #a11a",
			"background: #a11f; color: #FFF",
			"background: #a11a",
			"background: #a114")
		}
	}
	
	initWalkSpeedMod() {
		this.game.prodigy.player.walkSpeed = 1,
		Prodigy.Container.CreatureContainer.prototype.setPath = function (e, t, i) {
			if (Util.isDefined(e)) {
				this.game.tweens.removeFrom(this, !1), this.game.tweens.removeFrom(this.sprites), Util.isDefined(i) || (i = this.game.prodigy.player.walkSpeed * this.walkSpeed);
				for (var a = null, s = null, r = this.x, o = this.y, n = e.length - 1; n >= 0; n--) {
					var h = e[n];
					Util.isDefined(h.x) || (h.x = r), Util.isDefined(h.y) || (h.y = o);
					var l = Phaser.Math.distance(h.x, h.y, r, o);
					0 !== l && (Util.isDefined(a) || (a = this.game.add.tween(this), s = this.game.add.tween(this.sprites.scale)), a.to({
						x: h.x,
						y: h.y
					}, 6 * l / i, Phaser.Easing.Linear.None), s.to({
						x: h.x > r ? 1 : -1
					}, 1, Phaser.Easing.Linear.None), s.to({}, 6 * l / i - 100, Phaser.Easing.Linear.None), r = h.x, o = h.y)
				}
				Util.isDefined(a) ? (a.onComplete.addOnce(this.stand, this), Util.isDefined(t) && a.onComplete.addOnce(t), this.walk(), this.mode = 0, Util.isDefined(a) && a.start(), Util.isDefined(s) && s.start()) : (Util.isDefined(t) && t(), this.stand())
			}
		};
		Prodigy.Menu.SystemMenu.prototype.openOther = function () {
			this.game.prodigy.create.textButton(this.content, 150, 50, {
				text: "Get Epics!",
				size: Prodigy.Control.TextButton.MED
			}, this.unlockEpics.bind(this)),this.game.prodigy.create.textButton(this.content, 150, 125, {
				text: "Toggle Member",
				size: Prodigy.Control.TextButton.MED
			}, this.toggleMember.bind(this)),
			this.walkSpeedBar = this.game.prodigy.create.slider(this.content, 37, 215, 525, !1, !1),
			this.walkSpeedBar.reset(200, 0, Math.floor((this.game.prodigy.player.walkSpeed - 0.1) * 10), this.setWalkSpeed.bind(this))
		};
		Prodigy.Menu.SystemMenu.prototype.setWalkSpeed = function () {
			this.game.prodigy.player.walkSpeed = (this.walkSpeedBar.page + 1) / 10,
			this.game.prodigy.create.font(this.content, 37, 185, "Walk Speed", {
				width: 525,
				align: "center"
			})
		}
	}
	
	initFastGameSpeedMod() {
		var i = Phaser.TweenManager.prototype.add,
			e = this.game,
			a = Phaser.Timer.prototype.add,
			s = Phaser.Tween.prototype.delay,
			r = Phaser.Tween.prototype.to,
			l = Boot.prototype.update,
			p = Phaser.AnimationManager.prototype.play,
			c = Prodigy.TweenController.prototype.set,
			g = Phaser.AnimationManager.prototype.add,
			u = Phaser.Game.prototype.update,
			f = this.animations,
			v = this.tweens;
		Phaser.Game.prototype.update = function(a) {
			for (let i = 0; i < f.animations.length; i++)
				!Util.isDefined(f.animations[i].animation._parent) && f.animations.splice(i, 1);
			for (let o = 0, t = v.getAll(); o < t.length; o++)
				!(t[o]._parent.src.alive) && t.splice(o, 1);
			return u.call(this, a)
		};
		window.setGameSpeed = function(speedMultiplier) {
			var t = speedMultiplier;
			if (t < 0.1) {
				ModHooks.error("Supplied speed multiplier is too low. Try a larger speed value.");
				return;
			};
			Phaser.TweenManager.prototype.add = function(a) {
				a.timeScale = t, i.call(this, a)
			},
			Phaser.Timer.prototype.add = function(d, b, c) {
				d /= t;
				return a.call(this, d, b, c)
			},
			Phaser.Tween.prototype.delay = function(a, b) {
				a /= t;
				return s.call(this, a, b)
			},
			Phaser.Tween.prototype.to = function(a, b, d, e, f, g, h) {
				if (Util.isDefined(f)) f /= t;
				return r.call(this, a, b, d, e, f, g, h)
			},
			Phaser.AnimationManager.prototype.add = function(a, b, d, e, h) {
				let originalSpeed = 10;
				if (Util.isDefined(d)) {
					originalSpeed = d;
					d *= t;
				}
				let animation = g.call(this, a, b, d, e, h);
				f.register(animation, originalSpeed);
				return animation
			},
			Phaser.AnimationManager.prototype.play = function(a, b, c, d) {
				if (Util.isDefined(b) && !isNaN(b)) b *= t;
				return p.call(this, a, b, c, d)
			},
			Prodigy.TweenController.prototype.set = function(e, i, a, s) {
				let r = a,
					o = s;
				if (Util.isDefined(a)) a /= t;
				if (Util.isDefined(s)) s /= t;
				let ret = c.call(this, e, i, a, s);
				v.register(this, this.tweens[this.tweens.length - 1], r, o);
				return ret
			};
			if (Util.isDefined(e.tweens))
				for (var o = e.tweens.getAll(), n = 0; n < o.length; n++)
					o[n].timeScale = t;
			if (Util.isDefined(f))
				for (var y = f.getAll(), m = 0; m < y.length; m++) 
					y[m].speed = t * (Util.isDefined(f.animations[m].baseSpeed) ? f.animations[m].baseSpeed : 10);
			if (Util.isDefined(v))
				for (var b = v.getAll(), w = 0, P = v.getTweens(); w < b.length; w++) {
					P[w].delay = b[w].baseDelay / t;
					P[w].duration = (P[w].frames.length * b[w].baseDelay * b[w].baseDuration) / t;
				}
		},
		window.setGameSpeed(3); // Game Speed Multiplier
		setTimeout(()=> {
			this.info("Use \"setGameSpeed(speed)\" to change the game speed at anytime.")
		}, 1e3)
	}
	
	initRebalancedBattleMod() {
		Prodigy.Attacks.prototype.calculateDamage = function (e, t, i, a, s) {
			Util.isDefined(a) || (a = 0);
			var r = 0;
			Util.isDefined(e) && Util.isDefined(e.damage) && (r = e.damage);
			var o = e.element,
				n = i.getElement(),
				l = 0,
				f = 0;
			Util.isDefined(t) ? (l = 1 + (t.getLevel() - 1), f = (l + 10) / 11) : (f = 1);
			return "Glacial Shield" !== e.name && 0 === i.modifiers.ignoreElement && (this.isStrong(o, n) ? r += 4 : this.isWeak(o, n) && (r -= 3, 0 >= r && (r = 2))), r = Math.floor(10 * r * s * f), Math.max(Math.floor(r + (Util.isDefined(a) ? a : 0)), 0)
		},
		Prodigy.Creature.getHeartsFromCurve = function (e, t, i) {
			var a = Prodigy.Creature.HP_BONUS[e],
				s = Math.floor((20 + a) * (i - 1) / 20),
				r = Math.floor((20 + a) * (t - 1) / 20);
			return 20 * (s - r)
		},
		Attack.prototype.damage = function () {
			this.calculateDamageDone(), Util.isDefined(this.atk.type) && "epic-attack" === this.atk.type && (Util.isDefined(this.epic) ? this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.epic.x, this.epic.y - 50, "battle", "text-epic-attack")) : this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.source.x, this.source.y - 50, "battle", "text-epic-attack"))), this.potionActive = !1, this.shieldTime = 0;
			var e = 0;
			if (Util.isDefined(this.target.source.modifiers) && Util.isDefined(this.target.source.modifiers.potion)) {
				var t = Items.getItemData("item", this.target.source.modifiers.potion);
				if (Util.isDefined(t.subType) && "elemental" === t.subType && Util.isDefined(this.atk.element) && ("all" === t.element || this.atk.element === t.element)) {
					this.potionActive = !0, this.shieldTime = 1e3, e = t.potency * this.damageDone / 10, this.damageDone -= Math.round(e);
					var i = this.target.sprites.add(this.game.prodigy.create.sprite(0, -75, "icons", "potion-buff-" + t.element));
					i.anchor.setTo(.5, .5);
					var a = this.game.add.tween(i).to({
							alpha: 0
						}, 1300, Phaser.Easing.Quadratic.Out),
						s = this.game.add.tween(i.scale).to({
							x: 4,
							y: 4
						}, 1300, Phaser.Easing.Quadratic.Out);
					a.start(), s.onComplete.add(function () {
						i.destroy()
					}, i), s.start()
				}
			}
			var r = "",
				o = Math.random() < this.CRITICAL_HIT_THRESHOLD + this.criticalThresholdBonus && "PVP" !== this.game.state.current || "epic-attack" === this.atk.type;
			o ? (this.damageDone = Math.round(1.50 * this.damageDone), this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.target.x, this.source.y + 50, "battle", "text-critical-hit"), 1e3 + this.shieldTime), r = "critical-hit") : r = "normal-hit", this.processStars(), this.lastTargetHp = this.target.source.getCurrentHearts(), this.target.source.changeCurrentHearts(-this.damageDone), this.game.prodigy.effects.characterText("-" + this.damageDone, this.target.x, this.source.y, this.shieldTime, {
				size: 1,
				font: "battle",
				mono: 44
			}), this.game.prodigy.audio.playSFX(Prodigy.Controller.AudioController.SFX_PACKS.BATTLE, r);
			var n = null;
			o || 0 !== this.target.source.modifiers.ignoreElement || (this.game.prodigy.attacks.isStrong(this.atk.element, this.target.source.getElement()) ? n = "Powerful!" : this.game.prodigy.attacks.isWeak(this.atk.element, this.target.source.getElement()) && (n = "Weak...")), Util.isDefined(n) && (this.delayComplete = !0, this.game.prodigy.effects.characterText(n, this.target.x, this.source.y + 50, 1e3 + this.shieldTime));
		}
	}
}

function checkForMods(e, t) {
	window.ModHooks = new ModHandler(e);
	ModHooks.log("Checking for mods...");
	var c = 0;
	for(var i = 0; i < GameMods.available.length; i += 1) {
		if (t.includes(GameMods.available[i].id)) {
			try {
				var p = GameMods.available[i].patch,
					f = ModHooks[p];
				f.call(ModHooks);
				ModHooks.log("Mod \"" + GameMods.available[i].id + "\" successfully applied!");
				c += 1
			} catch (e) {
				ModHooks.error("Error occured while applying mod \"" + GameMods.available[i].id + "\" to Prodigy!");
				console.error(e)
			}
		}
	};
	if (c > 0) {
		ModHooks.log("Applied (" + c + ") mods to the game")
	} else {
		ModHooks.log("No mods have been applied")
	}
}