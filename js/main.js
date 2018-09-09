$(document).ready(function(){
  //microinteraction landing headline
  $(".header-content").hide();
  $(".header-content").fadeIn(1000);
  //menu hamburger
  $(".icon-hamburguer-menu").on("click", function() {
    $(".navegation-link-content").slideToggle();
  });
  //scroll to top show
  $(document).scroll(function(){
    if ($(this).scrollTop() > 400) {
        $('.go-top').fadeIn();
    } else {
        $('.go-top').fadeOut();
    }
  });
  //scroll to top action
  $('.go-top').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 0 }, 'slow');
          return false;
      });
  });

  $('.icon-arrow-down').each(function(){
      $(this).click(function(){
          $('html,body').animate({ scrollTop: 800 }, 'slow');
          return false;
      });
  });

  //
  // $('.form-search').keyup(function(e){
  //     var query = $.trim($(this).prevAll('.search-query').val()).toLowerCase();
  //     $('div.staff-container .bold').each(function(){
  //          var $this = $(this);
  //          if($this.text().toLowerCase().indexOf(query) === -1)
  //              $this.closest('div.staff-container').fadeOut();
  //         else $this.closest('div.staff-container').fadeIn();
  //     });
  // });

});//wrapper end
