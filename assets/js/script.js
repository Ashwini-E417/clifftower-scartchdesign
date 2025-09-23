document.addEventListener("DOMContentLoaded",()=>{
    const bannerLeft = document.querySelector(".bannerLeft");
    const bannerRight = document.querySelector(".bannerRight");
    const bannerLeftMask = document.querySelector(".bannerLeftMask");
    const bannerRightMask = document.querySelector(".bannerRightMask");

    bannerRight.addEventListener("mouseenter",(e)=>{
        e.preventDefault();
        bannerLeftMask.style.opacity = 1;
        bannerRightMask.style.opacity = 0;
    })
    bannerRight.addEventListener("mouseout",(e)=>{
        e.preventDefault();
        bannerLeftMask.style.opacity = 0;
        bannerRightMask.style.opacity = 1;
    })
    bannerLeft.addEventListener("mouseenter",(e)=>{
        e.preventDefault();
        bannerLeftMask.style.opacity = 0;
        bannerRightMask.style.opacity = 1;
    })

    document.querySelector(".bannerScrollArrow").addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(".belowBannerImage").scrollIntoView({
            behavior:"smooth",
        })
    })
});

//*******************************************
// ****************navbar Js ****************
// *************************************** */
document.addEventListener('DOMContentLoaded', () => {
            const burgerMenu = document.querySelectorAll('.menuBtn');
            const navModal = document.querySelectorAll('#navModal');
            const changeMenuIcon = document.querySelectorAll(".changeMenuIcon");
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
// ****************architech Js ****************
// *************************************** */

document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector(".architect-knowMore").addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(".architect-sectionTwo").scrollIntoView({
            behavior:"smooth",
        })

    })


    let architectcarouselCount = 0;
        const architectTotal = document.querySelectorAll(".architect-carouselCard").length;
        const architectContainer = document.querySelector(".architect-carouselViewport");
        function architectCarouselSlide () {
            architectContainer.style.transform = `translateX(-${architectcarouselCount*100}%)`;
        }
        document.querySelectorAll(".architect-arrowLeft").forEach(element=>{
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                architectcarouselCount = (architectcarouselCount + architectTotal - 1) % architectTotal;
                architectCarouselSlide();
            })
        });

        document.querySelectorAll(".architect-arrowRight").forEach(element=>{
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                architectcarouselCount = (architectcarouselCount + 1) % architectTotal;
                architectCarouselSlide();
            })
        })

        function architectHandleKey(e) {
            if (e.key == "ArrowLeft") {
                architectcarouselCount = (architectcarouselCount + architectTotal - 1) % architectTotal;
                architectCarouselSlide();
            }
            else if (e.key == "ArrowRight") {
                architectcarouselCount = (architectcarouselCount + 1) % architectTotal;
                architectCarouselSlide();
            }
        }

        const architectsection = document.querySelector(".architect-sectionTwo");

        const observer = new IntersectionObserver((entries)=>{
            entries.forEach(entry =>{
            if (entry.isIntersecting) {
                document.addEventListener("keydown",architectHandleKey);
            }
            else {
                document.removeEventListener("keydown",architectHandleKey);
            }
            })
            
        },{threshold:0.3});

        observer.observe(architectsection);

})


//****************************************
// ******************Highlight JS-*******
// *********************************************** */
document.addEventListener("DOMContentLoaded",()=>{

    const highlightTotal = document.querySelectorAll(".highlight-carouselCard").length;
    let highlightCount = 0;
    const highlightViewport = document.querySelector(".highlight-carouselViewport");

    function ScrollHighlightLeft() {
        highlightCount = (highlightCount + highlightTotal - 1) % highlightTotal;
        highlightViewport.style.transform = `translateX(-${highlightCount*100}%)`;
    }

    function ScrollHighlightRight() {
        highlightCount = (highlightCount + 1) % highlightTotal;
        highlightViewport.style.transform = `translateX(-${highlightCount*100}%)`;
    }

    document.querySelectorAll(".highlightLeft").forEach(element=>{
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            ScrollHighlightLeft();
        })
    })

    document.querySelectorAll(".highlightRight").forEach(element =>{
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            ScrollHighlightRight();
        })
    })

    function HighlightKeyHandle(e) {
        if (e.key=="ArrowLeft") {
            ScrollHighlightLeft();
        } else if (e.key == "ArrowRight") {
            ScrollHighlightRight();
        }
    }

    const highlightContainer = document.querySelector(".project-highlightTwo");

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                document.addEventListener("keydown", HighlightKeyHandle);
            }
            else {
                document.removeEventListener("keydown", HighlightKeyHandle);
            }
        })
    },{threshold:0.3})

    observer.observe(highlightContainer);
})

