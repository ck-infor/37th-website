var slideIndex = 1;
var slideBack = 1;
var nextPhoto = {
    reset : function() {
        clearInterval(this.nextInterval);
        slideBack = slideIndex;
        this.nextInterval = setInterval(() => {
            if((slideBack == slideIndex) && (this.checker)) {
               plusSlides(1);
               nextPhoto.reset();
            }
        }, 5000);
    },
    nextInterval : null,
    checker : true
}

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1;
    }    
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" Active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " Active";
    nextPhoto.reset();
}

nextPhoto.reset();

function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        nextPhoto.checker = true;
    } 
    else {
        x.style.display = "block";
        nextPhoto.checker = false;
    }
}

function start() {
    var topicList = ["建國中學資訊社", "IZCC"];
    var clubchnameList=["建國中學資訊社", "中山女高資訊研究社", "成功高中電子計算機研習社", "景美女中電腦資訊社"]
    var clubennameList = ["INFOR", "ZSISC", "CKCSC", "CMIOC"]
    var clublogoList =["./other/photos/clublogo/infor.png", "./other/photos/clublogo/zsisc.png", "./other/photos/clublogo/ckcsc.png", "./other/photos/clublogo/cmioc.png"]
    var introduceTextList = ["建中資訊社是一個專注於電腦和資訊科技的學術性社團。在這裡，你可以學習程式設計、演算法、網頁開發、人工智慧等科技領域的課程。除此之外，你還可以認識許多學術力一流的同儕，並與友校的朋友交流。",
    "IZCC是建中資訊 (INFOR)、 中山資研 (ZSISC)、成功電研 (CKCSC)與景美電資 (CMIOC) 的合稱。IZCC由一群熱愛資訊的人們組成。放學會舉辦課程一同學習，也會共同舉辦活動，像是暑訓、秋遊、耶誕晚會等......"];
    var paragraph = document.getElementById("introduction");

    for(var i = 0; i < topicList.length; i++) {
        var container = document.createElement("div");
        container.classList.add("introContainer");
        container.classList.add("hidden");

        var topic = document.createElement("div");
        topic.innerHTML = topicList[i];
        topic.classList.add("topic");
        container.appendChild(topic);

        var introText = document.createElement("div");
        introText.innerHTML = introduceTextList[i];
        introText.classList.add("introText");
        container.appendChild(introText);

        if(i==1){
            var ul=document.createElement("ul");
            ul.classList.add("clubsUl");
            for(var i = 0; i < clublogoList.length; i++){
                var li = document.createElement("li");
                li.style.maxWidth = "220px";
                li.style.paddingLeft = "10px";
                li.style.paddingRight = "10px";
                li.style.marginLeft = "auto";
                li.style.marginRight = "auto";
                var photo = new Image();
                photo.src = clublogoList[i];
                photo.alt = clublogoList[i] + "照片";
                photo.classList.add("clublogo");
                li.appendChild(photo);

                var chname=document.createElement("div");
                chname.classList.add("clubchname");
                chname.innerHTML = clubchnameList[i];
                li.appendChild(chname);

                var enname=document.createElement("div");
                enname.classList.add("clubenname");
                enname.innerHTML = clubennameList[i];
                li.appendChild(enname);
                ul.appendChild(li);
            }
        container.appendChild(ul);
        }
        paragraph.appendChild(container);                
    }       
    setInterval(check(), 50);

    //announcement
    if(sessionStorage.getItem("visited") != "true") {
        $.MessageBox({
            buttonDone : {
                closeBtn : {
                    text : "關閉",
                    keyCode : 13,
                    customClass : "msgBtn"
                }
            },
            buttonFail : {
                goBtn : {
                    text : "去看看",
                    customClass : "msgBtn",
                }
            },
            title : "最新公告",
            message : "<p class=\"msgText\">我們調換了星期三、四放課的順序。(Sep. 9, 2024)</p>",
            input : {
                checkbox : {
                    type : "checkbox",
                    title : "不再顯示",
                    class : "msgCheckBox"
                }
            },
            customClass : "msgBox",
            top : "auto"
        }).done((data) => {
            if(data["checkbox"]) {
                sessionStorage.setItem("visited", true);
            }
        }).fail((data) => {
            if(data["checkbox"]) {
                sessionStorage.setItem("visited", true);
            }
            if(window.location.href.search("index.html") != -1) {
                window.location.href = window.location.href.replace("index.html", "other/course.html");
            }
            else {
                window.location.href = window.location.href + "/other/course.html";
            }
        });
    }
}

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            entry.target.classList.remove("hidden");
        }
    });
}, { threshold: 0.1 });

function check() {
    document.querySelectorAll('.introContainer').forEach(function(paragraph) {
        observer.observe(paragraph);
    });
}