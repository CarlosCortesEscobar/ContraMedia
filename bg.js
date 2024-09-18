document.addEventListener("DOMContentLoaded", () => {
    let bg = document.getElementById("code");
    let deg = 0;
    setInterval(() => {
        bg.style.filter = `hue-rotate(${deg}deg)`
        if (deg <= 359) {
            deg += 1;
            console.log(`hue-rotate(${deg}deg)`);
            
        } else {
            deg = 0;
        }
    }, 100)
})