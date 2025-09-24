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
