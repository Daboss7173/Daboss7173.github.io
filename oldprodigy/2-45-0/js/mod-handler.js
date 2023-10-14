(async () => {
	class TweenManager {
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
	class AnimationManager {
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
	}
	class ModHandler {
		constructor(e, t, i) {
			this.game = e;
			this.import = t;
			this.gamedata = i;
			this.available = [{
				id: "WalkSpeed",
				patch: "initWalkSpeedMod"
			}, {
				id: "FastGameSpeed",
				patch: "initFastGameSpeedMod"
			}];
			this.animations = new AnimationManager();
			this.tweens = new TweenManager();
			this.importServices = this.import(0);
			this.importUtil = this.import(1);
			this.importTweenController = this.import(24)
		}
		log(e) {
			this.importUtil.Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #1724", "background: #172a", "background: #172f; color: #FFF", "background: #172a", "background: #1724")
		}
		info(e) {
			this.importUtil.Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #14b4", "background: #14ba", "background: #14bf; color: #FFF", "background: #14ba", "background: #14b4")
		}
		error(e) {
			this.importUtil.Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #a114", "background: #a11a", "background: #a11f; color: #FFF", "background: #a11a", "background: #a114")
		}
		initWalkSpeedMod() {
			let e = this.gamedata.ui,
				t = this.import(1142).SystemMenu.prototype.postCreate,
				i = this.import(479),
				a = this.importUtil,
				s = this.game;
			e[3].data.elements[0].children[4].children[3].children.push({
				type: "Text",
				name: "walkSpeedSliderText",
				y: 154,
				x: 20,
				height: 30,
				relativeWidth: 0.2,
				textKey: "Walk Speed",
				fontID: 157,
				fontSize: 0,
				horizontalAlignment: "left",
				forceUpperCase: true
			})
			e[3].data.elements[0].children[4].children[3].children.push({
				type: "Slider",
				name: "walkSpeedSlider",
				y: 154,
				relativeX: 0.26,
				relativeWidth: 0.7,
				height: 42,
				atlasID: 144,
				thumbFrameName: "buttons/orange-thumb",
				activeTrackBaseFrameName: "scroll-tracks/blue",
				inactiveTrackBaseFrameName: "scroll-tracks/grey",
				isVertical: false
			})
			e[22].data.elements[0].children[1].children[3].children.push({
				type: "UIElement",
				relativeX: 0.065,
				relativeY: 0.75,
				relativeWidth: 1,
				relativeHeight: 1,
				children: [
					{
						type: "ScrollBar",
						name: "walkSpeedScrollBar",
						relativeY: 0.06,
						relativeWidth: 0.84,
						height: 20,
						anchorX: 0,
						anchorY: 0.5,
						atlasID: 149,
						isVertical: false,
						thumbFrameName: "image/slider-knob",
						trackFrameName: "image/slider-track"
					},
					{
						type: "WebFontText",
						relativeX: 0.4,
						relativeY: 0,
						textKey: "Walk Speed",
						style: 9,
						fontSize: 18,
						boundsAlignH: "center",
						boundsAlignV: "middle",
						color: "#363636"
					}
				]
			})
			this.import(1142).SystemMenu.prototype.postCreate = function() {
				let e = t.call(this),
					g = this.findElement(i.ScrollBar, "walkSpeedScrollBar");
				a.Util.isValid(g) && (g.setPercent((this.game.prodigy.user.walkSpeed - .1) / 20), g.onDragUpdateCallbacks.push(function(t) {
					s.prodigy.user.walkSpeed = (t * 20) + .1
				}));
			}
		}
		initFastGameSpeedMod() {
			let e = this.game,
				t = this.importUtil,
				i = this.importTweenController.TweenController.prototype.set,
				a = this.tweens,
				s = this.animations,
				r = Phaser.AnimationManager.prototype.play,
				n = Phaser.AnimationManager.prototype.add,
				ut = t,
				self_ = this
			window.setGameSpeed = function(value) {
				if (value < .1) ModHooks.error("Supplied speed multiplier is too low. Try a larger speed value.");
				else {
					e.prodigy.debugMisc.setGameSpeed.call(e.prodigy,value)
					spine.AnimationState.prototype.timeScale = value
					Phaser.AnimationManager.prototype.add = function(e, t, i, a, m) {
						let r = 10;
						ut.Util.isDefined(i) && (r = i, i *= value);
						let o = n.call(this, e, t, i, a, m);
						return s.register(o, r), o
					},
					Phaser.AnimationManager.prototype.play = function(e, o, i, a) {
						return t.Util.isDefined(o) && !isNaN(o) && (o *= value), r.call(this, e, o, i, a)
					},
					self_.importTweenController.TweenController.prototype.set = function(e, t, o, l) {
						let s = o,
							r = l;
						ut.Util.isDefined(o) && (o /= value);
						ut.Util.isDefined(l) && (l /= value);
						let n = i.call(this, e, t, o, l);
						return a.register(this, this.tweens[this.tweens.length - 1], s, r), n
					};
					if (t.Util.isDefined(e.tweens))
						for (var c = e.tweens.getAll(), p = 0; p < c.length; p++) c[p].timeScale = value;
					if (t.Util.isDefined(s))
						for (var u = s.getAll(), m = 0; m < u.length; m++) u[m].speed = value * (t.Util.isDefined(s.animations[m].baseSpeed) ? s.animations[m].baseSpeed : 10);
					if (t.Util.isDefined(a))
						for (var f = a.getAll(), y = 0, v = a.getTweens(); y < f.length; y++) v[y].delay = f[y].baseDelay / value, v[y].duration = v[y].frames.length * f[y].baseDelay * f[y].baseDuration / value
				}
			}
			setTimeout(this.info.bind(this,'Use "setGameSpeed(speed)" to change the game speed at anytime.'), 2e3)
			window.setGameSpeed(2)
		}
	}
	window.checkForMods = function(e, t, i, a) {
		window.ModHooks = new ModHandler(e, i, a),
		ModHooks.log("Checking for mods...");
		for (var i = 0, a = 0; a < ModHooks.available.length; a += 1)
			if (t.includes(ModHooks.available[a].id)) try {
				let s = ModHooks.available[a].patch;
				ModHooks[s].call(ModHooks), ModHooks.log('Mod "' + ModHooks.available[a].id + '" successfully applied!');
				i++
			} catch (e) {
				ModHooks.error('Error occured while applying mod "' + ModHooks.available[a].id + '" to Prodigy!'),
				console.error(e)
			}
		i > 0 ? ModHooks.log("Applied (" + i + ") mods to the game") : ModHooks.log("No mods have been applied")
	}
})();