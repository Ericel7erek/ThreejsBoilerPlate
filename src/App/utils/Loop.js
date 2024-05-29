import App from "../App";
export default class Loop{
    constructor(){
        this.app = new App();
        this.camera = this.app.camera
        this.render = this.app.renderer
        this.loop()
    }

    loop(){
        console.log("AAA");
        this.camera.setLoop()
        this.render.renderloop()
        window.requestAnimationFrame(()=>this.loop());
    }
}