/*
	Simple mod interface for Prodigy version 1-30-0
	
	Installed Mods: 
		
		| Mod Name |               	| Author |
		
		Walk Speed 					Daboss7173
		Fast Game Speed				Daboss7173
		Classic Faces				Daboss7173
	
	Written by: Daboss7173
	Github: https://github.com/Daboss7173/Daboss7173.github.io
*/
var GameMods = {
	available: [{
		id: "WalkSpeed",
		patch: "initWalkSpeedMod"
	}, {
		id: "FastGameSpeed",
		patch: "initFastGameSpeedMod"
	}, {
		id: "ClassicFaces",
		patch: "initClassicFaceMod"
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
		Prodigy.Container.CreatureContainer.prototype.setPath = function (e, t, i) {
			if (Util.isDefined(e)) {
				this.game.tweens.removeFrom(this, !1), this.game.tweens.removeFrom(this.sprites), Util.isDefined(i) || (i = this.game.prodigy.player.walkSpeed);
				for (var a = null, s = null, r = this.x, o = this.y, n = e.length - 1; n >= 0; n--) {
					var h = e[n];
					Util.isDefined(h.x) || (h.x = r), Util.isDefined(h.y) || (h.y = o);
					var l = this.game.prodigy.math.distance(h.x, h.y, r, o);
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
				text: "Watch Intro",
				size: Prodigy.Control.TextButton.MED
			}, this.openIntro.bind(this)), this.game.prodigy.create.textButton(this.content, 150, 125, {
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
		}, window.setGameSpeed(3), setTimeout((() => {
			this.info('Use "setGameSpeed(speed)" to change the game speed at anytime.')
		}), 1e3)
	}
	
	initClassicFaceMod() {
		var assets = this.game.prodigy.assets._assets;
		assets.heads.base = "https://daboss7173.github.io/oldprodigy/1-30-0/assets/images/";
		
		Prodigy.Container.PlayerContainer.getAssets = function (e, t, i, a) {
			var s = new Array;
			t = 1 === t ? "reduced" : "normal", a ? s.push(null) : (Util.isDefined(i) || (i = e.equipment.getEquipment("outfit")), s.push(Util.isDefined(i) ? t + "-outfit-" + e.appearance.getGender() + "-" + i : null)), s.push(t + "/face/" + e.appearance.getSkinColor()), s.push(t + "-hair-" + e.appearance.getGender() + "-" + e.appearance.getHairStyle() + "-" + e.appearance.getHairColor()), s.push(t + "/eyes/" + e.appearance.getGender() + "/" + e.appearance.getEyeColor()), s.push(Util.isDefined(e.equipment.getEquipment("hat")) ? t + "-hat-" + e.equipment.getEquipment("hat") : null), s.push("normal" === t && Util.isDefined(e.equipment.getEquipment("weapon")) ? t + "-weapon-" + e.equipment.getEquipment("weapon") : null), Util.isDefined(s[0]) || (s[0] = t + "-outfit-" + e.appearance.getGender() + "-13");
			var r = e.equipment.getEquipment("hat");
			if (Util.isDefined(r)) {
				var t = Items.getItemData("hat", r).type;
				("cover" === t || "wrap" === t) && (s[2] = null), "mask" === t && (s[2] = null)
			}
			return s
		}
		
		Prodigy.Container.PlayerContainer.prototype.setup = function (e, t) {
			if (t && Util.isDefined(this.assets) && Util.isDefined(this.game)) {
				this.sprites.removeAll(!0);
				var i = this.assets[0],
					a = this.assets[1],
					s = this.assets[2],
					r = this.assets[3],
					o = this.assets[4],
					n = this.assets[5],
					h = this.game.prodigy.assets.getImageBounds(i),
					l = Math.floor(-(64 * this.setScale - h[0])),
					d = -h[3];
				let isFemale = this.source.appearance.getGender() === "female";
				if (null !== a && (this.face = this.game.prodigy.create.sprite(l - (h[0] - (1 != this.setScale ? 93 : 44)), d - (h[1] - (1 != this.setScale ? 82 : 48)), "heads", a), this.face.inputEnabled = !0, this.face.events.onInputDown.add(this.playerClicked.bind(this)), this.sprites.add(this.face), this.faceY = this.face.y), null !== r && (this.eyes = this.game.prodigy.create.sprite(l - (h[0] - (1 != this.setScale ? (isFemale ? 115 : 113) : 55)), d - (h[1] - (1 != this.setScale ? (isFemale ? 117 : 114) : (isFemale ? 66 : 65))), "heads", r), this.sprites.add(this.eyes), this.eyesY = this.eyes.y), null !== s) {
					var p = this.game.prodigy.assets.getImageBounds(s);
					this.hair = this.game.prodigy.create.sprite(l - (h[0] - p[0]), d - (h[1] - p[1]), s), this.sprites.add(this.hair), this.hairY = this.hair.y, this.hair.animations.add("walk", [0, 1, 2, 3], 10, !0, !0), this.hair.animations.add("stand", [0], 10, !0, !0), this.hair.animations.add("fct", [0], 10, !0, !0)
				}
				if (!this.headOnly) {
					this.body = this.game.prodigy.create.sprite(l, d, i), this.body.inputEnabled = !0, this.body.events.onInputDown.add(this.playerClicked.bind(this)), this.sprites.add(this.body), this.animWalk = this.body.animations.add("walk", [0, 1, 2, 3, 4, 5, 6, 7], 10, !0, !0), this.animStand = this.body.animations.add("stand", [8, 9, 10, 11, 12, 13, 14, 15], 10, !0, !0);
					try {
						this.animFunction = this.body.animations.add("fct", [16, 17, 18, 19, 20, 21, 22, 23], 10, !0, !0), this.animFunction.onComplete.add(this.functionComplete.bind(this))
					} catch (c) {}
				}
				if (null !== o) {
					var g = this.game.prodigy.assets.getImageBounds(o);
					this.hat = this.game.prodigy.create.sprite(l - (h[0] - g[0]), d - (h[1] - g[1]), o), this.sprites.add(this.hat), this.hatY = this.hat.y;
					var u = Items.getItemData("hat", this.source.equipment.getEquipment("hat"));
					if (Util.isDefined(u) && 1 === u.standAnimation) this.hat.animations.add("walk", [0, 1, 2, 3], 10, !0, !0), this.hat.animations.add("stand", [0, 1, 2, 3], 10, !0, !0), this.hat.animations.add("fct", [0, 1, 2, 3], 10, !0, !0);
					else {
						try {
							this.hat.animations.add("walk", [0, 1, 2, 3], 10, !0, !0)
						} catch (c) {
							this.hat.animations.add("walk", [0], 10, !0, !0)
						}
						this.hat.animations.add("stand", [0], 10, !0, !0), this.hat.animations.add("fct", [0], 10, !0, !0)
					}
				}
				if (null !== n && !this.headOnly) {
					var y = this.game.prodigy.assets.getImageBounds(n);
					this.weapon = this.game.prodigy.create.sprite(l - (h[0] - y[0]), d - (h[1] - y[1]), n), this.sprites.add(this.weapon), this.weaponY = this.weapon.y
				}
				this.transforming && this.showSmoke(), this.sprites.callAll("play", null, "stand"), this.mode = 1, Util.isDefined(this.loadedCallback) && this.loadedCallback(), this.complete = !0, this.loading = !1, console.log(this.sprites)
			}
		}
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