class Mango{
    constructor(x,y,r){
        var options={
            isStatic:true,
            restitution:0,
            friction:1
        }
      
   this.body = Bodies.rectangle(x, y, width, height, options);
   this.x = x;
   this.y = y;
   this.image= loadImage("Plucking mangoes/mango.png")
   World.add(world,this.body)
}
display(){
   imageMode(CENTER);
   image(this.image,this.body.position.x,this.body.position.y,30,30);

    }
    
}