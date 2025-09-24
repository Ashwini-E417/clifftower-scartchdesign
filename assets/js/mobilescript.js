document.addEventListener('DOMContentLoaded', () => {
            const burgerMenu = document.querySelectorAll('.menuBtn');
            const navModal = document.querySelector('#navModal');
            const changeMenuIcon = document.querySelectorAll(".changeMenuIcon");

            navModal.style.top = (document.querySelector("header").clientHeight + 10) + "px";
            
            window.addEventListener("resize",()=>{
                navModal.style.top = (document.querySelector("header").clientHeight + 10) + "px";
            })
            
            const toggleMenu = () => {
                navModal.classList.toggle('active');
                if  (navModal.classList.contains("active")) {
                    changeMenuIcon.src = "assets/images/icons/closeBtn.png";
                }
                else {
                    changeMenuIcon.src = "assets/images/icons/menubtn.svg";
                }
            };

            burgerMenu.forEach((element,index)=>{
                element.addEventListener('click', ()=>{
                    toggleMenu();
                });
            });

            //temparory commeted as sections not defined
            // navModal.forEach((element,index)=>{
            //     element.addEventListener('click', (event) => {
            //         const targetid = event.target.getAttribute("href").substring(1);
            //         const target = document.querySelectorAll(`#${targetid}`)[index];
            //         target.scrollIntoView({
            //             behavior: 'smooth',
            //         })
            //     toggleMenu(index);
            // });
            // })
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
    const floorIndicator = document.querySelector(".floorIndicator");
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

    document.querySelector(".floor-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideFloorLeft();
        ResetFloorTimer();
    });
    document.querySelector(".floor-right").addEventListener("click",(e)=>{
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
    const galleryTotal = document.querySelectorAll(".galleryCard").length;
    let galleryCount = 0;
    const galleryViewport = document.querySelector(".gallery-viewport");
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

    document.querySelector(".gallery-decorationTwo").addEventListener("load",galleryDescriptionPadding);
    function galleryDescriptionPadding() {         
        const decoheight = document.querySelector(".gallery-decorationTwo").scrollHeight / 2;
        document.querySelector(".galleryDescription").style.paddingTop = decoheight + "px";
    }
    window.addEventListener("resize",galleryDescriptionPadding);
})