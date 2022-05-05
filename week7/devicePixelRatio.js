window.addEventListener ("touchmove", function (event) { event.preventDefault (); }, { capture: false, passive: false });
		if (typeof window.devicePixelRatio != 'undefined' && window.devicePixelRatio > 2) {
			var meta = document.getElementById ("viewport");
			meta.setAttribute ('content', 'width=device-width, initial-scale=' + (2 / window.devicePixelRatio) + ', user-scalable=no');
		}