$('.slide').slick({slidesToShow:3,slidesToScroll:1,variableWidth:true,arrows:false,dots:true,
    responsive:[{breakpoint:1540,settings:{slidesToShow:2,infinite:true}},
    {breakpoint:1202,settings:{slidesToShow:1,}},
    {breakpoint:1025,settings:{slidesToShow:2,dots:true}},
    {breakpoint:840,settings:{slidesToShow:2,dots:true}},
    {breakpoint:640,settings:{slidesToShow:1,dots:true}}]})

    $('.slick-slider').on('wheel',(function(e){
        e.preventDefault();
        if(e.originalEvent.deltaX<0){
            $(this).slick('slickPrev');
        }
        else{
            $(this).slick('slickNext');
        }
    }));

    
    // let menuToggle = document.querySelector('.toggle');
    // let navigation = document.querySelector('.flex');
    // let html = document.querySelector('body');
    // menuToggle.onclick = function(){
    //     menuToggle.classList.toggle('active');
    //     navigation.classList.toggle('active');
    //     html.classList.toggle('overflow')
    // }
