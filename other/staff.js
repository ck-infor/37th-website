function start() {
    var nameList = [
        "社長&學術 林顯至", "副社長&網管 李則聿", "外交長 林俐辰", "學術長 翁浩洋",
        "學術 温世揚", "行政長 陳秉澤", "行政&衛生 孫唯善", "總務 林楚鈞", 
        "美宣 李宸漢", "美宣 王丞佑"
    ];

    var descriptionList = [
        "123334394849548504t<br></br>8940gjkfj9850438260986025396823058432-59820540", "123334394849548504t8940gjkfj98504382609860253968230jiou4iu0394u5803u4 8ufi disukljfk58432-59820540", "e", "eji", "jkv", "d", "d", "e", "ef", "jvl"
    ]
    
    for (var i = 0; i < nameList.length; i++) {
        var target = document.getElementById("pack" + i);
        var element = document.createElement("p");
        var span = document.createElement("span");
        element.style.color = "black";
        element.style.fontSize = "30px";
        element.style.textAlign = "center";
        span.innerHTML = nameList[i];
        span.classList.add("highLight");
        span.classList.add("hidden");
        span.style.backgroundColor = "gold";
        element.appendChild(span);
        target.appendChild(element);

        var container = document.createElement("div");
        container.classList.add("content");
        var text = document.createElement("div");
        text.classList.add("textContainer");
        var description = document.createElement("p");
        description.classList.add("paragraph");
        description.classList.add("hidden");
        description.innerHTML = descriptionList[i];
        text.appendChild(description);

        var photo = new Image();
        photo.src = "./photos/cccc.jpg";
        photo.alt = "社員照片"; 
        photo.classList.add("myimg");
        photo.classList.add("hidden");

        if (i % 2 == 0) {
            container.appendChild(photo);
            container.appendChild(text);
        } 
        else {
            container.appendChild(text);
            container.appendChild(photo);
        }

        target.appendChild(container);
    }

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
    document.querySelectorAll('.myimg').forEach(function(img) {
        observer.observe(img);
    });
    document.querySelectorAll('.paragraph').forEach(function(paragraph) {
        observer.observe(paragraph);
    });
    document.querySelectorAll('.highLight').forEach(function(span) {
        observer.observe(span);
    });
}

// document.addEventListener("DOMContentLoaded", () => {
//     var elements = document.querySelectorAll(".clearfix");

//     elements.forEach((element) => {
//         element.addEventListener("mouseenter", () => {
//             console.log("hi");
//             var container = element.querySelector(".myimg");
//             console.log(container);
//             container.classList.add("slide-in");
//         });

//         element.addEventListener("mouseleave", () => {
//             var container = element.querySelector(".myimg");
//             container.classList.remove("slide-in");
//         });
//     });
// });
