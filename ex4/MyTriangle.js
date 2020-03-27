/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangle extends CGFobject {
	constructor(scene,texCoords) {
		super(scene);
		this.initBuffers();

		if (texCoords != undefined)
			this.updateTexCoords(texCoords);
	}
	initBuffers() {

		this.vertices = [];
		for(var i = 0; i < 2; i++){
			this.vertices.push(-1, 1, 0);
			this.vertices.push(-1, -1, 0);
			this.vertices.push(1, -1, 0);
		}

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2
		];

		var nVertices = 3;

        this.normals = [];
		for(var i = 0; i < nVertices; i++)
			this.normals.push(0,0,1);
		for(var i = 0; i < nVertices; i++)
			this.normals.push(0,0,-1);
	
		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}

	/**
	 * @method updateTexCoords
	 * Updates the list of texture coordinates of the quad
	 * @param {Array} coords - Array of texture coordinates
	 */
	updateTexCoords(coords) {
		this.texCoords = [...coords];
		this.updateTexCoordsGLBuffers();
	}
}