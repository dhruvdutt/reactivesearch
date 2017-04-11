// Masonry
const $grid = $('.grid').packery({
  initLayout: false
})

$('.grid').imagesLoaded(() => {
  $grid.packery()
})

setInterval(() => $grid.packery(), 3000)

// Example code slide toggle
$('.js-show-example').on('click', e => {
  e.preventDefault()
  $(e.target).closest('[class*="card"]').find('code').slideToggle(200, () => {
    $grid.packery()
  })
})

// Slider
$('.slider').flickity({
  contain: true,
  wrapAround: true,
  groupCells: 1,
  pageDots: false
})

// @todo Swapper
