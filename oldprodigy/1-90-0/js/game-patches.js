class ModObj {
	constructor(e, i) {
		this.game = e,
		window.importer = i
	}
	
	doInitPatch() {
		Util.PLUGIN = 16,
		Util.PATCH = 32,
		Util.MOD = 64,
		Util.log = function(e, i) {
			var n = "string" == typeof e;
			switch (i) {
				case Util.MOD:
					console.log(n ? "%c[PRODIGY][MOD] " + e : e, "background: #084; color: #FFF");
					break;
				case Util.PATCH:
					console.log(n ? "%c[PRODIGY][PATCH] " + e : e, "background: #b82; color: #FFF");
					break;
				case Util.PLUGIN:
					console.log(n ? "%c[PRODIGY][PLUGIN] " + e : e, "background: #084; color: #FFF");
					break;
				case Util.ERROR:
					console.log(n ? "%c[PRODIGY][ERROR] " + e : e, "background: #900; color: #FFF");
					break;
				case Util.INFO:
					console.log(n ? "%c[PRODIGY][INFO] " + e : e, "background: #009; color: #FFF");
					break;
				case Util.DEBUG:
					/*console.log(n ? "[PRODIGY][DEBUG] " + e : e); Uncomment these if you want an onslaught of dev & debug logs, at your own risk of course :D */
					break;
				default:
					/*console.log(n ? "[PRODIGY][DEV] " + e : e)*/
					break;
			}
		};
		window.QI = {};
		QI.showQuestion = function(e) {
			e.callback.call(this, {
				wasCorrect: !0,
				respTime: 1,
				nFactor: 0
			})
		},
		QI.getMasteredSkills = function() {
			return 0
		},
		QI.getUpdatedData = function() {
			return 0
		};
		this.game.prodigy.load.processFile = function(e) {
			if (Util.isDefined(e) && null !== e && "" !== e && !this.isFileLoaded(e)) try {
				var t = this.game.prodigy.assets.getAsset(e),
					i = Util.isDefined(t.fullURL) ? t.fullURL : "" + t.base + t.url,
					a = Util.isDefined(t.noCache) && t.noCache ? "?r=" + (new Date).getTime() : "";
				if (!Util.isDefined(i)) return;
				switch (t.type) {
					case "json":
						this.loader.json(e, i + a, !0);
						break;
					case "sprite":
						this.loader.image(e, i + a, !1);
						break;
					case "spritesheet":
						Util.isDefined(t.fullURL) || Util.isDefined(t.base) || (i = "v1/spritesheets/" + e + "/" + t.v + "/" + e + ".png");
						var s = t.w,
							n = t.h;
						this.loader.spritesheet(e, i + a, s, n);
						break;
					case "sfx":
					case "bgm":
						i = "v1/audio/" + e + "/" + t.v + "/" + e, this.loader.audio(e, [i + ".ogg" + a, i + ".mp3" + a], !0);
						break;
					case "atlas":
						var r = t.key || e;
						i = "v1/atlases/" + r + "/" + t.v + "/" + r, this.loader.atlasJSONHash(e, i + ".png", i + ".json" + a);
						break;
					case "local":
						this.loader.atlasJSONHash(e, t.base + t.url + ".png", t.base + t.url + ".json");
						break;
					case "spine":
						i = "v1/spine/" + e + "/" + t.v + "/" + e + ".json" + a, this.loader.spine(e, i);
						break;
					case "singleImage":
						i = "v1/single-images/" + e + "/" + t.v + "/" + e + ".png" + a, this.loader.image(e, i, !1);
						break;
					case "bitmapFont":
						i = "v1/bitmap-fonts/" + e + "/" + t.v + "/" + e, this.loader.bitmapFont(e, i + ".png", i + ".xml" + a)
				}
			} catch (e) {}
		},
		this.game.prodigy.load.isFileLoaded = function(e) {
			if (!Util.isDefined(e) || null === e || "" === e) return !0;
			try {
				switch (this.game.prodigy.assets.getAsset(e).type) {
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
			} catch (e) {}
			return !0
		},
		this.game.state.states.Login.screenSetup = function() {
			var a, s = importer(14),
				n = (a = s) && a.__esModule ? a : {
					default: a
				};
			var t = this.game.prodigy.gameContainer.Localizer;
			this.background.add(this.game.prodigy.create.sprite(0, 0, "login-bg-6")),
			this.loginBox = this.game.prodigy.create.element(this.background),
			this.usernameField = Prodigy.Control.InputField.createInputField(this.game, this.loginBox, "username", "", 100, 230, 300, 40),
			this.usernameField.hide(0),
			this.usernameField.setLabel(this.loginBox, t.getText("TEXTBOX_TITLE_USERNAME"));
			var i = Util.getCookie("prodigyUsername");
			Util.isDefined(i) && this.usernameField.setValue(i),
			this.passwordField = Prodigy.Control.InputField.createInputField(this.game, this.loginBox, "password", "", 100, 310, 300, 40, "password"),
			this.passwordField.hide(0),
			this.passwordField.setLabel(this.loginBox, t.getText("TEXTBOX_TITLE_PASSWORD")),
			this.loginButton = this.game.prodigy.create.button(this.loginBox, 100, 380, "login-buttons", "loadcharacter", this.openFileForCharacter.bind(this)),
			this.offlineButton = this.game.prodigy.create.button(this.loginBox, 100, 470, "login-buttons", "offline", this.offlineMode.bind(this)),
			this.createAccountButton = this.game.prodigy.create.button(this.loginBox, 100, 560, "login-buttons", "student", this.game.prodigy.start.bind(this, "CharCreate")),
			this.progressBox = this.game.prodigy.create.element(this.background, 100, 250),
			this.error = this.game.prodigy.create.font(this.progressBox, 0, 0, "", {
				width: 300,
				align: "center"
			}), this.closeButton = this.game.prodigy.create.textButton(this.progressBox, 0, 100, {
				icon: "close",
				text: this.game.prodigy.gameContainer.Localizer.getText("BUTTON_OKAY"),
				size: Prodigy.Control.TextButton.MED
			}, this.showLogin.bind(this, !0)),
			this.error.visible = !1,
			this.closeButton.visible = !1,
			this.progressBox.visible = !1;
			var a = this.game.prodigy.create.panel(this.background, 100, 660, 4, 1, "lb");
			a.alpha = .25, this.game.prodigy.create.font(this.background, a.x, a.y + 8, t.getText("LOGIN_PRIVACY_POLICY"), {
				size: 16,
				width: 160,
				align: "center"
			}), a.setClickable(this.game.prodigy.network.openWebsite.bind(this.game.prodigy.network, "www.prodigygame.com/privacy-policy/")), (a = this.game.prodigy.create.panel(this.background, 280, 660, 3, 1, "lb")).alpha = .25, this.game.prodigy.create.font(this.background, a.x, a.y + 8, t.getText("LOGIN_WEBSITE"), {
				size: 16,
				width: 120,
				align: "center"
			}), a.setClickable(this.game.prodigy.network.openWebsite.bind(this.game.prodigy.network, "www.prodigygame.com")), this.showLogin(!0), this.checkForAdmin(), this.skipUrlParams ? this.skipUrlParams = !1 : this.tryToStartFlowFromUrlParams(), n.default.prototype.screenSetup.call(this)
		}, this.game.state.states.Login.showLogin = function(e) {
			this.usernameField.setEnabled(e), this.passwordField.setEnabled(e), e && (this.error.visible = !1, this.closeButton.visible = !1), this.progressBox.visible = !e, this.loginBox.visible = e, e ? (this.game.input.setEnterCallback(this.startLogin.bind(this)), this.usernameField.show(100), this.passwordField.show(100)) : (this.game.input.clearEnterCallback(), this.usernameField.hide(100), this.passwordField.hide(100))
		}, this.game.state.states.Login.update = function() {
			var a, s = importer(14),
				n = (a = s) && a.__esModule ? a : {
					default: a
				};
			if (n.default.prototype.update.call(this), this.tutorial) {
				var e = this.usernameField.getValue() || "";
				if ((e = e.toLowerCase()) !== this.new_username.toLowerCase()) {
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
		}, this.game.state.states.Login.offlineMode = function() {
			this.game.prodigy.start("CharSelect")
		}, this.game.state.states.Login.openFileForCharacter = function() {
			var fileInput = document.createElement('input');
			var e = this.game
			var t = this
			fileInput.type = 'file',
			fileInput.id = 'myfile' + Math.floor(Math.random() * 999999),
			fileInput.name = 'files',
			fileInput.style.display = 'none',
			fileInput.click();
			fileInput.onchange = function(file) {
				var reader = new FileReader();
				reader.readAsText(file.target.files[0]);
				reader.onload = function(reader) {
					t.loadCharacter.call(t, JSON.parse(reader.target.result), !0);
				};
				reader.onerror = function(reader) {
					t.game.prodigy.open.messageBoxOkay("Failed to open save file, please retry.","OKAY",null,null,"Character Loader");
				}
			}
		}, this.game.state.states.Login.loadCharacter = function(e, t) {
			try {
				if (e.gameVersion != this.game.prodigy.version && t == !0) {
					this.game.prodigy.open.confirm("Your character is from a different Prodigy version! This may cause multiple problems while playing!\n\nDo you want to continue?", this.loadCharacter.bind(this, e, !1), this.showLogin.bind(this, !0), null, "Character Loader")
					this.game.prodigy.game.state.states.Login.showLogin(!1);
				} else {
					this.game.prodigy.player.appearance.data = e.appearancedata,
					this.game.prodigy.player.equipment.data = e.equipmentdata,
					this.game.prodigy.player.kennel.data = e.kenneldata,
					this.game.prodigy.player.data = e.data,
					this.game.prodigy.player.quests.data = e.questdata,
					this.game.prodigy.player.backpack.data = e.backpackdata;
					if (Util.isDefined(e.tutorialdata)) {
						this.game.prodigy.player.tutorial.data = e.tutorialdata
					};
					if (Util.isDefined(e.statedata)) {
						this.game.prodigy.player.state.data = e.statedata
					};
					if (Util.isDefined(e.achievementsdata)) {
						this.game.prodigy.player.achievements.data = e.achievementsdata
					};
					if (this.game.prodigy.player.hasCompletedTutorial() == !0) {
						this.game.prodigy.player.house.data = e.housedata
					};
					if (Util.isDefined(e.metadata)) {
						this.game.prodigy.player.isMember = e.metadata.isMember,
						this.game.prodigy.player.appearanceChanged = e.metadata.appearanceChanged,
						this.game.prodigy.player.broadcastId = e.metadata.broadcastId,
						this.game.prodigy.player.inPVP = e.metadata.inPVP,
						this.game.prodigy.player.updated = e.metadata.updated;
						if (Util.isDefined(e.data.startDate)) {
							this.game.prodigy.player.registerDate = new Date(this.game.prodigy.player.data.startDate)
						} else {
							this.game.prodigy.player.data.startDate = (new Date).getTime(),
							this.game.prodigy.player.registerDate = new Date(this.game.prodigy.player.data.startDate)
						};
						if (Util.isDefined(e.metadata.parentalLink)) {
							this.game.prodigy.player.parentalLink = e.metadata.parentalLink
						};
						if (Util.isDefined(e.metadata.mountdata)) {
							this.game.prodigy.player.mount.data = e.metadata.mountdata
						}
					} else {
						this.game.prodigy.player.isMember = !1, // No membership by default
						this.game.prodigy.player.data.startDate = (new Date).getTime(), // Fix mail crash
						this.game.prodigy.player.registerDate = new Date(this.game.prodigy.player.data.startDate)
					};
					this.offlineMode()
				}
			} catch (error) {
				console.error(error),
				this.game.prodigy.open.messageBoxOkay("A critical error occurred during your character load! This is most-likely from a corrupted/modified save.\n\n\nCheck the console for more details.", "OKAY", null, null, "Character Loader"),
				this.game.prodigy.player.data.reset = true,
				Util.log("Character load failed!", Util.ERROR),
				Util.log("Load error detected, data loaded returned below.", Util.INFO),
				console.log(e);
			}
		},
		Prodigy.Container.CreatureContainer.prototype.processLevelEvent = function() {
			var e = this.source.getUnprocessedLevelEvents();
			if (Util.isDefined(e) && e.length > 0) {
				var t = e.pop();
				if (Util.isDefined(t.h) && this.levelEventNewHeart(t.h), Util.isDefined(t.a) && this.levelEventNewSpell(this.game.prodigy.attacks.getAttack(t.a)), Util.isDefined(t.e) && this.levelEventEvolve(t.e), Util.isDefined(t.g)) {
					if (e.length >= 1) return e.unshift(t), void this.processLevelEvent();
					this.processLevelEvent()
				}
			} else this.onFxAnimationDone()
		},
		Prodigy.Menu.SystemMenu.prototype.create = function() {
			this.addTransparent();
			var e = this.game.prodigy.gameContainer.Localizer,
				i = [{
					icon: "settings",
					bot: e.getText("SETTINGS_SOUND")
				}, {
					icon: "settings",
					bot: e.getText("SETTINGS_GRAPHICS")
				}, {
					icon: "settings",
					bot: e.getText("SETTINGS_NETWORK")
				}, {
					icon: "settings",
					bot: "Other"
				}],
				s = this.game.prodigy.player;
			!s.hasValidatedParentEmail() && s.hasCompletedTutorial() && i.push({
				atlas: "icons-menu",
				icon: "parent-link-hud-badge",
				top: e.getText("SETTINGS_PARENT"),
				bot: e.getText("SETTINGS_ACCOUNT"),
				hasIndicator: !0
			}),
			this.content = this.game.prodigy.create.element(this, 280, 260, 15, 8),
			this.createBaseSetup(20, 13, "shine", e.getText("SETTINGS_TITLE"), i),
			Prodigy.RenderMenu.prototype.create.call(this)
			this.setMode(0);
			this.game.prodigy.create.advButton(this, 900, 480, {
				icon: "settings",
				bot: e.getText("SETTINGS_LOGOUT")
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
			var e = this.game.prodigy.gameContainer.Localizer,
				t = Util.isNullOrUndefined(this.game.prodigy.player.world) ? e.getText("SETTINGS_OFFLINE") : e.getText("SETTINGS_YOUR_WORLD", this.game.prodigy.player.world.name);
			this.game.prodigy.create.font(this.content, 0, 50, t, {
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
					parentalLink: this.game.prodigy.player.parentalLink,
					mountdata: this.game.prodigy.player.mount.data
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
		this.game.prodigy.player.hasValidatedParentEmail = function () {
			return !0
		},
		this.game.prodigy.pvpNetworkHandler.getUserRank = function(e, t) {},
		this.game.prodigy.pvpNetworkHandler.getUserLeaderboard = function(e) {},
		this.game.prodigy.pvpNetworkHandler.getSeasonLeaderboard = function(e) {},
		this.game.prodigy.pvpNetworkHandler.getClassLeaderboard = function(e) {},
		this.game.prodigy.network.player = this.game.prodigy.player,
		this.game.prodigy.player.data.startDate = (new Date).getTime(),
		this.game.prodigy.player.registerDate = new Date(this.game.prodigy.player.data.startDate),
		GameConstants.enableGameConstant("GameConstants.Debug.EDUCATION_ENABLED", !1),
		GameConstants.enableGameConstant("GameConstants.Debug.AUTO_ANSWER_CORRECTLY", !0);
	}
	
	doPreloadPatch() {
		this.game.prodigy.assets._assets["game-data"] = {
			type: "json",
			base: "",
			fullURL: "https://cdn.prodigygame.com/game/data/production/30/data.json"
		},
		this.game.prodigy.assets._assets["store-data"] = {
			type: "json",
			base: "",
			fullURL: "https://cdn.prodigygame.com/game/data/production/30/stores.json"
		};
		this.game.prodigy.assets._assets["login-buttons"] = {
			type: "local",
			base: window.location.href + "images/general-login/1/",
			url: "general-login"
		},
		this.game.prodigy.load.assets(["login-buttons"])
	}
}

function initGamePatches(e, i) {
	try {
		window.Mods = new ModObj(e, i),
		Mods.doInitPatch()
		Util.log("Initialization patches ran successfully!", Util.PATCH)
	} catch (e) {
		console.log(e);
		i(0).Util.log("Error occured while loading initialization patches")
	}
}

function preloadGamePatches() {
	try {
		Mods.doPreloadPatch(),
		Util.log("Preload path patches ran successfully!", Util.PATCH)
	} catch (e) {
		console.log(e);
		i(0).Util.log("Error occured while loading preload patches")
	}
}