//****************************************
// ******************floor Plan JS-*******
// *********************************************** */
document.addEventListener("DOMContentLoaded",()=>{
    const floorTotal = document.querySelectorAll(".floorcard").length;
    let floorCount = 0;
    const floorViewPort = document.querySelector(".floorplan-CarouselViewport");
    const floorIndicator = document.querySelector(".floorIndicator")
    function SlideFloorLeft() {
        floorCount = (floorCount + floorTotal -1 )% floorTotal;
        floorViewPort.style.transform = `translateX(-${floorCount * 100}%)`;
        floorIndicator.innerHTML = floorCount + 1;
    }
    function SlideFloorRight(){
        floorCount = (floorCount + 1) % floorTotal;
        floorViewPort.style.transform = `translateX(-${floorCount * 100}%)`;
        floorIndicator.innerHTML = floorCount + 1;
    }
    document.querySelector(".floor-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideFloorLeft();
    });
    document.querySelector(".floor-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideFloorRight();
        })
                
    const floorContainer = document.querySelector(".floorPlanContainer");

    const observer = new IntersectionObserver(entries=>{
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                document.addEventListener("keydown",floorKeyHandle);
            }
            else {
                document.removeEventListener("keydown",floorKeyHandle);
            }
        })
    },{threshold:0.3})
    observer.observe(floorContainer);

    function floorKeyHandle(e) {
        if (e.key == "ArrowLeft") {
            SlideFloorLeft();
        }
        else if (e.key == "ArrowRight") {
            SlideFloorRight();
        }
    }
})

//****************************************
// ******************Gallery JS-*******
// *********************************************** */
document.addEventListener("DOMContentLoaded",()=>{
    const galleryTotal = document.querySelectorAll(".galleryCard").length;
    let galleryCount = 0;
    const galleryViewport = document.querySelector(".gallery-viewport");
    const galleryContainer = document.querySelector(".galleryContainer");
    const galleryIndicator = document.querySelector(".gallery-indicator");

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
    function galleryKeyHandle(e) {
        if (e.key == "ArrowLeft") {
            SlideGalleryLeft();
        }
        else if (e.key == "ArrowRight") {
            SlideGalleryRight();
        }
    }

    document.querySelector(".gallery-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideGalleryLeft();
    });

    document.querySelector(".gallery-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideGalleryRight();
    })
    const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                document.addEventListener("keydown",galleryKeyHandle);
            }
            else {
                document.removeEventListener("keydown",galleryKeyHandle);
            }
        })
    },{threshold:0.3});

    observer.observe(galleryContainer);
})
//****************************************
// ******************location JS-*******
// *********************************************** */
document.addEventListener("DOMContentLoaded",()=>{
    const locationTotal = document.querySelectorAll(".location-card").length;
    let locationCount = 0;
    const locationViewport = document.querySelector(".location-viewport");
    const locationContainer = document.querySelector(".location-ContainerTwo");

    function SlideLocationLeft() {
        locationCount = (locationCount + locationTotal - 1) % locationTotal;
        locationViewport.style.transform = `translateX(-${locationCount*100}%)`;
    }

    function SlideLocationRight() {
        locationCount = (locationCount + 1) % locationTotal;
        locationViewport.style.transform = `translateX(-${locationCount*100}%)`;
    }

    document.querySelector(".location-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideLocationLeft();
    })
    document.querySelector(".location-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideLocationRight();
    })

    function locationKeyHandle(e) {
        if (e.key=="ArrowLeft") {
            SlideLocationLeft();
        }
        else if (e.key=="ArrowRight") {
            SlideLocationRight();
        }
    }

    const observer = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting && entry.intersectionRatio>0.3) {
                document.addEventListener("keydown",locationKeyHandle);
            }else {
                document.removeEventListener("keydown",locationKeyHandle);
            }
        })
    },{threshold:0.3})
    observer.observe(locationContainer);
})