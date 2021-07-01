class  Umbrella {

    constructor(x,y){
        var options = {
            isStatic : true

        }
       
        this.body = Bodies.rectangle(x,y,250,350,options);
   
      this.width=250;
      this.height=350;
      this.image = loadImage("images/walking_1.png");
        World.add(world,this.body);
      
    }
    display(){
        var pos = this.body.position;
       
       imageMode(CENTER);
        image(this.image, this.body.position.x,this.body.position.y, this.width, this.height);
   
    }

}
