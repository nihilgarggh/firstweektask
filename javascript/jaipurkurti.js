$('.owl-demo').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    items:1,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    navText: [$('.sm-prev'),$('.sm-next')],
    dots:false,
});
$('.center').owlCarousel({
    center:true,
    items: 4,
    loop: true,
    margin: 10,
    nav:true,
    dots:false,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,
    navText: [$('.am-prev'),$('.am-next')],
    responsive:{
        0:{
            items:2,
            nav:true
        },
        690:{
            items:4,
            nav:true
        }
    }
});
$('.owl-bestseller').owlCarousel({
    loop:true,
    margin:0,
    nav:true,
    items:4,
    navText: [$('.bm-prev'),$('.bm-next')],
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots:false,
    responsive:{
        0:{
            items:3,
            nav:true,
        },
        690:{
            items:3,
            nav:true,
        },
        900:{
            items:4,
            nav:true,
        }
    }
});
$('.get-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    items:3,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    dots:false,
});
const accordion = document.querySelectorAll(".custom-menu");

accordion.forEach((el1) =>
  el1.addEventListener("click", () => {
    let childs = el1.children;
    
    if (childs[0].classList.contains("active")) {
        childs[0].classList.remove("active");
        childs[1].classList.remove("active");
    } else {
        accordion.forEach((el2) => el2.classList.remove("active"));
        childs[0].classList.add("active");
        childs[1].classList.add("active");
    }
  })
);

const search =document.querySelector('.search');
const crossmark =document.querySelector('.crossmark');
const top_search =document.querySelector('.top-search');
let opensearch= false;

    top_search.addEventListener('click', ()=>{
        console.log("clicked");
        if(!opensearch){
            search.classList.add('show');
            crossmark.classList.add('show');
            top_search.classList.add('toggler-dis');
            opensearch=true;
        }
    })
    crossmark.addEventListener('click', ()=>{
        if(opensearch){
    search.classList.remove('show');
    crossmark.classList.remove('show');
    top_search.classList.remove('toggler-dis');
    opensearch =false;
}
})

    
const menubtn = document.querySelector('.toggler');
const closebtn = document.querySelector('.close');
const mobile_menu = document.querySelector('.mobile-menu');
const bg = document.querySelector(".outer-layout")
let menuopen = false;

const element = document.querySelector('.mobile-menu');
    
    bg.addEventListener('click', event => {
        if (!element.contains(event.target) && menuopen) {
      menubtn.classList.remove('toggler-dis')
      closebtn.classList.remove('active-menu');
      mobile_menu.classList.remove('active-menu');
      bg.classList.remove('active-menu')
      menuopen = false;
  }
}); 

menubtn.addEventListener('click', () =>{
    if(!menuopen){
        menubtn.classList.add('toggler-dis');
        mobile_menu.classList.add('active-menu');
        closebtn.classList.add('active-menu');
        bg.classList.add('active-menu')
        menuopen = true;
    }
    // else{
        //     closebtn.classList.remove('active-menu');
        //     mobile_menu.classList.remove('active-menu');
        //     menuopen = false;
        // }
    })
    closebtn.addEventListener('click', ()=>{
        if(menuopen){
            menubtn.classList.remove('toggler-dis')
            closebtn.classList.remove('active-menu');
            mobile_menu.classList.remove('active-menu');
            bg.classList.remove('active-menu')
            menuopen = false;
        }
    })
