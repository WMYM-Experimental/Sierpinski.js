const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = 200;

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, size / 2, 0, Math.PI * 2);
        ctx.fill();
    }
}

const p0 = new Point(canvas.width / 2 + size / 2, canvas.height / 2 + size / 2);
const p1 = new Point(p0.x - size, p0.y);
const p2 = new Point(
    p0.x - size / 2,
    p0.y - Math.sqrt(Math.pow(size, 2) - Math.pow(size / 2, 2))
);

const drawTriangle = (pA, pB, pC) => {
    ctx.strokeStyle = "red";
    ctx.beginPath();
    ctx.moveTo(pA.x, pA.y);
    ctx.stroke();
    ctx.lineTo(pB.x, pB.y);
    ctx.lineTo(pC.x, pC.y);
    ctx.closePath();
    ctx.stroke();
};

drawTriangle(p0, p1, p2);
