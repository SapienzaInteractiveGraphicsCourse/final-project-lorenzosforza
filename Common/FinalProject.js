


var livello = 1;
var viteRimaste = 3;
var tempoTrascorso=0;;
var timeOut = 1000;


// Variabili Booleane 


//Porta





forzaPalla = 0;

//var animazioneBool = false;

piano.rotateX(-1.5)
//scene.add( cube );



var instructions = document.getElementById('instructions');
var blocker = document.getElementById('blocker');
var golConLivelloSuccessivo = document.getElementById('golConLivelloSuccessivo');
var errore1 = document.getElementById('errore1');
var youWin = document.getElementById('youWin');
var youLose = document.getElementById('youLose');

function posizione(e) {
	camera.rotation.y=-((-window.innerWidth/2+e.clientX)*0.376/160)
}

function initWorld() {
	world = new CANNON.World();
	world.gravity.set(0.0,-9.8,0.0);
}

function restart() {
	pallaFisica.position.y = 5.0
	pallaFisica.position.z = -30.0 
	pallaFisica.position.x = 0.0
	pallaFisica.velocity.x = 0.0
	pallaFisica.velocity.y = 0.0
	pallaFisica.velocity.z = 0.0
	pallaFisica.angularVelocity.x = 0.0
	pallaFisica.angularVelocity.y = 0.0
	pallaFisica.angularVelocity.z = 0.0
}

function interazioni() {
	document.addEventListener('keydown', event => {
		if (!pausaBool && event.key == 'Escape'){
			pausaBool = true;
		}
		if (pausaBool && (event.key == 'r' || event.key == 'R')){
			restart();
		}
	});
	
	document.addEventListener('click',event => {
		if (pausaBool && event.button == 0) {
			pausaBool = false
		}
		if (golBool && event.button == 0){
			if (livello ==3){
				golBool = false;
				livello = 1;
				viteRimaste = 3;
				removeObject();
				inizializzaLivello(livello,viteRimaste)
				
			}else{
				golBool = false;
				livello +=1;
				removeObject();
				inizializzaLivello(livello,viteRimaste)
				
			}
		}

		if (erroreBool && event.button == 0){
			if (viteRimaste == 1){
				livello = 1;
				viteRimaste = 3;
				removeObject();
				inizializzaLivello(livello,viteRimaste)
				erroreBool = false;
			}else{
				viteRimaste -=1;
				removeObject();
				inizializzaLivello(livello,viteRimaste)
				erroreBool = false;
			}
		}
	})
	if (caricamentoBool == true){
		forzaPalla += 1.0;
	}/*else{
		forzaPalla = 0.0;
	}*/

	document.addEventListener('mousedown',event => {
		if (!pausaBool && event.button == 0) {
			caricamentoBool = true;
		}
		
	})
	function arcotan(x,y){
		if (x == 0){
			return Math.PI
		}
		if (y == 0){
			return 0
		}

	}
	document.addEventListener('mouseup',event => {
		if (caricamentoBool == true) {
			animazioneBool = true
			//if (pallaFisica.position.x >=0)
			dirX = -angoloPalla+(Math.PI/2)*Math.min(2.0*(event.clientX-window.innerWidth/2)/(window.innerWidth/2),1.0)
			dirY = -angoloPalla+(Math.PI/2)*((Math.min(Math.max(500-event.clientY,0.0),300))/300)
			//forzaPalla = Math.min(forzaPalla,5)
			//pallaFisica.velocity.y = Math.min(forzaPalla*0.1,5)*5.0*Math.sin(dirY)
			//pallaFisica.velocity.x = Math.min(forzaPalla*0.1,5)*5.0*Math.sin(dirX)
			//pallaFisica.velocity.z = -Math.min(forzaPalla*0.1,5)*5.0*Math.cos(dirX)
			caricamentoBool = false
			animazioneBool = true;
			caricamentoBoolTiro = true
			
		}
	})

	document.addEventListener('mousemove', event => {
		if (pausaBool == false){
			if (pallaFisica.position.x >=0){
				camera.rotation.y=angoloPalla-((-window.innerWidth/2+event.clientX)*0.376/160)
			}else{
				camera.rotation.y=angoloPalla-((-window.innerWidth/2+event.clientX)*0.376/160)
			}
		}else{
			camera.rotation.y += 0
		}
	});

	
}

function controlloBool(){
	blocker.style.backgroundColor = 'rgba(0.0,0.0,0.0,0.0)'
	if (pausaBool){
		instructions.style.display = "";
		blocker.style.backgroundColor = 'rgba(0.0,0.0,0.0,0.5)'
	}else{
		instructions.style.display = 'None';
	}

	if (golBool == true){
		if (livello ==3){
			youWin.style.display = "";
		}else{
			golConLivelloSuccessivo.style.display = "";
		}
	}else{
		golConLivelloSuccessivo.style.display = 'None';
		youWin.style.display = 'None';
	}

	if (erroreBool == true){
		if (viteRimaste == 1){
			youLose.style.display = "";
		}else{
			errore1.style.display = "";
		}
		
	}else{
		errore1.style.display = 'None';
		youLose.style.display = 'None';
	}
}

function golnogol(){
	if (palla.position.z<=-54.0 && appenaPassato == true){
		if (palla.position.x>=-lunghezzaTraversa/2 && palla.position.x<=lunghezzaTraversa/2 && palla.position.y<=lunghezzaPalo){
			golBool = true
			erroreBool = false;
		}else{
			golBool = false;
			erroreBool = true;
			}
		appenaPassato = false;
	}
		
}


function animate() {
	controlloBool();
	golnogol();
	world.step(1/60)
	//initWorld()
	renderer.render( scene, camera );
	interazioni();
	if (animazioneBool == true){
		azione = animation(moviment,posizioniTorso,azione,step);
	}
	
	//caricamento();
	//tiro();
	//corsa()
	//funzioneCheTira();
	if (azione == 5 && giaTirato == false){
		//forzaPalla = Math.min(forzaPalla,5)
		world.gravity.set(wind,-9.8,0.0);
		pallaFisica.velocity.y = Math.min(forzaPalla*0.1,5)*5.0*Math.sin(dirY)
		pallaFisica.velocity.x = Math.min(forzaPalla*0.1,5)*5.0*Math.sin(dirX)
		pallaFisica.velocity.z = -Math.min(forzaPalla*0.1,5)*5.0*Math.cos(dirX)
		giaTirato = true
	}
	if (giaTirato == true){
		tempoTrascorso +=1;
	}
	if (tempoTrascorso >= timeOut){
		tempoTrascorso = 0;
		erroreBool = true
	}
	paloDestro.position.copy(paloDestroFisica.position)

	banner0.position.copy(banner0Fisica.position)
	banner1.position.copy(banner1Fisica.position)
	banner2.position.copy(banner2Fisica.position)
	banner3.position.copy(banner3Fisica.position)
	banner4.position.copy(banner4Fisica.position)
	banner5.position.copy(banner5Fisica.position)
	
	paloSinistro.position.copy(paloSinistroFisica.position)
	traversa.position.copy(traversaFisica.position)
	traversa.quaternion.copy(traversaFisica.quaternion)
	palla.position.copy(pallaFisica.position)
	piano.quaternion.copy(pianoFisica.quaternion)
	piano.position.copy(pianoFisica.position)
	barriera1.position.copy(barriera1Fisica.position)
	barriera2.position.copy(barriera2Fisica.position)
	barriera3.position.copy(barriera3Fisica.position)
	barriera4.position.copy(barriera4Fisica.position)
	requestAnimationFrame( animate );

};
animate();