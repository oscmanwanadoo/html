

//
// Vector2 rota sobre VectorEje un anguloAlfa
//
//

function rotacionVectorVector (VectorEje, Vector2, anguloAlfa)
{

// var P0 = vectorEje.Origen;

var P1 = new Punto3D (	Vector2.Origen.X,  Vector2.Origen.Y, Vector2.Origen.Z);

var P2 = new Punto3D (	Vector2.Origen.X + Vector2.VX,  Vector2.Origen.Y + Vector2.VY, Vector2.Origen.Z + Vector2.VZ);
	
// var V1P1 = new Vector (P0,P1);
// var V1P2 = new Vector (P0,P2);

		
var P1R = rotacionPuntoVector (VectorEje, P1, anguloAlfa);

var P2R = rotacionPuntoVector (VectorEje, P2, anguloAlfa);

var Vector2Rotado = new Vector(P1R,P2R);

return Vector2Rotado;

}


//
// function rotacionVectorSistCoord EN PRUEBAS
// ********************************************
//

function rotacionVectorSistCoord (Vector1, SistCoord1, anguloAlfa)
{

var P_Origen = SistCoord1.Origen;
var Vector_SC_X = SistCoord1.VectorX;
var Vector_SC_Y = SistCoord1.VectorY;
var Vector_SC_Z = SistCoord1.VectorZ;


//SistCoord1.VectorX.escribe();
//SistCoord1.VectorY.escribe();
//SistCoord1.VectorZ.escribe();
//document.write("<br>Vector 1<br>");
//Vector1.escribe();

//document.write("<br>Vector 1, X , Y y Z pasados a rotación<br>");
//document.write("<br>P_Origen:"+ P_Origen.X +", "+P_Origen.Y+", "+P_Origen.Z);

			
var P_Origen_R = rotacionPuntoVector (Vector1, P_Origen, anguloAlfa);

// document.write("rotacion Punto Vector finalizado <br>");


var V_X_R = rotacionVectorVector (Vector1, Vector_SC_X, anguloAlfa);
//document.write("rotacion Vector VectorX finalizado <br>");

var V_Y_R = rotacionVectorVector (Vector1, Vector_SC_Y, anguloAlfa);
//document.write("rotacion Vector VectorY finalizado <br>");

var V_Z_R = rotacionVectorVector (Vector1, Vector_SC_Z, anguloAlfa);

//document.write("rotacion Vector VectorZ finalizado <br>");


var SCR = new SistemaCoordenadas(P_Origen_R, V_X_R, V_Y_R, V_Z_R);

return SCR;

}