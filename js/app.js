
// Open Mobile Nav

var mobileTrigger = $('.mobile-menu');

function openMobileNav() {
	$(this).prev().addClass('nav-open');
	$(this).next().fadeIn('fast');
	$('body').addClass('no-scroll');
}

mobileTrigger.on('click', openMobileNav);





// Dismiss Mobile Nav

var underLay = $('.underlay');

function dismissMobileNav() {

	$(this).prev().prev().removeClass('nav-open');
	$(this).fadeOut('fast');
	$('body').removeClass('no-scroll');

}

underLay.on('click', dismissMobileNav);