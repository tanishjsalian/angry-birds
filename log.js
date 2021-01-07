class Log{

    constructor(x,y,w,h,a){
        var options={
            restitution:0.5,
            friction:1
         
           }
         
           this.body=Bodies.rectangle(x,y,w,h,options);
           World.add(myworld,this.body)
           Matter.Body.setAngle(this.body,a)
           this.w=w;
           this.h=h;


    }

    display(){
 

       push()
       fill("green")
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.w,this.h)
        pop()

}
}