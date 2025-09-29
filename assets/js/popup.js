let lastScrollPoup = 0;
//main popup
        document.addEventListener("DOMContentLoaded",()=>{
            const mainpopup = document.querySelector(".main-popupContainer");
            function CloseMainPopup() {
                setTimeout(() => {
                    console.log(lastScrollPoup,"last scroll");
                    window.scrollTo(0, lastScrollPoup);
                }, 0);
                mainpopup.style.display = "none";
                document.body.style.overflowY = "visible";
                 
            }

            function OpenMainPopup() {
                
                lastScrollPoup = window.scrollY || document.documentElement.scrollTop;
                console.log("last scroll set",lastScrollPoup)
                mainpopup.style.display = "block";
                document.body.style.overflowY = "hidden";
            }

            document.querySelector(".main-popupCloseBtn").addEventListener("click",(e)=>{
                e.preventDefault();
                CloseMainPopup();
            });
            document.querySelector(".main-popupOverlay").addEventListener("click",(e)=>{
                e.preventDefault();
                CloseMainPopup();
            });

            document.querySelectorAll(".mainpopuptrigger").forEach(element => {
                element.addEventListener("click",(e)=>{
                    e.preventDefault();
                    OpenMainPopup();
                })
            })
        });








//floor popup
        document.addEventListener("DOMContentLoaded",()=>{
            const floorpopup = document.querySelector(".floor-popupContainer");
            function ClosefloorPopup() {
                setTimeout(() => {
                    console.log(lastScrollPoup,"last scroll");
                    window.scrollTo(0, lastScrollPoup);
                }, 0);
                floorpopup.style.display = "none";
                document.body.style.overflowY = "visible";
            }

            function OpenfloorPopup() {
                lastScrollPoup = window.scrollY || document.documentElement.scrollTop;
                floorpopup.style.display = "block";
                document.body.style.overflowY = "hidden";
            }

            document.querySelector(".floor-popupCloseBtn").addEventListener("click",(e)=>{
                e.preventDefault();
                ClosefloorPopup();
            });
            document.querySelector(".floor-popupOverlay").addEventListener("click",(e)=>{
                e.preventDefault();
                ClosefloorPopup();
            });

            document.querySelectorAll(".floorpopuptrigger").forEach(element => {
                element.addEventListener("click",(e)=>{
                    e.preventDefault();
                    OpenfloorPopup();
                })
            })
        });












        //Oneaddress Popup 
        document.addEventListener("DOMContentLoaded",()=>{
            const oneAddressPopupContainer = document.querySelector(".oneaddress-popupContainer");
            function CloseOneaddressPopup() {
                setTimeout(() => {
                    console.log(lastScrollPoup,"last scroll");
                    window.scrollTo(0, lastScrollPoup);
                }, 0);
                oneAddressPopupContainer.style.display = "none";
                document.body.style.overflowY = "visible";
            }
            function OpenOneaddressPopup() {
                lastScrollPoup = window.scrollY || document.documentElement.scrollTop;
                oneAddressPopupContainer.style.display = "block";
                document.body.style.overflowY = "hidden";
            }

            document.querySelector(".oneaddress-popupClose").addEventListener("click",(e)=>{
                e.preventDefault();
                CloseOneaddressPopup();
            });
            document.querySelector(".oneaddress-overlay").addEventListener("click",(e)=>{
                e.preventDefault();
                CloseOneaddressPopup();
            });
            document.querySelectorAll(".oneaddressPopupTrigger").forEach(element => {
                element.addEventListener("click",(e)=>{
                    e.preventDefault();
                    OpenOneaddressPopup();
                })
            });
        });


















        document.addEventListener("DOMContentLoaded",()=>{
            const architectPopupContainer = document.querySelector(".architect-popupMobile");
            const architectpopupViewport = document.querySelector(".architect-popupViewport");
            const architectpopupTotal = document.querySelectorAll(".architect-popupCard").length;
            let architectpopupCount = 0;
            const architectpopupIndicator = document.querySelector(".architect-popupIndicator");
            let architectpopupTimer = null;
        
            function PopupArchitectSlideLeft() {
                architectpopupCount = (architectpopupCount + architectpopupTotal - 1)% architectpopupTotal;
                architectpopupViewport.style.transform = `translateX(-${architectpopupCount*100}%)`;
                architectpopupIndicator.innerHTML = architectpopupCount + 1;
            }

            function PopupArchitectSlideRight() {
                architectpopupCount = (architectpopupCount + 1)% architectpopupTotal;
                architectpopupViewport.style.transform = `translateX(-${architectpopupCount*100}%)`;
                architectpopupIndicator.innerHTML = architectpopupCount + 1;
            }

            function ArchitectPopupKeyevent(e) {
                if (e.key=="ArrowLeft") {
                    PopupArchitectSlideLeft();
                    ResetArchitectPopupTimer();
                }
                else if (e.key == "ArrowRight") {
                    PopupArchitectSlideRight();
                    ResetArchitectPopupTimer();
                }
                else if (e.key == "Escape") {CloseArchitectPopup();}
            }

            function CloseArchitectPopup() {
                architectPopupContainer.style.display = "none";
                document.body.style.overflowY = "visible";
                document.removeEventListener("keydown",ArchitectPopupKeyevent);
                clearInterval(architectpopupTimer);
            }

            function OpenArchitectPopup() {
                architectPopupContainer.style.display = "block";
                document.body.style.overflowY = "hidden";
                document.addEventListener("keydown",ArchitectPopupKeyevent);
                architectpopupTimer = setInterval(SetArchitectPopupTimer, 5000);
            }

            function ResetArchitectPopupTimer() {
                clearInterval(architectpopupTimer);
                architectpopupTimer = setInterval(SetArchitectPopupTimer,5000);
            }

            function SetArchitectPopupTimer() {
                PopupArchitectSlideRight();
            }
            document.querySelector(".architect-popupLeft").addEventListener("click",(e)=>{
                e.preventDefault();
                PopupArchitectSlideLeft();
                ResetArchitectPopupTimer();
            });

            document.querySelector(".architect-popupRight").addEventListener("click",(e)=>{
                e.preventDefault();
                PopupArchitectSlideRight();
                ResetArchitectPopupTimer();
            })
        
            document.querySelectorAll(".architect-popupTrigger").forEach(element => {
                element.addEventListener("click",(e)=>{
                    e.preventDefault();
                    OpenArchitectPopup();
                });
            });

            document.querySelector(".architect-popupClose").addEventListener("click",(e)=>{
                e.preventDefault();
                CloseArchitectPopup();
            })

            document.querySelector(".architect-popupOverlay").addEventListener("click",(e)=>{
                e.preventDefault();
                CloseArchitectPopup();
            })

            let popupArchitectTouchStart = null;
            architectPopupContainer.addEventListener("touchstart",(e)=>{
                popupArchitectTouchStart = e.touches[0].clientX;
            });
            architectPopupContainer.addEventListener("touchend",(e)=>{
                const popupArchitectTouchEnd = e.changedTouches[0].clientX;
                if (popupArchitectTouchEnd < popupArchitectTouchStart - 50){
                    PopupArchitectSlideRight();
                    ResetArchitectPopupTimer();
                }
                else if (popupArchitectTouchEnd > popupArchitectTouchStart + 50) {
                    PopupArchitectSlideLeft();
                    ResetArchitectPopupTimer();
                }
            })

        });



