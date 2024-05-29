import * as THREE from 'three'
import App from "../App"

export default class Resize{
    constructor(){
        this.app = new App()

        this.renderer = this.app.renderer.renderer
        this.camera = this.app.camera.camera
        console.log(this.camera);
        console.log(this.renderer);
        this.loop()
    }
    loop(){
    window.addEventListener("resize", () => {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    });
    }
}