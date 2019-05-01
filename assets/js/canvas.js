const canvas = document.querySelector('#canvas');

const initWidth = window.innerWidth;
const initHeight = window.innerHeight;

canvas.width = initWidth;
canvas.height = initHeight;

var context = canvas.getContext('2d');

function Circle(x, y, dx, dy, radius) { //circle object
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

    this.draw = function () {
        context.beginPath();
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        context.fillStyle = this.color;
        context.fill();
    }

    this.update = function () {
        if (this.x + this.radius > initWidth || this.x - radius < 0) {
            this.dx = -this.dx;
        }

        if (this.y + radius > initHeight || this.y - radius < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        if (mousePosition.x - this.x < 50 && mousePosition.x - this.x > -50 &&
            mousePosition.y - this.y < 50 && mousePosition.y - this.y > -50) {
            if (this.radius < maxRadius) {
                this.radius += 1;
            }
        } else if (this.radius > minRadius) {
            this.radius -= 1;
        }

        this.draw();
    }
}

var circleArray = [];
var colorArray = [
    '#931621',
    '#0C120C',
    '#2B8E9B',
    '#326771'
];

for (var i = 0; i <= 800; i++) {
    var radius = Math.random() * (3 + 1);

    var x = Math.random() * (initWidth - radius * 2) + radius;
    var y = Math.random() * (initHeight - radius * 2) + radius;

    var dx = (Math.random() - 0.5);
    var dy = (Math.random() - 0.5);

    circleArray.push(new Circle(x, y, dx, dy, radius)); //circle obj instantiation
}

function animate() {
    requestAnimationFrame(animate);
    context.clearRect(0, 0, innerWidth, innerHeight);

    for (var i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

var mousePosition = {
    x: undefined,
    y: undefined
}
var maxRadius = 40;
var minRadius = Math.random() * 2 + 1;

var ci = document.addEventListener('mousemove', function (e) {
    mousePosition.x = e.x;
    mousePosition.y = e.y;
});

var pop = document.addEventListener('click', function (e) {
    console.log(`click: x: ${mousePosition.x} y: ${mousePosition.y}`);
});

window.addEventListener('resize', screenAdjust);

function screenAdjust() {
    canvas.width = initWidth;
    canvas.height = initHeight;
    context.clearRect(0, 0, innerWidth, innerHeight);

    console.log("resized");
}

animate();