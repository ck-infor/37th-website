function start() {
    var paragraph = document.getElementById("paragraph");
    
    var intro = document.createElement("div");
    var introText = document.createElement("p");
    introText.id = "IntroText";
    introText.classList.add("innerText");
    intro.appendChild(introText);

    var izcc = document.createElement("div");
    var izccText = document.createElement("p");
    izccText.id = "izccText";
    izccText.classList.add("innerText");
    izcc.appendChild(izccText);

    paragraph.appendChild(intro);
    paragraph.appendChild(izcc);

    typeWriter("建中資訊社是一個專注於電腦和資訊科技的學術性社團。在這裡，你可以學習程式設計、演算法、網頁開發、人工智慧等科技領域的課程。除此之外，你還可以認識許多學術力一流的同儕，並與友校的朋友交流。", "IntroText", 100);
    typeWriter("IZCC是建中資訊 (INFOR)、 中山資研 (ZSISC)、成功電研 (CKCSC)與景美電資 (CMIOC) 的合稱。IZCC由一群熱愛資訊的人們組成。放學會舉辦課程一同學習，也會共同舉辦活動，像是暑訓、秋遊、耶誕晚會等······。", "izccText", 100);
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
    document.querySelectorAll('.highLight').forEach(function(paragraph) {
        observer.observe(paragraph);
    });
}