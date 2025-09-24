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