class ModObj {
	constructor(e, i) {
		this.game = e,
		window.GameConstants = (i(4)).GameConstants
		window.Util = i(0).Util
		window.importer = i
	}
	
	doInitPatch() {
		Util.PLUGIN = 32,
		Util.PATCH = 64,
		Util.MOD = 128,
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
				case Util.WARN:
					console.log(n ? "%c[PRODIGY][WARN] " + e : e, "background: #FFFF00; color: #000000");
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
			e.callback.call(this)
		},
		QI.getMasteredSkills = function() {
			return 0
		},
		QI.getUpdatedData = function() {
			return 0
		};
		importer(701).ResultsMenu.prototype.onMainPlayerLevelUp = function(t) {
			
		},
		importer(548).MenuModel.prototype.addFeedIcon = function(t, e) {
			// This removes wizard watch, it's in the game but the API support is nonexistant and it's identical to modern Prodigy, so yeah. Removed.
		},
		importer(548).MenuModel.prototype.addMemberIcon = function(t, e) {
			!this.game.prodigy.player.data.isMember && this.pages[t][e].push({
				type: (importer(540)).MemberIconButton
			})
		},
		importer(198).WalkableScreen.prototype.processPopups = function(t) {
			var o = importer(4),
			g = importer(136),
			o = importer(4),
			l = importer(60),
			_ = importer(0),
			y = importer(12);
				if (o.GameConstants.get("GameConstants.Debug.POPUPS_ENABLED")) {
					var e = this.game.prodigy.achievements.process();
					if (g.ParentalLink.isSuccessRequired(this.game.prodigy.player)) return void this.game.prodigy.open.parentalLinkSuccessPrompt(t);
					if (this.game.prodigy.player.hasCompletedTutorial() && !(this.game.prodigy.player.memberPrompt || !this.game.prodigy.player.hasMembership() && _.Util.isSchoolHours() || this.game.prodigy.player.hasMembership() && this.game.prodigy.player.backpack.hasItem("mount", 1) > 0) && (this.game.prodigy.player.locationSelectionType !== o.GameConstants.get("GameConstants.LocationSelection.SCHOOL") || this.game.prodigy.player.hasMembership() && 0 === this.game.prodigy.player.backpack.hasItem("mount", 1))) return void(this.game.prodigy.player.rewardMembershipPrizes(t) || this.game.prodigy.open.membershipInfo(t));
					if (g.ParentalLink.isInfoRequired(this.game.prodigy.player)) return void this.game.prodigy.open.parentalLinkInfoPrompt(f.ParentLinkBenefitsConfig.ANALYTICS_SOURCE_LOGIN, t);
					if (e.length > 0)
						for (var a = 0; a < e.length; a++) this.game.prodigy.player.achievements.complete(e[a].ID), this.game.prodigy.player.achievements.complete(e[a].ID), this.game.prodigy.notifications.initNotificationTemplate(l.NotificationType.ACHIEVEMENTS, [{
							ID: e[a].ID,
							type: "achievement",
							value: e[a].data.name
						}], e[a].metadata), this.game.prodigy.notifications.playNextNotification(), this.game.prodigy.notifications.getSocialNotifications(3);
					else {
						if (this.game.prodigy.player.justLeveled && this.game.prodigy.player.getLevel() >= 10) return this.game.prodigy.player.justLeveled = !1, void this.game.prodigy.open.rating(t);
						this.game.prodigy.player.hasCompletedTutorial() && (this.game.prodigy.notifications.playNextNotification(), this.game.prodigy.notifications.getSocialNotifications(3))
					}
				}
				_.Util.isValid(t) && t()
		},
		GameConstants.enableGameConstant("GameConstants.Debug.EDUCATION_ENABLED", !1),
		GameConstants.enableGameConstant("GameConstants.Debug.AUTO_ANSWER_CORRECTLY", !0),
		this.game.prodigy.network.player = this.game.prodigy.player,
		this.game.prodigy.player.hasValidatedParentEmail = function () {
			return !0
		},
		this.game.prodigy.load.processFile = function(t) {
			var a = importer(0);
			if (a.Util.isValid(t) && "" !== t && !this.isFileLoaded(t)) try {
				var e = this.game.prodigy.assets.getAsset(t),
					i = a.Util.isValid(e.fullURL) ? e.fullURL : "" + e.base + e.url,
					n = a.Util.isValid(e.noCache) && e.noCache ? "?r=" + (new Date).getTime() : "";
				if (!a.Util.isValid(i)) return;
				switch (e.type) {
					case "json":
						this.loader.json(t, i + n, !0);
						break;
					case "sprite":
						this.loader.image(t, i + n, !1);
						break;
					case "spritesheet":
						a.Util.isValid(e.fullURL) || a.Util.isValid(e.base) || (i = "v1/spritesheets/" + t + "/" + e.v + "/" + t + ".png");
						var r = e.w,
							o = e.h;
						this.loader.spritesheet(t, i + n, r, o);
						break;
					case "sfx":
					case "bgm":
						var s = a.Util.isValid(e.filename) ? e.filename : t;
						i = "v1/audio/" + s + "/" + e.v + "/" + s, this.loader.audio(t, [i + ".ogg" + n, i + ".mp3" + n], !0);
						break;
					case "atlas":
						var l = a.Util.isValid(e.filename) ? e.filename : e.key;
						i = "v1/atlases/" + (l = a.Util.isValid(l) ? l : t) + "/" + e.v + "/" + l, this.loader.atlasJSONHash(t, i + ".png", i + ".json" + n);
						break;
					case "local":
						this.loader.atlasJSONHash(t, e.base + e.url + ".png", e.base + e.url + ".json");
						break;
					case "spine":
						i = "v1/spine/" + (l = a.Util.isValid(e.filename) ? e.filename : t) + "/" + e.v + "/" + l + ".json" + n, this.loader.spine(t, i);
						break;
					case "singleImage":
						i = "v1/single-images/" + (l = a.Util.isValid(e.filename) ? e.filename : t) + "/" + e.v + "/" + l + ".png" + n, this.loader.image(t, i, !1);
						break;
					case "bitmapFont":
						i = "v1/bitmap-fonts/" + e.filename + "/" + e.v + "/" + e.filename, this.loader.bitmapFont(t, i + ".png", i + ".xml" + n)
				}
			} catch (t) {}
		},
		this.game.prodigy.load.isFileLoaded = function(t) {
			var a = importer(0);
			if (!a.Util.isValid(t) || "" === t) return !0;
			try {
				switch (this.game.prodigy.assets.getAsset(t).type) {
					case "json":
					case "spine":
						if (!this.game.cache.checkJSONKey(t)) return !1;
						break;
					case "sprite":
					case "spritesheet":
					case "singleImage":
					case "atlas":
						if (!this.game.cache.checkImageKey(t)) return !1;
						break;
					case "local":
						if (!this.game.cache.checkImageKey(t)) return !1;
						break;
					case "sfx":
					case "bgm":
						if (!this.game.cache.checkSoundKey(t)) return !1;
						break;
					case "bitmapFont":
						if (!this.game.cache.checkBitmapFontKey(t)) return !1
				}
			} catch (t) {}
			return !0
		},
		importer(351).Login.prototype.screenSetup = function() {
			var a = importer(156),
				r = importer(24),
				o = importer(4),
				s = importer(53),
				l = importer(21),
				c = importer(26),
				h = importer(0),
				u = importer(54),
				p = importer(351).Login,
				e = p;
			var i = this,
			n = this.game.prodigy.gameContainer.Localizer;
			this.background.add(this.game.prodigy.create.sprite(0, 0, "singleImage-121")),
			this.loginBox = this.game.prodigy.create.element(this.background),
			this.usernameField = s.InputField.createInputField(this.game, this.loginBox, "username", "", 100, 230, 300, 40),
			this.usernameField.hide(0),
			this.usernameField.setLabel(this.loginBox, n.getText("TEXTBOX_TITLE_USERNAME"));
			var r = h.Util.getCookie("prodigyUsername");
			h.Util.isValid(r) && this.usernameField.setValue(r),
			this.passwordField = s.InputField.createInputField(this.game, this.loginBox, "password", "", 100, 310, 300, 40, "password"),
			this.passwordField.hide(0),
			this.passwordField.setLabel(this.loginBox, n.getText("TEXTBOX_TITLE_PASSWORD")),
			this.loginButton = this.game.prodigy.create.button(this.loginBox, 100, 380, "login-buttons", "loadcharacter", this.openFileForCharacter.bind(this)),
			this.offlineButton = this.game.prodigy.create.button(this.loginBox, 100, 470, "login-buttons", "offline", this.offlineMode.bind(this)),
			this.createAccountButton = this.game.prodigy.create.button(this.background, 100, 560, "login-buttons", "student", this.game.prodigy.start.bind(this, "CharCreate")),
			this.progressBox = this.game.prodigy.create.element(this.background, 100, 250),
			this.error = this.game.prodigy.create.font(this.progressBox, 0, 0, "", {
				width: 300,
				align: "center"
			}), this.closeButton = this.game.prodigy.create.textButton(this.progressBox, 0, 100, {
				icon: "close",
				text: this.game.prodigy.gameContainer.Localizer.getText("BUTTON_OKAY"),
				size: l.TextButton.MED
			},
			this.showLogin.bind(this, !0)),
			this.error.visible = !1,
			this.closeButton.visible = !1,
			this.progressBox.visible = !1,
			this.googleLoginButton = document.createElement("button"),
			this.googleLoginButton.style.position = "absolute",
			this.googleLoginButton.style.display = "none",
			this.googleLoginButton.style.left = "103px",
			this.googleLoginButton.style.top = "480px",
			this.googleLoginButton.style.height = "65px",
			this.googleLoginButton.style.width = "285px",
			this.googleLoginButton.setAttribute("id", "google-button"),
			this.googleButtonHeightOffset = 0,
			this.canvas = a("#game-container canvas"),
			document.getElementById("external-ui").appendChild(this.googleLoginButton),
			this.googleLoginButton.addEventListener("click", this.onGoogleLoginButtonClick.bind(this)),
			this.googleLoginButton.addEventListener("mouseenter", function() {
				i.googleLoginButton.disabled || (i.googleButtonHeightOffset = 3)
			}), this.googleLoginButton.addEventListener("mouseleave", function() {
				i.googleButtonHeightOffset = 0
			}), this.googleLoginButton.style.backgroundImage = "url('" + o.GameConstants.get("GameConstants.Build.ASSETS_LOCATION") + "v1/single-images/login-google-signin/1/google-signin-btn.png')", this.googleLoginButton.style.backgroundRepeat = "no-repeat", this.googleLoginButton.style.backgroundSize = "100% 100%", this.googleLoginButton.style.backgroundColor = "transparent", e.isGoogleAuthLoaded || (this.googleLoginButton.disabled = !0, a("#google-button").css({
				opacity: .65,
				cursor: "default"
			}), e.onGoogleAuthLoadedCallback = function() {
				e.isGoogleAuthLoaded && (i.googleLoginButton.disabled = !1, a("#google-button").css({
					opacity: 1,
					cursor: "default"
				}))
			});
			var c = this.game.prodigy.create.panel(this.background, 100, 660, 4, 1, "lb");
			c.alpha = .25, this.game.prodigy.create.font(this.background, c.x, c.y + 8, n.getText("LOGIN_PRIVACY_POLICY"), {
				size: 16,
				width: 160,
				align: "center"
			}), c.setClickable(u.NetworkManager.openWebsite.bind(this.game.prodigy.network, "www.prodigygame.com/privacy-policy/")),
			(c = this.game.prodigy.create.panel(this.background, 280, 660, 3, 1, "lb")).alpha = .25,
			this.game.prodigy.create.font(this.background, c.x, c.y + 8, n.getText("LOGIN_WEBSITE"), {
				size: 16,
				width: 120,
				align: "center"
			}),
			c.setClickable(u.NetworkManager.openWebsite.bind(this.game.prodigy.network, "www.prodigygame.com")),
			this.showLogin(!0),
			this.checkForAdmin(),
			this.skipUrlParams ? this.skipUrlParams = !1 : this.tryToStartFlowFromUrlParams(),
			this.displayGameVersion(),
			importer(55).Screen.prototype.screenSetup.call(this)
		},
		importer(351).Login.prototype.offlineMode = function() {
			delete this.game.prodigy.player.data.reset,
			this.game.prodigy.player.data.school = "none",
			this.game.prodigy.player.data.startDate = (new Date).getTime(),
			this.game.prodigy.player.registerDate = new Date(this.game.prodigy.player.data.startDate),
			this.game.prodigy.player.appearance = (new (importer(11)).Player(this.game, !0)).appearance,
			this.game.prodigy.player.appearance.setName(null),
			this.enterGame()
		},
		importer(351).Login.prototype.enterGame = function() {
			this.game.prodigy.world.enter()
		},
		importer(351).Login.prototype.openFileForCharacter = function() {
			var LoadCharacter = this.loadCharacter;
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
					LoadCharacter(finisheddata, !0, e);
				};
				reader.onerror = function(reader) {
					PIXI.game.prodigy.open.messageBoxOkay("Failed to open save file, please retry.","OKAY",null,null,"Character Loader");
				}
			}
		},
		importer(351).Login.prototype.loadCharacter = function(e, t, i) {
			try {
				if (e.gameVersion != i.prodigy.version && t == !0) {
					i.prodigy.open.messageBox("Your character is from a different Prodigy version! This may cause multiple problems while playing!\n\nDo you want to continue?", i.prodigy.game.state.states.Login.loadCharacter.bind(this, e, !1, i), i.prodigy.game.state.states.Login.showLogin.bind(i.prodigy.game.state.states.Login, !0), null, "Character Loader")
					i.prodigy.game.state.states.Login.showLogin(!1);
				} else {
					i.prodigy.player.appearance = (new (importer(11)).Player(i, !0)).appearance,
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
						};
						if (Util.isDefined(e.metadata.modifierdata)) {
							i.prodigy.player.modifiers = e.metadata.modifierdata
						};
						if (Util.isDefined(e.metadata.mountdata)) {
							i.prodigy.player.mount.data = e.metadata.mountdata
						};
						if (Util.isDefined(e.metadata.type)) {
							i.prodigy.player.type = e.metadata.type
						};
						if (!Util.isDefined(e.metadata.hasBam)) {
							i.prodigy.player.data.stars = (importer(305)).StarConverter.convertLegacyStarsToModern(i.prodigy.player.data.stars);
							for(var it = i.prodigy.player.kennel.getPets(), iu = 0; iu < it.length; iu++) {
								it[iu].stars = (importer(305)).StarConverter.convertLegacyStarsToModern(it[iu].stars)
							}
						};
						if (!Util.isDefined(e.metadata.hasNewName)) {
							delete i.prodigy.player.getPlayerData().spinDate,
							delete i.prodigy.player.getPlayerData().numSpins;
							i.prodigy.player.appearance.data.name = null,
							i.prodigy.player.state.data.tutorial = {},
							i.prodigy.player.state.data.zone = {},
							i.prodigy.player.state.data.world = {},
							i.prodigy.player.state.data.breadcrumbs = {},
							i.prodigy.player.state.updated = !0,
							i.prodigy.player.backpack.data.key = [],
							i.prodigy.player.backpack.updated = !0
							i.prodigy.world.teleport("house-suburbs");
							return
						}
					} else {
						i.prodigy.player.isMember = !1, // No membership by default
						i.prodigy.player.data.startDate = (new Date).getTime(), // Fix mail crash
						i.prodigy.player.registerDate = new Date(i.prodigy.player.data.startDate),
						i.prodigy.player.checkVersion()
					};
					i.prodigy.game.state.states.Login.enterGame()
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
		(importer(708)).SystemMenu.prototype.setMode = function(e) {
			switch (importer(13).RenderMenu.prototype.setMode.call(this, e), this.clearContents(), e) {
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
		(importer(708)).SystemMenu.prototype.create = function() {
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
				n = this.game.prodigy.player;
			!n.hasValidatedParentEmail() && n.hasCompletedTutorial() && i.push({
				atlas: "atlas-24",
				icon: "parent-link-hud-badge",
				top: e.getText("SETTINGS_PARENT"),
				bot: e.getText("SETTINGS_ACCOUNT")
			}), this.content = this.game.prodigy.create.element(this, 280, 260), this.createBaseSetup(20, 13, "shine", e.getText("SETTINGS_TITLE"), i), importer(13).RenderMenu.prototype.create.call(this), this.setMode(0);
			for (var a = 0; a < i.length; a++) {
				if ("atlas-24" === i[a].atlas) {
					var r = this.game.prodigy.create.indicator(0, 0),
						o = this.buttons[a].sprite;
					o.addChild(r), r.visible = !1;
					var l = s.Util.getCenteredXY(r.width, 0, o.x, 0, o.width, 0);
					r.x = l.x, r.y = o.y - r.height, r.addTween(), r.visible = !0
				}
			}
			this.game.prodigy.create.advButton(this, 900, 480, {
				icon: "settings",
				bot: e.getText("SETTINGS_LOGOUT")
			}, this.exitGame.bind(this))
		},
		(importer(708)).SystemMenu.prototype.openNetwork = function() {
			var t = this.game.prodigy.gameContainer.Localizer,
				e = Util.isValid(this.game.prodigy.player.world) ? t.getText("SETTINGS_YOUR_WORLD", this.game.prodigy.player.world.name) : t.getText("SETTINGS_OFFLINE");
			this.game.prodigy.create.font(this.content, 0, 50, e, {
				width: 600,
				align: "center"
			}), this.game.prodigy.create.textButton(this.content, 150, 200, {
				text: "Save Character",
				size: (importer(21)).TextButton.MED
			}, this.saveCharacter.bind(this))
		},
		(importer(708)).SystemMenu.prototype.openOther = function() {
			this.game.prodigy.create.textButton(this.content, 150, 50, {
				text: "Get All Epics",
				size: (importer(21)).TextButton.MED
			}, this.unlockEpics.bind(this)), this.game.prodigy.create.textButton(this.content, 150, 125, {
				text: "Toggle Member",
				size: (importer(21)).TextButton.MED
			}, this.toggleMember.bind(this))
		},
		(importer(708)).SystemMenu.prototype.toggleMember = function() {
			if (this.game.prodigy.player.isMember == true) {
				this.game.prodigy.player.isMember = false;
				this.game.prodigy.open.messageBoxOkay("You have deactivated Membership.", "OKAY", null, null, "Membership")
			}
			else {
				this.game.prodigy.player.isMember = true;
				this.game.prodigy.open.messageBoxOkay("You have activated Membership!", "OKAY", null, null, "Membership")
			}
		},
		(importer(708)).SystemMenu.prototype.unlockEpics = function() {
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
		(importer(708)).SystemMenu.prototype.addEpic = function(e) {
			if (!this.game.prodigy.player.kennel.hasPet(e)) {
				this.game.prodigy.player.kennel.add(e, null, (importer(62)).Creature.starsToLevel(20), 20),
				this.game.prodigy.player.backpack.add("follow", e)
			}
		},
		(importer(708)).SystemMenu.prototype.downloadForCharacter = function(content, fileName, contentType) {
			var a = document.createElement("a");
			var file = new Blob([content], {
				type: contentType
			});
			a.href = URL.createObjectURL(file);
			a.download = fileName;
			a.click();
			return !0
		},
		(importer(708)).SystemMenu.prototype.saveCharacter = function() {
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
					hasBam: true,
					type: this.game.prodigy.player.type,
					modifiers: this.game.prodigy.player.modifiers.data,
					mountdata: this.game.prodigy.player.mount.data,
					hasNewName: true
				},
				gameVersion: this.game.prodigy.version
			};
			if (Util.isDefined(this.game.prodigy.player.registerDate)) {
				character.metadata.registerDate = this.game.prodigy.player.registerDate
			};
			this.downloadForCharacter(JSON.stringify(character), this.game.prodigy.player.appearance.getFullName() + ".json", 'text/plain');
        },
		(importer(746)).Card.prototype.toHouse = function() {
			this.game.prodigy.world.teleport("house")
		},
		this.game.prodigy.friendsListNetworkHandler.getTotalFriendRequests = function(e) {
			return 0
		},
		importer(213).HttpDataProvider.ENVIRONMENT_URLS.local = "https://www.prodigygame.com/",
		importer(220).Store.prototype.create = function() {
			var i = importer,
				a = i(7),
				r = i(24),
				o = i(4),
				s = i(2),
				l = i(14),
				c = i(31),
				h = i(0),
				u = i(30),
				p = i(67),
				d = i(219),
				g = i(218),
				t = d.StoreBase;
			this.addTransparent(),
			h.Util.isValid(this.analyticEvents.onCreateEvent) && this.game.prodigy.network.sendAnalytics(h.Util.isValid(this.analyticEvents.onCreateEvent.action) ? this.analyticEvents.onCreateEvent.action : "", h.Util.isValid(this.analyticEvents.onCreateEvent.label) ? this.analyticEvents.onCreateEvent.label : "", this.analyticEvents.onCreateEvent.category), this.createBaseSetup(30, 16, "shine", null, null, !0, null);
				var e = this.game.prodigy.create.element(this, 0, 0);
				e.setRenderState(!0), e.add(new Phaser.TileSprite(this.game, 51, 240, 1178, 40, "atlas-161", "blue-top")), e.add(new Phaser.TileSprite(this.game, 51, 280, 1178, 300, "atlas-161", "blue-mid")), e.add(new Phaser.TileSprite(this.game, 51, 580, 1178, 40, "atlas-161", "blue-top2")), this.spinner = this.add(this.game.prodigy.create.sprite(640, 360, "atlas-18", "loading")), this.spinner.anchor.setTo(.5, .5), this.game.add.tween(this.spinner).to({
					angle: 360
				}, 2e3, Phaser.Easing.Linear.None, !0, 0, o.GameConstants.MAX_SAFE_INTEGER, !1), t.prototype.create.call(this);
			var e = this.game.prodigy.gameContainer.Localizer;
			this.game.prodigy.open.message(e.getText("STORE_OPEN_FAILED_MESSAGE"), this.close.bind(this), null, e.getText("STORE_OPEN_FAILED_TITLE"))
		}
	}
	
	doPreloadPatch() {
		this.game.prodigy.assets.assets["game-data"] = {
			type: "json",
			base: "",
			fullURL: "https://cdn.prodigygame.com/game/data/production/83/data.json"
		},
		this.game.prodigy.assets.assets["login-buttons"] = {
			type: "local",
			base: window.location.href + "images/general-login/1/",
			url: "general-login"
		},
		this.game.prodigy.load.assets(["login-buttons"])
	}
	
	doFontPatch() {
		WebFont.load({
			google: {
				families: ['Roboto', 'ABeeZee', 'Fredoka One', 'Luckiest Guy', 'Paytone One', 'Open Sans', 'Lato']
			}
		});
	}
}

function initGamePatches(e, i) {
	try {
		window.Mods = new ModObj(e, i);
		Mods.doInitPatch(),
		Mods.doFontPatch(),
		Util.log("Initialization patches ran successfully!", Util.PATCH)
	} catch (e) {
		console.log(e);
		i(0).Util.log("Error occured while loading initialization patches")
	}
}

function preloadGamePatches() {
	Mods.doPreloadPatch(),
	Util.log("Preload path patches ran successfully!", Util.PATCH)
}
