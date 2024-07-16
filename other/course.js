function start() {
    var aftCourseList = ["星期一課程", "星期二課程", "星期三課程", "星期四課程", "星期五課程"];
    var week = ["星期一", "星期二", "星期三", "星期四", "星期五"];
    var aftCourseIntro = [
        "這是星期一的課程", "這是星期二的課程", "這是星期三的課程", "這是星期四的課程", "這是星期五的課程"
    ]
    var aftCoursePhotos = [
        "./photos/Java_logo.png", "./photos/Java_logo.png", "./photos/Java_logo.png", 
        "./photos/Java_logo.png", "./photos/Java_logo.png"
    ]

    var paragraph = document.getElementById("paragraph");
    var course = document.createElement("p");
    var span = document.createElement("span");
    course.classList.add("topic");
    span.innerHTML = "社課";
    span.classList.add("highLightOuter");
    span.classList.add("hidden");
    span.style.backgroundColor = "gold";
    course.appendChild(span);
    paragraph.appendChild(course);

    var introduceText = document.createElement("p");
    introduceText.innerHTML = "社課是在每個禮拜五下午的第一堂課，所有社員皆需要來參加，我們的上課地點在資源大樓(夢紅樓旁)三樓的電腦教室二，會有專業的講師在社課中教授一些基礎的程式相關知識，即使之前鮮少接觸程式，也可以在社課中快速掌握相關概念！我們會在社課中教學的內容主要有...，";
    introduceText.classList.add("innerText");
    introduceText.classList.add("hidden");
    paragraph.appendChild(introduceText);

    var photoArea = document.createElement("div");
    photoArea.classList.add("content");
    paragraph.appendChild(photoArea);

    var afterSchoolCourse = document.createElement("p");
    afterSchoolCourse.classList.add("topic");
    var aftSpan = document.createElement("span");
    aftSpan.innerHTML = "放課";
    aftSpan.classList.add("highLightOuter");
    aftSpan.classList.add("hidden");
    aftSpan.style.backgroundColor = "gold";
    afterSchoolCourse.appendChild(aftSpan);
    paragraph.appendChild(afterSchoolCourse);

    var aftIntroText = document.createElement("p");
    aftIntroText.innerHTML = "放課可以說是資訊社的精華部分，我們會在每個禮拜的一到五放學後的晚上6:00~8:00跟成功、中山、景美在資源大樓三樓電腦教室二舉行，這邊的教學內容會較社課來的更為進階，多了更多實作的部分，不管你是想要來精進自己的程式技術，又或是想要來跟講師討論、切磋，甚至是想要來把講師電爛，放課都是你的不二選擇！";
    aftIntroText.classList.add("innerText");
    aftIntroText.classList.add("hidden");
    paragraph.appendChild(aftIntroText);

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
    var lessonList = document.createElement("div");
    lessonList.id = "lessonList";
    lessonList.classList.add("card-array");

    const boxMaxWidth = "465px";
    for(var i = 0; i < week.length; i++) {
        var container = document.createElement("div");
        container.classList.add("lesson-card");

        var topic = document.createElement("p");
        topic.classList.add("topic");
        topic.classList.add("noMargin");
        var spans = document.createElement("span");
        spans.innerHTML = aftCourseList[i];
        spans.style.fontSize = "24px";
        spans.classList.add("highLight");
        spans.style.backgroundColor = "gold";
        topic.appendChild(spans);

        var text = document.createElement("div");
        text.classList.add("lesson-card-text");
        var description = document.createElement("p");
        description.innerHTML = aftCourseIntro[i]
        text.appendChild(topic);
        text.appendChild(description);

        var photo = new Image();
        photo.src = aftCoursePhotos[i];
        photo.alt = "課程照片"; 
        photo.className = "myimg";
        photo.style.maxWidth = boxMaxWidth;
        photo.style.maxHeight = "auto";

        var button = document.createElement("button");
        button.innerHTML = "更多資訊";
        button.classList.add("info-button");
        button.classList.add("lesson-card-button");
        
        container.appendChild(photo);
        container.appendChild(text);
        container.appendChild(button);
        lessonList.appendChild(container);
    }
    paragraph.appendChild(lessonList);

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
}