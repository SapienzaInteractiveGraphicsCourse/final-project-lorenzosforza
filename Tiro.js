
// Variabili booleane

/*Data una serie di posizioni la funzione calcola 
muove il personaggio*/
//rotMatrix[polpaccioSinistroId] = -Math.PI/4

// torsoId = 0;
// colloId  = 1;
// testaId = 2;
// spallaDestraId = 3;
// bicipiteDestroId = 4;
// avambraccioDestroId = 5;
// spallaSinistraId = 6;
// bicipiteSinistroId = 7;
// avambraccioSinistroId = 8;
// pantaloncinoDestroId = 9;
// quadricipiteDestroId = 10;
// polpaccioDestroId = 11;
// scarpinoDestroId = 12;
// pantaloncinoSinistroId = 13;
// quadricipiteSinistroId = 14;
// polpaccioSinistroId = 15;
// scarpinoSinistroId = 16;

//rotMatrix[polpaccioDestroId] = -Math.PI/6
//rotMatrix[pantaloncinoSinistroId] = Math.PI/2
//rotMatrix[pantaloncinoDestroId] = -Math.PI/6
//rotMatrix[pantaloncinoDestroId] = -Math.PI/6
corpo[torsoId].mesh.rotation.x = -Math.PI/6

pos1 = [0.0,1.3,-20.0]
rot1 = [-Math.PI/6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-Math.PI/6,0.0,-Math.PI/6,0.0,Math.PI/2,0.0,-Math.PI/4,0.0]

pos2 = [0.0,1.3,-20.3]

posizioniTorso = [-17.0,-18.0,-19.0,-20.0,-20.3,-20.3]
rot2 = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/8,0.0,-Math.PI/3,0.0,Math.PI/8,0.0,-Math.PI/6,0.0]
delta = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]

rot3 = [-Math.PI/6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/2,0.0,-Math.PI/4,0.0,-Math.PI/8,0.0,-Math.PI/6,0.0]
pos3 = [0.0,1.3,-19.0]

rot4 = [-Math.PI/6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-Math.PI/8,0.0,-Math.PI/6,0.0,Math.PI/2,0.0,-Math.PI/4,0.0]
pos4 = [0.0,1.3,-18.0]


rot5 = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/2,0.0,-Math.PI/6,0.0,Math.PI/8,0.0,-Math.PI/6,0.0]

relPosition[0] = [0.0,1.3,-16.0]
rotMatrix = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/8,0.0,-Math.PI/3,0.0,Math.PI/8,0.0,-Math.PI/6,0.0]

var moviment = [];
var tras;
var step;
var contatore;

moviment.push([-Math.PI/6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/2,0.0,-Math.PI/4,0.0,-Math.PI/8,0.0,-Math.PI/6,0.0])
moviment.push([-Math.PI/6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-Math.PI/6,0.0,-Math.PI/6,0.0,Math.PI/2,0.0,-Math.PI/4,0.0])
moviment.push([-Math.PI/6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/2,0.0,-Math.PI/4,0.0,-Math.PI/8,0.0,-Math.PI/6,0.0])
moviment.push([-Math.PI/6,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,-Math.PI/6,0.0,-Math.PI/6,0.0,Math.PI/2,0.0,-Math.PI/4,0.0])
moviment.push([0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/8,0.0,-Math.PI/3,0.0,Math.PI/8,0.0,-Math.PI/6,0.0])
moviment.push([0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/2,0.0,-Math.PI/6,0.0,Math.PI/8,0.0,-Math.PI/6,0.0])

tras = [pos1,pos2]
step = [25,25,25,25,15,15]

contatore = 0

azione = 0


function animation(rotazioni,traslazioni,action,stepMoviment){
	if (contatore == 0){

		deltaTorso = (traslazioni[action]-relPosition[0][2])/stepMoviment[action]
		for (var j = 0; j<17; j++){
			delta[j] = (rotazioni[action][j]-rotMatrix[j])/stepMoviment[action]
		}
	}
	if (contatore<stepMoviment[action]){
		relPosition[0][2] += deltaTorso
		for (var j = 0; j<17; j++){
			rotMatrix[j] += delta[j]
		}
		contatore += 1
		muovi(0)
	}else{
		if (action<5){
			contatore=0
			action+=1
		}
	}
	return action
}
//muovi(0)



