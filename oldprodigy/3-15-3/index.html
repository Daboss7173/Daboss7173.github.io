<!DOCTYPE html>
<html>

<head>
    <title>Prodigy 3.15.3</title>
    <meta charset="UTF-8" />
    <meta name="description" content="The legendary math game Prodigy is now legendary again, and no longer a math game!"/>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <link rel="icon" type="image/png" href="https://daboss7173.github.io/oldprodigy/assets/favicon.png">
    <link rel="stylesheet" href="https://code.prodigygame.com/assets/Font-Awesome/css/font-awesome-bb53ad7bff.min.css">
    <link rel="stylesheet" type="text/css" href="https://code.prodigygame.com/assets/styles/main-8920cc59bb.css">
    <link href='https://fonts.googleapis.com/css?family=Lato:400,700,900,400italic' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,300,400,500,600,700' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Fredoka+One|Luckiest+Guy|Paytone+One|ABeeZee' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Roboto:400,700,400italic' rel='stylesheet' type='text/css'>
    <style>
        html {
            height: 100%;
            overflow: hidden;
        }
        
        body {
            margin: 0;
            background-color: #55B9A7;
            height: 100%;
            padding: 0 !important;
        }
        
        #game-container {
            height: 100%;
        }
        
        #game-wrapper {
            height: 100%;
        }
        
        input.game-input {
            margin: 0;
            position: absolute;
            top: 0;
            left: 0;
            padding: 0px 10px;
            border-radius: 10px;
            border: 1px solid #363636;
            background-color: #fff5eb;
            color: #363636;
            text-align: left;
        }
        
        .head-bar {
            height: 45px;
            width: 100%;
            position: fixed;
        }
        
        .head-content {
            width: 100%;
            position: relative;
            height: 100%;
        }
        
        .full-nav-button {
            border: 1px solid #596ED9;
            border-top: none;
            font-weight: bold;
            color: #f89825;
            margin-top: 0;
            font-size: 1.3em;
            padding: 10px 10px;
            height: 100%;
            width: 100%;
            background-color: #6579DC;
            color: white;
        }
        
        .full-nav-button:hover {
            background: none;
            background-color: #596ED9;
            border: none;
            color: #f2f2f2;
            box-shadow: none;
        }
        
        .announcement {
            margin-bottom: 0;
            position: absolute;
            width: 100%;
        }
        
        .announcement-close {
            position: absolute;
            right: 20px;
            top: 10px;
            color: #a94442;
        }
        
        .announcement-close:hover {
            color: #c94442;
            cursor: pointer;
        }
        
        .announcement .alert {
            padding-right: 50px;
        }
        
        iframe {
            display: none;
        }
        
        #membership-flow {
            display: none;
            position: static;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: white;
        }
        
        .iframe-ios-fix {
            /*iOS fix for scrolling issues with iframe*/
            -webkit-overflow-scrolling: touch;
            overflow-y: scroll;
        }
        
        #membership-flow iframe {
            display: block;
            height: 100%;
            width: 100%;
            border: none;
        }
        
        .gone {
            display: none;
        }
        
        #first-loading-screen {
            height: 100%;
            width: 100%;
            background-color: #55B9A7;
        }
        
        .alert {
            margin-top: 0;
            border-radius: 0;
            text-align: center;
        }
        
        .alert-warning {
            background-color: #FCF8E3;
            color: #8A6D3B;
        }
    </style>
</head>
<script id="advanced-modal-base-template" type="text/x-handlebars-template">

    <div class="modal--advanced__container">
        <div class="modal--advanced__controls"></div>
        <div class="modal--advanced__content"></div>
        <div class="modal--advanced__spinner"></div>
    </div>

</script>

<script id="modal-base-template" type="text/x-handlebars-template">
    <div class="slide-modal-heading"></div>
    <div class="modal-container">
        <div class="modal-btn-container"></div>
    </div>
</script>
<script id="login-modal-template" type="text/x-handlebars-template">
    <div class="modal--advanced__heading">Login To Prodigy</div>
    <form id="login-form">
        <div class="modal-section text-left">
            <label id="login-form-label--error" class="label--error gone"></label>
            <label id="login-username-label" for="login-username">Email</label>
            <label id="login-username-label--error" for="login-username" class="label--error gone"></label>
            <input id="login-username" type="text">

            <label id="login-password-label" for="login-password">Password</label>
            <label id="login-password-label--error" for="login-password" class="label--error gone"></label>
            <input id="login-password" type="password">
        </div>

        <div class="modal-section">
            <button class="btn btn--md btn--block btn--primary">Login</button>
        </div>
    </form>

    <p class="text-left modal-section"><a class="js-forgot-pass login-modal__forgot-pass">I forgot my password</a></p>
