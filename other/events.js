var introList = ["我們會在茶會與來自全台各地的友社進行交流活動，除了會舉行新舊兩屆幹部的交接儀式，也會進行各種有趣的遊戲，此外，我們也會前往台北的各名勝景點夜遊，是認識其他友社社員的大好機會！",
    "暑訓是我們IZCC針對所有升高一新生的第一個活動，我們會舉行為期7天的各種有趣又神秘的活動，同時，在這7天的時間內，也會安排許多資訊相關的課程，讓你不只玩得開心、認識許多朋友，更能帶著知識滿載而歸！",
    "",
    "",
    "",
    "",
    "",
    "百花齊放，鳥語花香，太陽撥開白雲，用它的光驅散躲在城市中各個死角苟且偷生的寒氣，這麼美好的天氣，當然是要跟資訊社一起出門去玩啊，春遊，我們同樣精心規劃了好玩的行程，讓你在這春日之中，一邊沐浴著陽光，一邊與其他IZCC的社員漫談天下！"];

function start() {
    var target = document.getElementById("event");
    var topicList = ["茶會", "暑訓", "迎新", "秋遊", "社慶", "耶誕晚會", "寒訓", "春遊"];
    var timeList = ["2023.7.8 ~ 2023.7.9", "2024.8.5 ~ 2024.8.11", "尚未決定", "尚未決定", "尚未決定", "尚未決定", "尚未決定", "尚未決定"];
    var photoList = [
        "../other/photos/events/teaparty.jpg",
        "../other/photos/events/summercamp.jpeg",
        "../other/photos/events/welcome.JPG",
        "../other/photos/events/autumn.jpg",
        "../other/photos/events/party.jpg",
        "../other/photos/events/christmas.jpg",
        "../other/photos/events/wintercamp.jpg",
        "../other/photos/events/spring.jpg"];
    
        var signList = ["活動已結束", "活動已結束", "尚未開放報名", "尚未開放報名", "尚未開放報名", "尚未開放報名", "尚未開放報名", "尚未開放報名"]
    
        var events_color=["#F8EDE3", "#DFD3C3", "#d4d4d4", "#dcdcaa", "#FFF8DB", "#D0B8A8", "#DFD3C3", "#F8EDE3"]

    for(var i = 0; i < topicList.length; i++) {
        var container = document.createElement("div");
        container.classList.add("container");
        container.classList.add("hidden");
        container.style.backgroundColor = events_color[i];

        var space = document.createElement("div");
        space.classList.add("mobileSpace");
        container.appendChild(space);

        var topic = document.createElement("div");
        topic.classList.add("topic");
        var span = document.createElement("span");
        span.classList.add("highLight");
        span.innerHTML = topicList[i];
        topic.appendChild(span);
        container.appendChild(topic);

        var innerTextContainer = document.createElement("div");
        innerTextContainer.classList.add("outTopic");
        var informationContainer = document.createElement("div");
        informationContainer.classList.add("information");

        var photo = new Image();
        photo.src = photoList[i];
        photo.alt = topicList[i] + "照片";
        photo.classList.add("myimg");
        container.appendChild(photo);

        var mobileTopic = document.createElement("div");
        mobileTopic.classList.add("mobileTopic");
        mobileTopic.innerHTML = topicList[i];
        informationContainer.appendChild(mobileTopic);

        var hrLine = document.createElement("hr");
        hrLine.classList.add("hrLine");
        informationContainer.appendChild(hrLine);

        var time = document.createElement("p");
        time.classList.add("event_schedule_time");
        time.innerHTML = "活動時間：" + timeList[i];
        informationContainer.appendChild(time);

        var introText = document.createElement("p");
        introText.classList.add("innerText");
        introText.style.marginBottom = "20px"
        introText.id = "intro" + i;
        informationContainer.appendChild(introText);

        var sign = document.createElement("p");
        sign.classList.add("innerText");
        if(signList[i].search("^http") == -1) {
            if(signList[i].search("^活動已結束$") == 0) {
                var span = document.createElement("span");
                span.classList.add("register_status");
                span.style.backgroundColor = "#CE9178";
                span.style.color = "white";
                span.style.fontSize = "30px";
                span.innerHTML = signList[i];
                sign.appendChild(span);
            }
            else if(signList[i].search("^報名已結束$") == 0) {
                var span = document.createElement("span");
                span.classList.add("register_status");
                span.style.backgroundColor = "#6482AD";
                span.style.color = "white";
                span.style.fontSize = "30px";
                span.innerHTML = signList[i];
                sign.appendChild(span);
            }
            else {
                var span = document.createElement("span");
                span.classList.add("register_status");
                span.style.backgroundColor = "#3C3D37";
                span.style.color = "white";
                span.style.fontSize = "30px";
                span.innerHTML = signList[i];
                sign.appendChild(span);
            }
        }
        else {
            var span = document.createElement("span");
            span.classList.add("register_status");
            span.style.backgroundColor = "#9DC5A8";
            span.style.color = "white";
            var link = document.createElement("a");
            link.innerHTML = "點我前往報名";
            link.href = signList[i];
            link.classList.add("link");
            span.appendChild(link);
            sign.appendChild(span);
        }
        informationContainer.appendChild(sign);
        innerTextContainer.appendChild(photo);
        innerTextContainer.appendChild(informationContainer);
        container.appendChild(innerTextContainer);

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

function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}