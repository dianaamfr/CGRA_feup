/**
 * MyTriangleSmall
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleSmall extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];
		for(var i = 0; i < 2; i++){
			this.vertices.push(-1, 0, 0);
			this.vertices.push(1, 0, 0);
			this.vertices.push(0, 1, 0);
		}

		var nVertices = 3;

        this.normals = [];
		for(var i = 0; i < nVertices; i++)
			this.normals.push(0,0,1);
		for(var i = 0; i < nVertices; i++)
			this.normals.push(0,0,-1);
		

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}