</script>

<script id="forgot-password-modal-template" type="text/x-handlebars-template">
    <div class="modal--advanced__heading">Reset Password</div>

    <p class="js-hide-on-form-error text-left">Enter your email address and we’ll send you instructions to reset your password.</p>

    <form id="reset-pass-form">
        <div class="modal-section text-left">
            <label id="reset-pass-form-label--error" class="label--error gone"></label>
            <label id="reset-pass-email-label" for="reset-pass-email">Email</label>
            <input id="reset-pass-email" type="text">
            <label id="reset-pass-email-label--error" for="reset-pass-email" class="label--error gone"></label>
        </div>

        <div class="modal-section">
            <button class="btn btn--md btn--block btn--primary">Submit Email</button>
        </div>
    </form>
</script>

<script id="forgot-password-success-modal-template" type="text/x-handlebars-template">
    <div class="modal--advanced__heading">Success!</div>

    <div class="modal-section text-left">
        <p>Instructions to reset your password have been emailed to you. Please check your email.</p>
    </div>

    <div class="modal-section">
        <button class="js-back-btn btn btn--md btn--block btn--primary">Ok</button>
    </div>
</script>
<script id="class-code-username-template" type="text/x-handlebars-template">
    <div class="modal-section-container">
        <div class="modal--advanced__heading">Get Your Class Code</div>
        <div class="modal-section">
            <form id="class-code-username-form" type="submit">
                <label id="class-code-username__label" for="class-code-username" class="text-left">Teacher Email</label>
                <label id="class-code-username__label--error" for="class-code-username" class="label--error gone"></label>
                <input id="class-code-username" type="text" value="{{username}}">
                <button id="class-code-username-submit" class="btn btn-md btn-primary">Continue</button>
            </form>
        </div>
    </div>
</script>

<script id="class-code-login-template" type="text/x-handlebars-template">
    <div class="modal-section-container">
        <div class="modal--advanced__heading">Verify your identity</div>
        <div class="modal-section">
            <form id="class-code-login-form" type="submit">
                <label id="class-code-login-password-label" for="class-code-login-password" class="text-left">Password for {{username}}</label>
                <label id="class-code-login-password-label--error" for="class-code-login-password" class="label--error gone"></label>
                <input id="class-code-login-password" type="password">
                <button id="class-code-login-submit" class="btn btn-md btn-primary">Get Your Class Code</button>
            </form>
        </div>
    </div>
    <!--<div class="modal-section--sub seam-top">
		<a>Forgot your password? Click here</a>
	</div>-->
</script>

<script id="class-code-register-template" type="text/x-handlebars-template">
    <div class="modal-section-container">
        <div class="modal--advanced__heading">Complete your Registration</div>
        <div class="modal-section">
            <form id="class-code-register-form" type="submit">
                <label for="class-code-register-name" class="text-left">Full Name</label>
                <input id="class-code-register-name" type="text">
                <label for="class-code-register-password" class="text-left">Password</label>
                <input id="class-code-register-password" type="password">
                <input id="class-code-register-email-consent" type="checkbox" name="emailConsent" value="true">
                <label for="class-code-register-email-consent" class="label--inline text-left">I consent to receive Prodigy emails and updates</label>
                <button id="class-code-register-submit" class="btn btn-md btn-primary" type="submit">Get Your Class Code</button>
                <p class='text-light small'>By registering you agree to our <a class='text-light' target="_blank" href="https://web.archive.org/web/20150910093225im_/https://www.prodigygame.com/terms-conditions">Terms</a> and <a class='text-light' target="_blank" href="https://web.archive.org/web/20150910093225im_/https://www.prodigygame.com/privacy-policy">Privacy Policy</a></p>
            </form>
        </div>
    </div>
</script>

