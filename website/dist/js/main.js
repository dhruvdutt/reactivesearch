'use strict';

// Masonry
var $grid = $('.grid').packery({
  initLayout: false
});

$('.grid').imagesLoaded(function () {
  $grid.packery();
});

setInterval(function () {
  return $grid.packery();
}, 3000);

// Example code slide toggle
$('.js-show-example').on('click', function (e) {
  e.preventDefault();
  $(e.target).closest('[class*="card"]').find('code').slideToggle(200, function () {
    $grid.packery();
  });
});

// Slider
$('.slider').flickity({
  contain: true,
  wrapAround: true,
  groupCells: 1,
  pageDots: false
});

// @todo Swapper