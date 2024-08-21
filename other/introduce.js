function start() {
    var paragraph = document.getElementById("paragraph");
    
    var intro = document.createElement("div");
    var introTopic = document.createElement("p");
    introTopic.classList.add("topic");
    var topicSpan = document.createElement("span");
    topicSpan.innerHTML = "建中<br>資訊社<br>社團簡史";
    topicSpan.classList.add("highLight");
    topicSpan.classList.add("hidden");
    topicSpan.style.backgroundColor = "none";
    introTopic.appendChild(topicSpan);

    var introText = document.createElement("p");
    introText.id = "IntroText";
    introText.classList.add("innerText");
    introText.style.color = "white";
    intro.appendChild(introTopic);
    intro.appendChild(introText);

    paragraph.appendChild(intro);

    setInterval(check, 20);
}

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if(entry.target.id == "IntroText") {
                if(entry.target.className.search("runed") == -1) {
                    typeWriter("建國中學資訊社成立於1990年代，是該校學生對於資訊科技與程式設計興趣的匯聚點。最初，資訊社主要提供基本的電腦操作與程式設計入門教學，隨著科技的進步與學生需求的變化，逐漸擴展至更為進階的領域，如演算法、人工智慧、網頁設計等。社團成員經常參加校內外的程式設計競賽並屢獲佳績，為學校贏得許多榮譽。資訊社亦積極推動校內的資訊教育，透過舉辦工作坊和講座，培養更多學生對資訊科技的興趣與能力。至今，建國中學資訊社已成為校內最具代表性的學生社團之一，持續在資訊領域中發揮影響力。", "IntroText", 100);
                    entry.target.classList.add("runed");
                }
            }
            else {
                entry.target.classList.add("slide-in");
                entry.target.classList.remove("hidden");
            }
        }
    });
}, { threshold: 0.1 });

function check() {
    document.querySelectorAll('.highLight').forEach(function(paragraph) {
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