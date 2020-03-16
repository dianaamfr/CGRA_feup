/**
 * MyParallelogram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyParallelogram extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers(){
		this.vertices = [];
		for(var i = 0; i < 2; i++){
			this.vertices.push(0, 0, 0); //0
			this.vertices.push(-2, 0, 0); //1
			this.vertices.push(-3, 1, 0); //2
			this.vertices.push(-1, 1, 0); //3
		}

		this.normals = [];

		var nVertices = 4;
		for(var i = 0; i < nVertices; i++)
			this.normals.push(0,0,1);
		for(var i = 0; i < nVertices; i++)
			this.normals.push(0,0,-1);
		

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 3, 1,
			3, 2 ,1
		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}

