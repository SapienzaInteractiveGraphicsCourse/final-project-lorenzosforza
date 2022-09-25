//Modello Gerarchico
torso = new THREE.Mesh(new THREE.BoxGeometry(0.40,0.55,0.25),bianco)
torso.position.z = -30.0

var corpo = []
numeroRettangoli = 17
var torsoId = 0;
var colloId  = 1;
var testaId = 2;
var spallaDestraId = 3;
var bicipiteDestroId = 4;
var avambraccioDestroId = 5;
var spallaSinistraId = 6;
var bicipiteSinistroId = 7;
var avambraccioSinistroId = 8;
var pantaloncinoDestroId = 9;
var quadricipiteDestroId = 10;
var polpaccioDestroId = 11;
var scarpinoDestroId = 12;
var pantaloncinoSinistroId = 13;
var quadricipiteSinistroId = 14;
var polpaccioSinistroId = 15;
var scarpinoSinistroId = 16;

var relPosition = [[0.0,1.3,-20.0],[0.0,0.0,0.0]]
var rotMatrix = [0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0]
function torsoFunc(){
    corpo[torsoId].mesh.rotation.x = rotMatrix[torsoId]
    corpo[torsoId].mesh.position.x = relPosition[torsoId][0]
    corpo[torsoId].mesh.position.y = relPosition[torsoId][1]
    corpo[torsoId].mesh.position.z = relPosition[torsoId][2]
}

