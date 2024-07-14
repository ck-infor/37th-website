function start() {
    var nameList = [
        "社長&學術 林顯至", "副社長&網管 李則聿", "外交長 林俐辰", "學術長 翁浩洋",
        "學術 温世揚", "行政長 陳秉澤", "行政&衛生 孫唯善", "總務 林楚鈞", 
        "美宣 李宸漢", "美宣 王丞佑"
    ];

    var descriptionList = [
        "哈囉", "hi", "e", "eji", "jkv", "d", "d", "e", "ef", "jvl"
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
        span.style.backgroundColor = "gold";
        element.appendChild(span);
        target.appendChild(element);

        var container = document.createElement("div");
        container.classList.add("content");
        var text = document.createElement("div");
        var description = document.createElement("p");
        text.innerHTML = descriptionList[i];
        text.appendChild(description);

        var photo = new Image();
        photo.src = "./photos/cccc.jpg";
        photo.alt = "社員照片"; 
        photo.className = "myimg";
        photo.style.maxWidth = "50%";
        photo.style.height = "auto";

        if (i % 2 == 0) {
            photo.classList.add("left");
            container.appendChild(photo);
            container.appendChild(text);
        } 
        else {
            photo.classList.add("right");
            container.appendChild(text);
            container.appendChild(photo);
        }

        target.appendChild(container);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    var elements = document.querySelectorAll(".clearfix");

    elements.forEach((element) => {
        element.addEventListener("mouseenter", () => {
            console.log("hi");
            var container = element.querySelector(".myimg");
            console.log(container);
            container.classList.add("slide-in");
        });

        element.addEventListener("mouseleave", () => {
            var container = element.querySelector(".myimg");
            container.classList.remove("slide-in");
        });
    });
});
