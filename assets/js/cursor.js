// recycled code lol

const cursor = document.getElementById("cursor");

const trail = cursor.querySelectorAll("div");


let aX = 0;
let aY = 0;

document.documentElement.style.cursor = 'none';

document.addEventListener("mousemove", function (e){
    aX = e.pageX;
    aY = e.pageY;
});

trail.forEach((trailPart) => {

    let cX = 0;
    let cY = 0;
    let speed = 0.3*0.5;

    const animate = function() {
        cX+= (aX-cX) * speed;
        cY+= (aY-cY) * speed;
    

        trailPart.style.left = cX + "px";
        trailPart.style.top = cY + "px";
    
        requestAnimationFrame(animate);
    }
    
    animate()
})