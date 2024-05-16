// init Isotope
var $grid = $('.collection-list').isotope({
  // options
});
// filter items on button click
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  resetFilterBtns();
  $(this).addClass('active-filter-btn');
  $grid.isotope({ filter: filterValue });
});

var filterBtns = $('.filter-button-group').find('button');
function resetFilterBtns(){
  filterBtns.each(function(){
    $(this).removeClass('active-filter-btn');
  });
}


$(document).ready(function() {
  $('#productsDropdownToggle').click(function() {
      $('.products-dropdown').toggleClass('show');
  });

  $(document).click(function(event) {
      if (!$(event.target).closest('.products-dropdown').length) {
          $('.products-dropdown').removeClass('show');
      }
  });
});
