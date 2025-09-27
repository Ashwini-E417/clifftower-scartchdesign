document.addEventListener('DOMContentLoaded', () => {
            const burgerMenu = document.querySelectorAll('.menuBtn');
            const navModal = document.querySelectorAll('#navModal');
            const changeMenuIcon = document.querySelectorAll(".changeMenuIcon");

            navModal[0].style.top = (document.querySelector("header").clientHeight + 10) + "px";
            
            window.addEventListener("resize",()=>{
                navModal[0].style.top = (document.querySelector("header").clientHeight + 10) + "px";
            })
            
            const toggleMenu = (index) => {
                navModal[index].classList.toggle('active');
                if  (navModal[index].classList.contains("active")) {
                    changeMenuIcon[index].src = "assets/images/icons/closeBtn.png";
                }
                else {
                    changeMenuIcon[index].src = "assets/images/icons/menubtn.svg";
                }
            };

            burgerMenu.forEach((element,index)=>{
                element.addEventListener('click', ()=>{
                    toggleMenu(index);
                });
            });

            //temparory commeted as sections not defined
            navModal.forEach((element,index)=>{
                element.addEventListener('click', (event) => {
                    const targetid = event.target.getAttribute("href").substring(1);
                    const target = document.querySelectorAll(`#${targetid}`)[index];
                    target.scrollIntoView({
                        behavior: 'smooth',
                    })
                toggleMenu(index);
            });
            })
        });

//*******************************************
// ****************banner Js ****************
// *************************************** */
document.addEventListener("DOMContentLoaded",()=>{

    const bannerImageContainer = document.querySelector(".bannerImageContainer")
    const videoContainer = document.querySelector(".bgVideoContainer");
    const bannerImage = document.querySelector(".bannerImage");
    const video = document.querySelector(".bgVideo");
    let isToggled = false;

    bannerHeight = bannerImageContainer.clientHeight/2 ;
    liveheight = document.querySelector(".liveTextHolder").clientHeight ;
    document.querySelector(".liveContentContainer").style.paddingTop = (bannerHeight - liveheight + 10) + "px";

    window.addEventListener("resize",()=>{
        bannerHeight = bannerImageContainer.clientHeight/2 ;
        liveheight = document.querySelector(".liveTextHolder").clientHeight ;
        document.querySelector(".liveContentContainer").style.paddingTop = (bannerHeight - liveheight + 10) + "px";
    })

    document.querySelector(".videoImageReverseBtn").addEventListener("click",(e)=>{
        e.preventDefault();
        if (!isToggled) {
            bannerImageContainer.removeChild(bannerImage);
            videoContainer.removeChild(video);
            bannerImageContainer.appendChild(video);
            videoContainer.appendChild(bannerImage);
            isToggled = true;
        }
        else {
            bannerImageContainer.removeChild(video);
            videoContainer.removeChild(bannerImage);
            bannerImageContainer.appendChild(bannerImage);
            videoContainer.appendChild(video);
            isToggled = false;
        }
    })
})
/*************************************************
******************highlight - js ****************
*************************************************/

document.addEventListener("DOMContentLoaded",()=>{
    const highlightviewport = document.querySelector(".highlightCarouselViewport");
    const highlighttotal = document.querySelectorAll(".highlightCard").length;
    let highlightCount = 0;
    const highlightIndicator = document.querySelector(".highlightIndicator");
    let highlightTimer = setInterval(SetHighlightMovement,5000);

    function SlideHighlightLeft() {
        highlightCount = (highlightCount + highlighttotal - 1) % highlighttotal;
        highlightviewport.style.transform = `translateX(-${highlightCount * 100}%)`;
        highlightIndicator.innerHTML = highlightCount + 1;
    }

    function SlideHighlightRight() {
        highlightCount = (highlightCount + 1) % highlighttotal;
        highlightviewport.style.transform = `translateX(-${highlightCount * 100}%)`;
        highlightIndicator.innerHTML = highlightCount + 1;
    }

    function SetHighlightMovement() {
        SlideHighlightRight();
    }

    function ResetHighlightTimer() {
        clearInterval(highlightTimer);
        highlightTimer = setInterval(SetHighlightMovement,5000);
    }

    document.querySelector(".highlight-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideHighlightLeft();
        ResetHighlightTimer();
    });

    document.querySelector(".highlight-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideHighlightRight();
        ResetHighlightTimer();
    })
    
    let highlightTouchStart = null;
    highlightviewport.addEventListener("touchstart",(e)=>{
        highlightTouchStart = e.touches[0].clientX;
    })
    highlightviewport.addEventListener("touchend",(e)=>{
        const highlightTouchEnd = e.changedTouches[0].clientX;
        if (highlightTouchEnd < highlightTouchStart - 50) {
            SlideHighlightRight();
            ResetHighlightTimer();
        }
        else if (highlightTouchEnd > highlightTouchStart + 50) {
            SlideHighlightLeft();
            ResetHighlightTimer();
        }
    });


});

