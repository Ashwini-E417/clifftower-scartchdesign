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
        document.querySelector(".belowBannerImageDesk").scrollIntoView({
            behavior:"smooth",
        })
    })

//*******************************************
// ****************navbar Js ****************
// *************************************** */
            // const burgerMenu = document.querySelectorAll('.menuBtn');
            // const navModal = document.querySelectorAll('#navModal');
            // const changeMenuIcon = document.querySelectorAll(".changeMenuIcon");
            // const toggleMenu = (index) => {
            //     navModal[index].classList.toggle('active');
            //     if  (navModal[index].classList.contains("active")) {
            //         changeMenuIcon[index].src = "assets/images/icons/closeBtn.png";
            //     }
            //     else {
            //         changeMenuIcon[index].src = "assets/images/icons/menubtn.svg";
            //     }
            // };

            // burgerMenu.forEach((element,index)=>{
            //     element.addEventListener('click', ()=>{
            //         toggleMenu(index);
            //     });
            // });

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



//*******************************************
// ****************architech Js ****************
// *************************************** */

    document.querySelector(".architect-knowMore").addEventListener("click",(e)=>{
        e.preventDefault();
        document.querySelector(".architect-sectionTwoDesk").scrollIntoView({
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
                ResetArchitectDesktop();
            })
        });

        document.querySelectorAll(".architect-arrowRight").forEach(element=>{
            element.addEventListener("click",(e)=>{
                e.preventDefault();
                architectcarouselCount = (architectcarouselCount + 1) % architectTotal;
                architectCarouselSlide();
                ResetArchitectDesktop();
            })
        });

        function architectHandleKey(e) {
            if (e.key == "ArrowLeft") {
                architectcarouselCount = (architectcarouselCount + architectTotal - 1) % architectTotal;
                architectCarouselSlide();
                ResetArchitectDesktop();
            }
            else if (e.key == "ArrowRight") {
                architectcarouselCount = (architectcarouselCount + 1) % architectTotal;
                architectCarouselSlide();
                ResetArchitectDesktop();
            }
        }

        const architectsection = document.querySelector(".architect-sectionTwoDesk");

        const observer1 = new IntersectionObserver((entries)=>{
            entries.forEach(entry =>{
            if (entry.isIntersecting) {
                document.addEventListener("keydown",architectHandleKey);
            }
            else {
                document.removeEventListener("keydown",architectHandleKey);
            }
            })
            
        },{threshold:0.3});

        observer1.observe(architectsection);

        let deskArchitectTimer = setInterval(SetArchitectSlideDeskTop,5000);

        function SetArchitectSlideDeskTop() {
            architectcarouselCount = (architectcarouselCount + 1) % architectTotal;
            architectCarouselSlide();
        }

        function ResetArchitectDesktop() {
            clearInterval(deskArchitectTimer);
            deskArchitectTimer = setInterval(SetArchitectSlideDeskTop,5000);
        }

//****************************************
// ******************Highlight JS-*******
// *********************************************** */

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
            ResetHighlightDesktopTimer();
        })
    })

    document.querySelectorAll(".highlightRight").forEach(element =>{
        element.addEventListener("click",(e)=>{
            e.preventDefault();
            ScrollHighlightRight();
            ResetHighlightDesktopTimer();
        })
    })

    function HighlightKeyHandle(e) {
        if (e.key=="ArrowLeft") {
            ScrollHighlightLeft();
            ResetHighlightDesktopTimer();
        } else if (e.key == "ArrowRight") {
            ScrollHighlightRight();
            ResetHighlightDesktopTimer();
        }
    }

    const highlightContainer = document.querySelector(".project-highlightTwo");

    const observer2 = new IntersectionObserver((entries)=>{
        entries.forEach(entry=>{
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                document.addEventListener("keydown", HighlightKeyHandle);
            }
            else {
                document.removeEventListener("keydown", HighlightKeyHandle);
            }
        })
    },{threshold:0.3})

    observer2.observe(highlightContainer);

    let highlightDesktopTimer = setInterval(HighlightDesktopSlide,5000);

    function HighlightDesktopSlide() {
        ScrollHighlightRight();
    }

    function ResetHighlightDesktopTimer() {
        clearInterval(highlightDesktopTimer);
        highlightDesktopTimer = setInterval(HighlightDesktopSlide,5000);
    }

//****************************************
// ******************floor Plan JS-*******
// *********************************************** */
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
        ResetFloorDesktopTimer();
    });
    document.querySelector(".floor-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideFloorRight();
        ResetFloorDesktopTimer();
        })
                
    const floorContainer = document.querySelector(".floorPlanContainer");

    const observer3 = new IntersectionObserver(entries=>{
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                document.addEventListener("keydown",floorKeyHandle);
            }
            else {
                document.removeEventListener("keydown",floorKeyHandle);
            }
        })
    },{threshold:0.3})
    observer3.observe(floorContainer);

    function floorKeyHandle(e) {
        if (e.key == "ArrowLeft") {
            SlideFloorLeft();
            ResetFloorDesktopTimer();
        }
        else if (e.key == "ArrowRight") {
            SlideFloorRight();
            ResetFloorDesktopTimer();
        }
    }

    let floorDeskTimer = setInterval(SlideDeskFloorPlan,5000);

    function SlideDeskFloorPlan() {
        SlideFloorRight();
    }

    function ResetFloorDesktopTimer () {
        clearInterval(floorDeskTimer)
        floorDeskTimer = setInterval(SlideDeskFloorPlan,5000);
    }

