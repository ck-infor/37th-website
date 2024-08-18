function start() {
    var nameList = [
        "林顯至", "李則聿", "林俐辰", "翁浩洋",
        "温世揚", "陳秉澤", "孫唯善", "林楚鈞", 
        "李宸漢", "王丞佑"
    ];
    var position= [
        "社長 X 學術", "副社長 X 網管","外交長", "學術長", "學術", "行政長", "行政 X 衛生", "總務", "美宣", "美宣"
    ];
    var descriptionList = [
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>",
        "<h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p><h2>#</h2><p></p>"
    ]
    
    for (var i = 0; i < nameList.length; i++) {
        var target = document.getElementById("pack" + i);
        var element = document.createElement("div");
        element.classList.add("nameText");
        element.innerHTML = nameList[i];
        var spanPos = document.createElement("span");
        spanPos.classList.add("positionText");
        spanPos.innerHTML = position[i];
        var hrLine = document.createElement("hr");
        element.appendChild(hrLine);
        element.classList.add("hidden");
        element.appendChild(spanPos);
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
    document.querySelectorAll('.nameText').forEach(function(span) {
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

function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}