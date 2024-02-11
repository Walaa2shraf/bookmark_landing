let burger = document.querySelector(".burger")
let mobileNan = document.querySelector(".mobile-nav")
let close = document.querySelector(".close")
let logo =document.querySelector(".logo")
let desktopNav = document.querySelector(".desktop-nav")
// let  = document.querySelector(".burger")
// =============== Features Sec identifies ===============
let featureTitle = document.getElementById("features-title")
let featureDescription = document.getElementById("features-description")
let featureImage = document.getElementById("features-img")

let btn1 = document.getElementById("simple")
let btn2 = document.getElementById("speedy")
let btn3 = document.getElementById("easy")
// =============Frequently Sec identifies ===============
let iconDown1 =document.getElementById("icon-down1")
let iconDown2 =document.getElementById("icon-down2")
let iconDown3 =document.getElementById("icon-down3")
let iconDown4 =document.getElementById("icon-down4")



let askP1 = document.querySelector(".ask-p1")
let askP2 = document.querySelector(".ask-p2")
let askP3 = document.querySelector(".ask-p3")
let askP4 = document.querySelector(".ask-p4")

let askH1 = document.getElementById("ask-h1")
let askH2 = document.getElementById("ask-h2")
let askH3 = document.getElementById("ask-h3")
let askH4 = document.getElementById("ask-h4")
// ==================================================


burger.onclick =function(){
    mobileNan.classList.add("open");
    desktopNav.classList.add(".logo-close")
};
close.onclick =function (){
    mobileNan.classList.remove("open");
    desktopNav.classList.remove(".logo-close")
};

// ================ Features Sec =====================
featureTitle.addEventListener("click",()=> console.log ("featureTitle clicked"));
featureDescription.addEventListener("click",()=> console.log ("featureDescription clicked"));
featureImage.addEventListener("click",()=> console.log ("featureImage clicked"));

window.onload = () => {
    btn1.click();
};

btn1.addEventListener("click",()=>{
    btn1.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    btn1.style.color="hsl(229, 31%, 21%)";
    btn2.style.borderBottom = "";
    btn3.style.borderBottom = "";

    featureTitle.innerText="Simple Bookmarking";
    featureDescription.innerText="Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.";
    featureImage.src = "images/illustration-features-tab-1.svg";
});

btn2.addEventListener("click", ()=>{
    btn1.style.borderBottom = "";
    btn2.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    btn2.style.color="hsl(229, 31%, 21%)";
    btn3.style.borderBottom = "";


    featureTitle.innerText="Intelligent search"
    featureDescription.innerText="Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
    featureImage.src = "images/illustration-features-tab-2.svg"
});


btn3.addEventListener("click", ()=>{
    btn1.style.borderBottom = "";
    btn2.style.borderBottom = "";
    btn3.style.borderBottom = "3px solid hsl(0, 94%, 66%)";
    btn3.style.color="hsl(229, 31%, 21%)";

    featureTitle.innerText="Share your bookmarks";
    featureDescription.innerText="Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button."
    featureImage.src = "images/illustration-features-tab-3.svg";
});


// ======================================================================
// gsap.from('.cards',{dyration:3, y:'-100%',ease:'bounce'});
// gsap.from('.cards',{duration:1, opacity: 0, delay: 0.3, stragger: 1});

// =========================================================================================
gsap.registerPlugin(ScrollTrigger);
gsap.from('.chrome',{
    duration:1, 
    y:100,
    opacity:0, 
    ease:'elastic',
    delay:0.5, 
    scrollTrigger:{
        trigger:'.chrome',
        start:"top 65%",
    },
});
gsap.from('.firefox',{
    duration:1, 
    y:100,
    opacity:0 ,
    ease:'elastic',
    delay:0.7 ,
    scrollTrigger:{
        trigger:'.firefox',
        start:"top 65%",
    },
});
gsap.from('.opera',{
    duration:1, 
    y:100, 
    opacity:0 ,
    ease:'elastic',
    delay:1,
    scrollTrigger:{
        trigger:'.opera',
        start:"top 65%",
    },
});

// ==================================================================================

var iconUp = document.createElement("i");
iconUp.classList.add("fa-solid", "fa-chevron-up"); 

// // first question
// iconDown1.addEventListener ("click", ()=>{
//     askP1.style.display= "block";
//     askH1.style.color="#fa5757"
//     iconDown1.parentNode.replaceChild(iconUp, iconDown1);
//     iconUp.style.color="#fa5757"
// });


// // for closing
// var isIconDown1Expanded = false;
// function closeDropdown() {
//     askP1.style.display = "none";
//     askH1.style.color="#252b46"
//     iconDown1.innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
//     iconDown1.style.color = "#252b46";
//     isIconDown1Expanded = false;
// }

// iconDown1.addEventListener("click", () => {
//     if (isIconDown1Expanded) {
//         closeDropdown();
//     } else {
//         closeDropdown(); 
//         askP1.style.display = "block";
//         iconDown1.innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
//         iconDown1.style.color = "#5368df";
//         isIconDown1Expanded = true;
//     }
// });


