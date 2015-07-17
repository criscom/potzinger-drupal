(function ($) {
  $(document).ready(function() {
    $(".royalSlider").royalSlider({
      // imgWidth: 1200,
      // imgHeight: 400,
      autoScaleSlider: { 
        enabled: false
      },
      loop: {
        enabled: true
      },
      autoPlay: {
        enabled: true
      },
      imageScalePadding: 0,
      transitionType: 'fade',
      transitionSpeed: 1600
    });
  });
  
  jQuery(window).load(function() {
    jQuery(".pageloader").fadeOut(1000);
  });
  
})(jQuery);