import * as THREE from 'three'
import Camera from "./Camera.js";
import Renderer from './Renderer.js';
import Loop from './Utils/Loop.js';
import World from './World/World.js';
import Resize from './Utils/Resize.js';
import AssetLoader from './Utils/AssetLoader.js';
import Preloader from './UI/Preloader.js';
let instance = null
export default class App{
    constructor(){
        if(instance) return instance
        instance = this
        this.canvas = document.querySelector(".threejs");
        this.scene = new THREE.Scene()

        this.assetLoader = new AssetLoader()
        this.preloader = new Preloader()
        this.world = new World()

        this.camera = new Camera()
        this.renderer = new Renderer()
        
        this.Loop = new Loop()
        this.resize = new Resize()
    }
}