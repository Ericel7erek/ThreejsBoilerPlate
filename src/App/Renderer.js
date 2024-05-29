import * as THREE from 'three'
import App from "./App";

export default class Renderer{
    constructor(){
        this.app = new App()
        this.canvas = this.app.canvas
        this.camera = this.app.camera
        this.scene = this.app.scene
        this.loop = this.app.camera.setLoop()
        this.setRenderer()

    }

    setRenderer(){
    this.renderer = new THREE.WebGLRenderer({
    canvas: this.canvas,
    antialias: true,
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }

    renderloop(){
        this.renderer.render(this.scene, this.camera.camera)
    }
}