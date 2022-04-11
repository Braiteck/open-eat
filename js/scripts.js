$(() => {
	// Ширина окна для ресайза
	WW = $(window).width()


	// Основной слайдер на главной
	if ($('.about .swiper').length) {
		new Swiper('.about .swiper', {
			loop: true,
			spaceBetween: 0,
			slidesPerView: 1,
			navigation: {
				nextEl: '.slider-button-next',
				prevEl: '.slider-button-prev'
			}
		})
	}


	// Моб. меню
	$('.mob_header .mob_menu_btn').click((e) => {
		e.preventDefault()

		$('body').addClass('menu_open')
		$('header').addClass('show')
		$('.overlay').fadeIn(300)
	})

	$('header > .close, .overlay').click((e) => {
		e.preventDefault()

		$('body').removeClass('menu_open')
		$('header').removeClass('show')
		$('.overlay').fadeOut(300)
	})


	if ($(window).width() < 1024 && $('footer .messengers').closest('.contact').length == 0) {
		let parent = $('footer .contact')

		$('footer .messengers').appendTo(parent)
	}
})



$(window).on('resize', () => {
	if (typeof WW !== 'undefined' && WW != $(window).width()) {
		// Моб. версия
		if (!firstResize) {
			$('meta[name=viewport]').attr('content', 'width=device-width, initial-scale=1, maximum-scale=1')
			if ($(window).width() < 360) $('meta[name=viewport]').attr('content', 'width=360, user-scalable=no')

			firstResize = true
		} else {
			firstResize = false
		}


		// Перезапись ширины окна
		WW = $(window).width()
	}

	if ($(window).width() > 1023 && $('footer .messengers').closest('.bot').length == 0) {
		let parent = $('footer .bot .cont')

		$('footer .messengers').appendTo(parent)
	}

	if ($(window).width() < 1024 && $('footer .messengers').closest('.contact').length == 0) {
		let parent = $('footer .contact')

		$('footer .messengers').appendTo(parent)
	}
})