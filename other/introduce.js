function start() {
    var paragraph = document.getElementById("paragraph");
    
    var intro = document.createElement("div");
    var introTopic = document.createElement("p");
    introTopic.classList.add("topic");
    var topicSpan = document.createElement("span");
    topicSpan.innerHTML = "建中資訊社";
    topicSpan.classList.add("highLight");
    topicSpan.classList.add("hidden");
    topicSpan.style.backgroundColor = "gold";
    introTopic.appendChild(topicSpan);

    var introText = document.createElement("p");
    introText.id = "IntroText";
    introText.classList.add("innerText");
    intro.appendChild(introTopic);
    intro.appendChild(introText);

    var izcc = document.createElement("div");
    var izccTopic = document.createElement("p");
    izccTopic.classList.add("topic");
    var izccSpan = document.createElement("span");
    izccSpan.innerHTML = "IZCC";
    izccSpan.classList.add("highLight");
    izccSpan.classList.add("hidden");
    izccSpan.style.backgroundColor = "gold";
    izccTopic.appendChild(izccSpan);

    var izccText = document.createElement("p");
    izccText.id = "izccText";
    izccText.classList.add("innerText");
    izcc.appendChild(izccTopic);
    izcc.appendChild(izccText);

    paragraph.appendChild(intro);
    paragraph.appendChild(izcc);

    setInterval(check, 20);
}

var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            if(entry.target.id == "IntroText") {
                if(entry.target.className.search("runed") == -1) {
                    typeWriter("建中資訊社是一個專注於電腦和資訊科技的學術性社團。在這裡，你可以學習程式設計、演算法、網頁開發、人工智慧等科技領域的課程。除此之外，你還可以認識許多學術力一流的同儕，並與友校的朋友交流。", "IntroText", 100);
                    entry.target.classList.add("runed");
                }
            }
            else if(entry.target.id == "izccText") {
                if(entry.target.className.search("runed") == -1) {
                    typeWriter("IZCC是建中資訊 (INFOR)、 中山資研 (ZSISC)、成功電研 (CKCSC)與景美電資 (CMIOC) 的合稱。IZCC由一群熱愛資訊的人們組成。放學會舉辦課程一同學習，也會共同舉辦活動，像是暑訓、秋遊、耶誕晚會等······。", "izccText", 100);
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