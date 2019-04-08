/* var canvas = document.getElementById('canvas');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

var ct = canvas.getContext('2d');

window.addEventListener('resize', function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
});

var circleArray = [];

function Circle(x, y, radius, dx, dy){
    this.x = x;
    this.y = y;
    this.r = radius;
    this.dx = dx;
    this.dy = dy;

    this.draw = function(){
        ct.beginPath();
        ct.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ct.stroke();
    }

    this.update = function(){
        if (this.x + this.r > innerWidth || this.x - this.r < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.r > innerHeight || this.y - this.r < 0) {
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
    }
}

var circle = new Circle(x, y, radius, dx, dy);

for(var i = 0; i < 8000; i++){
    var x = Math.random() * innerHeight;
    var y = Math.random() * innerWidth;
    var dx = (Math.random() - 0.5) * 8;
    var dy = (Math.random() - 0.5) * 8;
    var radius = 30;

    circleArray.push(new Circle(x, y, radius, dx, dy));
}

function animate() {
    requestAnimationFrame(animate);
    ct.clearRect(0, 0, innerWidth, innerHeight);

    for(var i = 0; i < circleArray.length; i++ ){
        circleArray[i].update();
    }
}

animate(); */