/*************************************************
******************floor - js ****************
*************************************************/
document.addEventListener("DOMContentLoaded",()=>{
    const floorTotal = document.querySelectorAll(".floorCard").length;
    let floorCount = 0;
    const floorviewport = document.querySelector(".floorCarouselViewport");
    const floorContainer = document.querySelector(".floor-container");
    const floorIndicator = document.querySelector(".floorMobIndicator");
    let floorTimer = setInterval(SetFloorMovement,5000);

    function SlideFloorLeft() {
        floorCount = (floorCount + floorTotal - 1) % floorTotal;
        floorviewport.style.transform = `translateX(-${floorCount * 100}%)`;
        floorIndicator.innerHTML = floorCount + 1;
    }

    function SlideFloorRight() {
        floorCount = (floorCount + 1) % floorTotal;
        floorviewport.style.transform = `translateX(-${floorCount * 100}%)`;
        floorIndicator.innerHTML = floorCount + 1;
    }

    function SetFloorMovement() {
        SlideFloorRight();
    }
    function ResetFloorTimer() {
        clearInterval(floorTimer);
        floorTimer = setInterval(SetFloorMovement,5000);
    }

    document.querySelector(".floormob-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideFloorLeft();
        ResetFloorTimer();
    });
    document.querySelector(".floormob-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideFloorRight();
        ResetFloorTimer();
    });

    let floorTouchStart = null;
    floorContainer.addEventListener("touchstart",(e)=>{
        floorTouchStart = e.touches[0].clientX;
    })
    floorContainer.addEventListener("touchend",(e)=>{
        const floorTouchEnd = e.changedTouches[0].clientX;
        if (floorTouchEnd < floorTouchStart - 50) {
            SlideFloorRight();
            ResetFloorTimer();
        }
        else if (floorTouchEnd > floorTouchStart + 50) {
            SlideFloorLeft();
            ResetFloorTimer();
        }
    });


})
/*************************************************
******************gallery - JS ****************
*************************************************/
document.addEventListener("DOMContentLoaded",()=>{
    const galleryTotal = document.querySelectorAll(".gallery-viewportMob .galleryCard").length;
    let galleryCount = 0;
    const galleryViewport = document.querySelector(".gallery-viewportMob");
    const galleryContainer = document.querySelector(".galleryContainer");
    const galleryIndicator = document.querySelector(".galleryIndicator");
    let galleryTimer = setInterval(SetGalleryMovement,5000);

    function SlideGalleryLeft() {
        galleryCount = (galleryCount + galleryTotal - 1) % galleryTotal;
        galleryViewport.style.transform = `translateX(-${galleryCount*100}%)`;
        galleryIndicator.innerHTML = galleryCount + 1;
    }
    function SlideGalleryRight() {
        galleryCount = (galleryCount + 1) % galleryTotal;
        galleryViewport.style.transform = `translateX(-${galleryCount*100}%)`;
        galleryIndicator.innerHTML = galleryCount + 1;
    }
    function SetGalleryMovement() {
        SlideGalleryRight();
    }
    function ResetGalleryTimer() {
        clearInterval(galleryTimer);
        galleryTimer = setInterval(SetGalleryMovement,5000);
    }
    document.querySelector(".gallery-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideGalleryLeft();
        ResetGalleryTimer();
    });
    document.querySelector(".gallery-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideGalleryRight();
        ResetGalleryTimer();
    });

    let galleryTouchStart = null;
    galleryContainer.addEventListener("touchstart",(e)=>{
        galleryTouchStart = e.touches[0].clientX;
    })
    galleryContainer.addEventListener("touchend",(e)=>{
        const galleryTouchEnd = e.changedTouches[0].clientX;
        if (galleryTouchEnd < galleryTouchStart - 50) {
            SlideGalleryRight();
            ResetGalleryTimer();
        }
        else if (galleryTouchEnd > galleryTouchStart + 50) {
            SlideGalleryLeft();
            ResetGalleryTimer();
        }
    });

    document.querySelector(".gallery-decorationTwoMob").addEventListener("load",galleryDescriptionPadding);
    function galleryDescriptionPadding() {         
        const decoheight = document.querySelector(".gallery-decorationTwoMob").clientHeight / 2;
        document.querySelector(".galleryDescription").style.paddingTop = decoheight + "px";
    }
    window.addEventListener("resize",galleryDescriptionPadding);
});

