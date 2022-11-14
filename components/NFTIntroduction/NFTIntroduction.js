import styles from "@/styles/NftIntroduction.module.scss";

import React, { useRef, useState, useEffect, Suspense } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/addons/postprocessing/UnrealBloomPass.js';
import $ from 'jquery';



const NFTIntroduction = () => {

  useEffect(() => { 
      let camera, scene, renderer;

      const ENTIRE_SCENE = 0, BLOOM_SCENE = 1;

      const bloomLayer = new THREE.Layers();
      bloomLayer.set( BLOOM_SCENE );

      const params = {
        exposure: 1.6,
        bloomThreshold: 0,
        bloomStrength: 5.5,
        bloomRadius: 0.6,
        scene: 'Scene with Glow'
      };

      let bar = 0;
      let barwidth = 250;

      let assets_loaded = false;
      let t=0;
      let c=1;
      let particleCount = 400;
      let particles = [];
      let texture;
      let particleGroup = new THREE.Group();
      texture = new THREE.TextureLoader().load( "/cybercity/textures/fire_particle.png" );

      let mouseX = 0, mouseY = 0;
      let windowHalfX = window.innerWidth / 2;
      let windowHalfY = window.innerHeight / 2;

      const darkMaterial = new THREE.MeshBasicMaterial( { color: 'black' } );
      const materials = {};

      init();

      function init() {

        const container = document.createElement( 'div' );
        document.getElementById("introNFT").appendChild( container );

        camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.05, 200 );
        camera.position.set( 0, -0.1, 2.2 );

        scene = new THREE.Scene();
        scene.fog = new THREE.Fog(0x28233A, 5, 15 );
        scene.add(particleGroup);
        // const color = 0xF369C8;
        const color = 0x504574; //grey
        // const color = 0xD08E28; // orange
        // const color = 0x673674 //dark pink
        const density = 0.2;
        // scene.fog = new THREE.FogExp2(color, density);
        scene.background = 0x000000;

        const leftColor = 0x6BF4A6; //green
        // const leftColor = 0xD08E28; //orange
        const rightColor = 0xF369C8;
        const intensity = 1;

        // const light = new THREE.HemisphereLight( leftColor, rightColor, intensity );
        // light.position.set(1,0,0);
        // scene.add( light );

        // const pointLightPink = new THREE.PointLight( 0xFB3FC7, 2, 6 );
        // pointLightPink.position.set( -1, 1, 0.2 );
        // scene.add( pointLightPink );

        // const sphereSize = 0.2;
        // const pointLightHelper = new THREE.PointLightHelper( pointLightPink, sphereSize );
        // scene.add( pointLightHelper );
        
        // const pointLightGreen = new THREE.PointLight( 0x4BBE71, 5, 6 );
        // pointLightGreen.position.set( 0.8, 1, 0.3 );
        // scene.add( pointLightGreen );

        // const pointLightHelper2 = new THREE.PointLightHelper( pointLightGreen, sphereSize );
        // scene.add( pointLightHelper2 );


        window.addEventListener( 'mousemove', onWindowMouseMove, false );
        function onWindowMouseMove(event) {
          mouseX = ( event.clientX - windowHalfX );
          mouseY = ( event.clientY - windowHalfY );
        }

        THREE.DefaultLoadingManager.onProgress = function ( item, loaded, total ) {

        bar = Math.floor( barwidth * loaded / total );
        $("#bar").css("width", ""+bar+"px");
        // console.log(loaded/total);
        if (loaded/total == 1) {
          $('#progressbar').fadeOut('300');
          $( "#progress" ).fadeOut('300');
          $(".loader2").fadeOut("slow");

        }
        };
        var onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
          //var percentComplete = xhr.loaded / xhr.total * 100;
          //console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
        };
        var onError = function ( xhr ) { };

        new RGBELoader()
          .setPath( '/cybercity/textures/' )
                    .load( 'studio_den.hdr', function ( texture ) {

            texture.mapping = THREE.EquirectangularReflectionMapping;

            scene.background = texture;
            scene.environment = texture;

            // model

            const loader = new GLTFLoader().setPath( '/cybercity/models/' );
            loader.load( 'city_main.glb', function ( gltf ) {

              const cityMain = gltf.scene;
              scene.add( cityMain );
              console.log('City_main:', cityMain);
                            cityMain.scale.set(0.1,0.1,0.1);
              // console.log(cityMain.children[735])
              // cityMain.children[735].children[1].layers.enable( BLOOM_SCENE );

              cityMain.traverse( function ( child ) {

                if ( child.name.indexOf("neon") !== -1 ) {
                  
                  // console.log('found object',child);
                  if (child.children.length > 0){
                    child.children[1].layers.enable( BLOOM_SCENE );
                  } else {
                    child.layers.enable( BLOOM_SCENE );
                  }

                }

              });

              loader.load( 'city_road.glb', function ( gltf ) {

                const cityRoad = gltf.scene;

                console.log('Road:', cityRoad);
                cityRoad.scale.set(0.1,0.1,0.1);
                scene.add( cityRoad );

                loader.load( 'city_walls.glb', function ( gltf ) {

                  const cityWalls = gltf.scene;

                  console.log('Walls:', cityWalls);
                  cityWalls.scale.set(0.1,0.1,0.1);
                  scene.add( cityWalls );


                  loader.load( 'city_cables.glb', function ( gltf ) {

                    const cityCabels = gltf.scene;

                    console.log('Cables:', cityCabels);
                    cityCabels.scale.set(0.1,0.1,0.1);
                    scene.add( cityCabels );

                    loader.load( 'city_pipes.glb', function ( gltf ) {

                      const cityPipes = gltf.scene;

                      console.log('Pipes:', cityPipes);
                      cityPipes.scale.set(0.1,0.1,0.1);
                      scene.add( cityPipes );

                      loader.load( 'sloth.glb', function ( gltf ) {

                        const sloth = gltf.scene;

                        console.log('Sloth:', sloth);
                        sloth.scale.set(0.1,0.1,0.1);
                        // sloth.children[0].layers.enable( BLOOM_SCENE );
                        // sloth.children[1].layers.enable( BLOOM_SCENE );

                        sloth.traverse( function ( child ) {

                          if ( child.name.indexOf("neon") !== -1 ) {
                            
                            // console.log('found object',child);
                            // if (child.children.length > 0){
                            //  child.children[1].layers.enable( BLOOM_SCENE );
                            // } else {
                            // }
                            
                            child.layers.enable( BLOOM_SCENE );
                          }

                        });
                        scene.add( sloth );

                        // // instantiate a loader
                        // const texLoader = new THREE.TextureLoader();



                        // let slothImgArray = [
                        //  'Sloth_MillitaryJungleInfantry_neon',
                        //  'Sloth_MilitaryGeneral_neon',
                        //  'Sloth_Jedi_neon',
                        //  'Sloth_Hipster_neon',
                        //  'Sloth_Dart_Vader_neon',
                        //  'Sloth_Cowboy_neon',
                        //  'Sloth_Samurai_neon',
                        //  'Sloth_Biosloth_neon',
                        //  'Sloth_MillitaryJungleInfantry_neon2',
                        //  'Sloth_MilitaryGeneral_neon2',
                        //  'Sloth_Jedi_neon2',
                        //  'Sloth_Hipster_neon2',
                        //  'Sloth_Dart_Vader_neon2',
                        //  'Sloth_Cowboy_neon2',
                        //  'Sloth_Samurai_neon2',
                        //  'Sloth_Biosloth_neon2'
                        // ];
                        
                        // let slothArray = [];
                        // let material = [];
                        // let deltaZ = 2.6;
                        // let rotY = 0;

                        // for (let i=0; i<slothImgArray.length;i++){
                        //  // load a resource
                        //  texLoader.load(
                        //    // resource URL
                        //    'textures/'+slothImgArray[i]+'.jpg',
                            
                        //    // onLoad callback
                        //    function ( texture ) {
                        //      console.log('textures/'+slothImgArray[i]+'.jpg')
                        //      // in this example we create the material when the texture is loaded
                        //      texture.flipY = false;

                        //      let positionX;
                              

                        //      material[i] = new THREE.MeshStandardMaterial({ map : texture, side: THREE.DoubleSide });

                        //      if(i % 2 == 0) {
                        //        positionX = 0.38;
                        //        deltaZ -= 1;
                        //        rotY = -Math.PI/180*30;
                        //      }

                        //      // if the number is odd
                        //      else {
                        //        positionX = -0.4;
                        //        rotY = Math.PI/180*30;
                        //      }
                              
                        //      slothArray[i] = sloth.clone();
                        //      console.log(material[i]);
                        //      slothArray[i].children[4].position.z = -0.05;
                        //      slothArray[i].children[4].material = material[i];
                        //      slothArray[i].children[4].material.emissiveMap = material[i].map;
                        //      slothArray[i].children[4].material.emissive.r = 0.5;
                        //      slothArray[i].children[4].material.emissive.g = 0.5;
                        //      slothArray[i].children[4].material.emissive.b = 0.5;
                        //      scene.add(slothArray[i]);
                        //      slothArray[i].position.z = deltaZ;
                        //      slothArray[i].position.x = positionX;
                        //      slothArray[i].rotation.y = rotY;
                        //      // slothArray[i].children[4].rotation.x = Math.PI/180*270;

                        //    },

                        //    // onProgress callback currently not supported
                        //    undefined,

                        //    // onError callback
                        //    function ( err ) {
                        //      console.error( 'An error happened.' );
                        //    }
                        //  );
                          
                        // }
                        
                        // setupKeyControls();
                        
                        assets_loaded = true;
                        render();
                        animate();
                        
                      } );

                    } );

                  } );

                } );

              } );

            } );

          } );

        renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
        renderer.setPixelRatio( window.devicePixelRatio );
        renderer.setSize( window.innerWidth, window.innerHeight );
        // renderer.toneMapping = THREE.ACESFilmicToneMapping;
        renderer.toneMapping = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = Math.pow( params.exposure, 4.0 );
        renderer.outputEncoding = THREE.sRGBEncoding;
        container.appendChild( renderer.domElement );

        // const controls = new OrbitControls( camera, renderer.domElement );
        // controls.addEventListener( 'change', render ); // use if there is no animation loop
        // controls.minDistance = 0.2;
        // controls.maxDistance = 20;
        // controls.target.set( 0, 0, 0 );
        // controls.keys = {
        //  LEFT: 'ArrowLeft', //left arrow
        //  UP: 'ArrowUp', // up arrow
        //  RIGHT: 'ArrowRight', // right arrow
        //  BOTTOM: 'ArrowDown' // down arrow
        // }
        // controls.update();

        

        $(document).on('mousedown', function(e) {
          $('.not_container').fadeOut(300);
        });


        $(document).ready(function(){
          // $("canvas").bind('mousewheel', function(e){
          //   if(e.originalEvent.wheelDelta /120 > 0) {
          //     if (camera.position.z > -4.4){
          //       camera.position.z -= 0.1;
          //     }
          //   }
          //   else{
          //     if (camera.position.z < 2.4){
          //       camera.position.z += 0.1;
          //     }
          //   }
          // });
          $("#forward_camera").bind('mousedown', function(e){
           
                camera.position.z -= 0.1;
           
          });
          $("#backward_camera").bind('mousedown', function(e){
                camera.position.z += 0.1;
           
          });

        });



        const renderScene = new RenderPass( scene, camera );

        const bloomPass = new UnrealBloomPass( new THREE.Vector2( window.innerWidth, window.innerHeight ), 1.5, 0.4, 0.85 );
        bloomPass.exposure = params.exposure;
        bloomPass.threshold = params.bloomThreshold;
        bloomPass.strength = params.bloomStrength;
        bloomPass.radius = params.bloomRadius;

        const bloomComposer = new EffectComposer( renderer );
        bloomComposer.renderToScreen = false;
        bloomComposer.addPass( renderScene );
        bloomComposer.addPass( bloomPass );

        const finalPass = new ShaderPass(
          new THREE.ShaderMaterial( {
            uniforms: {
              baseTexture: { value: null },
              bloomTexture: { value: bloomComposer.renderTarget2.texture }
            },
            vertexShader: require('./cybercity/shader/vertexShader.vert'),
            fragmentShader: require('./cybercity/shader/fragmentShader.frag'),
            defines: {}
          } ), 'baseTexture'
        );
        finalPass.needsSwap = true;

        const finalComposer = new EffectComposer( renderer );
        finalComposer.addPass( renderScene );
        finalComposer.addPass( finalPass );

        const raycaster = new THREE.Raycaster();

        const mouse = new THREE.Vector2();

        window.addEventListener( 'pointerdown', onPointerDown );

        document.onkeydown = function(e) {
          var parameter = camera.position.z;
              switch (e.keyCode) {
                
              case 37:
                if (camera.rotation.y == 0){
                  camera.rotation.y = Math.PI/180*20;
                } else {
                  camera.rotation.y = 0
                }
              break;
              case 38:
                if (camera.position.z > -4.4){
                  camera.position.z -= 0.1;
                }
              break;
              case 39:
                if (camera.rotation.y == 0){
                  camera.rotation.y = -Math.PI/180*20;
                } else {
                  camera.rotation.y = 0
                }
              break;
              case 40:
                if (camera.position.z < 2.4){
                  camera.position.z += 0.1;
                }
              break;
            }
        }

        const gui = new GUI();

        gui.add( params, 'scene', [ 'Scene with Glow', 'Glow only', 'Scene only' ] ).onChange( function ( value ) {

          switch ( value )  {

            case 'Scene with Glow':
              bloomComposer.renderToScreen = false;
              break;
            case 'Glow only':
              bloomComposer.renderToScreen = true;
              break;
            case 'Scene only':
              // nothing to do
              break;

          }

          render();

        } );

        const folder = gui.addFolder( 'Bloom Parameters' );

        folder.add( params, 'exposure', 0.1, 2 ).onChange( function ( value ) {

          renderer.toneMappingExposure = Math.pow( value, 4.0 );
          render();

        } );

        folder.add( params, 'bloomThreshold', 0.0, 1.0 ).onChange( function ( value ) {

          bloomPass.threshold = Number( value );
          render();

        } );

        folder.add( params, 'bloomStrength', 0.0, 10.0 ).onChange( function ( value ) {

          bloomPass.strength = Number( value );
          render();

        } );

        folder.add( params, 'bloomRadius', 0.0, 1.0 ).step( 0.01 ).onChange( function ( value ) {

          bloomPass.radius = Number( value );
          render();

        } );

        setupScene();

        function onPointerDown( event ) {

          mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
          mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

          raycaster.setFromCamera( mouse, camera );
          const intersects = raycaster.intersectObjects( scene.children, false );
          if ( intersects.length > 0 ) {

            const object = intersects[ 0 ].object;
            object.layers.toggle( BLOOM_SCENE );
            render();

          }

        }

        window.onresize = function () {

          const width = window.innerWidth;
          const height = window.innerHeight;

          camera.aspect = width / height;
          camera.updateProjectionMatrix();

          renderer.setSize( width, height );

          bloomComposer.setSize( width, height );
          finalComposer.setSize( width, height );

          render();

        };

        function setupScene() {

          scene.traverse( disposeMaterial );
          scene.children.length = 0;
          
          let geometry = new THREE.CircleGeometry( 0.1, 4 );

          let particleGeometry = geometry;
          let particleMaterial = new THREE.MeshBasicMaterial({
            color: 0xFFFFFF,
            transparent: true,
            opacity: 0,
            map: texture,
            side: THREE.DoubleSide,
            blending: THREE.AdditiveBlending,
            depthWrite: false
          });

          for (let i = 0; i < particleCount; i++) {

            particles[i] = new THREE.Mesh( particleGeometry, particleMaterial );
            particles[i].layers.enable( BLOOM_SCENE );

            particles[i].position.x = Math.random() * 30-15;
            particles[i].position.y = Math.random() * 20-10;
            particles[i].position.z = Math.random() * 20-10;
            particles[i].scale.set(Math.random()*0.5+0.5,Math.random()*0.5+0.5,Math.random()*0.5+0.5);

            particles[i]. direction = {
              x: Math.random()/100,
              y: Math.random()/100,
              z: Math.random()/100
            }

            particleGroup.add(particles[i]);
          }

          render();

        }

        function disposeMaterial( obj ) {

          if ( obj.material ) {

            obj.material.dispose();

          }

        }


        function disposeMaterial( obj ) {

          if ( obj.material ) {

            obj.material.dispose();

          }

        }

        function render() {

          switch ( params.scene ) {

            case 'Scene only':
              renderer.render( scene, camera );
              break;
            case 'Glow only':
              renderBloom( false );
              break;
            case 'Scene with Glow':
            default:
              // render scene with bloom
              renderBloom( true );

              // render the entire scene, then render bloom scene on top
              finalComposer.render();
              break;

          }

        }

        function renderBloom( mask ) {

          if ( mask === true ) {

            scene.traverse( darkenNonBloomed );
            bloomComposer.render();
            scene.traverse( restoreMaterial );

          } else {

            camera.layers.set( BLOOM_SCENE );
            bloomComposer.render();
            camera.layers.set( ENTIRE_SCENE );

          }

        }

        function darkenNonBloomed( obj ) {

        if ( obj.isMesh && bloomLayer.test( obj.layers ) === false ) {

            materials[ obj.uuid ] = obj.material;
            obj.material = darkMaterial;

          }

        }

        function restoreMaterial( obj ) {

        if ( materials[ obj.uuid ] ) {

            obj.material = materials[ obj.uuid ];
            delete materials[ obj.uuid ];

          }

        }


        function animate() {

          if (assets_loaded) {

            
            // camera.position.z = (Math.sin(c))*1.8+0.5;


            // for (var i = 0; i < particleCount; i++) {
            //  particles[i].position.x += particles[i].direction.x;
            //  particles[i].position.y += particles[i].direction.y;
            //  particles[i].position.z += particles[i].direction.z;

            //  // if edge is reached, bounce back
            //  if (particles[i].position.x < -15 ||
            //  particles[i].position.x > 15) {
            //  particles[i].direction.x = -particles[i].direction.x;
            //  }
            //  if (particles[i].position.y < -10 ||
            //  particles[i].position.y > 10) {
            //  particles[i].direction.y = -particles[i].direction.y;
            //  }
            //  if (particles[i].position.z < -10 ||
            //  particles[i].position.z > 10) {
            //  particles[i].direction.z = -particles[i].direction.z;
            //  }
            // }

            t += 0.01;
            c += 0.001;
            // console.log((Math.sin(t)));
            // particleGroup.rotation.y += Math.abs(Math.sin(t))/1000;

          }

          // controls.update();

          camera.position.x += ( mouseX/5000 - camera.position.x ) * 0.05;
          camera.position.y += ( - mouseY/10000 - camera.position.y ) * 0.05;

          // renderer.render( scene, camera );
          render();
          requestAnimationFrame( animate );
        }

        $("canvas").css("position", "relative");

        function fillScene() {


        }

      }



  });
  return <div className={styles.nft_container} id="introNFT">
            <div className={styles.mouse_event}>
              <div id="forward_camera" className={styles.forward_camera}>
                <img width="50px" src="cybercity/img/upward.png" />
              </div>
              <div id="backward_camera" className={styles.backward_camera}>
                <img width="50px" src="cybercity/img/downward.png" />
              </div>
            </div>
        </div>;

};


export default NFTIntroduction;
