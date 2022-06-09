const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const config = {
    x: canvas.width / 2 + 200 / 2,
    y: canvas.height / 2 + 200 / 2,
    size: 200,
};

const getRandomNumebr = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min;
};

const drawTriangle = (x, y, size) => {
    if (size < 10) {
        return;
    } else {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.beginPath();
        ctx.arc(x, y, 2, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.lineTo(x - size, y);
        ctx.lineTo(
            x - size / 2,
            y - Math.sqrt(Math.pow(size, 2) - Math.pow(size / 2, 2))
        );
        ctx.closePath();
        ctx.stroke();
        drawTriangle(x - size / 2, y, size * 0.8);
    }
};

const drawCircle = (x, y, size) => {
    if (size < 10) {
        return;
    } else {
        ctx.strokeStyle = "red";
        ctx.beginPath();
        ctx.arc(x, y, size, 0, 2 * Math.PI);
        ctx.stroke();
        drawCircle(x, y, size / 2);
    }
};
drawTriangle(config.x, config.y, config.size);
