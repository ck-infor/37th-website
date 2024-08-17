const indicators = document.querySelectorAll(".indicator");
const images = document.querySelectorAll(".image-slider img");
var pointer = 0;
var pointerBack = 0;

indicators.forEach((element, index) => {
    element.addEventListener("click", () => {
        images[index].scrollIntoView({
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
            if((pointerBack == pointer) && (this.checker)) {
                var index = Number(pointer) + 1;
                console.log(index);
                if(index >= 3) {
                    index = 0;
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
    checker : true
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
        nextPhoto.checker = true;
    } 
    else {
        x.style.display = "block";
        nextPhoto.checker = false;
    }
}