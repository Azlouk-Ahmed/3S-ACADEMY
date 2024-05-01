let dark__button = document.querySelector(".checkbox");
const darkMode = localStorage.getItem("dark-mode");
var quizimg = document.querySelector("#quizimg");
let banner = document.querySelector(".page");

if (darkMode === "enabled") {

    dark__button.checked = true;
    if (quizimg) {
        quizimg.setAttribute("src","img/darkquiz.png");
    }
    if (banner) {
        banner.style.backgroundImage ="url(../3S_PRING/img/coursesbannerdark.png)";
    }
    document.documentElement.style.setProperty("--light-bg","#232323");
    document.documentElement.style.setProperty("--bg","#232323");
    document.documentElement.style.setProperty("--title","white");
    document.documentElement.style.setProperty("--lighter-bg","rgb(50 50 50)");
    document.documentElement.style.setProperty("--border","rgb(255 255 255 / 22%)");
    document.documentElement.style.setProperty("--reversalborder","#8B54FF");
    document.documentElement.style.setProperty("--shadowdark","0px 3px 16px #7346d199");
    document.documentElement.style.setProperty("--bgbg","#291935");
    document.documentElement.style.setProperty("--text","#D9D9D9");
    document.querySelector(".landing")?.classList.remove("bg_i");
    console.log("Dark mode enabled");
} else if (darkMode === "disabled") {
    if (banner) {
        banner.style.backgroundImage ="url(../3S_PRING/img/coursesbanner.png)";
    }
    dark__button.checked = false;
    if (quizimg) {
        quizimg.setAttribute("src","img/lightquiz.png");
    }
    document.documentElement.style.setProperty("--text","#545252");
    document.documentElement.style.setProperty("--bgbg","#f3f6fb");
    document.documentElement.style.setProperty("--light-bg","#ffffff");
    document.documentElement.style.setProperty("--bg","#f3f6fb");
    document.documentElement.style.setProperty("--title","#0F2239");
    document.documentElement.style.setProperty("--lighter-bg","#ffffff");
    document.documentElement.style.setProperty("--border","rgba(25, 35, 53, 0.2)");
    document.documentElement.style.setProperty("--reversalborder","ffffff00");
    document.documentElement.style.setProperty("--shadowdark","0px 0px 0px #7346d199");
    document.querySelector(".landing")?.classList.add("bg_i");
    console.log("Dark mode disabled");
} else {
    console.log("Invalid value for dark mode:", darkMode);
}


let links = document.getElementById("links");

let burger = document.querySelector("nav > svg");

burger?.addEventListener("click",()=> {
    links?.classList.contains("active-links")? links?.classList.remove("active-links") : links?.classList.add("active-links")
})


dark__button.onclick = () => {
    var quizimg = document.querySelector("#quizimg");

    
    if(dark__button.checked){
        if (quizimg) {
            quizimg.setAttribute("src","img/darkquiz.png");
        }
        if (banner) {
            banner.style.backgroundImage ="url(../3S_PRING/img/coursesbannerdark.png)";
        }
        localStorage.setItem("dark-mode","enabled");
        document.documentElement.style.setProperty("--light-bg","#232323");
        document.documentElement.style.setProperty("--text","#D9D9D9");
        document.documentElement.style.setProperty("--bg","#232323");
        document.documentElement.style.setProperty("--title","white");
        document.documentElement.style.setProperty("--lighter-bg","rgb(50 50 50)");
        document.documentElement.style.setProperty("--border","rgb(255 255 255 / 22%)");
        document.documentElement.style.setProperty("--reversalborder","#8B54FF");
        document.documentElement.style.setProperty("--shadowdark","0px 3px 16px #7346d199");
        document.documentElement.style.setProperty("--bgbg","#291935");
        document.querySelector(".landing")?.classList.remove("bg_i");
    }else {
        if (quizimg) {
            quizimg.setAttribute("src","img/lightquiz.png");
        }
        if (banner) {
            banner.style.backgroundImage ="url(../3S_PRING/img/coursesbanner.png)";
        }
        localStorage.setItem("dark-mode","disabled");
        document.documentElement.style.setProperty("--text","D9D9D9");
        document.documentElement.style.setProperty("--light-bg","#ffffff");
        document.documentElement.style.setProperty("--bgbg","#f3f6fb");
    document.documentElement.style.setProperty("--bg","#f3f6fb");
    document.documentElement.style.setProperty("--title","#0F2239");
    document.documentElement.style.setProperty("--lighter-bg","#ffffff");
    document.documentElement.style.setProperty("--border","rgba(25, 35, 53, 0.2)");
    document.documentElement.style.setProperty("--reversalborder","ffffff00");
    document.documentElement.style.setProperty("--shadowdark","0px 0px 0px #7346d199");
    document.querySelector(".landing")?.classList.add("bg_i");
    
}
}

