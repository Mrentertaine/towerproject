class Block{
    constructor(x, y, width, height) {
    
      var options = {
    
            restitution :0.4,
            friction :0.0,
            isStatic:false
           
        }
        super(x,y,50,50) 
        this.Visibilty= 255;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
       
       
        
        var pos= this.body.position;
        if(this.body.speed<3){
          super.display();
          }
          else {
            
          World.remove(world,this.body);
          push();
          this.Visibilty= this.Visibilty-5
          tint (255,this.Visibility)
          pop()
          }
        
        rectMode(CENTER);
        rect(0,0,this.width, this.height);
        
        
      }
}