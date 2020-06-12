class Ground{

    constructor(){
        var ground_options={
            isStatic : true
          }
        
          this.ground = Bodies.rectangle(450,390,900,20,ground_options)
          World.add(world,this.ground);
    }
    display(){
        noStroke();
        fill(rgb(0,200,100));
        rectMode(CENTER);
        rect(this.ground.position.x,this.ground.position.y,900,20);
    }
}