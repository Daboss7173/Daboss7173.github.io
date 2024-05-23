/*
	Simple mod interface for Prodigy version 1-10-0
	
	Installed Mods: 
		
		| Mod Name |               	| Author |
		
		Walk Speed 					Daboss7173
		Fast Game Speed				Daboss7173
	
	Written by: Daboss7173
	Github: https://github.com/Daboss7173/Daboss7173.github.io
*/
class ModHandler {
	constructor(e) {
		this.game = e;
		this.animations = new class {
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
		};
		this.available = [{
				id: "WalkSpeed",
				patch: "initWalkSpeedMod"
			}, {
				id: "FastGameSpeed",
				patch: "initFastGameSpeedMod"
			}]
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
		let walkSpeed = 1;
		
		let openOther = SystemMenu.prototype.openOther;
		SystemMenu.prototype.openOther = function() {
			openOther.call(this);
			new BitmapFont(this.game, this.content, 0, 230, "walk speed", {
				width: 400,
				align: "center"
			}), this.walkSpeedBar = new ProgressBar(this.game, this.content, 50, 260, 300, 80, 1, walkSpeed/20), this.walkSpeedBar.setDraggable(), this.walkSpeedBar.setBarAnimationSpeed(ProgressBar.SPEED_VERYSLOW)
		};
		
		let menuUpdate = SystemMenu.prototype.menuUpdate;
		SystemMenu.prototype.menuUpdate = function() {
			menuUpdate.call(this);
			if (Util.isDefined(this.walkSpeedBar) && walkSpeed !== this.walkSpeedBar.getPercent()*20)
				walkSpeed = this.walkSpeedBar.getPercent()*20;
		};
		
		let clearContents = SystemMenu.prototype.clearContents;
		SystemMenu.prototype.clearContents = function() {
			clearContents.call(this);
			if (Util.isDefined(this.walkSpeedBar)) {
				this.walkSpeedBar.destroy();
				this.walkSpeedBar = null;
			}
		}
		
		WalkableScreen.prototype.listener = function(e, t) {
			e = e || 0, t = t || 0;
			var a = this.path.findBasicPath(this.user.x + e, this.user.y + t, this.game.input.x + e, this.game.input.y + t);
			a[0].x -= e, a[0].y -= t;
			var i = this.path.getCallback(Math.floor(a[0].x / this.tileSize), Math.floor(a[0].y / this.tileSize));
			this.user.setPath(a, i, walkSpeed)
		}
	}
	
	initFastGameSpeedMod() {
		var e = Phaser.TweenManager.prototype.add,
			t = this.game,
			i = Phaser.Timer.prototype.add,
			a = Phaser.Tween.prototype.delay,
			s = Phaser.Tween.prototype.to,
			r = (Boot.prototype.update, Phaser.AnimationManager.prototype.play),
			n = Phaser.AnimationManager.prototype.add,
			l = Phaser.Game.prototype.update,
			d = this.animations;
		Phaser.Game.prototype.update = function(e) {
			for (let e = 0; e < d.animations.length; e++) !Util.isDefined(d.animations[e].animation._parent) && d.animations.splice(e, 1);
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
					}, Util.isDefined(t.tweens))
					for (var c = t.tweens.getAll(), p = 0; p < c.length; p++) c[p].timeScale = g;
				if (Util.isDefined(d))
					for (var u = d.getAll(), m = 0; m < u.length; m++) u[m].speed = g * (Util.isDefined(d.animations[m].baseSpeed) ? d.animations[m].baseSpeed : 10);
			}
		}, window.setGameSpeed(3), setTimeout((() => {
			this.info('Use "setGameSpeed(speed)" to change the game speed at anytime.')
		}), 1e3)
	}
}

window.checkForMods = function(e, t) {
	ModHooks = new ModHandler(e), ModHooks.log("Checking for mods...");
		for (i = 0, a = 0; a < ModHooks.available.length; a += 1)
			if (t.includes(ModHooks.available[a].id)) try {
				let e = ModHooks.available[a].patch;
				ModHooks[e].call(ModHooks), ModHooks.log('Mod "' + ModHooks.available[a].id + '" successfully applied!'), i++
			} catch (e) {
				ModHooks.error('Error occured while applying mod "' + ModHooks.available[a].id + '" to Prodigy!'), console.error(e)
			}
		i > 0 ? ModHooks.log("Applied (" + i + ") mods to the game") : ModHooks.log("No mods have been applied")
}