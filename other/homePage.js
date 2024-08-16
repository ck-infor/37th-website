const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll("img");
var pointer = 0;
var pointerBack = 0;

indicators.forEach((element, index) => {
    element.addEventListener("click", () => {
        images[index + 1].scrollIntoView({
            block: "center",
            behavior: "smooth",
        });
        nextPhoto.reset();
    });
});

const gallery = document.querySelector(".gallery");
const galleryWidth = 800;
const galleyHeight = 450;

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.target.className.search("clubsign") != -1) {
            return;
        }
        const targetIndex = entry.target.dataset.index;
        console.log(targetIndex);
        if (entry.isIntersecting) {
            indicators[targetIndex].classList.add("Active");
            pointer = targetIndex;
        } 
        else {
            indicators[targetIndex].classList.remove("Active");
        }
    });
  },
  {
    root: null,
    rootMargin: "0px 0px 0px 0px",
    threshold: 0.5,
  }
);

images.forEach((element) => {
    observer.observe(element);
});

var nextPhoto = {
    reset : function() {
        clearInterval(this.nextInterval);
        clearInterval(this.pointerInterval);
        this.pointerInterval = setInterval(() => {
            pointerBack = pointer;
        }, 500);
        this.nextInterval = setInterval(() => {
            if(pointerBack == pointer) {
                var index = Number(pointer) + images.length - 2;
                console.log(index);
                if(index >= images.length) {
                    index = images.length - 3;
                }
                images[index].scrollIntoView({
                    block: "center",
                    behavior: "smooth",
                });
                nextPhoto.reset();
            }
        }, 5000);
    },
    pointerInterval : null,
    nextInterval : null,
    resetInterval : null
}

nextPhoto.reset();
if(window.screen.availWidth < galleryWidth) {
    gallery.style.width = "80%";
    gallery.style.height = "auto";
}

function menu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
        clearInterval(nextPhoto.resetInterval);
        nextPhoto.resetInterval = null;
    } 
    else {
        x.style.display = "block";
        nextPhoto.resetInterval = setInterval(() => {
            nextPhoto.reset;
        }, 500);
    }
}