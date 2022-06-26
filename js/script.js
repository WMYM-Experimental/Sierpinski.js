const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let size = Math.ceil(canvas.width / 2.5);

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
    ctx.strokeStyle = "#006d77";
    ctx.beginPath();
    ctx.moveTo(pA.x, pA.y);
    ctx.lineTo(pB.x, pB.y);
    ctx.lineTo(pC.x, pC.y);
    ctx.closePath();
    ctx.stroke();
};

const sierpinski = (p0, p1, p2) => {
    drawTriangle(p0, p1, p2);

    let pA = new Point((p0.x + p1.x) / 2, (p0.y + p1.y) / 2);
    let pB = new Point((p1.x + p2.x) / 2, (p1.y + p2.y) / 2);
    let pC = new Point((p2.x + p0.x) / 2, (p2.y + p0.y) / 2);

    let size = p0.x - p1.x;

    if (size > 1) {
        sierpinski(p0, pA, pC);
        sierpinski(pA, p1, pB);
        sierpinski(pC, pB, p2);
    }
};

sierpinski(p0, p1, p2);
