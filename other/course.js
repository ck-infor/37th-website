var aftCourseList = ["伺服器維運", "機器學習", "Flask", "演算法", "R語言"];
var week = ["星期一", "星期二", "星期三", "星期四", "星期五"];
var aftCourseIntro = [
    "在這個課程中，我們將帶你從零開始學習伺服器維運的核心技能，讓你能夠架設、管理與維護各類型的伺服器環境。本課程涵蓋 Linux 系統操作、SSH 遠端管理、Docker 容器化技術，以及 基礎網路設定 等關鍵知識，幫助你建立穩定且高效的伺服器架構。", 
    "時代更迭，現今社會中已脫離不了人工智慧帶來的便利性，從近期炙手可熱的大型語言模型可見，人工智慧的發展與其重要性是遠遠大於以往。本課程將會從底層原理，帶領大家從零開始實作出屬於自己的神經網路，並循序漸進進行更多基於機器學習下的應用實作，以及大語言模型背後的架構原理解析與實際運用時之調整技術。", 
    "這是一門針對 Flask 的Web 開發課程，在這門課程中，我們將學習如何建立一個具有完整功能的 Web 應用，包括 動態網頁渲染、用戶認證、實時通信、資料庫整合 和 模組化設計。課程將通過實作案例來講解每一個概念，並為你提供完成真正 Web 應用所需的技能。", 
    "這門課程將帶你深入理解核心的演算法與資料結構，從基礎到進階，涵蓋排序、遞迴、動態規劃、圖論、資料結構等更多進階的主題。<br></br><br></br>下學期課程將與建北電資合作同時開兩堂課：基礎班 & 進階班<br></br><br></br>基礎班：<br></br>大致與上學期課程相同，從 C++ 語法到全部 APCS 實作考試範圍，涵蓋排序、遞迴、動態規劃、圖論等多個教學主題，<br></br>歡迎下學期想開始學 C++ 的同學們來聽課。<br></br><br></br>進階班：<br></br>如果你上學期有上演算法課程，想要學習更進階的課程內容，我們將教學各式競賽常用資料結構、樹論、進階圖論等多個進階課程主題。", 
    "此堂課程逐步將學習掌握 R 語言的核心概念與應用。課程內容涵蓋基礎語法、數據處理、視覺化與統計分析等，並透過實作練習，培養學生運用 R 進行數據探索的能力。課堂中將學到讀取與整理數據進行基礎數據分析，為未來的學術研究與專題報告打下基礎。"
]
var aftCoursePhotos = [
    "./photos/courses/server.png", "./photos/courses/AI.webp", "./photos/courses/Flask_logo.svg", 
    "./photos/courses/algorithm.png", "./photos/courses/R_language.webp"
]

