var aftCourseList = ["演算法", "微積分+LaTeX", "Markdown語法", "電繪", "網頁前端"];
var week = ["星期一", "星期二", "星期三", "星期四", "星期五"];
var aftCourseIntro = [
    "這門課程將帶你深入理解核心的演算法與資料結構，從基礎到進階，涵蓋排序、遞迴、動態規劃、圖論、資料結構等更多進階的主題。", "這門課會讓你了解什麼是微積分，以及微積分的計算方式和相關數學技巧，同時也會教你如何使用Latex，這不僅能把複雜數學公式呈現，也能利於文件排版及套件使用", "這是一趟輕鬆的MarkDown課程，這堂課會教你如何製作筆記和一些適合用在discord的語法", "是否因為不會美編、沒有美感導致自己的網頁看起來不盡人意？那麼這節課將會教你最基礎的美宣，從畫icon 到畫人體，讓你的程式作品看起來更加完美！", "本堂課程將會教導如何使用 HTML、CSS、Javascript 進行網頁前端介面與互動的開發，課程將會偏向使用Javascript 設計網頁遊戲，適合剛接觸資訊科技的新手入門。"
]
var aftCoursePhotos = [
    "./photos/courses/algorithm.png", "./photos/courses/calculus.png", "./photos/courses/markdown.jpg", 
    "./photos/courses/computer-graphics.png", "./photos/courses/front-end.jpeg"
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
    introduceText.innerHTML = "社課是在每個禮拜五下午的第一堂課，所有社員皆需要來參加，我們的上課地點在資源大樓(夢紅樓旁)三樓的電腦教室二，會有專業的講師在社課中教授一些基礎的程式相關知識，即使之前鮮少接觸程式，也可以在社課中快速掌握相關概念！我們這學期會在社課中教學的內容主要有Python基礎語法、基礎應用、機器學習等多元課程，以及最後留幾堂課的時間讓社員們進行成果發表，互相交流、切磋！";
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