const scene = new THREE.Scene();
//scene.add(new THREE.AxesHelper(5))
scene.background = new THREE.Color(0x2271b3)
const camera = new THREE.PerspectiveCamera( 30, window.innerWidth / window.innerHeight, 0.1, 70 );
0.0,3.0,-20.0
camera.position.x = 0
camera.position.z = 0.0;
camera.position.y = 3
//camera.rotateY(Math.PI/2)
camera.rotateX(0.0)



const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap
document.body.appendChild(renderer.domElement);

world = new CANNON.World();
world.gravity.set(0.0,-9.8,0.0);


//Luce
scene.add( new THREE.AmbientLight( 0x404040 ) );
light = new THREE.DirectionalLight( 0xffffff, 0.4);
light.position.set( 0, 5, 0.0 );
light.target.position.set(0.0,-20.0,-50.0)
scene.add(light.target);
light.castShadow = true;
light.shadow.camera.far = 50;
light.shadow.camera.bottom = -100
light.shadow.camera.top = 100;
light.shadow.camera.right = 80;
light.shadow.camera.left = -80;
light.shadow.mapSize.width = 1024;
light.shadow.mapSize.height = 1024;
light.shadowCameraVisible = true;
scene.add( light );

helper = new THREE.CameraHelper(light.shadow.camera)
//scene.add(helper)

// Geometria
const geometry = new THREE.BoxGeometry( 1, 1, 1 );

// Texture
textureCalcio = new THREE.TextureLoader().load("Common/Image/campo da calcio.jpg")
textureCalcio.center = new THREE.Vector2(0.5,0.5)
textureCalcio.rotation = Math.PI/2
 
textureBump = new THREE.TextureLoader().load("Common/Image/prato Bump.jpg")
textureBump.wrapS = THREE.RepeatWrapping;
textureBump.wrapT = THREE.RepeatWrapping;
textureBump.repeat.set( 10, 10 );

texturePallone = new THREE.TextureLoader().load("Common/Image/texturePallone.jpg")
// Materiali
const bianco = new THREE.MeshStandardMaterial({color:0xffffff});
const pallone = new THREE.MeshStandardMaterial({color:0xffffff, map: texturePallone});
const pelle = new THREE.MeshStandardMaterial({color:0xffddca});
const celeste = new THREE.MeshStandardMaterial({color:0x99cbff});
const nero = new THREE.MeshStandardMaterial({color:0x000000});
materialePiano = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureCalcio} );
materialePiano.bumpMap = textureBump
materialePiano.bumpScale = 0.2





diametroPalo = 0.12;
lunghezzaPalo = 2.44;
lunghezzaTraversa = 7.32;



// Oggetti

piano = new THREE.Mesh(new THREE.PlaneGeometry( 90, 137 ), materialePiano)
piano.castShadow = true
piano.receiveShadow  = true


paloDestro = new THREE.Mesh(new THREE.CylinderGeometry(diametroPalo,diametroPalo,lunghezzaPalo,32),bianco)
paloDestro.castShadow = true
paloSinistro = new THREE.Mesh(new THREE.CylinderGeometry(diametroPalo,diametroPalo,lunghezzaPalo,32),bianco)
paloSinistro.castShadow = true
traversa = new THREE.Mesh(new THREE.CylinderGeometry(diametroPalo,diametroPalo,lunghezzaTraversa,32),bianco)
traversa.castShadow = true

palla = new THREE.Mesh(new THREE.SphereGeometry(0.215,32,32),pallone)
palla.castShadow = true
palla.receiveShadow = true


//Banner Pubblicitari 
textureLivello1 = new THREE.TextureLoader().load("Common/Image/Livello1 Banner.jpg")
materialeLivello1 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureLivello1} );
textureLivello2 = new THREE.TextureLoader().load("Common/Image/Livello2 Banner.jpg")
materialeLivello2 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureLivello2} );
textureLivello3 = new THREE.TextureLoader().load("Common/Image\/Livello3 Banner.jpg")
materialeLivello3 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureLivello3} );

materialeLivello = materialeLivello1

