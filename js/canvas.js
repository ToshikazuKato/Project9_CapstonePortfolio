const canvas = document.getElementById('canvas');
let height = window.innerHeight*0.8;
// to set the canvas size as same as window size
canvas.width = window.innerWidth;
canvas.height = height;

//ctx stands for context
const ctx = canvas.getContext('2d');
const numOfCircle = 100;
const mouse = {
  x: undefined,
  y: undefined
}

const maxRadius = 35;

const colorArray = [
  '#757575',
  '#f2f2f2',
  '#0038ff',
  '#22b0ff',
  '#00B2FF'
];

window.addEventListener('mousemove', event =>{
  mouse.x = event.x;
  mouse.y = event.y;
  // init();
} );

window.addEventListener('resize', ()=>{
  // to set the canvas size as same as window size
  canvas.width = window.innerWidth;
  height = window.innerHeight*0.8;
  canvas.height = height;
  init();
});

function Circle (x,y,dx,dy,radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.minRadius = radius;

  this.color = colorArray[Math.floor(Math.random() * colorArray.length)];

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = this.color;
    ctx.lineWidth = 1;
    ctx.stroke();
    // ctx.fillStyle = this.color;
    // ctx.fill();
  }

  this.update = () => {
    //bounce at the edge
    if (this.x + this.radius > innerWidth || this.x - radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > height || this.y - radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    // interactivity
    if(mouse.x - this.x < 70 && mouse.x - this.x > -70
      && mouse.y - this.y < 70 && mouse.y - this.y > -70
      ){
        if (this.radius < maxRadius) {
          this.radius += 1;
        }
    }else if (this.radius > this.minRadius){
      this.radius -= 1;
    }

    this.draw();

  }

}

let circleArray = [];

const init = () => {

  circleArray = [];

  for (var i = 0; i < numOfCircle; i++) {
    const radius = Math.random() * 20 + 1;
    const x = Math.random() * (innerWidth - radius * 2) + radius ;
    const y = Math.random() * (height - radius * 2) + radius;
    // const x = mouse.x + Math.floor(Math.random() * 10);
    // const y = mouse.y + Math.floor(Math.random() * 10);
    const dx = (Math.random() - 0.5) * 1.5; //speed
    const dy = (Math.random() - 0.5) * 1.5;
    circleArray.push(new Circle(x, y, dx, dy, radius));
  }

}

// animate function
const animate = () => {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, height); //to initialize position

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}
init();
animate();
