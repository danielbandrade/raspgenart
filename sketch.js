let height = 1080
let width = 1080

let num = 3;
let springs = [];



function setup() {
  
  createCanvas(height, width);
  
}

// Spring Class

function Spring(_x, _y, _s, _d, _m, _k_in, _others, _id){
    
    this.x_pos = _x;
    this.y_pos = _y;
    
    this.size = _s;
    
    this.mass = _m;
    this.k = _k_in;
    this.damp = _d;
    this.rest_posx = _x;
    this.rest_posy = _y;
    
    this.velx = 5;
    this.vely = 0;
    this.accel = 0;
    this.force = 0;
    
    this.friends = 0;
    this.id = _id;
    
    this.update = function() {
      
        
        this.rest_posy = this.rest_posy ;
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

          ellipse(this.x_pos,this.y_pos,this.size,this.size);
          
          }
          
    
    }


function draw() {
  
  
  
  background('#b20a2c');
  
  springs[0] = new Spring(300,300,40,0.98,8.0,0.1,springs,0);
  
  springs[0].update();
  
  springs[0].display();
  
  springs[1] = new Spring(550,550,40,0.98,8.0,0.1,springs,0);
  
  springs[1].update();
  
  springs[1].display();
  
  
  
}
