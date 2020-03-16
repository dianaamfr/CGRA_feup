/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [];

		var c = 0.5;

		for(var k=0; k<3; k++){ //cada vértice tem 3 normais pois pertence a 3 faces diferentes
			for (var i = 0; i < 2; i++) {
				for(var j = 0; j < 2; j++){
					//face com Z=c e com Z = -c
					this.vertices.push(c-i,c-j,c);
					this.vertices.push(c-i,c-j,-c);
				}
			}
		}

		//Counter-clockwise reference of vertices
		this.indices = [
			//X=c
			0,2,3,
			3,1,0,

			//Z=-c
			1,3,7,
			7,5,1,

            //X=-c
			5,7,6,
			6,4,5,

			//Z=c
			4,6,2,
			2,0,4,

			//Y=-cc
			2,6,7,
			7,3,2,

			//Y=c
			4,0,1,
			1,5,4
		];

		var nVertices = 8;
		this.normals = [];
		for(var i = 0; i<nVertices/2; i++){
			this.normals.push(1,0,0);
		}
		for(var i = 0; i<nVertices/2; i++){
			this.normals.push(-1,0,0);
		}

		for(var i = 0; i<nVertices/2; i++){
			this.normals.push(0,0,1);
			this.normals.push(0,0,-1);
		}

		for(var i = 0; i < nVertices/4; i++){
			this.normals.push(0,1,0);
			this.normals.push(0,1,0);
			this.normals.push(0,-1,0);
			this.normals.push(0,-1,0);
		}

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}