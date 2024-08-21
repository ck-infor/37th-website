function start() {
    var nameList = [
        "林顯至", "李則聿", "林俐辰", "翁浩洋",
        "温世揚", "陳秉澤", "孫唯善", "林楚鈞",
        "李宸漢", "王丞佑"
    ];
    var position = [
        "社長 X 學術", "副社長 X 網管", "外交長", "學術長", "學術", "行政長", "行政 X 衛生", "總務", "美宣", "美宣 x 隱藏的網管"
    ];
    var descriptionList = [
        "<h2>#老了</h2><p>社長你又有白頭髮又有心臟病，確定不去檢查真正的身體年齡嗎?</p><h2>#爛梗master</h2><p>不講爛梗一天難受，講了爛梗別人難受一天</p><h2>#社長體質</h2><p>連續好幾屆的社長都是基隆人，難道基隆人真的有建資社長體質？</p><h2>#雙社長</h2><p>不小心把建中資訊講成建中資研，成功成為建中雙社社長</p>", //林顯智
        "<h2>#😩</h2><p>好婆我愛了</p><h2>#神隱</h2><p>茶會只去50分鐘就算了，RPG是NPC居然還睡過頭沒來，你到底什麼時候才要出現啊?</p><h2>#蔚藍</h2><p>每周一集蔚藍已經成為我活下去的動力了嗎</p><h2>#聿/筆/津/律</h2><p>則律 則津 則筆 測聿(?</p>", //李澤豫
        "<h2>#Udolphin</h2><p>基隆人日常，如果想要騎海豚上下學歡迎找學長帶你</p><h2>#麻將長</h2><p>建資麻將擔當，台麻日麻雙料冠軍</p><h2>#i人外交長</h2><p>說真的我很懷疑</p><h2>#學習歷程</h2><p>我不會學習歷程，也不會學習俐辰</p>", //林立陳
        "<h2>#溫浩洋</h2><p>是翁世揚還是溫浩洋</p><h2>#問好羊</h2><p>學長電到我問好</p><h2>#會寫卷積</h2><p>好卷</p><h2>#音遊</h2><p>兩屆學術長都愛玩音遊是巧合嗎？</p>", //翁浩洋
        "<h2>#多喝熱水</h2><p>學長不要再敷衍我了</p><h2>#會考全對</h2><p>學霸，嘖</p><h2>#演算法電神</h2><p>資讀的講師好強</p><h2>#溫室楊桃？</h2><p>對不起</p>", //溫室楊
        "<h2>#有氣場</h2><p>之前表演greatest show的時候，那種威嚴帥氣的氣場完全出來了，學長好帥</p><h2>#攝影長</h2><p>行政長(X) 攝影長(O)</p><h2>#物理master</h2><p>場佈的時候一直講物理，好電</p><h2>#拿相機的那個</h2><p>誒，拿相機的那個過來一下</p>", //陳炳則
        "<h2>#冷笑話大王</h2><p>經常講一些冷笑話，很好笑ㄏㄏ</p><h2>#知性美男子</h2><p>學長我暈了</p><h2>#路癡</h2><p>跟他出去玩請隨時注意導航，不然極有可能會一起迷路</p><h2>#為善不欲人知</h2><p>唯善不欲人知?為善不欲人知?唯善為善不欲人知</p>", //孫為善
        "<h2>#不回訊息</h2><p>學長都不回我訊息，走心了...</p><h2>#叛徒</h2><p>如題...有女友</p><h2>#帥</h2><p>不知道為什麼有一種高冷的帥</p><h2>#總務</h2><p>資訊社的經費靠你了！！</p>", //林楚軍
        "<h2>#少女</h2><p>學長躺著休息的姿勢很少女</p><h2>#宸丞</h2><p>甲</p><h2>#鯨魚</h2><p>學長表示自己是鯨魚所以一直潛水，咕嚕</p><h2>#打藝</h2><p>學長好強都會打藝，還客串建電的表演🛐</p>", //李陳漢
        "<h2>#宸丞</h2><p>甲</p><h2>#電神</h2><p>校排數字比我班排數字還小，多益還考980，嘖</p><h2>#chatGPT的朋朋</h2><p>他說自己有心事的時候會跟chatgpt聊天，並表示它是自己的知心好友</p><h2>#靦腆</h2><p>此人面相靦腆，改不了一點</p>" //王澄佑
    ]

    var photourl=["../other/photos/staff/社長.jpg", "../other/photos/staff/副社長.jpg", "../other/photos/staff/外交長.jpg",  "../other/photos/staff/學術長.png", "../other/photos/staff/學術.jpg", "../other/photos/staff/行政長.jpg", "../other/photos/staff/行政.jpg", "../other/photos/staff/總務.jpg", "../other/photos/staff/美宣.jpg", "../other/photos/staff/美宣!.jpg"]
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
        photo.src = photourl[i];
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

var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("slide-in");
            entry.target.classList.remove("hidden");
        }
    });
}, { threshold: 0.1 });

function check() {
    document.querySelectorAll('.myimg').forEach(function (img) {
        observer.observe(img);
    });
    document.querySelectorAll('.paragraph').forEach(function (paragraph) {
        observer.observe(paragraph);
    });
    document.querySelectorAll('.nameText').forEach(function (span) {
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