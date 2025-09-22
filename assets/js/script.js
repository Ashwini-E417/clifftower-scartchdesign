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