textureVite1 = new THREE.TextureLoader().load("Common/Image/Una Vita.jpg")
materialeVite1 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureVite1} );
textureVite2 = new THREE.TextureLoader().load("Common/Image/Due Vite.jpg")
materialeVite2 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureVite2} );
textureVite3 = new THREE.TextureLoader().load("Common/Image/Tre Vite.jpg")
materialeVite3 = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureVite3} );


banner0 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
banner0Fisica = new CANNON.Body({mass:0,shape:new CANNON.Plane(),position: new THREE.Vector3(0.0,0.75,-62.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),0.0)})
banner3 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
banner3Fisica = new CANNON.Body({mass:0,shape:new CANNON.Plane(),position: new THREE.Vector3(20.0,0.75,-62.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),0.0)})
banner4 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeLivello)
banner4Fisica = new CANNON.Body({mass:0,shape:new CANNON.Plane(),position: new THREE.Vector3(-20.0,0.75,-62.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),0.0)})

materialeVite = materialeVite3

banner1 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
banner1Fisica = new CANNON.Body({mass:0,shape:new CANNON.Plane(),position: new THREE.Vector3(10.0,0.75,-62.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),0.0)})
banner2 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
banner2Fisica = new CANNON.Body({mass:0,shape:new CANNON.Plane(),position: new THREE.Vector3(30.0,0.75,-62.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),0.0)})
banner5 = new THREE.Mesh(new THREE.PlaneGeometry( 10, 1.5 ), materialeVite)
banner5Fisica = new CANNON.Body({mass:0,shape:new CANNON.Plane(),position: new THREE.Vector3(-10.0,0.75,-62.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),0.0)})



// Fisica
pianoFisica = new CANNON.Body({mass:0,shape:new CANNON.Plane(),position: new THREE.Vector3(0.0,0.0,0.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(1,0,0),-Math.PI/2)})
paloDestroFisica = new CANNON.Body({mass:0, position: new THREE.Vector3(lunghezzaTraversa/2,lunghezzaPalo/2,-54.0),shape:new CANNON.Cylinder(0.1,0.1,2,32)})
paloSinistroFisica = new CANNON.Body({mass:0, position: new THREE.Vector3(-lunghezzaTraversa/2,lunghezzaPalo/2,-54.0),shape:new CANNON.Cylinder(0.1,0.1,2,32)})
traversaFisica = new CANNON.Body({mass:0, position: new THREE.Vector3(0.0,lunghezzaPalo-diametroPalo/2,-54.0),shape:new CANNON.Cylinder(0.1,0.1,4,32), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),1.57)})
pallaFisica = new CANNON.Body({mass:1, position: new THREE.Vector3(0.0,1.3,-20.0),shape:new CANNON.Sphere(0.2)})






// Barriera
textureBarriera = new THREE.TextureLoader().load("Common/Image/Omino Barriera.jpg")
materialeBarriera = new THREE.MeshPhongMaterial( {color: 0xffffff, map: textureBarriera} );

barriera1 = new THREE.Mesh( new THREE.BoxGeometry( 0.75, 2., 0.1 ), materialeBarriera );
barriera1Fisica = new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(1.0,1.0,1.0)),position: new THREE.Vector3(-12.0,1,-35.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),0)})
barriera2 = new THREE.Mesh( new THREE.BoxGeometry( 0.75, 2., 0.1 ), materialeBarriera );
barriera2Fisica = new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(1.0,1.0,1.0)),position: new THREE.Vector3(-11.25,1,-35.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),0)})
barriera3 = new THREE.Mesh( new THREE.BoxGeometry( 0.75, 2., 0.1 ), materialeBarriera );
barriera3Fisica = new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(1.0,1.0,1.0)),position: new THREE.Vector3(-10.5,1,-35.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),0)})
barriera4 = new THREE.Mesh( new THREE.BoxGeometry( 0.75, 2., 0.1 ), materialeBarriera );
barriera4Fisica = new CANNON.Body({mass:0,shape:new CANNON.Box(new CANNON.Vec3(1.0,1.0,1.0)),position: new THREE.Vector3(-9.75,1,-35.0), quaternion: new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(0,0,1),0)})



