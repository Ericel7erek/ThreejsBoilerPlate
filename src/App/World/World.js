import * as THREE from 'three'
import App from "../App";

export default class World{
    constructor(){
        this.app = new App();
        this.scene = this.app.scene
        
        this.setCube()
        this.loop()
        
    }

    setCube(){
            this.cubeMesh = new THREE.Mesh(
            new THREE.TorusGeometry(1,0.4, 12, 48, Math.PI * 2),
            new THREE.MeshBasicMaterial({ color: "yellow" }))
            this.scene.add(this.cubeMesh);
    }

    loop(){
        this.cubeMesh.rotation.y +=0.01
        this.cubeMesh.rotation.x +=0.01
        this.cubeMesh.rotation.z +=0.01
    }
}