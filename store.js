
let offerContainer = document.querySelector(".offer-slide-container")

const interval = 5000;
let index =0
let indextoo = 0

function scroll (){
    setInterval (()=>{
        index = 2000;

        offerContainer.scrollLeft = index;
        
        requestAnimationFrame(scroll);
      
    }, interval)
}

requestAnimationFrame(scroll)

// left-right-scroll-button

function scrolll(){
    let left= document.querySelector(".store-all-apple-prodect")
    left.style.scrollBehavior="smooth";
    left.scrollBy(-1 ,0)
}

function scrollr(){
    let right= document.querySelector(".store-all-apple-prodect");
    right.style.scrollBehavior="smooth";
    right.scrollBy(1 , 0)

    
}

//  <!-- The latest. Take a look at what's new right now - section -->

let allLetestArticleImg = document.querySelectorAll(".store-latest-col-article ")

function allImg (){
    allLetestArticleImg.forEach((elm,i)=>{
        elm.style.background =`url(./assetes/media/store/letest-${i}.jpeg)`
    })
}

allImg()

// <!-- Help is here. Whenever and however you need it.- section -->

let allHelpArticle = document.querySelectorAll(".store-help-article")
 function helpAllImg (){
    allHelpArticle.forEach((elm,i)=>{
        elm.style.background =`url(./assetes/media/store/help-${i+1}.jpeg)`
    })
 }

 helpAllImg()