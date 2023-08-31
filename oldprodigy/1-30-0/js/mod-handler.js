var GameMods = {
	available: [
		{
			id: "WalkSpeed",
			patch: "initWalkSpeedMod"
		}
	]
};

class ModHandler {
	constructor(e) {
		this.game = e
	}
	
	log(message) {
		if (Util.isDefined(message)) {
			console.log("%c %c %c Old Prodigy Mod Handler | " + message + " %c %c ",
			"background: #bdb",
			"background: #4a4",
			"background: #172; color: #FFF",
			"background: #4a4",
			"background: #bdb")
		}
	}
	
	error(message) {
		if (Util.isDefined(message)) {
			console.log("%c %c %c Old Prodigy Mod Handler | " + message + " %c %c ",
			"background: #dbb",
			"background: #b66",
			"background: #a11; color: #FFF",
			"background: #b66",
			"background: #dbb")
		}
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