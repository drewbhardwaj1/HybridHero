jQuery(document).ready(function($){


    $('#srbt').click(function(){
      $('.search-box').addClass('active');
    });
    
    $('.closex').click(function(){
      $('.search-box').removeClass('active');
    });
    
    // om-js-start
    $('#fws_lm_btn').click(function(){
     $('.flexiiconfle').toggleClass('less-height');
     $(this).hide();
    });
    
    // drop down js start
    $('.menu-i').click(function(){   
        $(this).addClass('deactive');
        $('.menu-x').removeClass('deactive');
        $('.row.desk').addClass('active');
    });
    
    $('.menu-x').click(function(){
      $(this).addClass('deactive');
      $('.menu-i').removeClass('deactive');
      $('.row.desk').removeClass('active');
    });
    
    $('.mainnav  li.drop').click(function() {   
      if ($(this).hasClass("active")) {
        $(this).removeClass("active").find(".navdes").slideUp();
      } else {
        $(".mainnav  li.drop.active .navdes").slideUp();
        $(".mainnav  li.drop.active").removeClass("active");
        $(this).addClass("active").find(".navdes").slideDown();
      }
      return false;
    });
    
    $(".mainnav li.drop a").click(function(e){
      //stuff
      e.stopPropagation();
    });
    
    
     // document-ready-end
    
    
    // Show the first tab and hide the rest
    // jQuery('#tabs-nav li:first-child').addClass('active');
    jQuery('.tab-content').hide();
    jQuery('.tab-content:first').show();
    
    // Click function
    jQuery('#tabs-nav li').click(function(){
      jQuery('#tabs-nav li').removeClass('active');
     jQuery(this).addClass('active');
      jQuery('.tab-content').hide();
      
      var activeTab = jQuery(this).find('a').attr('href');
      jQuery(activeTab).fadeIn();
      return false;
    });
    
    
    
    $('.bl-owl').owlCarousel({ 
      loop:true,
      margin:10, 
      nav:false, 
      dots:true, 
      autoplay:false, 
      autoplayTimeout:3000,
      autoplayHoverPause:true, 
      responsive:{
         0:{ 
          items:2
        }, 
        600:{
          items:4
        }, 
        1000:{
          items:6 
        },
      } 
    });
    $('.hmtab-owl').owlCarousel({ 
        loop:true,
        margin:10, 
        nav:true, 
        dots:false, 
        autoplay:false, 
        navText:['<i class="fa-solid fa-angle-left"></i>','<i class="fa-solid fa-angle-right"></i>'],
        autoplayTimeout:3000,
        autoplayHoverPause:true,

        responsive:{
           0:{ 
            items:1
          },
        } 
      });

    $(".tabContent").hide(); 
    $("ul.tabs li:nth-child(2)").addClass("active").show(); 
    $("#tab2").show(); 
   
    $("ul.tabs li").click(function () {
      $("ul.tabs li").removeClass("active"); 
      $(this).addClass("active"); 
      $(".tabContent").hide(); 
      var activeTab = $(this).find("a").attr("href"); 
      $(activeTab).fadeIn(); 
      return false;
    });
    

    // nakul

    // prev next

    $("#nextBtn").click(function () {
      var $currentTab = $("ul.tabs li.active");
      var $nextTab = $currentTab.next();
  
      if ($nextTab.length === 0) {
        // If there's no next tab, wrap around to the first tab
        $nextTab = $("ul.tabs li:first");
      }
  
      $currentTab.removeClass("active");
      $nextTab.addClass("active");
  
      $(".tabContent").hide();
      var activeTab = $nextTab.find("a").attr("href");
      $(activeTab).fadeIn();
    });
  
    $("#prevBtn").click(function () {
      var $currentTab = $("ul.tabs li.active");
      var $prevTab = $currentTab.prev();
  
      if ($prevTab.length === 0) {
        // If there's no previous tab, wrap around to the last tab
        $prevTab = $("ul.tabs li:last");
      }
  
      $currentTab.removeClass("active");
      $prevTab.addClass("active");
  
      $(".tabContent").hide();
      var activeTab = $prevTab.find("a").attr("href");
      $(activeTab).fadeIn();
    });
}); 