//****************************************
// ******************Gallery JS-*******
// *********************************************** */
    const galleryTotal = document.querySelectorAll(".gallery-leftContainer .galleryCard").length;
    let galleryCount = 0;
    const galleryViewport = document.querySelector(".gallery-leftContainer .gallery-viewport");
    const galleryContainer = document.querySelector(".galleryContainerDesk");
    const galleryIndicator = document.querySelector(".gallery-indicator");

    function SlideGalleryLeftDesk() {
        galleryCount = (galleryCount + galleryTotal - 1) % galleryTotal;
        galleryViewport.style.transform = `translateX(-${galleryCount*100}%)`;
        galleryIndicator.innerHTML = galleryCount + 1;
    }

    function SlideGalleryRightDesk() {
        galleryCount = (galleryCount + 1) % galleryTotal;
        galleryViewport.style.transform = `translateX(-${galleryCount*100}%)`;
        galleryIndicator.innerHTML = galleryCount + 1;
    }
    function galleryKeyHandle(e) {
        if (e.key == "ArrowLeft") {
            SlideGalleryLeftDesk();
            ResetGalleryDesktopTimer();
        }
        else if (e.key == "ArrowRight") {
            SlideGalleryRightDesk();
            ResetGalleryDesktopTimer();
        }
    }

    document.querySelector(".galleryDesk-left").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideGalleryLeftDesk();
        ResetGalleryDesktopTimer();
    });

    document.querySelector(".galleryDesk-right").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideGalleryRightDesk();
        ResetGalleryDesktopTimer();
    })
    const observer4 = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
            if (entry.isIntersecting && entry.intersectionRatio > 0.3) {
                document.addEventListener("keydown",galleryKeyHandle);
            }
            else {
                document.removeEventListener("keydown",galleryKeyHandle);
            }
        })
    },{threshold:0.3});

    observer4.observe(galleryContainer);

    let galleryDeskTimer = setInterval(SetGallerySlideDesk, 5000);

    function SetGallerySlideDesk() {
        SlideGalleryRightDesk();
    }

    function ResetGalleryDesktopTimer() {
        clearInterval(galleryDeskTimer);
        galleryDeskTimer = setInterval(SetGallerySlideDesk, 5000);
    }

//****************************************
// ******************location JS-*******
// *********************************************** */
    const locationTotal = document.querySelectorAll(".location-card").length;
    let locationCount = 0;
    const locationViewport = document.querySelector(".location-viewportDesk");
    const locationContainer = document.querySelector(".location-ContainerTwo");

    function SlideLocationLeft() {
        locationCount = (locationCount + locationTotal - 1) % locationTotal;
        locationViewport.style.transform = `translateX(-${locationCount*100}%)`;
    }

    function SlideLocationRight() {
        locationCount = (locationCount + 1) % locationTotal;
        locationViewport.style.transform = `translateX(-${locationCount*100}%)`;
    }

    document.querySelector(".location-leftDesk").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideLocationLeft();
        ResetLocationDeskTimer();
    })
    document.querySelector(".location-rightDesk").addEventListener("click",(e)=>{
        e.preventDefault();
        SlideLocationRight();
        ResetLocationDeskTimer();
    })

    function locationKeyHandle(e) {
        if (e.key=="ArrowLeft") {
            SlideLocationLeft();
            ResetLocationDeskTimer();
        }
        else if (e.key=="ArrowRight") {
            SlideLocationRight();
            ResetLocationDeskTimer();
        }
    }

    const observer5 = new IntersectionObserver((entries)=>{
        entries.forEach(entry =>{
            if (entry.isIntersecting && entry.intersectionRatio>0.3) {
                document.addEventListener("keydown",locationKeyHandle);
            }else {
                document.removeEventListener("keydown",locationKeyHandle);
            }
        })
    },{threshold:0.3})
    observer5.observe(locationContainer);

    let locationDeskTimer = setInterval(SetLocationMoveDesk, 5000);
    
    function SetLocationMoveDesk() {
        SlideLocationRight();
    }

    function ResetLocationDeskTimer() {
        clearInterval(locationDeskTimer);
        locationDeskTimer = setInterval(SetLocationMoveDesk, 5000);
    }


document.addEventListener("DOMContentLoaded", () => {
  const animateDownSection = document.querySelectorAll(".animateDown");

  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: [0,0.3,] // only fire at fully hidden OR half visible2
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
    if (entry.isIntersecting && entry.intersectionRatio > 0.30) {
        if (!entry.target.classList.contains("visible2")) {
          entry.target.classList.add("visible2");
          console.log("add");
        }
      } 
    else if (entry.isIntersecting && entry.intersectionRatio == 0) {
        // Fully out of view → reset
        entry.target.classList.remove("visible2");
        console.log("remove");
      }
    });
  }, observerOptions);

  animateDownSection.forEach(section => observer.observe(section));
});