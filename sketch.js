var drop,rain = [],bg;
function setup() {
  createCanvas(windowWidth,windowHeight);
 
  for(var i =0;i<200;i= i+1){
    drop = new Drop (random(0,width),random(0,height),random(20,30))
    rain.push(drop)

  }

}

 

function draw() {
 if(bg){
   background(bg);
 }else{
   background (0)
 }
  
 
  for(var i = 0 ; i<rain.length;i = i+1){
    rain[i].show()
   rain[i].fall()
    


  }
}
function preload(){
 
  getTime()
}
 async function getTime(){
 var  response = await fetch('https://worldtimeapi.org/api/timezone/Asia/kolkata')
 var json = await response.json()
 var time = json.datetime
 var hour = time.slice(11,13)
 if (hour>=6 && hour<=17) {
  bg =  loadImage('morning.jpg')
 } else {
   bg = loadImage('night.jpg')
   
 }
}