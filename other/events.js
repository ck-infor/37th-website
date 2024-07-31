var introList = ["我們會在茶會與來自全台各地的友社進行交流活動，除了會舉行新舊兩屆幹部的交接儀式，也會進行各種有趣的遊戲，此外，我們也會前往台北的各名勝景點夜遊，是認識其他友社社員的大好機會！",
    ""];

function start() {
    var target = document.getElementById("event");
    var topicList = ["茶會", "暑訓", "迎新", "秋遊", "社慶", "耶誕晚會", "寒訓", "春遊"];
    var timeList = ["2023.7.8 ~ 2023.7.9", ""];
    var photoList = ["./photos/teaparty.jpg", ""];
    var signList = ["活動已結束", "報名已結束", "尚未開放報名", "尚未開放報名", "尚未開放報名", "尚未開放報名", "尚未開放報名", "尚未開放報名"]

    for(var i = 0; i < topicList.length; i++) {
        var container = document.createElement("div");
        container.classList.add("container");
        container.classList.add("hidden");
        
        var topic = document.createElement("p");
        topic.classList.add("topic");
        var span = document.createElement("span");
        span.classList.add("highLight");
        span.innerHTML = topicList[i];
        topic.appendChild(span);
        container.appendChild(topic);

        var photo = new Image();
        photo.src = photoList[i];
        photo.alt = topicList[i] + "照片";
        photo.classList.add("myimg");
        container.appendChild(photo);

        var introText = document.createElement("p");
        introText.classList.add("innerText");
        introText.id = "intro" + i;
        container.appendChild(introText);

        var time = document.createElement("p");
        time.classList.add("innerText");
        time.innerHTML = "活動時間：" + timeList[i];
        container.appendChild(time);

        var sign = document.createElement("p");
        sign.classList.add("innerText");
        if(signList[i].search("^http") == -1) {
            sign.innerHTML = signList[i];
        }
        else {
            var link = document.createElement("a");
            link.href = signList[i];
            link.classList.add("link");
            sign.appendChild(link);
        }
        container.appendChild(sign);

        target.appendChild(container);

        setInterval(check, 20);
    }
}

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if(String(entry.target.id).search("^intro") != -1) {
                if(entry.target.classList[1] != "runed") {
                    typeWriter(introList[String(entry.target.id)[String(entry.target.id).length - 1]], String(entry.target.id), 100);
                    entry.target.classList.add("runed");
                }
            }
            else if(entry.target.classList[0] == "container"){
                entry.target.classList.add("slide-in");
                entry.target.classList.remove("hidden");
            }
        }
    });
}, { threshold: 0.1 });

function check() {
    document.querySelectorAll('.container').forEach(function(paragraph) {
        observer.observe(paragraph);
    });
    document.querySelectorAll(".innerText").forEach(function(text) {
        observer.observe(text);
    });
}