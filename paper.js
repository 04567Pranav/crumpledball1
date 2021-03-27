 class Paper {
  constructor(x,y,r)
  
{
  var options={
    isStatic:false,
      restitution:0.3,
      friction:0,
      density:1.3
  }
  this.x=x
  this.y=y
  this.r=r
  this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
  World.add(world, this.body)
}
display(){
  this.image=loadImage("paper.png")
  var paperpos=this.body.position
  push()
  translate(paperpos.x, paperpos.y)
  rectMode(CENTER)
  strokeWeight(4)
  stroke("black")
  fill("gray")
  ellipse(0,0,this.r, this.r)
  pop()
}
}

function keyPressed(){
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145})

	}
}
  
    
    
