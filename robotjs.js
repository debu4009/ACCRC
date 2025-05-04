// আই ট্র্যাকিং সিস্টেম
document.addEventListener('mousemove', (e) => {
    const pupils = document.querySelectorAll('.pupil');
    const eyes = document.querySelectorAll('.eye');
    const mouth = document.getElementById('robot-mouth');
    
    // চোখের মুভমেন্ট
    eyes.forEach((eye, index) => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeCenterX = eyeRect.left + eyeRect.width / 2;
        const eyeCenterY = eyeRect.top + eyeRect.height / 2;
        
        const angle = Math.atan2(e.pageY - eyeCenterY, e.pageX - eyeCenterX);
        const distance = Math.min(15, 
            Math.sqrt(Math.pow(e.pageX - eyeCenterX, 2) + 
                    Math.pow(e.pageY - eyeCenterY, 2)) / 10);
        
        pupils[index].style.transform = `translate(
            ${Math.cos(angle) * distance}px,
            ${Math.sin(angle) * distance}px
        )`;
    });
    
    // মুখের অভিব্যক্তি পরিবর্তন
    const mouseY = e.clientY;
    const windowHeight = window.innerHeight;
    
    if (mouseY < windowHeight * 0.3) {
        mouth.style.height = "40px";
        mouth.style.borderRadius = "10px 10px 20px 20px";
    } else if (mouseY > windowHeight * 0.7) {
        mouth.style.height = "10px";
        mouth.style.borderRadius = "20px 20px 10px 10px";
    } else {
        mouth.style.height = "20px";
        mouth.style.borderRadius = "10px";
    }
});

// রোবট ব্লিংক অ্যানিমেশন
setInterval(() => {
    const eyes = document.querySelectorAll('.eye');
    eyes.forEach(eye => {
        eye.style.height = "5px";
        setTimeout(() => {
            eye.style.height = "80px";
        }, 200);
    });
}, 5000);