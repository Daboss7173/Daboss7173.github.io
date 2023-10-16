/*
	Simple mod interface for Prodigy version 2-45-0
	
	Installed Mods: 
		
		| Mod Name |               	| Author |
		
		Walk Speed 					Daboss7173
		Fast Game Speed				Daboss7173
		Imitation Titan				Daboss7173
	
	Written by: Daboss7173
	Github: https://github.com/Daboss7173/Daboss7173.github.io
*/
(async () => {
	
	/*
		These are for importing esmodules from the game.
		Not all of the modules are included, but most of
		the important ones are. Allows for much greater
  		control over Prodigy.
		
		
		To import a module in the Mod Handler instance you
		just use the following syntax:
		
		this.import(Prodigy.<module name here>)
		
		You can set it to a variable to access it later.
		
		
		Each of them are actually linked to numerical
		values, this just makes it far easier to work
		with, allowing for more control over Prodigy's
		inner-workings.
	*/
	let Prodigy = {
		Services: 0,
		Util: 1,
		EProdigyInjectionIdentifiers: 2,
		Items: 3,
		GameConstants: 4,
		Events: 5,
		AreaEvent: 6,
		InversifyInjection: 7,
		Quest: 8,
		Element: 9,
		Map: 10,
		Menu: 12,
		Breadcrumbs: 13,
		Player: 14,
		EventEnum: 15,
		ECoOpBattleState: 16,
		EFunnelEventIDs: 17,
		CreatureContainer: 18,
		isArray: 19,
		MembershipInfo: 20,
		RenderMenu: 22,
		Image: 23,
		TweenController: 24,
		ProdigyGame: 25,
		Device: 26,
		Scene: 27,
		AnalyticService: 28,
		UIElement: 29,
		BonfireSpireMap: 30,
		CombatFormulas: 31,
		Data: 32,
		Random: 34,
		TextButton: 35,
		ECopOpSocketMessageAction: 36,
		ShiverchillMap: 37,
		SkywatchMap: 38,
		GameObject: 39,
		NPC: 41,
		HUDButton: 42,
		EAssetType: 43,
		Monster: 44,
		EItemInfoMode: 45,
		Zone: 46,
		Action: 47,
		UIParser: 50,
		TaggedLogger: 51,
		Decision: 52,
		RenderFactory: 57,
		TypeUtils: 58,
		State: 59,
		DataNameResolver: 62,
		Creature: 63,
		GameEventData: 65,
		GameEventFactory: 66,
		WebFontText: 68,
		GameEventDataBuilder: 69,
		ForestMap: 70,
		BattleTeamMember: 71,
		Utils: 72,
		ApiServices: 75,
		Boss: 78,
		EInputBlockType: 79,
		BossContainer: 80,
		MonsterContainer: 81,
		ToyMerchant: 82,
		NetworkManager: 83,
		Renderer: 86,
		UIButton: 87,
		ECombatEndMode: 88,
		GameDataFactoryBase: 89,
		GameEventBroadcastWrapper: 90,
		ActionQueue: 91,
		BaseData: 93,
		Screen: 97,
		NotificationController: 98,
		MenuTutorial: 99,
		InputField: 100,
		LegacyMenu: 101,
		TrialMembershipUtil: 102,
		SpineRenderer: 110,
		InputBlocker: 112,
		URLProvider: 113,
		ActivityZoneMap: 114,
		AnimationClipSynchronizer: 115,
		QueuedAction: 116,
		PacketManager: 119,
		EInjectionIdentifiers: 124,
		Sprite: 128,
		Event: 129,
		Factory: 130,
		Overlay: 132,
		Bam: 133,
		TowerZone: 134,
		Wheel: 135,
		MemberAd: 136,
		CoOpBattleTeamInfo: 137,
		DataFactory: 145,
		ApiEventData: 150,
		ApiEventFactory: 151,
		JSON: 153,
		PhaserButtonWrapper: 154,
		EEnvironment: 155,
		QuestNPC: 156,
		DungeonZone: 157,
		ToyStore: 158,
		RegisterPage: 160,
		SurveyController: 161,
		KeystoneState: 162,
		BaseNicknameProvider: 163,
		NetworkHandler: 164,
		Signal: 165,
		CacheStorage: 182,
		Service: 183,
		Character: 186,
		DungeonDirection: 189,
		AnonymousEventData: 190,
		AnonymousEventFactory: 191,
		TitanBoss: 192,
		GraphicBase: 193,
		Slider: 194,
		EffectFactory: 195,
		Team: 197,
		SpellFactory: 198,
		PippetEncounter: 199,
		MonsterEvent: 200,
		SeededRandomGenerator: 201,
		LoggedInPlayerDataProvider: 202,
		TimeManager: 203,
		AcademyGH1: 204,
		AcademyGH2: 205,
		Pippet: 206,
		Skin: 207,
		DungeonExitRoomComponent: 208,
		QuestEvent: 209,
		CoOpTeamData: 210,
		MultiplayerSocketMessageListener: 211,
		PlayerAppearanceSelector: 212,
		ColoredCustomizablePlayerAttribute: 213,
		CustomizablePlayerAttribute: 214,
		SpineAnimator: 215,
		Localizer: 219,
		StateMachine: 221,
		GameObjectContext: 229,
		PrefabData: 230,
		CharacterAppearance: 263,
		EducationEventData: 269,
		EducationEventFactory: 270,
		Graphic: 271,
		CharacterContainer: 272,
		PlayerContainer: 278,
		ParticleEmitter: 279,
		BonfireBoss: 280,
		CloudBoss: 281,
		OldOneBoss: 282,
		PippetBoss: 283,
		BattleScreenBase: 284,
		DebugValueRenderer: 285,
		DinoDig: 287,
		DynoZone: 288,
		UUIDProvider: 289,
		GameCompleteDataFactory: 290,
		BattleController: 291,
		Wizard: 292,
		WorldMap: 293,
		Social: 294,
		PuppetMaster: 295,
		ParentLinkBenefitsConfig: 296,
		MemberStarController: 297,
		HouseItem: 298,
		Button: 299,
		LegacyAuthProvider: 300,
		ClickableEvent: 302,
		WalkableScreen: 303,
		Debug: 304,
		DungeonMonsterComponent: 305,
		LocalizationData: 306,
		TitanMap: 307,
		BattleHealth: 308,
		CastPlayerSpellAction: 309,
		CastSpellAction: 310,
		PlayerDefeatedAction: 311,
		TitanDefeatedAction: 312,
		SpellAnimationClip: 313,
		PlayerKeyFrameAnimator: 314,
		DontUseMeContext: 315,
		Spine: 316,
		StateMachine: 317,
		FadeMenuTween: 318,
		Input: 319,
		LocalizedNameProvider: 321,
		BaseLocalizer: 322,
		StateMachineDataFactories: 323,
		DataFactories: 324,
		ActionData: 325,
		StateMachineData: 326,
		FSMController: 327,
		FSMFactories: 328,
		TextSource: 340,
		StringTextSource: 341,
		InversifyBindingAs: 345,
		InversifyBindingTo: 346,
		InversifyContainer: 347,
		PrefabComponentOverrideData: 348,
		PrefabOverrideData: 349,
		PrefabTemplateData: 350,
		PrefabService: 351,
		ApplicationError: 370,
		IStoreDataProvider: 371,
		IAssetDataProvider: 372,
		StoreDataFactory: 373,
		StoreCostData: 374,
		StoreData: 375,
		StoreItemData: 376,
		StoreMerchantAvatarData: 377,
		StoreTabButtonData: 378,
		StoreTabData: 379,
		VoucherCodeFactory: 382,
		GameAssetDefinition: 383,
		VoucherCode: 384,
		VoucherCodeRedemptionFactory: 385,
		VoucherCodeRedemption: 386,
		PlayerData: 387,
		NameData: 388,
		AppearanceData: 389,
		PlayerDataFactory: 390,
		DungeonFactory: 391,
		DungeonData: 392,
		DungeonMonsterDropData: 393,
		DungeonPathData: 394,
		DungeonRoomData: 395,
		Backpack: 410,
		SpellUtil: 421,
		CharacterEquipment: 425,
		PlayerAppearance: 432,
		ProdigyRandomDataGenerator: 434,
		TiledMap: 435,
		SpriteRenderer: 436,
		AnonymousAnalyticService: 438,
		AnonymousGameCompleteData: 445,
		DataFactory: 446,
		AnonymousWebMembershipData: 447,
		AnonymousGameDiscoveryData: 448,
		ApiStudentAttachedToParentData: 449,
		ApiMembershipAssignData: 451,
		ApiMembershipCreatedData: 452,
		ApiCancelMembershipEventData: 453,
		WebMembershipData: 455,
		ApiAnalyticService: 458,
		WebAnalyticService: 460,
		GameAvatarData: 461,
		GameBattleData: 462,
		GameCompleteData: 463,
		GameDiscoveryData: 464,
		GameQuestionData: 465,
		GameSessionEndData: 466,
		GameSessionStartData: 467,
		GameSocialData: 468,
		GameSinkData: 469,
		GameSourceData: 470,
		EducationLessonEncounterData: 471,
		EducationQuestionInterfaceData: 472,
		TiledRenderer: 476,
		Monsters: 477,
		CharacterStatus: 478,
		ScrollBar: 479,
		TextElement: 480,
		UIUtil: 481,
		SlicedGraphic: 482,
		ESlicedGraphicDirection: 483,
		DrawUtil: 484,
		SpineUI: 485,
		Tab: 486,
		TabButton: 487,
		JsonFeatureFlagsProvider: 488,
		EvolutionSummary: 489,
		PaginatedMenu: 490,
		LocalizedNameResolver: 491,
		CharacterAnimationData: 492,
		ForestContainer: 493,
		ForestBoss: 494,
		IceWrymBoss: 495,
		BamSpellButton: 496,
		BanEpicButton: 497,
		BattleStats: 498,
		AVERAGE_FPS: 499,
		MEMORY_USAGE: 499,
		MOUSE_POSITION: 499,
		SpellAOE: 500,
		SpellProjectile: 501,
		SpellBase: 502,
		EPVPAction: 503,
		PVPManager: 504,
		DancePose: 505,
		Pathfinder: 506,
		AnonymousAnalyticsService: 507,
		NotificationCell: 508,
		MenuFactory: 509,
		GradePage: 510,
		NameChange: 511,
		BountyContainer: 512,
		BountyTextProvider: 513,
		Coliseum: 514,
		EpicBoostMenu: 515,
		ItemInfo: 516,
		ActivePlayer: 517,
		StarConverter: 518,
		DailyQuestions: 519,
		BitField: 520,
		PlayAtHome: 521,
		ClassCode: 522,
		ClassLeadersPanel: 523,
		Store: 524,
		StoreBase: 525,
		StoreItemSort: 526,
		UserEquipment: 527,
		DungeonEntranceMenu: 529,
		Florian: 530,
		AcademyMerchant: 531,
		Gale: 532,
		MessageBox: 533,
		ParentalLink: 534,
		MailerSplitTests: 535,
		FetchLibraryHttpClient: 536,
		JWTAuthProvider: 537,
		HttpDataProvider: 538,
		CebolliniEvent: 539,
		Follow: 540,
		BitmapFont: 541,
		NameTextComponent: 542,
		DialogueController: 543,
		GameBattleDataFactory: 544,
		GameFestival: 545,
		Hints: 546,
		ActivityZone: 547,
		ArchivesZone: 548,
		DungeonMap: 549,
		DarkTowerZone: 550,
		DarkTowerMap: 551,
		DebugMisc: 552,
		TMXMapLoader: 554,
		ImageAnimator: 555,
		ProdigyAssetLoader: 556,
		TileScreen: 557,
		DungeonCurrencyComponent: 558,
		LiveJSONEditor: 559,
		Elevator: 560,
		TitanIntro: 561,
		Harvey: 562,
		EGameCompleteName: 563,
		EGameCompleteType: 564,
		HouseMapBase: 565,
		Squeak: 566,
		DungeonGenerator: 567,
		ActiveMemberHealthBar: 568,
		ItemIDNameProvider: 569,
		QueueTooLateAction: 570,
		CastMissedPlayerSpellAction: 571,
		CastMissedSpellAction: 572,
		CoOpSummaryMenu: 573,
		FullPlayerAppearance: 574,
		PlayerKeyFrameAnimationData: 575,
		PlayerOutfit: 576,
		CoOpPrizeProvider: 577,
		HostPlayerSpellSelector: 578,
		SegmentedBar: 579,
		ThreeSliceImage: 580,
		CoOpBattleStateMachine: 581,
		PlayActionQueueDecision: 582,
		PlayInjectedAnimatorState: 583,
		Mask: 584,
		Loading: 585,
		AwardItemsAction: 590,
		DebugLocalizer: 593,
		LocalLanguageDataCollection: 594,
		VerboseLocalizer: 595,
		FSMService: 597,
		ConditionData: 598,
		StateData: 599,
		VersionedData: 600,
		TransitionData: 601,
		AddVariableAction: 602,
		EnableInputAction: 603,
		ExecuteFunctionAction: 604,
		ExecuteStateMachineAction: 605,
		SetAlphaAction: 606,
		SetVariableAction: 607,
		SetVariablesAction: 608,
		SetVisibleAction: 609,
		TweenAction: 610,
		WaitAction: 611,
		WaitForEventAction: 612,
		Factories: 613,
		Condition: 614,
		State: 615,
		LogFSMController: 616,
		TextComponent: 652,
		ButtonComponent: 653,
		DebugBoundsComponent: 654,
		GraphicComponent: 655,
		SlicedGraphicComponent: 656,
		ContextBinding: 658,
		Installer: 661,
		InjectableComponent: 662,
		InjectableClass: 663,
		Transform: 664,
		DimensionPlaceholder: 665,
		PrefabLoader: 667,
		Prefab: 668,
		PrefabDataFactories: 669,
		PrefabComponentData: 670,
		CompleteQuestionAction: 671,
		CompleteSequenceAction: 672,
		CompleteItemAction: 673,
		CreateChatBubbleAction: 674,
		CreateElementAction: 675,
		CreateIconAction: 676,
		CreateSpriteAction: 677,
		EnableSaveAction: 678,
		ExplodeAction: 679,
		FlipCreatureAction: 680,
		GetDailyRewardCountAction: 681,
		GetZoneStateAction: 682,
		Service: 775,
		HasItemAction: 847,
		HideFollowAction: 848,
		HighlightElementAction: 849,
		HopAction: 850,
		IsOnQuestAction: 851,
		IsQuestSequenceAction: 852,
		IsQuestCompleteAction: 853,
		PauseMusicAction: 854,
		PlayFireworkAction: 855,
		PlayMusicAction: 856,
		PlaySoundAction: 857,
		PlaySpineAction: 858,
		SendAdvancedEventAction: 859,
		SetDailyRewardCountAction: 860,
		SetEventProcessingAction: 861,
		SetPathAction: 862,
		SetPlayerStateAction: 863,
		SetValidPathAction: 864,
		SetWalkSpeedAction: 865,
		SetZoneStateAction: 866,
		ShakeAction: 867,
		ShowDialogueAction: 868,
		StartBattleAction: 869,
		TeleportAction: 870,
		CreateMonsterDungeonComponent: 874,
		CreateGoldenPageDungeonComponent: 875,
		CreateSpineAction: 876,
		CompleteBreadcrumbAction: 877,
		CreatePageDungeonComponent: 878,
		BroadcastGameEventAction: 879,
		PlaySceneAction: 959,
		SpellBeam: 1012,
		SocialNotificationCell: 1039,
		SystemMenu: 1142,
	};
	/*
		These two classes help keep track of animations
		to be used in the Fast Game Speed mod.
		
		They make it so that the animations' timescale
		could be changed in real time.
	*/
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
	/*
		This class is where the  M A G I C  happens.
		
		Basically all of the mod stuff is here.
		Handles all of the patches necessary for modding.
		
		If you want to add a new mod, it's all done in
		this class.
	*/
	var ModHooks = null;
	class ModHandler {
		constructor(e, t, i) {
			this.game = e,
			this.import = t,
			this.gamedata = i,
			this.animations = new AnimationManager,
			this.tweens = new TweenManager,
			this.available = [{
				id: "WalkSpeed",
				patch: "initWalkSpeedMod"
			}, {
				id: "FastGameSpeed",
				patch: "initFastGameSpeedMod"
			}, {
				id: "ImitationTitan",
				patch: "initImitationTitanMod"
			}];
			window.ProdigyModules = this.import;
		}
		log(e) {
			this.import(Prodigy.Util).Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #1724", "background: #172a", "background: #172f; color: #FFF", "background: #172a", "background: #1724")
		}
		info(e) {
			this.import(Prodigy.Util).Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #14b4", "background: #14ba", "background: #14bf; color: #FFF", "background: #14ba", "background: #14b4")
		}
		error(e) {
			this.import(Prodigy.Util).Util.isDefined(e) && console.log("%c %c %c " + e + " %c %c ", "background: #a114", "background: #a11a", "background: #a11f; color: #FFF", "background: #a11a", "background: #a114")
		}
		initWalkSpeedMod() {
			let e = this.gamedata.ui,
				t = this.import(Prodigy.SystemMenu).SystemMenu.prototype.postCreate,
				i = this.import(Prodigy.ScrollBar),
				a = this.import(Prodigy.Util),
				o = this.game,
				r = this.import(Prodigy.PlayerContainer).PlayerContainer.prototype.update;
			e[3].data.elements[0].children[4].children[3].children.push({
				type: "Text",
				name: "walkSpeedSliderText",
				y: 154,
				x: 20,
				height: 30,
				relativeWidth: .2,
				textKey: "Walk Speed",
				fontID: 157,
				fontSize: 0,
				horizontalAlignment: "left",
				forceUpperCase: !0
			}), e[3].data.elements[0].children[4].children[3].children.push({
				type: "Slider",
				name: "walkSpeedSlider",
				y: 154,
				relativeX: .26,
				relativeWidth: .7,
				height: 42,
				atlasID: 144,
				thumbFrameName: "buttons/orange-thumb",
				activeTrackBaseFrameName: "scroll-tracks/blue",
				inactiveTrackBaseFrameName: "scroll-tracks/grey",
				isVertical: !1
			}), e[22].data.elements[0].children[1].children[3].children.push({
				type: "UIElement",
				relativeX: .065,
				relativeY: .75,
				relativeWidth: 1,
				relativeHeight: 1,
				children: [{
					type: "ScrollBar",
					name: "walkSpeedScrollBar",
					relativeY: .06,
					relativeWidth: .84,
					height: 20,
					anchorX: 0,
					anchorY: .5,
					atlasID: 149,
					isVertical: !1,
					thumbFrameName: "image/slider-knob",
					trackFrameName: "image/slider-track"
				}, {
					type: "WebFontText",
					relativeX: .4,
					relativeY: 0,
					textKey: "Walk Speed",
					style: 9,
					fontSize: 18,
					boundsAlignH: "center",
					boundsAlignV: "middle",
					color: "#363636"
				}]
			}),
			this.game.prodigy.player.walkSpeed = 1.5,
			this.import(Prodigy.SystemMenu).SystemMenu.prototype.postCreate = function() {
				t.call(this);
				let e = this.findElement(i.ScrollBar, "walkSpeedScrollBar");
				a.Util.isValid(e) && (e.setPercent((this.game.prodigy.player.walkSpeed - .1) / 20), e.onDragUpdateCallbacks.push((function(e) {
					o.prodigy.player.walkSpeed = 20 * e + .1
				})))
			}
			this.import(Prodigy.PlayerContainer).PlayerContainer.prototype.update = function() {
				r.call(this);
				this.walkSpeed = o.prodigy.player.walkSpeed;
			}
		}
		initFastGameSpeedMod() {
			let e = this.game,
				t = this.import(Prodigy.Util),
				i = this.import(Prodigy.TweenController).TweenController.prototype.set,
				a = this.tweens,
				o = this.animations,
				r = Phaser.AnimationManager.prototype.play,
				n = Phaser.AnimationManager.prototype.add,
				l = t,
				s = this;
			window.setGameSpeed = function(d) {
				if (d < .1) ModHooks.error("Supplied speed multiplier is too low. Try a larger speed value.");
				else {
					if (e.prodigy.debugMisc.setGameSpeed.call(e.prodigy, d), spine.AnimationState.prototype.timeScale = d, Phaser.AnimationManager.prototype.add = function(e, t, i, a, r) {
							let s = 10;
							l.Util.isDefined(i) && (s = i, i *= d);
							let h = n.call(this, e, t, i, a, r);
							return o.register(h, s), h
						}, Phaser.AnimationManager.prototype.play = function(e, i, a, o) {
							return t.Util.isDefined(i) && !isNaN(i) && (i *= d), r.call(this, e, i, a, o)
						}, s.import(Prodigy.TweenController).TweenController.prototype.set = function(e, t, o, r) {
							let n = o,
								s = r;
							l.Util.isDefined(o) && (o /= d), l.Util.isDefined(r) && (r /= d);
							let h = i.call(this, e, t, o, r);
							return a.register(this, this.tweens[this.tweens.length - 1], n, s), h
						}, t.Util.isDefined(e.tweens))
						for (var h = e.tweens.getAll(), p = 0; p < h.length; p++) h[p].timeScale = d;
					if (t.Util.isDefined(o))
						for (var c = o.getAll(), m = 0; m < c.length; m++) c[m].speed = d * (t.Util.isDefined(o.animations[m].baseSpeed) ? o.animations[m].baseSpeed : 10);
					if (t.Util.isDefined(a))
						for (var g = a.getAll(), u = 0, k = a.getTweens(); u < g.length; u++) k[u].delay = g[u].baseDelay / d, k[u].duration = k[u].frames.length * g[u].baseDelay * g[u].baseDuration / d
				}
			}, setTimeout(this.info.bind(this, 'Use "setGameSpeed(speed)" to change the game speed at anytime.'), 2e3), window.setGameSpeed(2)
		}
		initImitationTitanMod() {
			let e = this.import(Prodigy.Util),
				t = this.import(Prodigy.Services),
				i = {
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
				return e.Util.isDefined(a) && a.call(this, i), i
			}, this.game.prodigy.network.getTitans = function(t, a) {
				return e.Util.isDefined(t) && t.call(this, i), i
			}, this.game.prodigy.network.hitTitan = function(a, o, r) {
				return e.Util.isDefined(o) && o.call(this, i), t.Logger.log("Titan hit!", t.LogLevel.Verbose), {
					id: 1314,
					userID: 1,
					hits: 1
				}
			}, this.game.prodigy.titansNetworkHandler.isTitanAlive = function() {
				return !0
			}, this.game.prodigy.titansNetworkHandler.titan = i;
			let a = this.import(Prodigy.WorldMap).WorldMap.prototype.gotTitanCallback,
				o = this.import(Prodigy.WorldMap).WorldMap.prototype.create;
			this.import(Prodigy.WorldMap).WorldMap.prototype.gotTitanCallback = function(e) {
				return t.Logger.log("Manually running the get titan callback.", t.LogLevel.Verbose), a.call(this, e)
			}, this.import(Prodigy.WorldMap).WorldMap.prototype.create = function() {
				let e = o.call(this);
				return this.gotTitanCallback(i), e
			}
		}
	}
	/*
		This function just loads all of the mods automatically.
		
		It's ran when the game boots up.
	*/
	window.checkForMods = function(e, t, i, a) {
		ModHooks = new ModHandler(e, i, a), ModHooks.log("Checking for mods...");
		for (i = 0, a = 0; a < ModHooks.available.length; a += 1)
			if (t.includes(ModHooks.available[a].id)) try {
				let e = ModHooks.available[a].patch;
				ModHooks[e].call(ModHooks), ModHooks.log('Mod "' + ModHooks.available[a].id + '" successfully applied!'), i++
			} catch (e) {
				ModHooks.error('Error occured while applying mod "' + ModHooks.available[a].id + '" to Prodigy!'), console.error(e)
			}
		i > 0 ? ModHooks.log("Applied (" + i + ") mods to the game") : ModHooks.log("No mods have been applied")
	}
})();
