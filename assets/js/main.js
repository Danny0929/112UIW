/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/
var triggerElements = document.querySelectorAll(".eldentrigger");

  window.addEventListener("scroll", function() {
    triggerElements.forEach(function(trigger) {
      var triggerPosition = trigger.getBoundingClientRect().top;
      var windowHeight = window.innerHeight;

      if (triggerPosition < windowHeight) {
        trigger.classList.add("fade-in");
        trigger.classList.remove("fade-out");
      } else {
        trigger.classList.remove("fade-in");
        trigger.classList.add("fade-out");
      }
    });
  });
function scrollToTop() {
    // 獲取頁面的最上方位置
    const scrollToTop = document.documentElement.scrollTop || document.body.scrollTop;

    // 設置滾動的目標位置
    const targetPosition = 0;

    // 計算滾動的距離
    const distance = targetPosition - scrollToTop;

    // 設定滾動的速度，可以調整動畫的流暢度
    const speed = 10; // 每 10 毫秒滾動 1 像素

    // 計算需要的時間
    const duration = Math.abs(distance / speed);

    // 執行滾動動畫
    let startTime = null;
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const elapsedTime = currentTime - startTime;
        const scrollAmount = easeInOutQuad(elapsedTime, scrollToTop, distance, duration);
        window.scrollTo(0, scrollAmount);
        if (elapsedTime < duration) {
            requestAnimationFrame(animation);
        }
    }

    // Easing 函數，可根據需要自行更改
    function easeInOutQuad(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    // 啟動滾動動畫
    requestAnimationFrame(animation);
}
(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						$('#nav').navList() +
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});

})(jQuery);