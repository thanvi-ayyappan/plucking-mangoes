class Tree{
	constructor(x,y)
	{
		var opt={
			isStatic:true
		}
		this.x=x;
		this.y=y;
		this.width=450;
		this.height=600;
		//this.wallThickness=10;
		
		this.image=loadImage("tree.png")
		this.body=Bodies.rectangle(x,y,width,height,opt);
		//this.bottomBody=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallThickness, {isStatic:true})
		//this.leftWallBody=Bodies.rectangle(0, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})
		//this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2, this.y-this.dustbinHeight/2, this.wallThickness, this.dustbinHeight, {isStatic:false})

		
		World.add(world, this.body)
		//World.add(world, this.leftWallBody)
		//World.add(world, this.rightWallBody);

	}
	display()
	{
			var posBottom=this.body.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.height/2,this.width, this.height)
			pop()
			
	}

}
