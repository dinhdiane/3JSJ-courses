import * as THREE from 'three'

//Canvas
const canvas = document.querySelector('canvas.webgl')

//Scene
const scene = new THREE.Scene()

//Object
//Mesh is a combination of Geometry (shape) and Material (color)
//Geometry 
const geometry = new THREE.BoxGeometry(1, 1, 1) //Shape of my object
const material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true }) //Color of my object is red 
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh) //add the mesh to the scene

//Sizes
const sizes = {
    width: 800,
    height: 600
}

//Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)   //field of view (vertically, in degrees), aspect ratio (ratio:width/height)
camera.position.z = 3 //Move the camera away from the object
scene.add(camera)

//Renderer
const renderer = new THREE.WebGLRenderer({ 
    canvas: canvas 
})
renderer.setSize(sizes.width, sizes.height) //Set the size of the renderer

renderer.render(scene, camera) //Render the scene with the camera