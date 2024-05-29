import * as THREE from 'three'
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import App from './App.js'

export default class Camera{
    constructor(){
        this.app = new App()
        this.canvas = this.app.canvas 
        this.scene = this.app.scene
        this.setInstance()
        this.setOrbitControls()
        this.setLoop
    }
    setInstance(){
        this.camera =new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        200
        );
        this.camera.position.z = 5;
        this.scene.add(this.camera)
    }
    setOrbitControls(){
        this.controls = new OrbitControls(this.camera, this.canvas);
        this.controls.enableDamping = true;
    }
    setLoop(){
        this.controls.update();
    }
}