/*************************************************
******************location - one ****************
*************************************************/
document.addEventListener("DOMContentLoaded",()=>{
    function resizeFairyStatue() {
        document.querySelector(".location-text").style.paddingTop = (document.querySelector(".fairyStatue").clientHeight / 2 + 10) + "px";
    }
    document.querySelector(".fairyStatue").addEventListener("load",(e)=>{
        resizeFairyStatue();
    });
    window.addEventListener("resize",()=>{
        resizeFairyStatue();
    })
})
/*************************************************
******************Map - one ****************
*************************************************/
document.addEventListener("DOMContentLoaded",()=>{
    const locationTotal = document.querySelectorAll(".locationCard").length;
    let locationCount = 0;
    const locationViewport = document.querySelector(".location-viewport");
    const mapContainer = document.querySelector(".map-container");
    let locationTimer = setInterval(SetLocationMovement,4000);

    function SlideLocationLeft() {
        locationCount = (locationCount + locationTotal - 1) % locationTotal;
        locationViewport.style.transform = `translateX(-${locationCount * 100}%)`;
    }
    function SlideLocationRight() {
        locationCount = (locationCount + 1) % locationTotal;
        locationViewport.style.transform = `translateX(-${locationCount * 100}%)`;
    }
    function SetLocationMovement() {
        SlideLocationRight();
    }
    function ResetLocationTimer() {
        clearInterval(locationTimer);
        locationTimer = setInterval(SetLocationMovement,4000);
    }

    document.querySelector(".location-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideLocationLeft();
        ResetLocationTimer();
    });
    document.querySelector(".location-next").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideLocationRight();
        ResetLocationTimer();
    });

    let mapTouchStart = null;
    mapContainer.addEventListener("touchstart",(e)=>{
        mapTouchStart = e.touches[0].clientX;
    });
    mapContainer.addEventListener("touchend",(e)=>{
        const mapTouchEnd = e.changedTouches[0].clientX;
        if (mapTouchEnd < mapTouchStart - 50) {
            SlideLocationRight();
            ResetLocationTimer();
        }
        else if (mapTouchEnd > mapTouchStart + 50) {
            SlideLocationLeft();
            ResetLocationTimer();
        }
    });
})



//sticky header JS
    function resizeHeader() {
        const header = document.querySelectorAll('header');
let lastScroll = 0;

// const bannerHeight = document.querySelector('.bannerContainer').offsetHeight;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (window.innerWidth>1099) {
        // We are still in or near the banner area
        if (currentScroll <= 50) {
            // At very top â†’ always show
            header[1].classList.remove('hide');
        } 
        else if (currentScroll > lastScroll) {
            // Scrolling down in banner area â†’ hide
            header[1].classList.add('hide');
        } 
        else {
            // Scrolling up in banner area â†’ show
            header[1].classList.remove('hide');
        }
    }
    else {
        if (currentScroll <= 50) {
            // At very top â†’ always show
            header[0].classList.remove('hide');
        } 
        else if (currentScroll > lastScroll) {
            // Scrolling down in banner area â†’ hide
            header[0].classList.add('hide');
        } 
        else {
            // Scrolling up in banner area â†’ show
            header[0].classList.remove('hide');
        }
    }
    lastScroll = currentScroll;
});
}
window.addEventListener("resize",(e)=>{
    e.preventDefault();
    resizeHeader();
});
window.addEventListener("load",(e)=>{
    e.preventDefault();
    resizeHeader();
});