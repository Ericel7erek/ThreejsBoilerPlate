import App from "../App";
export default class Loop{
    constructor(){
        this.app = new App();
        this.camera = this.app.camera
        this.render = this.app.renderer
        this.world = this.app.world
        this.loop()
    }

    loop(){
        this.world.loop()
        this.camera.setLoop()
        this.render.renderloop()
        window.requestAnimationFrame(()=>this.loop());
    }
}