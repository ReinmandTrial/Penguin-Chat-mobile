$('.switch-content__item').on('click', function () {
   var item = $(this).closest('.switch-content').find('.switch-content__item');
   $(item).each(function () {
      $(this).removeClass('active');
   })
   $(this).addClass('active');
})
$('.primary-switcher__item').on('click', function () {
   var item = $(this).closest('.primary-switcher').find('.primary-switcher__item');
   $(item).each(function () {
      $(this).removeClass('active');
   })
   $(this).addClass('active');
})

//popup
//popup нажатие вне body
$(document).on('click', function (e) {
   if (!$(e.target).closest(".delete-dialog").length) {
      $('.popup').fadeOut();
   }
   e.stopPropagation();
});
//popup нажатие вне body end

$('.btn-popup').on('click', function () {
   var btn = $(this);
   ; ($('.main').find('.popup')).each(function () {
      $(this).fadeOut();
   })

})
$('.popup__close').on('click', function () {
   $(this).closest('.popup').fadeOut();
})
//popup end