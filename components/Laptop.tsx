'use client'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Html, useGLTF } from '@react-three/drei'
import { Suspense, useEffect, useState } from 'react'

export default function Laptop() {

  return (
    <div className="h-screen w-full">
      <Canvas
        camera={{ position: [0, 1, 10], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ alpha: true }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[2, 2, 2]} />
        <Suspense fallback={null}>
          <Scena />
        </Suspense>
        <OrbitControls enabled={true} enableRotate={true} enableZoom={false} enablePan={false} autoRotate={false} rotateSpeed={1}/>
      </Canvas>
    </div>
  )
}



export function Model(props: any) {
  const gltf = useGLTF('/models/scene.gltf')

  return <primitive object={gltf.scene} {...props} />
}


function Scena() {

  return (
    <group scale={[1, 1, 1]}>
        <mesh
            position={[0,0,2.52]}

        >
            <boxGeometry args={[4.3, 3.1, 0.01]}/>
            <meshStandardMaterial color="white" />

            <Html
              transform
              position={[0,-0.02,0.02]}
              rotation={[0, 0, 0]}
              zIndexRange={[1, 0]}
              occlude 
            >
              <div
                style={{
                  width: '165px',
                  height: '125px',
                  background: 'url(https://cdn.wallpaperhub.app/cloudcache/9/8/1/e/8/e/981e8e91f90c93bf5e715527e1922724645f1214.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '20px',
                  userSelect: 'none',
                  color: 'white',
                }}
              >
                <div className='text-center text-shadow-black text-shadow-lg'>
                    <p className='text-sm'>###agenda party!!!</p>
                    <h1 className="font-bold">

                        {(() => {
                            const target = new Date('2025-05-30T20:00:00');
                            const [now, setNow] = useState(new Date());
                            useEffect(() => {
                                const interval = setInterval(() => setNow(new Date()), 1000);
                                return () => clearInterval(interval);
                            }, []);
                            const diff = target.getTime() - now.getTime();
                            if (diff <= 0) return "🥳🥳🥳";
                            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
                            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
                            const minutes = Math.floor((diff / (1000 * 60)) % 60);
                            const seconds = Math.floor((diff / 1000) % 60);
                            return `${days}d ${hours}h ${minutes}m ${seconds}s`;
                        })()}
                    </h1>
                    <a href='https://evently.pl/events/8334-agenda-party' target='about'><button className='bg-black text-white rounded-md p-1 text-[5px] hover:opacity-60 ease-in-out transition-all cursor-pointer'>click here to buy ticket</button></a>
                </div>
              </div>
            </Html>
        </mesh>

        <Model
            position={[0, -3, 0]}
            rotation={[0, 11, 0]}
            scale={1}

        />
    </group>
  )
}
