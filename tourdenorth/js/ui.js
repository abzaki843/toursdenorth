$(document).ready(function () {
  
    $('.tabs').tabs(); 
    
   
    $('#toggle1').click(function () {
        console.log('toggle clicked')
        $('#hero1').removeClass("hero1").addClass("hide"); //Adds 'hide', removes 'hero1' and vice versa
        $('#hero2').removeClass("hide").addClass("hero2");
        $('.carousel').carousel({
            fullWidth: true
    
        });
        autoplay();
    
        function autoplay() {
            $('.carousel').carousel('next');
            setTimeout(autoplay, 10000);
        }
    });


    $('#toggle2').click(function () {
        console.log('toggle clicked2')
        $('#hero2').removeClass("hero2").addClass("hide"); //Adds 'a', removes 'b' and vice versa
        $('#hero1').removeClass("hide").addClass("hero1");
    });
    $('#toggle3').click(function () {
        console.log('toggle clicked')
        $('#hero1').removeClass("hero1").addClass("hide"); //Adds 'hide', removes 'hero1' and vice versa
        $('#hero2').removeClass("hide").addClass("hero2");
    });

    $('#toggle4').click(function () {
        console.log('toggle clicked2')
        $('#hero2').removeClass("hero2").addClass("hide"); //Adds 'a', removes 'b' and vice versa
        $('#hero1').removeClass("hide").addClass("hero1");
    });
    $('.materialboxed').materialbox();
    $('.scrollspy').scrollSpy();
    $('.sidenav').sidenav();
    $('.tooltipped').tooltip();
    $('.pushpin').pushpin();
    $('.carousel.carousel-slider').carousel({
        fullWidth: true,
        indicators: true,

    });
    autoplay()

    function autoplay() {
        $('.carousel.carousel-slider').carousel('next');
        setTimeout(autoplay, 10000);
    }

   

});

    $('.carousel').carousel({
        fullWidth: true

    });
    autoplay();

    function autoplay() {
        $('.carousel').carousel('next');
        setTimeout(autoplay, 10000);
    }

    $('.explore-activities').waypoint(function(direction){
        console.log("hello")
        $('.explore-activities').addClass('animated animate__animated animate__fadeInDownBig')
    },{
        offset:'50%'
    });
    $('.gallery-animate').waypoint(function(direction){
        console.log("hello")
        $('.gallery-animate').addClass('animated animate__animated animate__fadeInLeftBig')
    },{
        offset:'50%'
    });
    $('.slider-animate').waypoint(function(direction){
        console.log("hello")
        $('.slider-animate').addClass('animated animate__animated animate__fadeInDownBig')
    },{
        offset:'50%'
    });
    $('.slider-gallery').waypoint(function(direction){
        console.log("hello")
        $('.slider-gallery').addClass('animated animate__animated animate__fadeInUpBig')
    },{
        offset:'50%'
    });
    $('.card-animate').waypoint(function(direction){
        console.log("hello")
        $('.card-animate').addClass('animated animate__animated animate__fadeInRightBig')
    },{
        offset:'50%'
    });
    $('.activity-animate').waypoint(function(direction){
        console.log("hello")
        $('.activity-animate').addClass('animated animate__animated animate__fadeInLeftBig')
    },{
        offset:'50%'
    });
    $('.card1-animate').waypoint(function(direction){
        console.log("hello")
        $('.card1-animate').addClass('animated animate__animated animate__fadeInRightBig')
    },{
        offset:'50%'
    });
    $('.activity1-animate').waypoint(function(direction){
        console.log("hello")
        $('.activity1-animate').addClass('animated animate__animated animate__fadeInLeftBig')
    },{
        offset:'50%'
    });
    $('.package-animate').waypoint(function(direction){
        console.log("hello")
        $('.package-animate').addClass('animated animate__animated animate__fadeInLeftBig')
    },{
        offset:'50%'
    });
    $('.package-slider-animate').waypoint(function(direction){
        console.log("hello")
        $('.package-slider-animate').addClass('animated animate__animated animate__fadeInRightBig')
    },{
        offset:'50%'
    });
    $('.about-animate').waypoint(function(direction){
        console.log("hello")
        $('.about-animate').addClass('animated animate__animated animate__fadeInLeftBig')
    },{
        offset:'50px'
    });
    $('.about-img-animate').waypoint(function(direction){
        console.log("hello")
        $('.about-img-animate').addClass('animated animate__animated animate__fadeInRightBig')
    },{
        offset:'10px'
    });
    $('.package1-animate').waypoint(function(direction){
        console.log("hello")
        $('.package1-animate').addClass('animated animate__animated animate__fadeInUpBig')
    },{
        offset:'50%'
    });
    $('.path-animate').waypoint(function(direction){
        console.log("hello")
        $('.path-animate').addClass('animated animate__animated animate__fadeInLeftBig')
    },{
        offset:'50%'
    });
    
  