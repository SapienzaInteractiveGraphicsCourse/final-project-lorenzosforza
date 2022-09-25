// Variabili Booleane 
var appenaPassato;
var pausaBool;
var caricamentoBool;
var animazioneBool;
var golBool;
var erroreBool;
var caricamentoBoolTiro;
var tiroBool;
var giaTirato;
var textureVento;


// Variabili Generiche da inizializzare
var forzaPalla;
var wind;

function inizializzaScena(){
    world.addBody(pianoFisica)
    scene.add(piano);
    world.addBody(paloDestroFisica)
    scene.add(paloDestro)
    world.addBody(paloSinistroFisica)
    scene.add(paloSinistro)
    world.addBody(traversaFisica)
    scene.add(traversa)    
}



function inizializzaLivello(livello,vite){
    tempoTrascorso = 0;
    world.gravity.set(0.0,-9.8,0.0);
    wind = 5.0*(Math.random()-0.5)
    caricamentoBoolTiro = false;
    tiroBool = false;
    giaTirato = false;

    azione = 0;
    forzaPalla = 0.0;
    if (livello == 1 && vite == 3){
        pausaBool = true;
    }
	textureVite1 = new THREE.TextureLoader().load("Una Vita.PNG")
	materialeVite1 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureVite1} );
	textureVite2 = new THREE.TextureLoader().load("Due Vite.PNG")
	materialeVite2 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureVite2} );
	textureVite3 = new THREE.TextureLoader().load("Tre Vite.PNG")
	materialeVite3 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureVite3} );
	materialeDefault = new THREE.MeshPhongMaterial( {color: 0xffffff} );

	switch (vite){
		case 1:
			materialeVite = materialeVite1;
			break;
		case 2:
			materialeVite = materialeVite2;
			break;
		case 3:
			materialeVite = materialeVite3;
			break;
		default:
			materialeVite = materialeDefault;
			break;
	}

	

    textureLivello1 = new THREE.TextureLoader().load("Livello1 Banner.PNG")
    materialeLivello1 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureLivello1} );
    textureLivello2 = new THREE.TextureLoader().load("Livello2 Banner.PNG")
    materialeLivello2 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureLivello2} );
    textureLivello3 = new THREE.TextureLoader().load("Livello3 Banner.PNG")
    materialeLivello3 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureLivello3} );

    if (wind>=0 && wind<1){
        textureVento = new THREE.TextureLoader().load("Vento 5D.PNG")
    }else if(wind>=1 && wind<2){
        textureVento = new THREE.TextureLoader().load("Vento 10D.PNG")
    }else if(wind>=2 && wind<3){
        textureVento = new THREE.TextureLoader().load("Vento 15D.PNG")
    }else if(wind>=3 && wind<4){
        textureVento = new THREE.TextureLoader().load("Vento 20D.PNG")
    }else if(wind>=4){
        textureVento = new THREE.TextureLoader().load("Vento 25D.PNG")
    }else if (wind<0 && wind<=-1){
        textureVento = new THREE.TextureLoader().load("Vento 5S.PNG")
    }else if (wind<-1 && wind<=-2){
        textureVento = new THREE.TextureLoader().load("Vento 10S.PNG")
    }else if (wind<-2 && wind<=-3){
        textureVento = new THREE.TextureLoader().load("Vento 15S.PNG")
    }else if (wind<-3 && wind<=-4){
        textureVento = new THREE.TextureLoader().load("Vento 20S.PNG")
    }else if (wind<-4){
        textureVento = new THREE.TextureLoader().load("Vento 25S.PNG")
    }else{
        textureVento = new THREE.TextureLoader().load("Vento 5D.PNG")
    }

    materialeVento = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureVento} );

    materialeLivello = materialeLivello1
    switch (livello){
		case 1:
            wind = 0;
			materialeLivello = materialeLivello1;
            pallaFisica.position = new THREE.Vector3(-10.0,5.0,-20.4)
            palla.position.copy(pallaFisica.position)

            banner0 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
            banner1 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner2 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner3 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
            banner4 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
            banner5 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)

			break;
		case 2:
			materialeLivello = materialeLivello2;
            pallaFisica.position = new THREE.Vector3(5.0,5.0,-20.4)
            palla.position.copy(pallaFisica.position)

            banner0 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
            banner1 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner2 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner3 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
            banner4 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner5 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVento)

            
			break;
		case 3:
			materialeLivello = materialeLivello3;
            pallaFisica.position = new THREE.Vector3(-15.0,5.0,-20.4)
            palla.position.copy(pallaFisica.position)

            banner0 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
            banner1 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner2 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner3 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
            banner4 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
            banner5 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVento)

            scene.add(barriera1)
            world.add(barriera1Fisica)
            scene.add(barriera2)
            world.add(barriera2Fisica)
            scene.add(barriera3)
            world.add(barriera3Fisica)
            scene.add(barriera4)
            world.add(barriera4Fisica)
			break;
		default:
			materialeLivello = materialeDefault;
            pallaFisica.position = new THREE.Vector3(-10.0,5.0,-20.4)
            palla.position.copy(pallaFisica.position)
			break;
	} 
    
    
	
	world.addBody(banner0Fisica)
	scene.add(banner0)
	world.addBody(banner1Fisica)
	scene.add(banner1)
	world.addBody(banner2Fisica)
	scene.add(banner2)
    world.addBody(banner3Fisica)
	scene.add(banner3)
	world.addBody(banner4Fisica)
	scene.add(banner4)
	world.addBody(banner5Fisica)
	scene.add(banner5)
	

    pallaFisica.velocity.x = 0.0
	pallaFisica.velocity.y = 0.0
	pallaFisica.velocity.z = 0.0
	pallaFisica.angularVelocity.x = 0.0
	pallaFisica.angularVelocity.y = 0.0
	pallaFisica.angularVelocity.z = 0.0
    world.addBody(pallaFisica)
    scene.add(palla)
	relPosition[0] = [pallaFisica.position.x,1.3,pallaFisica.position.z+4.4 ]
    rotMatrix = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,Math.PI/8,0.0,-Math.PI/3,0.0,Math.PI/8,0.0,-Math.PI/6,0.0]
	posizioniTorso = [pallaFisica.position.z+3.3,pallaFisica.position.z+2.3,pallaFisica.position.z+1.3,pallaFisica.position.z+0.3,pallaFisica.position.z+0.1,pallaFisica.position.z+0.1]
	muovi(0)
	cameraPosition()
    appenaPassato = true;
    caricamentoBool = false;
    animazioneBool = false;
}

