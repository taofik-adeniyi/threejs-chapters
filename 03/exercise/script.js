import * as THREE from 'three'

const canvas = document.querySelector('canvas.webgl')
console.log(canvas)
// It's time to create our scene and produce something on the screen.

// We need 4 elements to get started:

// A scene that will contain objects
// Some objects
// A camera
// A renderer

//Scene
const scene = new THREE.Scene()

// Object
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color: 0xff0000})
const mesh = new THREE.Mesh(geometry,material)
scene.add(mesh)

//sizes
const sizes = {
    width: 800,
    height: 600
}

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width/sizes.height)
camera.position.z = 3
scene.add(camera)


// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)