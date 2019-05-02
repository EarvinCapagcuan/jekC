const canvas = document.querySelector('#canvas');
const mainHeight = document.getElementsByTagName('main');

const initWidth = document.body.scrollWidth;
const initHeight = mainHeight[0].clientHeight;

window.addEventListener('resize', screenAdjust);

window.addEventListener('click', (initHeight) => {
    initHeight = mainHeight[0].clientHeight;
    canvas.height = initHeight;
});

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
var count = 0;
var device = deviceOS();

function deviceOS() {
    var useragent = navigator.userAgent;

    if (useragent.match(/Android/i)) {
        return count = 250;
    } else if (useragent.match(/webOS/i)) {
        return count = 800;
    } else if (useragent.match(/iPhone/i)) {
        return count = 250;
    } else if (useragent.match(/iPod/i)) {
        return count = 300;
    } else if (useragent.match(/iPad/i)) {
        return count = 300;
    } else if (useragent.match(/Windows Phone/i)) {
        return count = 200;
    } else if (useragent.match(/SymbianOS/i)) {
        return count = 200;
    } else if (useragent.match(/RIM/i) || useragent.match(/BB/i)) {
        return count = 200;
    } else if(useragent.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i)) {
        var ci = document.addEventListener('mousemove', function (e) {
            mousePosition.x = e.x;
            mousePosition.y = e.y;
        });
        return count = 800;
    } else {
        return false;
    }
}

var circleArray = [];
var colorArray = [
    'hsla(120, 20%, 6%, 0.58)',
    'hsla(187, 57%, 39%, 0.58)',
    'hsla(190, 39%, 32%, 0.58)'
];

for (var i = 0; i <= count; i++) {
    var radius = Math.random() * (1 + 1);

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
var maxRadius = 30;
var minRadius = Math.random() * 1 + 1;

function screenAdjust(initWidth, initHeight) {
    initWidth = window.innerWidth;
    initHeight = window.innerHeight;

    context.clearRect(0, 0, initWidth, initHeight);
    canvas.width = initWidth;
    canvas.height = initHeight;
}

animate();