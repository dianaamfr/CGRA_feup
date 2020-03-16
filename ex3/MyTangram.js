/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
        this.initBuffers();
	}
	initBuffers(){
        this.diamond = new MyDiamond(this.scene);
        this.triangleOrange = new MyTriangle(this.scene);
        this.triangleBlue = new MyTriangle(this.scene);
        this.triangleRed = new MyTriangle(this.scene);
        this.trianglePink = new MyTriangle(this.scene);
        this.parallelogram = new MyParallelogram(this.scene);
        this.trianglePurple = new MyTriangleSmall(this.scene);
        this.objects = [this.diamond,  this.triangleOrange, this.triangleBlue,this.triangleRed,this.trianglePink,this.parallelogram,this.trianglePurple];
    
        this.initMaterials();
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
        this.scene.customMaterial.apply();
        this.diamond.display();
        this.scene.popMatrix();
    
        //Blue and Orange Rectangle Triangles - Transformations and display
        this.scene.pushMatrix(); //Saves in the stack the current matrix
        this.scene.translate(0.0,1.0,0.0);
        this.upWingColor.apply();
        this.triangleOrange.display();
        this.scene.popMatrix(); //Applies the saved matrix to the scene again

        this.scene.pushMatrix();
        this.scene.translate(0.0,-1.0,0.0);
        this.scene.rotate(-Math.PI/2,0.0,0.0,1.0);
        this.downWingColor.apply();
        this.triangleBlue.display();
        this.scene.popMatrix();

        //Red and pink Rectangle Triangles - Transformations and display
        this.scene.pushMatrix();
        this.scene.translate(-2.5,-0.25,0.0);
        this.scene.scale(0.5,0.5,1.0);
        this.scene.rotate(-Math.PI,0.0,0.0,1.0);
        this.backDownTriangleColor.apply()
        this.triangleRed.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-2.3,0.95,0.0);
        this.scene.scale(0.7,0.7,1.0);
        this.backUpTriangleColor.apply()
        this.trianglePink.display();
        this.scene.popMatrix();
        
        //Purple Triangle - Transformations and display
        this.scene.pushMatrix();
        this.scene.translate(1.0,-0.75,0.0);
        this.scene.scale(0.75,0.75,1.0);
        this.smallFrontTriangleColor.apply()
        this.trianglePurple.display();
        this.scene.popMatrix();

        //Parallelogram - Transformations and display
        this.scene.pushMatrix();
        this.scene.translate(3.25,-0.75,0.0);
        this.scene.scale(0.75,0.75,1.0);
        this.parallelogramColor.apply();
        this.parallelogram.display();
        this.scene.popMatrix();
        
    }

    initMaterials() {
        //Diamond color (green)
        var color = this.scene.hexToRgbA('#00ff00');
        this.diamondColor = new CGFappearance(this.scene);
        this.diamondColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.diamondColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.diamondColor.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.diamondColor.setShininess(10.0);

        //Up wing color (orange)
        color = this.scene.hexToRgbA('#ff9c00');
        this.upWingColor = new CGFappearance(this.scene);
        this.upWingColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.upWingColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.upWingColor.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.upWingColor.setShininess(10.0);

        //Down wing color (blue)
        color = this.scene.hexToRgbA('#009cff');
        this.downWingColor = new CGFappearance(this.scene);
        this.downWingColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.downWingColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.downWingColor.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.downWingColor.setShininess(10.0);

        // Parallelogram color (yellow)
        color = this.scene.hexToRgbA('#ffff00');
        this.parallelogramColor = new CGFappearance(this.scene);
        this.parallelogramColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.parallelogramColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.parallelogramColor.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.parallelogramColor.setShininess(10.0);

        // Back Up Triangle (pink)
        color = this.scene.hexToRgbA('#ff9cd2');
        this.backUpTriangleColor = new CGFappearance(this.scene);
        this.backUpTriangleColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.backUpTriangleColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.backUpTriangleColor.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.backUpTriangleColor.setShininess(10.0);

        // Back down triangle (red)
        color = this.scene.hexToRgbA('#ff1414');
        this.backDownTriangleColor = new CGFappearance(this.scene);
        this.backDownTriangleColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.backDownTriangleColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.backDownTriangleColor.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.backDownTriangleColor.setShininess(10.0);

        // Front small triangle (purple)
        color = this.scene.hexToRgbA('#aa4fc2');
        this.smallFrontTriangleColor = new CGFappearance(this.scene);
        this.smallFrontTriangleColor.setAmbient(color[0], color[1], color[2], 1.0);
        this.smallFrontTriangleColor.setDiffuse(color[0], color[1], color[2], 1.0);
        this.smallFrontTriangleColor.setSpecular(1.0, 1.0, 1.0, 1.0);
        this.smallFrontTriangleColor.setShininess(10.0);

    }

    enableNormalViz(){
        for(var i = 0; i<this.objects.length;i++)
           this.objects[i].enableNormalViz();
    }
    disableNormalViz(){
        for(var i = 0; i<this.objects.length;i++)
           this.objects[i].disableNormalViz();
    }
}

