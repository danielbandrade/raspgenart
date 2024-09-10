let height = 1080
let width = 1080

let num = 3;
let springs = [];



function setup() {
  
  createCanvas(height, width);
  
}

// Spring Class

function draw() {
  
  function Spring(_x, _y, _s, _d, _m, _k_in, _others, _id){
    
    this.x_pos = _x;
    this.y_pos = _y;
    
    this.size = 20;
    this.size = _s;
    
    this.move = true;
    
    this.mass = _m;
    this.k = _k_in;
    this.damp = _d;
    this.rest_posx = _x;
    this.rest_posy = _y;
    
    this.velx = 0;
    this.vely = 0;
    this.accel = 0;
    this.force = 0;
    
    this.friends = 0;
    this.id = _id;
    
    this.update = function() {
      
        
        this.rest_posy = mouseY;
        this.rest_posx = mouseX;
        
        this.force = - this.k * (this.y_pos - this.rest_posy);
        this.accel = this.force / this.mass ;
        this.vely = this.damp * (this.vely + this.accel);
        this.y_pos = this.y_pos + this.vely; 
        
        this.force = - this.k * (this.x_pos - this.rest_posx);
        this.accel = this.force / this.mass ;
        this.vely = this.damp * (this.velx + this.accel);
        this.x_pos = this.x_pos + this.velx;
      
      
      }
      
      
      this.display = function(){
          noStroke();

          rect(this.x_pos,this.y_pos,this.size,this.size);
          
          }
          
    
    }
  
  
  
 
  
  background('#b20a2c');

  /* // Draw the top line.
  line(0, height/3, mouseX, width/3);
	line(2*width/3, height, 2*width/3 , mouseY);


  // Remap mouseX from [0, 100] to [0, 50].
  let x = map(mouseX, 0, 100, 0, 50);
	let y = map(mouseY, 0, 100, 0, 50)

  // Draw the bottom line.
  line(0, 2*height/3, x, 2*width/3);
	line(width/3, height, width/3, y  + height/2 ); */
  
  springs[0] = new Spring(300,300,40,0.98,8.0,0.1,springs,0);
  
  springs[0].update();
  
  springs[0].display();
  
 
  
}
