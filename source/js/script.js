$(document).ready(function() {
  $('.header__toggle').click(function() {
    if (window.matchMedia("(max-width: 1200px)").matches) {
      $('.header__toggle, .header__navigation, .header, .page-body').toggleClass('active');
    }
  });

var mql = window.matchMedia("(max-width: 1200px)");
mql.addEventListener('change', function(e) {
if (!e.matches) { // If media query matches
  $('.header__toggle, .header__navigation, .header, .page-body').removeClass('active');
}

}); 


$('.contact-hide, .close').hide();
  
$('.button-hide, .read').on('click', function() {
	$('.contact-hide, .close').hide();
	$('.button-hide, .read').removeClass('visually-hidden');
	$(this).next('.contact-hide, .close').show(); 
	$(this).on('.button-hide, .read').addClass('visually-hidden');
});

$('.scrollto').click(function () {
  elementClick = jQuery(this).attr("href")
  destination = jQuery(elementClick).offset().top - 200;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 50);
  return false;
  });

  //galery

  $(document).ready(function() {
	$('.popup-gallery').magnificPopup({
		delegate: 'a',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
			titleSrc: function(item) {
				return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
			}
		}
	});
});

$('.navigation__list a').on('click', function() {
	var $this = $(this),
		$bc = $('<div class="breadcrumb__item"></div>');
  
	$this.parents('li').each(function(n, li) {
		var $a = $(li).children('a').clone();
		$bc.prepend(' ✄ ', $a);
	});
	  $('.breadcrumb').html( $bc.prepend('<a href="#home">Главная</a>') );
	  return false;
  }) 

});