// // second question
// iconDown2.addEventListener ("click", ()=>{
//     askP2.style.display= "block";
//     askH2.style.color="#fa5757"
//     iconDown2.parentNode.replaceChild(iconUp, iconDown2);
//     iconUp.style.color="#fa5757"
// });


// // for closing
// var isIconDown2Expanded = false;
// function closeDropdown() {
//     askP2.style.display = "none";
//     // iconDown2.innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
//     iconDown2.style.color = "#252b46"; 
//     isIconDown2Expanded = false;
// }

// iconDown2.addEventListener("click", () => {
//     if (isIconDown2Expanded) {
//         closeDropdown();
//     } else {
//         closeDropdown(); 
//         askP2.style.display = "block";
//         iconDown2.innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
//         iconDown2.style.color = "#5368df";
//         isIconDown2Expanded = true;
//     }
// });


// // third question
// iconDown3.addEventListener ("click", ()=>{
//     askP3.style.display= "block";
//     askH3.style.color="#fa5757"
//     iconDown3.parentNode.replaceChild(iconUp, iconDown3);
//     iconUp.style.color="#fa5757"
// });


// // for closing
// var isIconDown3Expanded = false;
// function closeDropdown() {
//     askP3.style.display = "none";
//     askH3.style.color="252b46"
//     // iconDown2.innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
//     iconDown3.style.color = "#252b46"; 
//     isIconDown3Expanded = false;
// }

// iconDown3.addEventListener("click", () => {
//     if (isIconDown3Expanded) {
//         closeDropdown();
//     } else {
//         closeDropdown(); 
//         askP3.style.display = "block";
//         iconDown3.innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
//         iconDown3.style.color = "#5368df";
//         isIconDown3Expanded = true;
//     }
// });
// // question four
// iconDown4.addEventListener ("click", ()=>{
//     askP4.style.display= "block";
//     askH4.style.color="#fa5757"
//     iconDown4.parentNode.replaceChild(iconUp, iconDown4);
//     iconUp.style.color="#fa5757"
// });


// // for closing
// var isIconDown4Expanded = false;
// function closeDropdown() {
//     askP4.style.display = "none";
//     // iconDown2.innerHTML = "<i class='fa-solid fa-chevron-down'></i>";
//     askH4.style.color="#fa5757"
//     iconDown4.style.color = "#252b46"; 
//     isIconDown4Expanded = false;
// }

// iconDown4.addEventListener("click", () => {
//     if (isIconDown4Expanded) {
//         closeDropdown();
//     } else {
//         closeDropdown(); 
//         askP4.style.display = "block";
//         // iconDown4.innerHTML = "<i class='fa-solid fa-chevron-up'></i>";
//         iconDown4.style.color = "#5368df";
//         isIconDown4Expanded = true;
//     }
// });

// first question
iconDown1.addEventListener("click", () => {
    toggleDropdown(askP1, askH1, iconDown1);
    
});

// second question
iconDown2.addEventListener("click", () => {
    toggleDropdown(askP2, askH2, iconDown2);
});

// third question
iconDown3.addEventListener("click", () => {
    toggleDropdown(askP3, askH3, iconDown3);
});

// fourth question
iconDown4.addEventListener("click", () => {
    toggleDropdown(askP4, askH4, iconDown4);

});

function toggleDropdown(askP, askH, iconDown) {
    if (askP.style.display === "block") {
        askP.style.display = "none";
        askH.style.color = "#252b46";
        iconDown.style.color = "#fa5757";
        
        // iconDown.parentNode.replaceChild( iconDown, iconUp);

    } else {
        // Close all other dropdowns here if needed
        closeAllDropdowns();
        
        askP.style.display = "block";
        askH.style.color = "#fa5757";
        // iconDown.parentNode.toggle(iconUp, iconDown);
        iconUp.style.color="#fa5757"
        iconDown.style.color = "#5368df";
        // iconDown.parentNode.replaceChild( iconUp,iconDown);
    }
}

function closeAllDropdowns() {
    askP1.style.display = "none";
    askH1.style.color = "#252b46";
    iconDown1.style.color = "#5368df";
    // iconDown1.parentNode.replaceChild(iconUp, iconDown1);

    askP2.style.display = "none";
    askH2.style.color = "#252b46";
    iconDown2.style.color = "#5368df";
    // iconDown2.parentNode.replaceChild(iconUp, iconDown2);

    askP3.style.display = "none";
    askH3.style.color = "#252b46";
    iconDown3.style.color = "#5368df";
    // iconDown3.parentNode.replaceChild(iconUp, iconDown3);

    askP4.style.display = "none";
    askH4.style.color = "#252b46";
    iconDown4.style.color = "#5368df";
    // iconDown4.parentNode.replaceChild(iconUp, iconDown4);
}
// iconUp.addEventListener("click",()=>{
//     iconDown.parentNode.replaceChild(iconDown, iconUp);
// });
    

// =========================================================
// ========== Animation for section Frequently ==========================
// let frecuentlyQuestions =document.querySelector(".questions")
gsap.registerPlugin(ScrollTrigger);
gsap.to(".questions",{
    opacity:1,
    duration:1.5,
    stragger:0.5,
    ease:"power2.out",
    scrollTrigger:{
        trigger:".questions",
        start:"top 55%",
    },
});