function start() {

    var paragraph = document.getElementById("paragraph");
    var course = document.createElement("p");
    var span = document.createElement("span");
    course.classList.add("topic");
    span.innerHTML = "社課";
    span.classList.add("highLightOuter");
    span.classList.add("hidden");
    span.style.backgroundColor = "none";
    course.appendChild(span);
    paragraph1.appendChild(course);

    var introduceText = document.createElement("p");
    introduceText.innerHTML = "社課是在每個禮拜五下午的第一堂課，所有社員皆需要來參加，我們的上課地點在資源大樓(夢紅樓旁)三樓的電腦教室二，會有專業的講師在社課中教授一些基礎的程式相關知識，即使之前鮮少接觸程式，也可以在社課中快速掌握相關概念！我們這學期會在社課中教學的內容主要有Python基礎語法、基礎應用、機器學習等多元課程，以及最後留幾堂課的時間讓社員們進行成果發表，互相交流、切磋！<br><br> 下學期社課規劃：<br>JavaScript基礎語法、非典型演算法、單元式小主題";
    introduceText.classList.add("innerText");
    introduceText.classList.add("hidden");
    paragraph1.appendChild(introduceText);

    var afterSchoolCourse = document.createElement("p");
    afterSchoolCourse.classList.add("topic");
    var aftSpan = document.createElement("span");
    aftSpan.innerHTML = "放課";
    aftSpan.classList.add("highLightOuter");
    aftSpan.classList.add("hidden");
    aftSpan.style.backgroundColor = "none";
    afterSchoolCourse.appendChild(aftSpan);
    paragraph2.appendChild(afterSchoolCourse);

    var aftIntroText = document.createElement("p");
    aftIntroText.innerHTML = "放課可以說是資訊社的精華部分，我們會在每個禮拜的一到五放學後的晚上6:00~8:00跟成功、中山、景美在資源大樓三樓電腦教室二舉行，這邊的教學內容會較社課來的更為進階，多了更多實作的部分，不管你是想要來精進自己的程式技術，又或是想要來跟講師討論、切磋，甚至是想要來把講師電爛，放課都是你的不二選擇！";
    aftIntroText.classList.add("innerText");
    aftIntroText.classList.add("hidden");
    paragraph2.appendChild(aftIntroText);

    // for(var i = 0; i < week.length; i++) {
    //     var topic = document.createElement("p");
    //     topic.classList.add("topic");
    //     var spans = document.createElement("span");
    //     spans.innerHTML = aftCourseList[i];
    //     spans.style.fontSize = "24px";
    //     spans.classList.add("highLight");
    //     spans.style.backgroundColor = "gold";
    //     topic.appendChild(spans);
    //     paragraph.appendChild(topic);

    //     var container = document.createElement("div");
    //     container.classList.add("content");

    //     var text = document.createElement("div");
    //     var description = document.createElement("p");
    //     description.innerHTML = aftCourseIntro[i];
    //     text.appendChild(description);

    //     var photo = new Image();
    //     photo.src = aftCoursePhotos[i];
    //     photo.alt = "課程照片"; 
    //     photo.className = "myimg";
    //     photo.style.maxWidth = "50%";
    //     photo.style.height = "auto";

    //     photo.classList.add("left");
    //     container.appendChild(photo);
    //     container.appendChild(text);
    //     paragraph.appendChild(container);
    // }
    // var lessonList = document.createElement("div");
    // lessonList.id = "lessonList";
    // lessonList.classList.add("card-array");

    // const boxMaxWidth = "465px";
    // for(var i = 0; i < week.length; i++) {
    //     var container = document.createElement("div");
    //     container.classList.add("lesson-card");

    //     var topic = document.createElement("p");
    //     topic.classList.add("topic");
    //     topic.classList.add("noMargin");
    //     var spans = document.createElement("span");
    //     spans.innerHTML = aftCourseList[i];
    //     spans.style.fontSize = "24px";
    //     spans.classList.add("highLight");
    //     spans.style.backgroundColor = "gold";
    //     topic.appendChild(spans);

    //     var text = document.createElement("div");
    //     text.classList.add("lesson-card-text");
    //     var description = document.createElement("p");
    //     description.innerHTML = aftCourseIntro[i]
    //     text.appendChild(topic);
    //     text.appendChild(description);

    //     var photo = new Image();
    //     photo.src = aftCoursePhotos[i];
    //     photo.alt = "課程照片"; 
    //     photo.className = "myimg";
    //     photo.style.maxWidth = boxMaxWidth;
    //     photo.style.maxHeight = "auto";

    //     var button = document.createElement("input");
    //     button.type = "button";
    //     button.value = "更多資訊";
    //     button.id = "button" + i;
    //     button.classList.add("info-button");
    //     button.classList.add("lesson-card-button");
    //     if(i == 0) {
    //         button.addEventListener("click", console.log("hi"));
    //     }
    //     else if(i == 1) {
    //         button.onclick = tuesday();
    //     }
    //     else if(i == 2) {
    //         button.onclick = wednesday();
    //     }
    //     else if(i == 3) {
    //         button.onclick = thursday();
    //     }
    //     else {
    //         button.onclick = friday();
    //     }
    //     container.appendChild(photo);
    //     container.appendChild(text);
    //     container.appendChild(button);
    //     lessonList.appendChild(container);
    // }
    // paragraph.appendChild(lessonList);

    var myInterval = setInterval(check(), 20);
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
    document.querySelectorAll('.innerText').forEach(function(paragraph) {
        observer.observe(paragraph);
    });
    document.querySelectorAll('.highLightOuter').forEach(function(span) {
        observer.observe(span);
    });
    document.querySelectorAll(".lesson-card").forEach(function(card) {
        observer.observe(card);
    })
}

function newMessageBox(id) {
    console.log(id);
    $.MessageBox({
        buttonDone : {
            closeBtn : {
                text : "關閉",
                keyCode : 13,
                customClass : "msgBtn"
            }
        },
        title : aftCourseList[id],
        message : "<img src=\"" + aftCoursePhotos[id] + "\" class=\"msgPhoto\"><p class=\"msgText\">" + aftCourseIntro[id] + "</p>",
        customClass : "msgBox",
        top : "auto"
    }) 
}

function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}