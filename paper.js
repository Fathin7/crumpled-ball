class paper{
    constructor(x,y,r){
    
        var options={
          isStatic:false,
          restritution:3,
          friction:1,
          density:1.2
        }
     this.r = r;
     this.image = loadImage("paper.png");
     world.add(world , this.body);



    }

    display(){
      var paperpos = this.body.position;
      
      push();
      translate(paperpos.x , paperpos.y);
      rectMode(CENTER);
      fill(255);
      imageMode(CENTER);
      pop(); 




    }



}