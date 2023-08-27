class ModObj {
	constructor(e) {
		this.game = e
	}
	
	doGameMods() {
		this.game.prodigy.network.player = this.game.prodigy.player,
		this.game.prodigy.player.hasValidatedParentEmail = function () {
			return !0
		},
		this.game.prodigy.load.processFile = function(e) {
			if (Util.isDefined(e) && null !== e && "" !== e && !this.isFileLoaded(e)) try {
				var t = "",
					i = this.game.prodigy.assets.getAsset(e),
					a = Util.isDefined(i.fullURL) ? i.fullURL : t + i.base + i.url,
					s = Util.isDefined(i.noCache) && i.noCache ? "?r=" + (new Date).getTime() : "";
				if (!Util.isDefined(a)) return;
				switch (i.type) {
					case "json":
						this.loader.json(e, a + s, !0);
						break;
					case "sprite":
						this.loader.image(e, a + s, !1);
						break;
					case "spritesheet":
						Util.isDefined(i.fullURL) || Util.isDefined(i.base) || (a = "v1/spritesheets/" + e + "/" + i.v + "/" + e + ".png");
						var r = i.w,
							n = i.h;
						this.loader.spritesheet(e, a + s, r, n);
						break;
					case "sfx":
					case "bgm":
						a = "v1/audio/" + e + "/" + i.v + "/" + e, this.loader.audio(e, [a + ".ogg" + s, a + ".mp3" + s], !0);
						break;
					case "atlas":
						var o = i.key || e;
						a = "v1/atlases/" + o + "/" + i.v + "/" + o, this.loader.atlasJSONHash(e, a + ".png", a + ".json" + s);
						break;
					case "local":
						a = i.base + i.key + "/" + i.v + "/" + i.key, this.loader.atlasJSONHash(e, a + ".png", a + ".json");
						break;
					case "spine":
						a = "v1/spine/" + e + "/" + i.v + "/" + e + ".json" + s, this.loader.spine(e, a);
						break;
					case "singleImage":
						a = "v1/single-images/" + e + "/" + i.v + "/" + e + ".png" + s, this.loader.image(e, a, !1);
						break;
					case "bitmapFont":
						a = "v1/bitmap-fonts/" + e + "/" + i.v + "/" + e, this.loader.bitmapFont(e, a + ".png", a + ".xml" + s)
				}
			} catch (h) {}
		}, this.game.prodigy.load.isFileLoaded = function(e) {
			if (!Util.isDefined(e) || null === e || "" === e) return !0;
			try {
				var t = this.game.prodigy.assets.getAsset(e);
				switch (t.type) {
					case "json":
					case "spine":
						if (!this.game.cache.checkJSONKey(e)) return !1;
						break;
					case "sprite":
					case "spritesheet":
					case "singleImage":
					case "atlas":
						if (!this.game.cache.checkImageKey(e)) return !1;
						break;
					case "local":
						if (!this.game.cache.checkImageKey(e)) return !1;
						break;
					case "sfx":
					case "bgm":
						if (!this.game.cache.checkSoundKey(e)) return !1;
						break;
					case "bitmapFont":
						if (!this.game.cache.checkBitmapFontKey(e)) return !1
				}
			} catch (i) {}
			return !0
		},
		this.game.prodigy.assets._assets["login-buttons"] = {
			type: "local",
			base: window.location.href + "/images/",
			key: "general-login",
			v: "1"
		},
		this.game.state.states.CharCreate.chooseServer = function(e, t) {
			return t ? (this.showDialogue(), void 0) : (this._dialogue.close(), e ? this.game.prodigy.network.sendAnalytics("Socket-Success", "", "Login-Events") : this.game.prodigy.network.sendAnalytics("Socket-Fail", "", "Login-Events"), delete this.game.prodigy.player.data.reset, this.game.prodigy.player.data.school = "none", this.game.prodigy.player.data.startDate = (new Date).getTime(), this.game.prodigy.player.registerDate = new Date(this.game.prodigy.player.data.startDate), this.game.prodigy.world.enter(), void 0)
		}
		this.game.state.states.Login.screenSetup = function() {
			this.game.prodigy.player.data.startDate = (new Date).getTime(),
			this.game.prodigy.player.registerDate = new Date(this.game.prodigy.player.data.startDate),
			this.background.add(this.game.prodigy.create.sprite(0, 0, "login-bg-5")),
			this.loginBox = this.game.prodigy.create.element(this.background),
			this.usernameField = Prodigy.Control.InputField.createInputField(this.game, this.loginBox, "username", "", 100, 230, 300, 40),
			this.usernameField.hide(0),
			this.usernameField.setLabel(this.loginBox, "Username:");
			var t = Util.getCookie("prodigyUsername");
			Util.isDefined(t) && this.usernameField.setValue(t),
			this.passwordField = Prodigy.Control.InputField.createInputField(this.game, this.loginBox, "password", "", 100, 310, 300, 40, "password"),
			this.passwordField.hide(0),
			this.passwordField.setLabel(this.loginBox, "Password:"),
			this.loginButton = this.game.prodigy.create.button(this.loginBox, 100, 380, "login-buttons", "loadcharacter", this.openFileForCharacter.bind(this)),
			this.offlineButton = this.game.prodigy.create.button(this.loginBox, 100, 470, "login-buttons", "offline", this.offlineMode.bind(this)),
			this.progressBox = this.game.prodigy.create.element(this.background, 100, 250), this.error = this.game.prodigy.create.font(this.progressBox, 0, 0, "", {
				width: 300,
				align: "center"
			}), this.closeButton = this.game.prodigy.create.textButton(this.progressBox, 0, 100, {
				icon: "close",
				text: "okay",
				size: Prodigy.Control.TextButton.MED
			}, this.showLogin.bind(this, !0)),
			this.error.visible = !1,
			this.closeButton.visible = !1,
			this.progressBox.visible = !1,
			this.createAccountButton = this.game.prodigy.create.button(this.background, 100, 560, "login-buttons", "student", this.game.prodigy.start.bind(this, "CharCreate")),
			this.canvas = $("#game-container canvas");
			var i = document.getElementById("external-ui");0
			var a = this.game.prodigy.create.panel(this.background, 100, 660, 4, 1, "lb");
			a.alpha = .25, this.game.prodigy.create.font(this.background, a.x, a.y + 8, "Privacy Policy", {
				size: 16,
				width: 160,
				align: "center"
			}), a.setClickable(this.game.prodigy.network.openWebsite.bind(this.game.prodigy.network, "www.prodigygame.com/privacy-policy/")), a = this.game.prodigy.create.panel(this.background, 280, 660, 3, 1, "lb"), a.alpha = .25, this.game.prodigy.create.font(this.background, a.x, a.y + 8, "Website", {
				size: 16,
				width: 120,
				align: "center"
			}), a.setClickable(this.game.prodigy.network.openWebsite.bind(this.game.prodigy.network, "www.prodigygame.com")),
			this.showLogin(!0),
			this.checkForAdmin(),
			this.skipUrlParams ? this.skipUrlParams = !1 : this.tryToStartFlowFromUrlParams(),
			Screen.prototype.screenSetup.call(this)
		}, this.game.state.states.Login.update = function() {
			if (Screen.prototype.update.call(this), this.tutorial) {
				var e = this.usernameField.getValue() || "";
				if (e = e.toLowerCase(), e !== this.new_username.toLowerCase()) {
					if (this.usernameField.hasTooltip()) return;
					this.usernameField.showTooltip("'" + this.new_username + "'", 330), this.usernameField.setFocus(!0), this.passwordField.showTooltip(null), this.loginButton.highlight(!1)
				} else if (this.passwordField.getValue() !== this.new_password) {
					if (this.passwordField.hasTooltip()) return;
					this.passwordField.showTooltip("'" + this.new_password + "'", 330), this.passwordField.setFocus(!0), this.usernameField.showTooltip(null), this.loginButton.highlight(!1)
				} else {
					if (this.loginButton.isHighlighted()) return;
					this.loginButton.highlight(!0, 150, 10), this.usernameField.showTooltip(null), this.passwordField.showTooltip(null)
				}
			}
		}, this.game.state.states.Login.showLogin = function(e) {
			this.usernameField.setEnabled(e), this.passwordField.setEnabled(e), e && (this.error.visible = !1, this.closeButton.visible = !1), this.progressBox.visible = !e, this.createAccountButton.visible = this.loginBox.visible = e, e ? (this.game.input.setEnterCallback(this.startLogin.bind(this)), this.usernameField.show(100), this.passwordField.show(100), $("#google-button").css({
				opacity: 1,
				cursor: "default"
			})) : (this.game.input.clearEnterCallback(), this.usernameField.hide(100), this.passwordField.hide(100), $("#google-button").css({
				opacity: 0,
				cursor: "default"
			}))
		}, this.game.state.states.Login.offlineMode = function() {
			this.game.prodigy.start("CharSelect")
		}, this.game.state.states.Login.openFileForCharacter = function() {
			var LoadCharacterData = this.loadCharacter;
			var fileInput = document.createElement('input');
			var e = this.game
			fileInput.type = 'file',
			fileInput.id = 'myfile' + Math.floor(Math.random() * 999999),
			fileInput.name = 'files',
			fileInput.style.display = 'none',
			fileInput.click();
			fileInput.onchange = function(file) {
				var reader = new FileReader();
				reader.readAsText(file.target.files[0]);
				reader.onload = function(reader) {
					var finisheddata = JSON.parse(reader.target.result);
					console.log(finisheddata);
					LoadCharacterData(finisheddata, !0, e);
				};
				reader.onerror = function(reader) {
					PIXI.game.prodigy.open.messageBoxOkay("Failed to open save file, please retry.","OKAY",null,null,"Character Loader");
				}
			}
		}, this.game.state.states.Login.loadCharacter = function(e, t, i) {
			try {
				if (e.gameVersion != i.prodigy.version && t == !0) {
					i.prodigy.open.confirm("Your character is from a different Prodigy version! This may cause multiple problems while playing!\n\nDo you want to continue?", i.prodigy.game.state.states.Login.loadCharacter.bind(this, e, !1, i), i.prodigy.game.state.states.Login.showLogin.bind(i.prodigy.game.state.states.Login, !0), null, "Character Loader")
					i.prodigy.game.state.states.Login.showLogin(!1);
				} else {
					i.prodigy.player.appearance.data = e.appearancedata,
					i.prodigy.player.equipment.data = e.equipmentdata,
					i.prodigy.player.kennel.data = e.kenneldata,
					i.prodigy.player.data = e.data,
					i.prodigy.player.quests.data = e.questdata,
					i.prodigy.player.backpack.data = e.backpackdata;
					if (Util.isDefined(e.tutorialdata)) {
						i.prodigy.player.tutorial.data = e.tutorialdata
					};
					if (Util.isDefined(e.statedata)) {
						i.prodigy.player.state.data = e.statedata
					};
					if (Util.isDefined(e.achievementsdata)) {
						i.prodigy.player.achievements.data = e.achievementsdata
					};
					if (i.prodigy.player.hasCompletedTutorial() == !0) {
						i.prodigy.player.house.data = e.housedata
					};
					if (Util.isDefined(e.metadata)) {
						i.prodigy.player.isMember = e.metadata.isMember,
						i.prodigy.player.appearanceChanged = e.metadata.appearanceChanged,
						i.prodigy.player.broadcastId = e.metadata.broadcastId,
						i.prodigy.player.inPVP = e.metadata.inPVP,
						i.prodigy.player.updated = e.metadata.updated;
						if (Util.isDefined(e.data.startDate)) {
							i.prodigy.player.registerDate = new Date(i.prodigy.player.data.startDate)
						} else {
							i.prodigy.player.data.startDate = (new Date).getTime(),
							i.prodigy.player.registerDate = new Date(i.prodigy.player.data.startDate)
						};
						if (Util.isDefined(e.metadata.parentalLink)) {
							i.prodigy.player.parentalLink = e.metadata.parentalLink
						}
					} else {
						i.prodigy.player.isMember = !1, // No membership by default
						i.prodigy.player.data.startDate = (new Date).getTime(), // Fix mail crash
						i.prodigy.player.registerDate = new Date(i.prodigy.player.data.startDate)
					};
					i.prodigy.game.state.states.Login.offlineMode()
				}
			} catch (error) {
				i.prodigy.open.messageBoxOkay("A critical error occurred during your character load! This is most-likely from a corrupted/modified save.\n\n\nCheck the console for more details.", "OKAY", null, null, "Character Loader")
				delete i.prodigy.player.data.reset
				console.error(error),
				Util.log("Character load failed!", Util.ERROR),
				Util.log("Load error detected, data loaded returned below.", Util.INFO),
				console.log(e);
			}
		},
		
		Prodigy.Menu.SystemMenu.prototype.create = function() {
			this.addTransparent();
			var e = [{
					icon: "settings",
					bot: this.game.prodigy.localization.getString("SETTINGS_SOUND")
				}, {
					icon: "settings",
					bot: this.game.prodigy.localization.getString("SETTINGS_GRAPHICS")
				}, {
					icon: "settings",
					bot: this.game.prodigy.localization.getString("SETTINGS_NETWORK")
				}, {
					icon: "settings",
					bot: "Other"
				}],
				t = this.game.prodigy.player;
			!t.hasValidatedParentEmail() && t.hasCompletedTutorial() && e.push({
				atlas: "icons-menu",
				icon: "parent-link-hud-badge",
				top: this.game.prodigy.localization.getString("SETTINGS_PARENT"),
				bot: this.game.prodigy.localization.getString("SETTINGS_ACCOUNT"),
				hasIndicator: !0
			}), this.content = this.game.prodigy.create.element(this, 280, 260, 15, 8), this.createBaseSetup(20, 13, "shine", this.game.prodigy.localization.getString("SETTINGS_TITLE"), e), Prodigy.RenderMenu.prototype.create.call(this), this.setMode(0);
			for (var i = 0; i < e.length; i++) {
				var a = e[i];
				if (a.hasIndicator) {
					var s = this.game.prodigy.create.indicator(0, 0),
						r = this.buttons[i].sprite;
					r.addChild(s), this.buttons[i].indicator = s, s.visible = !1;
					var n = Util.getCenteredXY(s.width, 0, r.x, 0, r.width, 0);
					s.x = n.x, s.y = r.y - s.height, s.addTween(), s.visible = !0
				}
			}
			this.game.prodigy.create.advButton(this, 900, 480, {
				icon: "settings",
				bot: this.game.prodigy.localization.getString("SETTINGS_LOGOUT")
			}, this.exitGame.bind(this))
		},
		Prodigy.Menu.SystemMenu.prototype.setMode = function(e) {
			switch (Prodigy.RenderMenu.prototype.setMode.call(this, e), this.clearContents(), e) {
				case 1:
					this.openGraphics();
					break;
				case 2:
					this.openNetwork();
					break;
				case 3:
					this.openOther();
					break;
				default:
					this.openSound()
			}
		},
		Prodigy.Menu.SystemMenu.prototype.openNetwork = function() {
			var e = Util.isDefined(this.game.prodigy.player.world) ? this.game.prodigy.localization.getString("SETTINGS_YOUR_WORLD", this.game.prodigy.player.world.name) : this.game.prodigy.localization.getString("SETTINGS_OFFLINE");
			this.game.prodigy.create.font(this.content, 0, 50, e, {
				width: 600,
				align: "center"
			}), this.game.prodigy.create.textButton(this.content, 150, 200, {
				text: "Save Character",
				size: Prodigy.Control.TextButton.MED
			}, this.saveCharacter.bind(this))
		},
		Prodigy.Menu.SystemMenu.prototype.openOther = function() {
			this.game.prodigy.create.textButton(this.content, 150, 50, {
				text: "Get All Epics",
				size: Prodigy.Control.TextButton.MED
			}, this.unlockEpics.bind(this)), this.game.prodigy.create.textButton(this.content, 150, 125, {
				text: "Toggle Member",
				size: Prodigy.Control.TextButton.MED
			}, this.toggleMember.bind(this))
		},
		Prodigy.Menu.SystemMenu.prototype.toggleMember = function() {
			if (this.game.prodigy.player.isMember == true) {
				this.game.prodigy.player.isMember = false;
				this.game.prodigy.open.messageBoxOkay("You have deactivated Membership.", "OKAY", null, null, "Membership")
			}
			else {
				this.game.prodigy.player.isMember = true;
				this.game.prodigy.open.messageBoxOkay("You have activated Membership!", "OKAY", null, null, "Membership")
			}
		},
		Prodigy.Menu.SystemMenu.prototype.unlockEpics = function() {
			this.addEpic(125);
			this.addEpic(126);
			this.addEpic(127);
			this.addEpic(128);
			this.addEpic(129);
			this.addEpic(130);
			this.addEpic(131);
			this.addEpic(132);
			this.addEpic(133);
			this.game.prodigy.open.messageBoxOkay("Any epics you didn't have before have been added to your team!","OKAY",null,null,"Epics Unlocked!");
		},
		Prodigy.Menu.SystemMenu.prototype.addEpic = function(e) {
			if (!this.game.prodigy.player.kennel.hasPet(e)) {
				this.game.prodigy.player.kennel.add(e, null, Prodigy.Creature.starsToLevel(19), 20),
				this.game.prodigy.player.backpack.add("follow", e)
			}
		},
		Prodigy.Menu.SystemMenu.prototype.downloadForCharacter = function(content, fileName, contentType) {
			var a = document.createElement("a");
			var file = new Blob([content], {
				type: contentType
			});
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
			return !0
		},
		Prodigy.Menu.SystemMenu.prototype.saveCharacter = function() {
			var character = {
				appearancedata: this.game.prodigy.player.appearance.data,
				equipmentdata: this.game.prodigy.player.equipment.data,
				kenneldata: this.game.prodigy.player.kennel.data,
				data: this.game.prodigy.player.data,
				questdata: this.game.prodigy.player.quests.data,
				statedata: this.game.prodigy.player.state.data,
				tutorialdata: this.game.prodigy.player.tutorial.data,
				backpackdata: this.game.prodigy.player.backpack.data,
				housedata: this.game.prodigy.player.house.data,
				achievementsdata: this.game.prodigy.player.achievements.data,
				metadata: {
					isMember: this.game.prodigy.player.isMember,
					appearanceChanged: this.game.prodigy.player.appearanceChanged,
					broadcastId: this.game.prodigy.player.broadcastId,
					inPVP: this.game.prodigy.player.inPVP,
					updated: this.game.prodigy.player.updated,
					parentalLink: this.game.prodigy.player.parentalLink
				},
				gameVersion: this.game.prodigy.version
			};
			if (Util.isDefined(this.game.prodigy.player.registerDate)) {
				character.metadata.registerDate = this.game.prodigy.player.registerDate
			};
			this.downloadForCharacter(JSON.stringify(character), this.game.prodigy.player.appearance.data.name + '.json', 'text/plain');
        },
		Prodigy.Menu.Card.prototype.toHouse = function() {
			this.game.prodigy.world.teleport("house")
		},
		this.game.prodigy.friendsListNetworkHandler.getTotalFriendRequests = function(e) {
			return 0
		},
		this.game.prodigy.load.assets(["login-buttons"])
	}
};
function initGamePatches(e) {
	var t = new ModObj(e);
	QI = {},
	QI.getMasteredSkills = function() {
		return 0
	},
	QI.getUpdatedData = function() {
		return 0
	};
	Util.MOD = 3,
	Util.PLUGIN = 5,
	Util.PATCH = 6,
	Util.log = function(e, t) {
		if (t = Util.isDefined(t) ? t : 1, t & GameConstants.get("GameConstants.Build.LOG_LEVEL")) {
			var i = "string" == typeof e;
			switch (t) {
				case 8:
					console.log(i ? "%c[PRODIGY][ERROR] " + e : e, "background: #900; color: #FFF");
					break;
				case 6:
					console.log(i ? "%c[PRODIGY][PATCH] " + e : e, "background: #b82; color: #FFF");
					break;
				case 5:
					console.log(i ? "%c[PRODIGY][PLUGIN] " + e : e, "background: #084; color: #FFF");
					break;
				case 4:
					console.log(i ? "%c[PRODIGY][INFO] " + e : e, "background: #009; color: #FFF");
					break;
				case 3:
					console.log(i ? "%c[PRODIGY][MOD] " + e : e, "background: #5aa; color: #FFF");
					break;
				case 2:
					console.log(i ? "[PRODIGY][DEBUG] " + e : e);
					break;
				default:
					console.log(i ? "[PRODIGY][DEV] " + e : e)
			}
		}
	},
	GameConstants.enableGameConstant("GameConstants.Debug.EDUCATION_ENABLED", !1);
	GameConstants.enableGameConstant("GameConstants.Debug.AUTO_ANSWER_CORRECTLY", !0);
	try {
		t.doGameMods()
		Util.log("Game patches loaded without errors", Util.PATCH)
	} catch (e) {
		Util.log("Error occured while applying game patch!", Util.ERROR);
		console.error(e);
	}
};

function postGamePatches(e) {
	try {
		e.prodigy.assets._assets["game-data"] = {
			type: "json",
			base: "",
			fullURL: "https://cdn.prodigygame.com/game/data/production/1/data.json"
		},
		e.prodigy.assets._assets["store-data"] = {
			type: "json",
			base: "",
			fullURL: "https://cdn.prodigygame.com/game/data/production/1/stores.json"
		};
		Util.log("Game data patch successful", Util.PATCH)
	} catch (e) {
		Util.log("Error occured while applying preload patch!", Util.ERROR)
		console.error(e)
	}
}
