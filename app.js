function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    document.body.appendChild(heart);
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animation = "float 3s linear infinite";
    setTimeout(() => heart.remove(), 3000);
}
setInterval(createHeart, 300);