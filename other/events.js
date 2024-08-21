var introList = ["我們會在茶會與來自全台各地的友社進行交流活動，除了會舉行新舊兩屆幹部的交接儀式，也會進行各種有趣的遊戲，此外，我們也會前往台北的各名勝景點夜遊，是認識其他友社社員的大好機會！",
    "暑訓是我們IZCC針對所有升高一新生的第一個活動，我們會舉行為期7天的各種有趣又神秘的活動，同時，在這7天的時間內，也會安排許多資訊相關的課程，讓你不只玩得開心、認識許多朋友，更能帶著知識滿載而歸！",
    "迎新活動是IZCC的年度盛事，我們會邀請來自各校的朋友們參與，透過在戶外舉行的大地遊戲和多樣化的活動，讓你能結識來自不同學校的新朋友。這不僅是一個能夠增進彼此了解的好機會，更是為新學年打下良好基礎的重要一步。",
    "秋遊活動是IZCC成員們在繁忙的學期中放鬆身心的最佳機會。這是一個一日遊，讓大家遠離城市的喧囂，享受大自然的美景與彼此的陪伴。我們將為大家準備輕鬆愉快的活動，讓你在短暫的秋日裡，享受難得的閒暇時光。",
    "社慶是建中資訊社的年度大聚會，是屬於我們的家庭日。除了現役成員外，許多已經畢業的學長們也會回來參加。活動當天，我們會一起享用美味的pizza和炸雞，喝著飲料，玩各種有趣的桌遊，更重要的是，這是一個與學長們分享經驗、拉近彼此距離的絕佳機會。",
    "聖誕節的耶誕晚會是IZCC四校聯合活動的一大亮點。在這個溫馨的節日裡，我們會舉辦交換禮物等有趣的活動，讓來自不同學校的社員們能夠在節日氣氛中互動交流，增進彼此的情誼。這是一個充滿驚喜與歡樂的夜晚，絕對不容錯過。",
    "寒訓是IZCC針對新進成員的另一個大型訓練活動，與暑訓相似，但我們會為這個冬天的寒訓準備一系列獨特的課程與活動。無論是挑戰自我的活動，還是深入資訊世界的學習課程，都將為你帶來無限的成長與樂趣。在這個寒假裡，你將與夥伴們一同創造難忘的回憶。",
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

        var mobile_schedule_time = document.createElement("p");
        mobile_schedule_time.classList.add("mobile_schedule_time");
        mobile_schedule_time.innerHTML =" "+ timeList[i];
        informationContainer.appendChild(mobile_schedule_time);

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
                span.style.fontSize = "20px";
                span.innerHTML = signList[i];
                sign.appendChild(span);
            }
            else if(signList[i].search("^報名已結束$") == 0) {
                var span = document.createElement("span");
                span.classList.add("register_status");
                span.style.backgroundColor = "#6482AD";
                span.style.color = "white";
                span.style.fontSize = "20px";
                span.innerHTML = signList[i];
                sign.appendChild(span);
            }
            else {
                var span = document.createElement("span");
                span.classList.add("register_status");
                span.style.backgroundColor = "#3C3D37";
                span.style.color = "white";
                span.style.fontSize = "20px";
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