<script id="class-code-display-template" type="text/x-handlebars-template">
    <div class="modal-section-container">
        <div class="modal--advanced__heading">{{classCode}}</div>
        <div class="modal-section">
            <div id="class-code-display-form">
                <p>This is your class code. Enter this value for each of your students to add them to your class list.</p>
                {{#if newAccount}}
                <p>We have also emailed you this information, along with a link to complete your teacher account setup.</p>
                {{/if}}
                <button id="class-code-display-close" class="btn btn-md btn-primary">Close</button>
            </div>
        </div>
    </div>
</script>

<body>

    <div id='modals'>
        <div id='overlay-mask' class='overlay-mask' style='display:none;'></div>
    </div>
    <div id='first-loading-screen'></div>

    <div id="game-wrapper">
        <div id='game-container'>

        </div>

        <div id='external-content'>

        </div>

        <div id='external-ui'>

        </div>

        <div id='notices'>
        </div>

        <div id='popups'>
            <div id='dynamic-popups'></div>
        </div>
    </div>

    <div id="membership-flow"></div>
    <script src="./js/lodash.min.js"></script>
    <script src="https://code.prodigygame.com/lib/phaser-e28c61a564.min.js"></script>
    <script src="./js/easystar-0.2.0.min.js"></script>
    <script src="./js/socket.io-1.3.5.js"></script>
    <script src="https://checkout.stripe.com/checkout.js"></script>
    <script src="https://code.prodigygame.com/lib/phasercomponents-d75e07cce7.min.js"></script>
    <script src="https://code.prodigygame.com/lib/crypto-core-1b15c3f6cc.min.js?v=1"></script>
    <script src="https://code.prodigygame.com/lib/crypto-libs-306070295f.min.js?v=1"></script>
    <script src="https://code.prodigygame.com/lib/lz-string.min.js"></script>
    <script src="https://code.prodigygame.com/lib/stripe-checkout-wrapper.min.js"></script>
    <script src="https://code.prodigygame.com/lib/inversify-2c041508d4.min.js"></script>
    <script src="https://code.prodigygame.com/lib/webfont-9ea87c57dc.min.js"></script>
    <script src="https://code.prodigygame.com/lib/async-f6dfa1eb49.min.js?v=1"></script>
	<script>
		window.QI = {};
		window.SW = {};
		SW.LoadIdentity = {
			userInfo: function() {
				return "{\"sid\": 1}"
			}
		};
		window.userInfo = {
			sid: 1
		};
		window.updateGameLoaderProgress = function(percent, message) {
			console.log(message);
			console.log(percent);
		};
		window.hideGameLoader = function() {
			try {
				$("#first-loading-screen").remove()
			} catch(e) {}
		};
		QI.getMasteredSkills = function() {
			return 0;
		};
		QI.getAllTopicBadges = function() {
			return [];
		};
		QI.trigger = function() {};
		QI.getAvailableLessonReport = function() {
			return null;
		};
		QI.createVideoLessonForSkillWithOptions = function() {
			return null;
		};
		QI.enableLogging = function() {};
		QI.disableLogging = function() {};
		QI.showProgress = function() {};
		QI.bannerComplete = function() {};
		QI.getCurrentAlgorithm = function() {
			return {};
		};
		QI.doesSkillIDHaveLesson = function() {
			return false;
		}
		QI.EducationSystemAPI = {};
		WebFont.load({
			google: {
				families: ["Fredoka One", "Luckiest Guy", "Paytone One", "ABeeZee", "Roboto"]
			}
		})
	</script>
    <script src="./js/game.min.js"></script>
    <script type="text/javascript">
        var prodigyWeb = {};
        prodigyWeb.country = undefined;
        prodigyWeb.gameVersion = '3-15-3';

        window.onload = function() {
            document.addEventListener("contextmenu", function(e) {
                e.preventDefault();
            }, false);
            Boot.init();
        };

        window.onresize = function() {
            scroll(0, 0);
        };
    </script>

    <script>
        $('.announcement-close').click(function() {
            $('#service-announcement').remove();
        });
        var ua = navigator.userAgent,
            isiOS = /iPad/i.test(ua) || /iPhone/i.test(ua);

        prodigyWeb.membershipFlow = {
            $el: $("#membership-flow"),
            $game: $("#game-wrapper"),
            student: {
                name: undefined,
                userID: undefined
            },
            closeCallback: undefined,
            open: function(username, userID, callback, tag) {
                this.student.name = username;
                this.student.userID = userID;
                this.closeCallback = callback;
                var flowURL = window.location.origin + "/membership/index.php?tag=" + tag,
                    $iframeFlow = $("<iframe src='" + flowURL + "'>");

                this.$el.show()
                    .append($iframeFlow);
                this.$game.hide();
            },

            close: function(success) {
                this.$el.hide().html("");
                this.$game.show();
                if (!_.isUndefined(this.closeCallback)) {
                    this.closeCallback(success);
                }
            }
        };

        if (isiOS) {
            prodigyWeb.membershipFlow.$el.addClass("iframe-ios-fix");
        }

        prodigyWeb.getClassCode = {
            open: function(callback) {
                var classCodeModal = new SW.GetClassCodeModalView({
                    model: new SW.GetClassCodeModal()
                });
                classCodeModal.callback = callback;
                classCodeModal.render();
            }
        };
    </script>

</body>

</html>
