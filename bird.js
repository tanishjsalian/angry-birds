class bird{

    constructor(x,y,w,h){
        var options={
            restitution:0.5
         
           }
         
           this.body=Bodies.rectangle(x,y,w,h,options);
           World.add(myworld,this.body)
           this.w=w;
           this.h=h;


    }

    display(){
 

       push()
       this.body.position.x=mouseX
       this.body.position.y=mouseY
       fill("blue")
        rectMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        rect(0,0,this.w,this.h)
        pop()

}
}