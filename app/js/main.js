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
   if (!$(e.target).closest(".delete-dialog").length && !$(e.target).closest(".btn-popup").length) {
      $('.popup').fadeOut('fast');
   }
   e.stopPropagation();
});
//popup нажатие вне body end

$('.btn-popup').on('click', function () {
   $('.main').find('.popup').fadeIn('fast');

})
$('.popup__close').on('click', function () {
   $(this).closest('.popup').fadeOut('fast');
})
//popup end

//delete chat 
   $('.delete-dialog__btn-delete').on('click', function(){
      $('.delete-success').addClass('open');
   })
   $('.delete-success__close').on('click',function(){
      $(this).closest('.delete-success').removeClass('open');
   })
//delete chat end 

const buttonItems = document.querySelectorAll('.dialog');

for (let buttonItem of buttonItems) {
   buttonItem.addEventListener('touchstart', handleTouchStart, false);
   buttonItem.addEventListener('touchmove', handleTouchMove, false);
}

var xDown = null;
var yDown = null;

function getTouches(evt) {
   return evt.touches || // чистый API JS
      evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
   const firstTouch = getTouches(evt)[0];
   xDown = firstTouch.clientX;
   yDown = firstTouch.clientY;
};

function handleTouchMove(evt) {
   if (!xDown || !yDown) {
      return;
   }

   var xUp = evt.touches[0].clientX;
   var yUp = evt.touches[0].clientY;

   var xDiff = xDown - xUp;
   var yDiff = yDown - yUp;
   console.log(yDiff)
   if (xDown < xUp && Math.abs(xDiff) > 2 && Math.abs(yDiff) <= 2) {
      $(this).removeClass('open')
   } else if (xDown > xUp && Math.abs(xDiff) > 2 && Math.abs(yDiff) <= 2) {
      $(this).addClass('open')
   }
   /* свайп был, обнуляем координаты */
   xDown = null;
};