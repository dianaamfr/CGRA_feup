/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.init();
	}
	init(){
        
        this.diamond = new MyDiamond(this.scene);
        this.triangleOrange = new MyTriangle(this.scene);
        this.triangleBlue = new MyTriangle(this.scene);
        this.triangleRed = new MyTriangle(this.scene);
        this.trianglePink = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglePurple = new MyTriangleSmall(this.scene);

    }
    display(){
        //Diamond Transformations and display
        this.scene.pushMatrix();
        this.rotateDiamond = [ 
            Math.cos(Math.PI/4), Math.sin(Math.PI/4), 0.0, 0.0,           
            -Math.sin(Math.PI/4), Math.cos(Math.PI/4), 0.0, 0.0,
            0.0,0.0, 1.0, 0.0,          
            0.0, 0.0, 0.0, 1.0        
        ];

        this.scaleDiamond = [ 
            1/Math.sqrt(2), 0.0, 0.0, 0.0,           
            0.0, 1/Math.sqrt(2), 0.0, 0.0,
            0.0,0.0, 1.0, 0.0,          
            0.0, 0.0, 0.0, 1.0       
        ];

        this.translateDiamond = [
            1.0, 0.0, 0.0, 0.0,           
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,          
            -1.5 ,-0.25 , 0.0, 1.0   
        ]
       
        this.scene.multMatrix(this.translateDiamond); //ultimas transformações multiplicam primeiro T =T(dx2,dy2)*T(dx1,dy1)
        this.scene.multMatrix(this.scaleDiamond);
        this.scene.multMatrix(this.rotateDiamond);

        this.diamond.display();
        this.scene.popMatrix();
    
        //Blue and Orange Rectangle Triangles - Transformations and display
        this.scene.pushMatrix(); //Saves in the stack the current matrix
        this.scene.translate(0.0,1.0,0.0);
        this.triangleOrange.display();
        this.scene.popMatrix(); //Applies the saved matrix to the scene again

        this.scene.pushMatrix();
        this.scene.translate(0.0,-1.0,0.0);
        this.scene.rotate(-Math.PI/2,0.0,0.0,1.0);
        this.triangleBlue.display();
        this.scene.popMatrix();

        //Red and pink Rectangle Triangles - Transformations and display
        this.scene.pushMatrix();
        this.scene.translate(-2.5,-0.25,0.0);
        this.scene.scale(0.5,0.5,1.0);
        this.scene.rotate(-Math.PI,0.0,0.0,1.0);
        this.triangleRed.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.3,0.95,0.0);
        this.scene.scale(0.7,0.7,1.0);
        this.trianglePink.display();
        this.scene.popMatrix();
        
        //Purple Triangle - Transformations and display
        this.scene.pushMatrix();
        this.scene.translate(1.0,-0.75,0.0);
        this.scene.scale(0.75,0.75,1.0);
        this.trianglePurple.display();
        this.scene.popMatrix();

        //Parallelogram - Transformations and display
        this.scene.pushMatrix();
        this.scene.translate(1.0,0.0,0.0);
        this.scene.scale(0.75,0.75,1.0);
        this.scene.rotate(Math.PI,1.0,0.0,0.0)
        this.parallelogram.display();
        this.scene.popMatrix();
    }
}

