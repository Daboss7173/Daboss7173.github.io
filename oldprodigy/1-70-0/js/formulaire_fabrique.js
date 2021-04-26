jQuery(function($){

	function formulaire_fabrique_interactions($is_ajax) {
		/* Cette variable permet de savoir si on est en ajax, et si du coup il nous faudra repositionner
		   le navigateur. On dit que la variable est a true par defaut
		   (plus pratique pour l'appel de onAjaxLoad)
		*/
		if (typeof $is_ajax == 'undefined') {
			$is_ajax = true;
		}

		/* Faire remonter les erreurs sur l'accordion et l'onglet */
		$(".formulaire_fabriquer_plugin .sous_parties div.erreur").parent().parent()
			.prev('h4').addClass('erreur')
			.closest('.sous_parties').prev('h3').addClass('erreur')
			.closest('.parties').parent().parent().each(function(){
				id = $(this).attr('id');
				$('#tabs .tabs a[href="#' + id + '"]').parent().addClass('erreur');
			});
		$(".formulaire_fabriquer_plugin .parties div.erreur").parent().parent()
			.prev('h3').addClass('erreur')
			.parent().parent().each(function(){
				id = $(this).attr('id');
				$('#tabs .tabs a[href="#' + id + '"]').parent().addClass('erreur');
			});

		/* Deplier ou replier le diff */
		$(".formulaire_fabriquer_plugin .reponse_formulaire_diff").find('>div.diff').hide();
		/* TODO: la class .clicable est temporaire (bug spip qui double onAjaxLoad en 3.1-dev ?) */
		$(".formulaire_fabriquer_plugin .reponse_formulaire_diff h4:not(.clicable)")
			.addClass('clicable').on("click", function(){
				$(this).parent().find('>div.diff').toggle();
		});

		/*
			Installer les onglets et accordions

			ACCORDION avant TABS sinon la largeur de
			l'accordion actif (autre que le premier)
			est mal calcule sur un onglet caché

			Pour les accordions & tabs, on sauve
			le dernier ouvert, et on ouvre ceux la
			au chargement de la page
		*/
		if ($.fn.accordion) {
			$("#tabs > div > .parties").accordion({
				collapsible: true,
				heightStyle: "content",
				create: function(event, ui) {
					tab_id = $(this).attr('id').substring(7);
					i = Number($("#open_accordion_" + tab_id).val())
					$(this).accordion("option", "active", i);

				},
				activate: function(event, ui) {
					tab_id = $(this).attr('id').substring(7);
					$('#open_accordion_' + tab_id).val( $(this).accordion('option', 'active') );
				}
			});

			$("#tabs > div > .parties .parties").accordion({
				collapsible: true,
				heightStyle: "content",
				active: false,
				header: '> div > h4'
			})
			.sortable({
				axis: "y",
				handle: "h4",
				stop: function( event, ui ) {
					// IE doesn't register the blur when sorting
					// so trigger focusout handlers to remove .ui-state-focus
					ui.item.children( "h4" ).triggerHandler( "focusout" );
				},
				update: function(event, ui) {
					tab = ui.item.parent().data('tab');
					var champOrder = $(this).sortable('toArray').toString();
					form = $(this).closest('form');
					form.find('div:first')
						.prepend('<input type="hidden" name="f_action[champorder][' + tab + ']" value="'+ champOrder + '">');
					form.submit();
				}
			});
		}

		if ($.fn.tabs) {
			$("#tabs").tabs({
					active: $('#open_tab').val(),
					beforeActivate: function(event, ui) {
						$('#open_tab').val(ui.newTab.index());
					},
					create: function(event, ui) {
						/* Se remettre en haut du formulaire après un coup d'ajax
						   Ce que fait SPIP habituellement, mais accordion() et tabs()
						   arrivent après et les navigateurs se décalent
						*/
						if ($is_ajax) {
							$('.formulaire_fabriquer_plugin').positionner(false);
						}
					}
				})
				.find( ".ui-tabs-nav" ).sortable({
					axis: "x",
					update: function(event, ui) {
						var tabOrder = $(this).sortable('toArray').toString();
						form = $(this).closest('form');
						form.find('div:first')
							.prepend('<input type="hidden" name="f_action[taborder]" value="' + tabOrder + '">');
						form.submit();
					}
				});
		}


		<BOUCLE_skeleditor(CONDITION){si #PLUGIN{skeleditor}}>
		/* un peu de coloration syntaxique */
		$(".colorier textarea").focus(function() {
			if (!$(this).data('coloriage')) {
				code = $(this).closest('div.editer-groupe').data('code');
				fabrique_coloriage(this, code);
				$(this).data('coloriage', 1);
			}
		});

		function fabrique_coloriage(textarea, code) {
			$.getScript("#CHEMIN{codemirror/lib/codemirror.js}", function(){
			$.getScript("#CHEMIN{codemirror/mode/xml/xml.js}", function(){
			$.getScript("#CHEMIN{codemirror/mode/xml/xml.js}", function(){
			$.getScript("#CHEMIN{codemirror/mode/javascript/javascript.js}", function(){
			$.getScript("#CHEMIN{codemirror/mode/css/css.js}", function(){
			$.getScript("#CHEMIN{codemirror/mode/clike/clike.js}", function(){
			$.getScript("#CHEMIN{codemirror/mode/php/php.js}", function(){
					var cm_options = {
						lineNumbers: true,
						matchBrackets: true,
						indentUnit: 4,
						tabSize: 4,
						indentWithTabs: true,
						enterMode: "keep",
						tabMode: "shift",
						width: "95%",
						minHeight: 60
					};

					if (code.length) {
						cm_options.mode = code;
						/* Ouvrir automatiquement les scripts PHP */
						if (code == 'php') {
							cm_options.mode = 'text/x-php';
						}
					}
					CodeMirror.fromTextArea(textarea, cm_options);
			})})})})})})});
		}
		</BOUCLE_skeleditor>

	}

	formulaire_fabrique_interactions(false); /* ici, on n'est pas ajax */
	onAjaxLoad(formulaire_fabrique_interactions);

});