function colloFunc(){
    corpo[colloId].mesh.rotation.x = corpo[torsoId].mesh.rotation.x
    corpo[colloId].mesh.position.x = relPosition[torsoId][0]
    corpo[colloId].mesh.position.y = relPosition[torsoId][1]+ corpo[torsoId].mesh.geometry.parameters.height/2+0.15/2
    corpo[colloId].mesh.position.z = relPosition[torsoId][2]

    xRel = 0.0
    yRel = corpo[torsoId].mesh.geometry.parameters.height/2+0.15/2
    zRel =  0.0

    corpo[colloId].mesh.position.x = corpo[torsoId].mesh.position.x + xRel
    corpo[colloId].mesh.position.y = corpo[torsoId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[colloId].mesh.position.z = corpo[torsoId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
}

function testaFunc(){
    corpo[testaId].mesh.rotation.x = corpo[torsoId].mesh.rotation.x
    xRel = 0.0
    yRel = corpo[colloId].mesh.geometry.parameters.height/2+0.25/2
    zRel =  0.0

    corpo[testaId].mesh.position.x = corpo[colloId].mesh.position.x + xRel
    corpo[testaId].mesh.position.y = corpo[colloId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[testaId].mesh.position.z = corpo[colloId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
}

function spallaDestraFunc(){
    corpo[spallaDestraId].mesh.rotation.x = corpo[torsoId].mesh.rotation.x+rotMatrix[spallaDestraId]

    xRel = corpo[torsoId].mesh.geometry.parameters.width/2+0.05
    yRel = corpo[torsoId].mesh.geometry.parameters.height/2-0.05
    zRel =  0.0

    corpo[spallaDestraId].mesh.position.x = corpo[torsoId].mesh.position.x + xRel
    corpo[spallaDestraId].mesh.position.y = corpo[torsoId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[spallaDestraId].mesh.position.z = corpo[torsoId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
    
}

function bicipiteDestroFunc(){
    corpo[bicipiteDestroId].mesh.rotation.x = corpo[spallaDestraId].mesh.rotation.x
    xRel = 0.0
    yRel = -0.15*(Math.cos(rotMatrix[spallaDestraId]))
    zRel =  -0.15*(Math.sin(rotMatrix[spallaDestraId]))

    corpo[bicipiteDestroId].mesh.position.x = corpo[spallaDestraId].mesh.position.x + xRel
    corpo[bicipiteDestroId].mesh.position.y = corpo[spallaDestraId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[bicipiteDestroId].mesh.position.z = corpo[spallaDestraId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
    
}

function avambraccioDestroFunc(){

    
    corpo[avambraccioDestroId].mesh.rotation.x = corpo[bicipiteDestroId].mesh.rotation.x+rotMatrix[avambraccioDestroId]

    xRel = 0.0
    yRel = -0.1-0.15*(Math.cos(rotMatrix[avambraccioDestroId]))
    zRel =  -0.15*(Math.sin(rotMatrix[avambraccioDestroId]))

    corpo[avambraccioDestroId].mesh.position.x = corpo[bicipiteDestroId].mesh.position.x + xRel
    corpo[avambraccioDestroId].mesh.position.y = corpo[bicipiteDestroId].mesh.position.y+yRel*Math.cos(corpo[spallaDestraId].mesh.rotation.x)-zRel*Math.sin(corpo[spallaDestraId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[avambraccioDestroId].mesh.position.z = corpo[bicipiteDestroId].mesh.position.z+yRel*Math.sin(corpo[spallaDestraId].mesh.rotation.x)+zRel*Math.cos(corpo[spallaDestraId].mesh.rotation.x)
    
}

function spallaSinistraFunc(){
    corpo[spallaSinistraId].mesh.rotation.x = corpo[torsoId].mesh.rotation.x+rotMatrix[spallaSinistraId]

    xRel = - corpo[torsoId].mesh.geometry.parameters.width/2-0.05
    yRel = corpo[torsoId].mesh.geometry.parameters.height/2-0.05
    zRel =  0.0

    corpo[spallaSinistraId].mesh.position.x = corpo[torsoId].mesh.position.x + xRel
    corpo[spallaSinistraId].mesh.position.y = corpo[torsoId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[spallaSinistraId].mesh.position.z = corpo[torsoId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
}

function bicipiteSinistroFunc(){

    corpo[bicipiteSinistroId].mesh.rotation.x = corpo[spallaSinistraId].mesh.rotation.x
    xRel = 0.0
    yRel = -0.15*(Math.cos(rotMatrix[spallaSinistraId]))
    zRel =  -0.15*(Math.sin(rotMatrix[spallaSinistraId]))

    corpo[bicipiteSinistroId].mesh.position.x = corpo[spallaSinistraId].mesh.position.x + xRel
    corpo[bicipiteSinistroId].mesh.position.y = corpo[spallaSinistraId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[bicipiteSinistroId].mesh.position.z = corpo[spallaSinistraId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    

}

function avambraccioSinistroFunc(){


    corpo[avambraccioSinistroId].mesh.rotation.x = corpo[bicipiteSinistroId].mesh.rotation.x+rotMatrix[avambraccioSinistroId]
    xRel = 0.0
    yRel = -0.1-0.15*(Math.cos(rotMatrix[avambraccioSinistroId]))
    zRel =  -0.15*(Math.sin(rotMatrix[avambraccioSinistroId]))

    corpo[avambraccioSinistroId].mesh.position.x = corpo[bicipiteSinistroId].mesh.position.x + xRel
    corpo[avambraccioSinistroId].mesh.position.y = corpo[bicipiteSinistroId].mesh.position.y+yRel*Math.cos(corpo[spallaSinistraId].mesh.rotation.x)-zRel*Math.sin(corpo[spallaSinistraId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[avambraccioSinistroId].mesh.position.z = corpo[bicipiteSinistroId].mesh.position.z+yRel*Math.sin(corpo[spallaSinistraId].mesh.rotation.x)+zRel*Math.cos(corpo[spallaSinistraId].mesh.rotation.x)
    
}

function pantaloncinoDestroFunc(){
    
    
    corpo[pantaloncinoDestroId].mesh.rotation.x = corpo[torsoId].mesh.rotation.x+rotMatrix[pantaloncinoDestroId]
    xRel = corpo[torsoId].mesh.geometry.parameters.width/2-corpo[pantaloncinoDestroId].mesh.geometry.parameters.width/2
    yRel = -corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId]))
    zRel =  - 0.30/2*Math.sin(rotMatrix[pantaloncinoDestroId])

    corpo[pantaloncinoDestroId].mesh.position.x = corpo[torsoId].mesh.position.x + xRel
    corpo[pantaloncinoDestroId].mesh.position.y = corpo[torsoId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[pantaloncinoDestroId].mesh.position.z = corpo[torsoId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
}
function quadricipiteDestroFunc(){
    corpo[quadricipiteDestroId].mesh.rotation.x = corpo[pantaloncinoDestroId].mesh.rotation.x

    xRel = 0.0
    yRel = -0.225
    zRel = 0.0

    corpo[quadricipiteDestroId].mesh.position.x = corpo[pantaloncinoDestroId].mesh.position.x + xRel
    corpo[quadricipiteDestroId].mesh.position.y = corpo[pantaloncinoDestroId].mesh.position.y+yRel*Math.cos(corpo[pantaloncinoDestroId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[quadricipiteDestroId].mesh.position.z = corpo[pantaloncinoDestroId].mesh.position.z+yRel*Math.sin(corpo[pantaloncinoDestroId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
}

function polpaccioDestroFunc(){
    
    corpo[polpaccioDestroId].mesh.rotation.x = corpo[quadricipiteDestroId].mesh.rotation.x + rotMatrix[polpaccioDestroId]

    xRel = 0.0
    yRel = -(0.15/2+0.4/2)*Math.cos(rotMatrix[polpaccioDestroId])
    zRel = -(0.15/2+0.4/2)*Math.sin(rotMatrix[polpaccioDestroId])
    
    corpo[polpaccioDestroId].mesh.position.x = corpo[quadricipiteDestroId].mesh.position.x
    corpo[polpaccioDestroId].mesh.position.y = corpo[quadricipiteDestroId].mesh.position.y+yRel*Math.cos(corpo[quadricipiteDestroId].mesh.rotation.x)-zRel*Math.sin(corpo[quadricipiteDestroId].mesh.rotation.x)
    corpo[polpaccioDestroId].mesh.position.z = corpo[quadricipiteDestroId].mesh.position.z+yRel*Math.sin(corpo[quadricipiteDestroId].mesh.rotation.x)+zRel*Math.cos(corpo[quadricipiteDestroId].mesh.rotation.x)
    
}

function scarpinoDestroFunc(){
    corpo[scarpinoDestroId].mesh.rotation.x = corpo[polpaccioDestroId].mesh.rotation.x + rotMatrix[scarpinoDestroId]

    xRel = 0.0
    yRel = -(0.2/2+0.4/2)*Math.cos(rotMatrix[scarpinoDestroId])
    zRel = -0.05-(0.2+0.4/2)*Math.sin(rotMatrix[scarpinoDestroId])
    
    corpo[scarpinoDestroId].mesh.position.x = corpo[polpaccioDestroId].mesh.position.x
    corpo[scarpinoDestroId].mesh.position.y = corpo[polpaccioDestroId].mesh.position.y+yRel*Math.cos(corpo[polpaccioDestroId].mesh.rotation.x)-zRel*Math.sin(corpo[polpaccioDestroId].mesh.rotation.x)
    corpo[scarpinoDestroId].mesh.position.z = corpo[polpaccioDestroId].mesh.position.z+yRel*Math.sin(corpo[polpaccioDestroId].mesh.rotation.x)+zRel*Math.cos(corpo[polpaccioDestroId].mesh.rotation.x)
    

    //corpo[scarpinoDestroId].mesh.rotation.x =  rotMatrix[pantaloncinoDestroId][0]+rotMatrix[quadricipiteDestroId][0]+rotMatrix[polpaccioDestroId][0]+rotMatrix[scarpinoDestroId][0]
    //corpo[scarpinoDestroId].mesh.position.z = corpo[polpaccioDestroId].mesh.position.z - (0.4+0.2)/2*Math.sin(rotMatrix[pantaloncinoDestroId][0])
    //corpo[scarpinoDestroId].mesh.position.y = corpo[polpaccioDestroId].mesh.position.y-0.3*(Math.cos(rotMatrix[pantaloncinoDestroId][0]))
    //corpo[scarpinoDestroId].mesh.position.x = corpo[polpaccioDestroId].mesh.position.x
}

function pantaloncinoSinistroFunc(){
    
    corpo[pantaloncinoSinistroId].mesh.rotation.x = corpo[torsoId].mesh.rotation.x+rotMatrix[pantaloncinoSinistroId]
    xRel = -corpo[torsoId].mesh.geometry.parameters.width/2+corpo[pantaloncinoSinistroId].mesh.geometry.parameters.width/2
    yRel = -corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoSinistroId]))
    zRel =  - 0.30/2*Math.sin(rotMatrix[pantaloncinoSinistroId])

    corpo[pantaloncinoSinistroId].mesh.position.x = corpo[torsoId].mesh.position.x + xRel
    corpo[pantaloncinoSinistroId].mesh.position.y = corpo[torsoId].mesh.position.y+yRel*Math.cos(corpo[torsoId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[pantaloncinoSinistroId].mesh.position.z = corpo[torsoId].mesh.position.z+yRel*Math.sin(corpo[torsoId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
}

function quadricipiteSinistroFunc(){
    corpo[quadricipiteSinistroId].mesh.rotation.x = corpo[pantaloncinoSinistroId].mesh.rotation.x

    xRel = 0.0
    yRel = -0.225
    zRel = 0.0

    corpo[quadricipiteSinistroId].mesh.position.x = corpo[pantaloncinoSinistroId].mesh.position.x + xRel
    corpo[quadricipiteSinistroId].mesh.position.y = corpo[pantaloncinoSinistroId].mesh.position.y+yRel*Math.cos(corpo[pantaloncinoSinistroId].mesh.rotation.x)-zRel*Math.sin(corpo[torsoId].mesh.rotation.x)//corpo[torsoId].mesh.position.y-corpo[torsoId].mesh.geometry.parameters.height/2 - 0.30/2*(1.0-Math.sin(rotMatrix[pantaloncinoDestroId][0]))
    corpo[quadricipiteSinistroId].mesh.position.z = corpo[pantaloncinoSinistroId].mesh.position.z+yRel*Math.sin(corpo[pantaloncinoSinistroId].mesh.rotation.x)+zRel*Math.cos(corpo[torsoId].mesh.rotation.x)
    
}

function polpaccioSinistroFunc(){
    //rotMatrix[polpaccioSinistroId] = -Math.PI/4
    corpo[polpaccioSinistroId].mesh.rotation.x = corpo[quadricipiteSinistroId].mesh.rotation.x + rotMatrix[polpaccioSinistroId]
    xRel = 0.0
    yRel = -(0.15/2+0.4/2)*Math.cos(rotMatrix[polpaccioSinistroId])
    zRel = -(0.15/2+0.4/2)*Math.sin(rotMatrix[polpaccioSinistroId])
    corpo[polpaccioSinistroId].mesh.position.x = corpo[quadricipiteSinistroId].mesh.position.x
    corpo[polpaccioSinistroId].mesh.position.y = corpo[quadricipiteSinistroId].mesh.position.y+yRel*Math.cos(corpo[quadricipiteSinistroId].mesh.rotation.x)-zRel*Math.sin(corpo[quadricipiteSinistroId].mesh.rotation.x)
    corpo[polpaccioSinistroId].mesh.position.z = corpo[quadricipiteSinistroId].mesh.position.z+yRel*Math.sin(corpo[quadricipiteSinistroId].mesh.rotation.x)+zRel*Math.cos(corpo[quadricipiteSinistroId].mesh.rotation.x)
}

function scarpinoSinistroFunc(){
    //rotMatrix[scarpinoSinistroId] =0.0// -Math.PI/6
    corpo[scarpinoSinistroId].mesh.rotation.x = corpo[polpaccioSinistroId].mesh.rotation.x + rotMatrix[scarpinoSinistroId]

    xRel = 0.0
    yRel = -(0.2/2+0.4/2)*Math.cos(rotMatrix[scarpinoSinistroId])
    zRel = -0.05-(0.2+0.4/2)*Math.sin(rotMatrix[scarpinoSinistroId])
    
    corpo[scarpinoSinistroId].mesh.position.x = corpo[polpaccioSinistroId].mesh.position.x
    corpo[scarpinoSinistroId].mesh.position.y = corpo[polpaccioSinistroId].mesh.position.y+yRel*Math.cos(corpo[polpaccioSinistroId].mesh.rotation.x)-zRel*Math.sin(corpo[polpaccioSinistroId].mesh.rotation.x)
    corpo[scarpinoSinistroId].mesh.position.z = corpo[polpaccioSinistroId].mesh.position.z+yRel*Math.sin(corpo[polpaccioSinistroId].mesh.rotation.x)+zRel*Math.cos(corpo[polpaccioSinistroId].mesh.rotation.x)
    
    //corpo[scarpinoSinistroId].mesh.position.z = corpo[torsoId].mesh.position.z
    //corpo[scarpinoSinistroId].mesh.position.y = corpo[polpaccioSinistroId].mesh.position.y-0.3
    //corpo[scarpinoSinistroId].mesh.position.x = corpo[polpaccioSinistroId].mesh.position.x
}
function initNodes(Id){
    switch(Id) {
        case torsoId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.40,0.55,0.25),celeste)
            corpo[torsoId] = createNode(null, colloId, mesh, torsoFunc);
            corpo[torsoId].transform()
            scene.add(mesh)
            break;

        case colloId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.15,0.15,0.15),pelle)
            corpo[colloId] = createNode(spallaDestraId,testaId, mesh, colloFunc);
            corpo[colloId].transform()
            scene.add(mesh)
            break;

        case testaId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.2,0.25,0.2),pelle)
            //mesh.position.z = corpo[torsoId].mesh.position.z
            //mesh.position.y  = corpo[colloId].mesh.position.y + corpo[colloId].mesh.geometry.parameters.height/2 +0.25/2
            corpo[testaId] = createNode(null,null, mesh, testaFunc);
            //corpo[testaId].transform()
            scene.add(mesh)
            break;

        case spallaDestraId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1),celeste)
            corpo[spallaDestraId] = createNode(spallaSinistraId, bicipiteDestroId, mesh, spallaDestraFunc);
            scene.add(mesh)
            break;

        case bicipiteDestroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.2,0.1),pelle)
            corpo[bicipiteDestroId] = createNode(null, avambraccioDestroId, mesh, bicipiteDestroFunc);
            scene.add(mesh)
            break;

        case avambraccioDestroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.3,0.1),pelle)
            corpo[avambraccioDestroId] = createNode(null, null, mesh, avambraccioDestroFunc);
            scene.add(mesh)
            break;

        case spallaSinistraId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.1,0.1),celeste)
            corpo[spallaSinistraId] = createNode(pantaloncinoDestroId, bicipiteSinistroId, mesh, spallaSinistraFunc);
            scene.add(mesh)
            break;

        case bicipiteSinistroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.2,0.1),pelle)
            corpo[bicipiteSinistroId] = createNode(null, avambraccioSinistroId, mesh, bicipiteSinistroFunc);
            scene.add(mesh)
            break;

        case avambraccioSinistroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.1,0.3,0.1),pelle)
            corpo[avambraccioSinistroId] = createNode(null, null, mesh, avambraccioSinistroFunc);
            scene.add(mesh)
            break;

        case pantaloncinoDestroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.30,0.25),bianco)
            corpo[pantaloncinoDestroId] = createNode(pantaloncinoSinistroId, quadricipiteDestroId, mesh, pantaloncinoDestroFunc);
            scene.add(mesh)
            break;

        case quadricipiteDestroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.15,0.25),pelle)
            corpo[quadricipiteDestroId] = createNode(null,polpaccioDestroId,mesh, quadricipiteDestroFunc)
            scene.add(mesh)
            break;

        case polpaccioDestroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.40,0.25),pelle)
            
            corpo[polpaccioDestroId] = createNode(null,scarpinoDestroId,mesh, polpaccioDestroFunc)
            scene.add(mesh)
            break;
            
        case scarpinoDestroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.20,0.35),celeste)
            corpo[scarpinoDestroId] = createNode(null, null, mesh, scarpinoDestroFunc)
            scene.add(mesh)
            break;

        case pantaloncinoSinistroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.30,0.25),bianco)
            corpo[pantaloncinoSinistroId] = createNode(null, quadricipiteSinistroId, mesh, pantaloncinoSinistroFunc)
            scene.add(mesh)
            break;

        case quadricipiteSinistroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.15,0.25),pelle)
            corpo[quadricipiteSinistroId] = createNode(null, polpaccioSinistroId, mesh, quadricipiteSinistroFunc)
            scene.add(mesh)
            break;

        case polpaccioSinistroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.40,0.25),pelle)
            corpo[polpaccioSinistroId] = createNode(null, scarpinoSinistroId, mesh, polpaccioSinistroFunc)
            scene.add(mesh)
            break;
            
        case scarpinoSinistroId:
            mesh = new THREE.Mesh(new THREE.BoxGeometry(0.20,0.20,0.35),celeste)
            corpo[scarpinoSinistroId] = createNode(null,null,mesh, scarpinoSinistroFunc)
            scene.add(mesh)
            break;

    }
}

for(i=0; i<numeroRettangoli; i++){
    initNodes(i);
} 

//function creaParteCorpo
function createNode(sibling, child, mesh, transform){
    var node = {
        sibling: sibling,
        child: child,
        mesh: mesh,
        transform: transform,
    }
    return node;
}


function muovi(i){
    corpo[i].transform()
    corpo[i].mesh.castShadow = true;
    if (corpo[i].child != null){
        muovi(corpo[i].child)
    }
    if (corpo[i].sibling != null){
        muovi(corpo[i].sibling)
    }
}

//muovi(0)




function movimento(alpha1,alpha2,variabileBool,n){
    if (variabileBool == true){
        for (i=0; i<=rotMatrix.length; i++) {
            for (j=0; i<=rotMatrix[i].length; i++) {
            } 
        }
        step = (alpha2-alpha1)/n
    }
    
}