/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
   constructor(scene) {
      super(scene);
      
      this.quad = new MyQuad(this.scene);

      //top material
      this.quadTopMaterial = new CGFappearance(this.scene);
      this.quadTopMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.quadTopMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.quadTopMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.quadTopMaterial.setShininess(10.0);
      this.quadTopMaterial.loadTexture('images/mineTop.png');
      this.quadTopMaterial.setTextureWrap('REPEAT', 'REPEAT');

      //bottom material
      this.quadBtmMaterial = new CGFappearance(this.scene);
      this.quadBtmMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.quadBtmMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.quadBtmMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.quadBtmMaterial.setShininess(10.0);
      this.quadBtmMaterial.loadTexture('images/mineBottom.png');
      this.quadBtmMaterial.setTextureWrap('REPEAT', 'REPEAT');

      //side material
      this.quadSideMaterial = new CGFappearance(this.scene);
      this.quadSideMaterial.setAmbient(0.1, 0.1, 0.1, 1);
      this.quadSideMaterial.setDiffuse(0.9, 0.9, 0.9, 1);
      this.quadSideMaterial.setSpecular(0.1, 0.1, 0.1, 1);
      this.quadSideMaterial.setShininess(10.0);
      this.quadSideMaterial.loadTexture('images/mineSide.png');
      this.quadSideMaterial.setTextureWrap('REPEAT', 'REPEAT');
      
   }
   
	display() {
      
      //front
      this.scene.pushMatrix();
      this.scene.translate(0.0, 0.0, 0.5); 
      this.quadSideMaterial.apply();
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
      this.quad.display();
      this.scene.popMatrix();

      //back
      this.scene.pushMatrix();
      this.scene.translate(0.0, 0.0, -0.5); 
      this.scene.rotate(-Math.PI,0.0, 1.0,0.0);
      this.quadSideMaterial.apply();
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
      this.quad.display();
      this.scene.popMatrix();

      //left
      this.scene.pushMatrix();
      this.scene.translate(-0.5, 0.0, 0.0); 
      this.scene.rotate(-Math.PI/2,0.0, 1.0,0.0);
      this.quadSideMaterial.apply();
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
      this.quad.display();
      this.scene.popMatrix();

      //right
      this.scene.pushMatrix();
      this.scene.translate(0.5, 0.0, 0.0); 
      this.scene.rotate(Math.PI/2,0.0, 1.0,0.0);
      this.quadSideMaterial.apply();
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
      this.quad.display();
      this.scene.popMatrix();

      //bottom
      this.scene.pushMatrix();
      this.scene.translate(0.0, -0.5, 0.0); 
      this.scene.rotate(Math.PI/2,1.0, 0.0,0.0);
      this.quadBtmMaterial.apply();
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
      this.quad.display();
      this.scene.popMatrix();

      //top
      this.scene.pushMatrix();
      this.scene.translate(0.0, 0.5, 0.0); 
      this.scene.rotate(-Math.PI/2,1.0, 0.0,0.0);
      this.quadTopMaterial.apply();
      this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
      this.quad.display();
      this.scene.popMatrix();
	}
}