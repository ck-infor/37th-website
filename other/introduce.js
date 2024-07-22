function start() {
    var paragraph = document.getElementById("paragraph");
    
    var intro = document.createElement("div");
    var introText = document.createElement("p");
    introText.id = "IntroText";
    introText.classList.add("innerText");
    intro.appendChild(introText);

    var izcc = document.createElement("div");
    var izccText = document.createElement("p");
    izccText.innerHTML = "";
    izccText.classList.add("innerText");
    izccText.classList.add("hidden");
    izcc.appendChild(izccText);

    paragraph.appendChild(intro);
    paragraph.appendChild(izcc);

    typeWriter("建中資訊社是一個專注於電腦和資訊科技的學術性社團。在這裡，你可以學習程式設計、演算法、網頁開發、人工智慧等科技領域的課程。除此之外，你還可以認識許多學術力一流的同儕，並與友校的朋友交流。", "IntroText", 100);
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
}