let authHandler = document.querySelector(".form--buttons");

if(authHandler) {
    let animate = document.getElementById("animate");
    let signupform = document.querySelector(".signupform");
    let loginform = document.querySelector(".loginform");
    
    authHandler.onclick = (e) => {
        if (e.target.innerText === "login") {
            loginform.classList.add("activeauthform")
            animate.classList.remove("move")
            signupform.classList.remove("activeauthform")
            
        } else if(e.target.innerText === "signup") {
            animate.classList.add("move")
            loginform.classList.remove("activeauthform")
            signupform.classList.add("activeauthform")
            
        }
    }
}


const coursesSection = document.getElementById("coursessection");
if(coursesSection) {
    window.onscroll = function(){
        if(window.scrollY + 800>= coursesSection.offsetTop){
            coursesSection.classList.add("active-translate");
        }
        else{
            coursesSection.classList.remove("active-translate");
        }
    }
}


let nums = document.querySelectorAll(".num");
let section = document.querySelector(".carousel");

let map = document.querySelector("#map");


function startCount(el) {
    let goal = parseInt(el.dataset.goal, 10);  
    let current = parseInt(el.textContent, 10);
    

    if (current < goal) {
        let count = setInterval(() => {
            current++;
            el.textContent = current;
            if (current >= goal) {
                clearInterval(count);
            }
        }, 1000 / goal);
    }
}

function resetCount() {
    nums.forEach(function(element) {
        element.textContent = '0';
    });
}
if(nums && section) {

    let observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                nums.forEach(element => {
                    startCount(element);
                });
            } else {
                resetCount();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(section);
}

if(map) {
    let observer = new IntersectionObserver((entries, observer) => {
        map.classList.add("active")
    }, { threshold: 0.5 });
    
    observer.observe(map);

}


var elem = document.getElementById("overview"); 
if(elem){
    elem.style.opacity = "1"
    elem.style.height = "fit-content";
}  

function openTab(evt, tab) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.opacity = "0";
      tabcontent[i].style.height = "0";
      tabcontent[i].style.padding = "0";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tab).style.opacity = "1";   
    document.getElementById(tab).style.height = "fit-content";
    evt.currentTarget.className += " active";
  }


  document.addEventListener("DOMContentLoaded", function () {
    "use strict";

    var progressPath = document.querySelector(".progress-wrap path");
    var pathLength = progressPath.getTotalLength();
    progressPath.style.transition = "none";
    progressPath.style.strokeDasharray = pathLength + " " + pathLength;
    progressPath.style.strokeDashoffset = pathLength;
    progressPath.getBoundingClientRect();
    progressPath.style.transition = "stroke-dashoffset 10ms linear";

    function updateProgress() {
        var scroll = window.pageYOffset || document.documentElement.scrollTop;
        var height = document.documentElement.scrollHeight - window.innerHeight;
        var progress = pathLength - (scroll * pathLength) / height;
        progressPath.style.strokeDashoffset = progress;
    }

    updateProgress();
    window.addEventListener("scroll", updateProgress);

    var offset = 50;
    var duration = 550;
    window.addEventListener("scroll", function () {
        if (window.scrollY > offset) {
            document.querySelector(".progress-wrap").classList.add("active-progress");
        } else {
            document.querySelector(".progress-wrap").classList.remove("active-progress");
        }
    });
    

    document.querySelector(".progress-wrap").addEventListener("click", function (event) {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});


