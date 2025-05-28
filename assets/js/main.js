(function($){

    var heroSlider = new Swiper(".ip_hero_slider", {
        effect: "cards",
        grabCursor: true,
        initialSlide: 1,
      });
    var seriesSlider = new Swiper(".ip_series_slider.slider_ltr", {
        slidesPerView: "auto",
        spaceBetween: 24,
        speed : 3000,
        loop : true,
        autoplay:{
          delay: 0,
          enabled : true
        }
      });
    var slider = new Swiper(".ip_series_slider.slider_rtl", {
        slidesPerView: "auto",
        spaceBetween: 24,
        speed : 3000,
        loop : true,
        autoplay:{
          delay: 0,
          enabled : true
        }
      });
    var brandsSlider = new Swiper(".ip_brands_slider", {
        slidesPerView: "auto",
        spaceBetween: 32,
        speed : 3000,
        loop : true,
        autoplay:{
          delay: 0,
          enabled : true
        }
      });
    

})(jQuery);


