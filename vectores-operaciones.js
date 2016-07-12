function sumaVectores (V1, V2)
	{

	var PuntoOrigen = new Punto3D (V1.Origen.X, V1.Origen.Y, V1.Origen.Z);
	var PuntoFinal = new Punto3D (	V1.Origen.X + V1.VX + V2.VX, 
									V1.Origen.Y + V1.VY + V2.VY, 
									V1.Origen.Z + V1.VZ + V2.VZ);

	var VectorSuma = new Vector (PuntoOrigen, PuntoFinal);
	return VectorSuma; 
	}


function restaVectores (V1, V2)
	{
	var PuntoOrigen = new Punto3D (	V1.Origen.X, 
									V1.Origen.Y, 
									V1.Origen.Z);

	var PuntoFinal = new Punto3D (	V1.Origen.X + V1.VX - V2.VX, 
									V1.Origen.Y + V1.VY - V2.VY, 
									V1.Origen.Z + V1.VZ - V2.VZ);

	var VectorDiferencia = new Vector (PuntoOrigen, PuntoFinal);
	return VectorDiferencia; 
	}


function productoK (k, Vector1)
	{

	var PuntoOrigen = new Punto3D (	Vector1.Origen.X, 
									Vector1.Origen.Y, 
									Vector1.Origen.Z);

	var PuntoFinal = new Punto3D (	Vector1.Origen.X + (k * Vector1.VX), 
									Vector1.Origen.Y + (k * Vector1.VY), 
									Vector1.Origen.Z + (k * Vector1.VZ));

	var VectorProductoK = new Vector (PuntoOrigen, PuntoFinal);

	return VectorProductoK; 
	}


function productoEscalar (Vector1, Vector2)
	{
	var productoEs = (Vector1.VX * Vector2.VX) + (Vector1.VY * Vector2.VY) + (Vector1.VZ * Vector2.VZ);
	return productoEs;
	}


function productoVectorial (Vector1, Vector2)
	{
	
	var PtoOrigen = new Punto3D(Vector1.Origen.X, Vector1.Origen.Y, Vector1.Origen.Z);

	var PtoFinal = new Punto3D();

	PtoFinal.X = Vector1.Origen.X + (Vector1.VY * Vector2.VZ) - (Vector1.VZ * Vector2.VY);
	PtoFinal.Y = Vector1.Origen.Y - (Vector1.VX * Vector2.VZ) + (Vector1.VZ * Vector2.VX);
	PtoFinal.Z = Vector1.Origen.Z + (Vector1.VX * Vector2.VY) - (Vector1.VY * Vector2.VX);

	var productoVector = new Vector(PtoOrigen, PtoFinal);	
	return productoVector;

	}

alert("INICIO: vectores-operaciones cargado...");
