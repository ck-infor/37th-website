function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } 
    else {
        x.style.display = "block";
    }
}

var questions = [
    "Q:建資與建電的差別？",
    "Q:資訊社有什麼活動呢？",
    "Q:沒有任何程式經驗的話可以加入資訊社嗎？",
    "Q:學長學弟制？",
    "Q:如果經濟上有困難的話...?"
];
var answers = [
    "我們兩個社團最主要的差別在於友社，我們的友社包含中山資研、景美電資、成功電研，四個資訊類社團組成所謂的IZCC，平常的活動與小社課(放課)都是IZCC一同舉辦。如果想要認識友校的好朋朋，那加入資訊社準沒錯啦。",
    "社員能參加的活動主要是暑訓寒訓、春秋遊、耶誕晚會、社慶、迎新、聯課，詳細的內容可以參考建社望友和本社網「社團活動」的資訊喔。",
    "當然可以，我們會從基礎知識開始教，過程中有不懂的地方都能問學長。",
    "絕對沒有唷，學長人都很好。",
    "社費可以視情況減免或免收喔。"
];

function start() {
    var paragraph = document.getElementById("paragraph");
    for(var i = 0; i < questions.length; i++) {
        var pack = document.createElement("div");
        pack.classList.add("pack");
        pack.classList.add("hidden");

        var question = document.createElement("h1");
        question.classList.add("question");
        question.innerHTML = questions[i];
        pack.appendChild(question);

        var answer = document.createElement("p");
        answer.classList.add("answer");
        answer.innerHTML = answers[i];
        pack.appendChild(answer);

        if(i != questions.length - 1) {
            var brLine = document.createElement("br");
            pack.appendChild(brLine);
            var hrLine = document.createElement("hr");
            hrLine.classList.add("hrLines");
            pack.appendChild(hrLine);
        }

        paragraph.appendChild(pack);
    }

    setInterval(check, 20);
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
    document.querySelectorAll('.pack').forEach(function(paragraph) {
        observer.observe(paragraph);
    });
}