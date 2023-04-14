const flock = []; //array yg akan diisikan banyak kendaraan
let alignSlider, cohesionSlider, separationSlider;
let population;
function setup() {
  createCanvas(600, 400);
  //createSlider(min, max, nilai_skrg, jarak antar nilai)
  alignSlider = createSlider(0,5,1,0.1);
  cohesionSlider = createSlider(0,5,1,0.1);
  separationSlider = createSlider(0,5,1,0.1);
  
  population = 265;
  for (let i=0; i<population;i++){
    flock.push(new Boid());
  }
  s = createInput("265");
  s.position(10,30);
  
}

function draw() {
  background("yellow");
  line(400, 0, 400, 400)
  stroke("white")
  text("Aligement  : ",10,390)
  text("Cohesion   : ",140,390)
  text("Separation : ",270,390)
  
  text("Tugas MK Visualisasi Dalam Sains",410,15)
  text("Simulasi Flocking",410,30)
  text("Nama  : Tia Anezka Laetisia Tanafa",410,45)
  text("NIM    : 121160018",410,60)
  text("Prodi   : Matematika",410,75)
  
  for (let boid of flock){
    boid.edges();
    boid.flock(flock)
    boid.update();
    boid.show();
  }
}