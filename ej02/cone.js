//VARIABLES CONO

var altura=1
var radio=1

//medidas de la pantalla
var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

//render
var renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xDDDDDD, 1);
document.body.appendChild(renderer.domElement);

var scene = new THREE.Scene();

//camara
var camera = new THREE.PerspectiveCamera(80, WIDTH / HEIGHT);
camera.position.z = 4.5;
camera.position.x = -1.2;
camera.position.y = 2;

camera.rotation.set(0, -0.5, 0);
scene.add(camera);

var controls = new THREE.OrbitControls(camera, renderer.domElement);

//cracion del cono 1
var geometry = new THREE.ConeGeometry(radio, altura, 10);
var material = new THREE.MeshPhongMaterial({ color: 0xFFFF00 });
var cone = new THREE.Mesh(geometry, material);

//Rotacion del cono
cone.rotation.x += Math.PI / (2);

cone.translateY(altura/2);
//termina proceso de cubo 1

//inicia el 2
//
cone.scale.set(radio, altura*3, radio);
//rota en x
cone.rotation.x += (Math.PI / 10.2);

cone.translateY(altura*1.05);
cone.translateZ(-radio*0.8);

//luz
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(-1, 2, 4);
scene.add(light);
//grilla
const size = 150;
const divisions = 160;
const axesHelper = new THREE.AxesHelper(1000);
scene.add(axesHelper);

const gridHelper = new THREE.GridHelper(size, divisions);
scene.add(gridHelper);

scene.add(cone)

//funcion de imagen
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();