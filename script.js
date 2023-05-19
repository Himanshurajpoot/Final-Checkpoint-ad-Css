
// rendomImages-Modher-day-gift

let bgImg = document.querySelector(".home-gifts-article")
let imgs = ["promo__sw58lbodkmqq_large.jpg", "phonegift.jpg", 'watchGift.jpg']
let rendom = Math.floor(Math.random() * imgs.length)
bgImg.style.background = `url(./assetes/media/Home-page/${imgs[rendom]})`


// slides-images

const slideContainer = document.querySelector(".carousel__slider")
const slides = document.querySelector(".slides")
let allSlideItem = document.querySelectorAll(".slide-item")
let allBtn = document.querySelectorAll(".manual-btn")

let index = 1
let count = 0
let slideId;
const interval = 3000

// this is cloneig first and last elm of allSlideItem

const firstClone = allSlideItem[0].cloneNode(true)
const lastClone = allSlideItem[allSlideItem.length - 1].cloneNode(true)

firstClone.id = "first-clone"
lastClone.id = "last-clone"
   
slides.append(firstClone)
slides.prepend(lastClone)


const slideWidth = allSlideItem[index].clientWidth;
slides.style.transform = `translateX(${-slideWidth * index}px)`



// slideBtn-bg-color-styling

allBtn[count].classList.add('btnHover')
function btn(count) {
    if (count > 0) {
        allBtn[count - 1].classList.remove('btnHover')
    
    }
    allBtn[count].classList.add('btnHover')  

}

// startSlide-function

const startSlide = (stop) => {
    slideId = setInterval(() => {
        if (stop !== "stopSlide") {
            count++
        }
        index++

        if (count < 12) {
            btn(count)
        } else {
            count = 0
            allBtn[count].classList.add('btnHover')
            allBtn[11].classList.remove('btnHover')
        }
        slides.style.transition = '0.9s ease-out',
        slides.style.transform = `translateX(${-slideWidth * index}px)`
        stop == "stopSlide" && stopslide()
    }, interval)

}


// slides-addEventlistener

slides.addEventListener("transitionend", () => {
    allSlideItem = document.querySelectorAll(".slide-item")
    if (allSlideItem[index] && allSlideItem[index].id === firstClone.id) {
        slides.style.transition = 'none'
        index = 1
        slides.style.transform = `translateX(${-slideWidth * index}px)`
    }
})



//sliding-for-manual-btn 

allBtn.forEach((elm, i) => {

    elm.addEventListener("click", () => {
        index = i
        allBtn.forEach((elm) => {
            if (elm.classList.contains("btnHover")) {
                elm.classList.remove("btnHover")
            }

        })
        count = i
        elm.classList.add("btnHover")
        startSlide("stopSlide")
    })
})

// stopSlide-function

function stopslide() {
    allSlideItem = document.querySelectorAll(".slide-item")
    clearInterval(slideId)
}


// start-sliding-whene-mouseenter in the images container

slides.addEventListener('mouseenter', startSlide)
slides.addEventListener('mouseleave', () => {
    clearInterval(slideId)
})




