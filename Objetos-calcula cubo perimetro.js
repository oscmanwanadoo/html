

function calculaCuboPerimetro (Objeto1)
	{ 
	var numVertices = Objeto1.Vertice.length;
var minX, minY, minZ;
var maxX, maxY, maxZ;


	for (var nVertice=0; nVertice< numVertices; nVertice++)
		{

		var PV = Objeto.Vertice[nVertice];
		
if (PV.X > maxX) {maxX=PV.X;}
if (PV.Y > maxY) {maxY=PV.Y;}
if (PV.Z > maxZ) {maxZ=PV.Z;}
if (PV.X < minX) {minX=PV.X;}
if (PV.Y < minY) {minY=PV.Y;}
if (PV.Z < minZ) {minZ=PV.Z;}
		}

////////////
// TODO: crear objeto cubo con valores maxX, maxY, maxZ, minX, minY, minZ
//
////////////

var vertice = [
[minX, minY, minZ], 
[maxX, minY, minZ],
[maxX, maxY, minZ],
[minX, maxY, minZ],
[minX, minY, maxZ], 
[maxX, minY, maxZ],
[maxX, maxY, maxZ],
[minX, maxY, maxZ]];

var arista = [
[0,1],
[1,2],
[2,3],
[3,1],
[4,5],
[5,6],
[6,7],
[7,4],
[0,4],
[1,5],
[2,6],
[3,7]];

var ObjetoCubo = new objeto3D(vertice, arista);
Objeto1.CuboContorno = ObjetoCubo;

////////////
// TODO: crear objeto ejes con valores maxX, maxY, maxZ, minX, minY, minZ y vertices[...]
//
////////////



}
