var GameMods = {
	available: [{
		id: "WalkSpeed",
		patch: "initWalkSpeedMod"
	}, {
		id: "FastGameSpeed",
		patch: "initFastGameSpeedMod"
	}, {
		id: "RebalancedBattles",
		patch: "initRebalancedBattleMod"
	}, {
		id: "ImitationTitan",
		patch: "initImitationTitanMod"
	}]
};
class ModHandler {
	constructor(e) {
		this.game = e, this.animations = new class {
			constructor() {
				this.animations = []
			}
			getAll() {
				let e = [];
				for (let t = 0; t < this.animations.length; t++) e.push(this.animations[t].animation);
				return e
			}
			register(e, t) {
				this.animations.push({
					animation: e,
					baseSpeed: t
				})
			}
			clear() {
				this.animations = []
			}
		}, this.tweens = new class {
			constructor() {
				this.tweens = []
			}
			getAll() {
				return this.tweens
			}
			getTweens() {
				let e = [];
				for (let t = 0; t < this.tweens.length; t++) e.push(this.tweens[t].tween);
				return e
			}
			register(e, t, i, a) {
				this.tweens.push({
					tween: t,
					_parent: e,
					baseDelay: i,
					baseDuration: a
				})
			}
			clear() {
				this.tweens = []
			}
		}
	}
	log(e) {
		Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #1724", "background: #172a", "background: #172f; color: #FFF", "background: #172a", "background: #1724")
	}
	info(e) {
		Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #14b4", "background: #14ba", "background: #14bf; color: #FFF", "background: #14ba", "background: #14b4")
	}
	error(e) {
		Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #a114", "background: #a11a", "background: #a11f; color: #FFF", "background: #a11a", "background: #a114")
	}
	initWalkSpeedMod() {
		this.game.prodigy.player.walkSpeed = 1,
		Prodigy.Container.CreatureContainer.prototype.setPath = function(e, t, i) {
			if (Util.isDefined(e)) {
				this.stopTweens(), Util.isDefined(i) || (i = this.walkSpeed * this.game.prodigy.player.walkSpeed);
				for (var a = null, s = null, r = this.x, n = this.y, o = e.length - 1; o >= 0; o--) {
					var h = e[o];
					Util.isDefined(h.x) || (h.x = r), Util.isDefined(h.y) || (h.y = n);
					var l = Phaser.Math.distance(h.x, h.y, r, n);
					if (0 !== l) {
						Util.isDefined(a) || (a = this.game.add.tween(this), s = this.game.add.tween(this.sprites.scale));
						var d = Math.abs(this.sprites.scale.x);
						a.to({
							x: h.x,
							y: h.y
						}, 6 * l / i, Phaser.Easing.Linear.None), s.to({
							x: h.x > r ? 1 * d : -1 * d
						}, 1, Phaser.Easing.Linear.None), s.to({}, 6 * l / i - 100, Phaser.Easing.Linear.None), r = h.x, n = h.y
					}
				}
				Util.isDefined(a) ? (a.onComplete.addOnce(this.stand, this), Util.isDefined(t) && a.onComplete.addOnce(t), this.walk(), this.mode = 0, Util.isDefined(a) && a.start(), Util.isDefined(s) && s.start()) : (Util.isDefined(t) && t(), this.stand())
			}
		}, Prodigy.Menu.SystemMenu.prototype.openOther = function() {
			this.game.prodigy.create.textButton(this.content, 150, 50, {
				text: "Get Epics!",
				size: Prodigy.Control.TextButton.MED
			}, this.unlockEpics.bind(this)), this.game.prodigy.create.textButton(this.content, 150, 125, {
				text: "Toggle Member",
				size: Prodigy.Control.TextButton.MED
			}, this.toggleMember.bind(this)), this.walkSpeedBar = this.game.prodigy.create.slider(this.content, 37, 215, 525, !1, !1), this.walkSpeedBar.reset(200, 0, Math.floor(10 * (this.game.prodigy.player.walkSpeed - .1)), this.setWalkSpeed.bind(this))
		}, Prodigy.Menu.SystemMenu.prototype.setWalkSpeed = function() {
			this.game.prodigy.player.walkSpeed = (this.walkSpeedBar.page + 1) / 10, this.game.prodigy.create.font(this.content, 37, 185, "Walk Speed", {
				width: 525,
				align: "center"
			})
		}
	}
	initFastGameSpeedMod() {
		var e = Phaser.TweenManager.prototype.add,
			t = this.game,
			i = Phaser.Timer.prototype.add,
			a = Phaser.Tween.prototype.delay,
			s = Phaser.Tween.prototype.to,
			r = (Boot.prototype.update, Phaser.AnimationManager.prototype.play),
			o = Prodigy.TweenController.prototype.set,
			n = Phaser.AnimationManager.prototype.add,
			l = Phaser.Game.prototype.update,
			d = this.animations,
			h = this.tweens;
		Phaser.Game.prototype.update = function(e) {
			for (let e = 0; e < d.animations.length; e++) !Util.isDefined(d.animations[e].animation._parent) && d.animations.splice(e, 1);
			for (let e = 0, t = h.getAll(); e < t.length; e++) !t[e]._parent.src.alive && t.splice(e, 1);
			return l.call(this, e)
		}, window.setGameSpeed = function(l) {
			var g = l;
			if (g < .1) ModHooks.error("Supplied speed multiplier is too low. Try a larger speed value.");
			else {
				if (Phaser.TweenManager.prototype.add = function(t) {
						t.timeScale = g, e.call(this, t)
					}, Phaser.Timer.prototype.add = function(e, t, a) {
						return e /= g, i.call(this, e, t, a)
					}, Phaser.Tween.prototype.delay = function(e, t) {
						return e /= g, a.call(this, e, t)
					}, Phaser.Tween.prototype.to = function(e, t, i, a, r, o, n) {
						return Util.isDefined(r) && (r /= g), s.call(this, e, t, i, a, r, o, n)
					}, Phaser.AnimationManager.prototype.add = function(e, t, i, a, s) {
						let r = 10;
						Util.isDefined(i) && (r = i, i *= g);
						let o = n.call(this, e, t, i, a, s);
						return d.register(o, r), o
					}, Phaser.AnimationManager.prototype.play = function(e, t, i, a) {
						return Util.isDefined(t) && !isNaN(t) && (t *= g), r.call(this, e, t, i, a)
					}, Prodigy.TweenController.prototype.set = function(e, t, i, a) {
						let s = i,
							r = a;
						Util.isDefined(i) && (i /= g), Util.isDefined(a) && (a /= g);
						let n = o.call(this, e, t, i, a);
						return h.register(this, this.tweens[this.tweens.length - 1], s, r), n
					}, Util.isDefined(t.tweens))
					for (var c = t.tweens.getAll(), p = 0; p < c.length; p++) c[p].timeScale = g;
				if (Util.isDefined(d))
					for (var u = d.getAll(), m = 0; m < u.length; m++) u[m].speed = g * (Util.isDefined(d.animations[m].baseSpeed) ? d.animations[m].baseSpeed : 10);
				if (Util.isDefined(h))
					for (var f = h.getAll(), y = 0, v = h.getTweens(); y < f.length; y++) v[y].delay = f[y].baseDelay / g, v[y].duration = v[y].frames.length * f[y].baseDelay * f[y].baseDuration / g
			}
		}, window.setGameSpeed(2), setTimeout((() => {
			this.info('Use "setGameSpeed(speed)" to change the game speed at anytime.')
		}), 1e3)
	}
	initRebalancedBattleMod() {
		Prodigy.Creature.ATTACK_BONUS = {
			"A+": 1.6,
			A: 1.45,
			"A-": 1.3,
			"B+": 1.15,
			B: 1,
			"B-": .925,
			"C+": .85,
			C: .775,
			"C-": .7
		},
		Prodigy.Attacks.prototype.calculateDamage = function ( atk, src, target, mod, comboBonus )
		{
			if ( !Util.isDefined(mod) )
			{
				mod = 0;
			}

			var damage = 0;
			if ( Util.isDefined(atk) && Util.isDefined(atk.data.damage) )
			{ damage = atk.data.damage; }

			var typeA = atk.data.element;
			var typeB = target.getElement();
			let damageLevelMultiplier, damageBonusMultiplier;
			
			// Damage rebalancing
			if (Util.isDefined(src)) {
				if (!Util.isDefined(src.source))
					damageBonusMultiplier = Prodigy.Creature.ATTACK_BONUS["B"];
				else
					damageBonusMultiplier = Prodigy.Creature.ATTACK_BONUS[src.source.power];
				let level = parseInt(src.getLevel());
				damageLevelMultiplier = (level + 10) / 11;
				console.log("Level damage bonus: " + damageLevelMultiplier);
				console.log("Power damage multiplier: " + damageBonusMultiplier);
			} else {
				console.log("Attack source data unavailable - using default damage system.");
				damageLevelMultiplier = damageBonusMultiplier = 1;
			}

			// Weakness/strength

			if ( atk.data.name !== 'Glacial Shield' && target.modifiers.ignoreElement === 0 )
			{
				if ( this.isStrong(typeA, typeB) )
				{
					console.log("powerful attack")
					damage += 4;
				}
				else if ( this.isWeak(typeA, typeB) )
				{
					console.log("weak attack")
					damage -= 3;
					if ( damage <= 0 )
					{
						damage = 2;
					}
				}
			}
			console.log("Base damage: " + damage)
			damage = Math.floor(damage * 10 * comboBonus * damageLevelMultiplier * damageBonusMultiplier);
			console.log("Final damage: " + damage)
			return Math.max(Math.floor(damage + ((Util.isDefined(mod)) ? mod : 0)), 0);
		}
		Prodigy.Creature.HEALTH_CURVE = {
			"A+": 31,
			A: 29,
			"A-": 28,
			"B+": 26,
			B: 25,
			"B-": 24,
			"C+": 22,
			C: 21,
			"C-": 19
		}, Prodigy.Creature.getHeartsFromCurve = function(e, t, i) {
			return Prodigy.Creature.HEALTH_CURVE[e] * (i - t)
		}, Prodigy.Container.CreatureContainer.prototype.levelEventNewHeart = function(e) {
			for (var t = 0; 10 > t; t++) {
				var i = this.game.prodigy.create.sprite(this.x, this.y - 50, "core-2", "user-heart");
				this.game.broadcaster.broadcast(Prodigy.Events.Screen.ADD_CHILD, this.game, [i, "content"]), i.anchor.setTo(.5, .5), i.alpha = .5, this.game.add.tween(i).to({
					x: 470
				}, 600, Phaser.Easing.Linear.None).delay(300 * t).to({
					alpha: 0
				}, 1, Phaser.Easing.Linear.None).start(), this.game.add.tween(i).to({
					y: 55
				}, 600, Phaser.Easing.Quadratic.Out).delay(300 * t).start()
			}
			this.source.changeCurrentHearts(Number.MAX_VALUE), this.callBattlePopup({
				type: Prodigy.Menu.BattleBase.LEVEL_UP,
				hearts: e,
				source: this.source
			})
		}, Prodigy.Creature.prototype.addStars = function(e, t, i, a) {
			if (Util.isDefined(this.isOpponent) && this.isOpponent) return !1;
			e = Math.round(e);
			var s = !1,
				r = Util.isDefined(this.getLife) ? this.getLife() : "B";
			if (Util.isDefined(t)) {
				var o = this.game.prodigy.player;
				return o.hasValidatedParentEmail() && o.hasCompletedTutorial() && (e *= GameConstants.get("GameConstants.Battle.VALID_PARENT_EMAIL_STARS_PERCENTAGE")), this.starsToProcess += e, !1
			}
			this.starsToProcess = 0;
			var n = this.getLevel();
			if (this.game.broadcaster.broadcast(Prodigy.Events.Creature.STARS_ADDED, this, null), n >= 100) return !1;
			if (Util.isDefined(this.data.stars) ? this.data.stars += e : this.data.stars = e, Util.isDefined(i) || (this.starsEarned += e), this.data.level = Prodigy.Creature.levelFromStars(this.data.stars), n !== this.data.level) {
				this.levelEvents = [];
				var l = this.getLevelingCurve(this.data.level);
				if (Util.isDefined(l))
					for (var d = 0; d < l.length; d++) Util.inArray(this.levelEvents, l[d]) || this.levelEvents.push(l[d]);
				Prodigy.Creature.getHeartsFromCurve(r, null, n) !== Prodigy.Creature.getHeartsFromCurve(r, null, this.data.level) ? this.levelEvents.push({
					h: Prodigy.Creature.getHeartsFromCurve(r, null, this.data.level) - Prodigy.Creature.getHeartsFromCurve(r, null, n),
					lvl: this.data.level
				}) : this.game.time.events.add(2500, this.changeCurrentHearts.bind(this, Number.MAX_VALUE), this), this.justLeveled = !0, this.game.broadcaster.broadcast(Prodigy.Events.Creature.LEVEL_UP, this, null), s = !0
			}
			return Util.isDefined(a) && this.clearUnprocessedLevelEvents(), this.updated = !0, s
		}, Attack.prototype.damage = function() {
			this.calculateDamageDone(), Util.isDefined(this.atk.data.type) && "epic-attack" === this.atk.data.type && (Util.isDefined(this.epic) ? this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.epic.x, this.epic.y - 50, "battle", "text-epic-attack")) : this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.source.x, this.source.y - 50, "battle", "text-epic-attack"))), this.potionActive = !1, this.shieldTime = 0;
			var e = 0;
			if (Util.isDefined(this.target.source.modifiers) && Util.isDefined(this.target.source.modifiers.potion)) {
				var t = Items.getItemData("item", this.target.source.modifiers.potion);
				if (Util.isDefined(t.subType) && "elemental" === t.subType && Util.isDefined(this.atk.data.element) && ("all" === t.element || this.atk.data.element === t.element)) {
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
					a.start(), s.onComplete.add(function() {
						i.destroy()
					}, i), s.start()
				}
			}
			var r = "",
				n = Math.random() < this.CRITICAL_HIT_THRESHOLD + this.criticalThresholdBonus && "PVP" !== this.game.state.current || "epic-attack" === this.atk.data.type;
			n ? (this.damageDone = Math.round(1.5 * this.damageDone), this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.target.x, this.source.y + 50, "battle", "text-critical-hit"), 1e3 + this.shieldTime), r = "critical-hit") : r = "normal-hit", this.processStars(), this.lastTargetHp = this.target.source.getCurrentHearts(), this.target.source.changeCurrentHearts(-this.damageDone), this.target.source.getCurrentHearts() <= 0 && this.target.source.modifiers.barrier === !0 ? (this.game.prodigy.effects.characterText("-999", this.target.x, this.source.y, this.shieldTime, {
				size: 1,
				font: "battle",
				mono: 44
			}), n = !0, this.game.prodigy.effects.characterImage(this.game.prodigy.create.sprite(this.target.x, this.source.y + 50, "battle", "text-critical-hit"), 1e3 + this.shieldTime), r = "critical-hit", this.target.retreat()) : this.game.prodigy.effects.characterText("-" + this.damageDone, this.target.x, this.source.y, this.shieldTime, {
				size: 1,
				font: "battle",
				mono: 44
			}), this.target.source.modifiers.barrier === !0 && (Util.isNullOrUndefined(this.target.barrierSprite) || (this.target.source.getCurrentHearts() > 0 ? this.target.doBarrierAnimation() : this.target.doBarrierBreakAnimation())), this.game.prodigy.audio.playSFX(Prodigy.Controller.AudioController.SFX_PACKS.BATTLE, r);
			var o = null;
			n || 0 !== this.target.source.modifiers.ignoreElement || (this.game.prodigy.attacks.isStrong(this.atk.data.element, this.target.source.getElement()) ? o = "Powerful!" : this.game.prodigy.attacks.isWeak(this.atk.data.element, this.target.source.getElement()) && (o = "Weak...")), Util.isDefined(o) && (this.delayComplete = !0, this.game.prodigy.effects.characterText(o, this.target.x, this.source.y + 50, 1e3 + this.shieldTime))
		}
	}
	initImitationTitanMod() {
		let titan = {
			id: 1314,
			assetID: 2,
			health: 4e6,
			startDate: "2023-10-01T21:40:01.408Z",
			endDate: "2035-10-01T21:40:01.408Z",
			processed: !1,
			hits: 0,
			rewardData: null,
			maxHealth: 4e6,
			rewards: [100, 60, 30, 10],
			increments: [71, 40, 20, 10]
		};
		this.game.prodigy.network.getTitan = function(t, a, o) {
			return Util.isDefined(a) && a.call(this, titan), titan
		}, this.game.prodigy.network.getTitans = function(t, a) {
			return Util.isDefined(t) && t.call(this, titan), titan
		}, this.game.prodigy.network.hitTitan = function(a, o, r) {
			return Util.isDefined(o) && o.call(this, titan)
		}, this.game.prodigy.titansNetworkHandler.isTitanAlive = function() {
			return !0
		}, this.game.prodigy.titansNetworkHandler.titan = titan;
	}
}

function checkForMods(e, t) {
	window.ModHooks = new ModHandler(e), ModHooks.log("Checking for mods...");
	for (var i = 0, a = 0; a < GameMods.available.length; a += 1)
		if (t.includes(GameMods.available[a].id)) try {
			var s = GameMods.available[a].patch;
			ModHooks[s].call(ModHooks), ModHooks.log('Mod "' + GameMods.available[a].id + '" successfully applied!'), i += 1
		} catch (e) {
			ModHooks.error('Error occured while applying mod "' + GameMods.available[a].id + '" to Prodigy!'), console.error(e)
		}
	i > 0 ? ModHooks.log("Applied (" + i + ") mods to the game") : ModHooks.log("No mods have been applied")
}