function removeObject(){
    world.removeBody(banner0Fisica)
	scene.remove(banner0)
	world.removeBody(banner1Fisica)
	scene.remove(banner1)
	world.removeBody(banner2Fisica)
	scene.remove(banner2)
    world.removeBody(banner3Fisica)
	scene.remove(banner3)
	world.removeBody(banner4Fisica)
	scene.remove(banner4)
	world.removeBody(banner5Fisica)
	scene.remove(banner5)

    world.removeBody(pallaFisica)
    scene.remove(palla)

    scene.remove(barriera1)
    world.removeBody(barriera1Fisica)
    scene.remove(barriera2)
    world.removeBody(barriera2Fisica)
    scene.remove(barriera3)
    world.removeBody(barriera3Fisica)
    scene.remove(barriera4)
    world.removeBody(barriera4Fisica)

}
angoloPalla = 0;
function cameraPosition(){
    angoloPalla = Math.atan(Math.abs(pallaFisica.position.x)/Math.abs(pallaFisica.position.z))
	posizionePallaZ = Math.abs(pallaFisica.position.z)
    if (pallaFisica.position.x >=0){
        camera.position.x = pallaFisica.position.x + posizionePallaZ*Math.sin(angoloPalla)
        camera.position.z = pallaFisica.position.z + posizionePallaZ*Math.cos(angoloPalla)
        camera.rotateY(angoloPalla)
    }else{
        angoloPalla = -angoloPalla
        camera.position.x = pallaFisica.position.x + posizionePallaZ*Math.sin(angoloPalla)
        camera.position.z = pallaFisica.position.z + posizionePallaZ*Math.cos(angoloPalla)
        camera.rotateY(angoloPalla)
    }
    
}

removeObject()
inizializzaScena()
inizializzaLivello(1,3)
