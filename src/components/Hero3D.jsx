import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, MeshDistortMaterial } from '@react-three/drei';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

// Central Core Tech Glyph with mobile-scaled geometry sizing
function CentralSeed() {
  const meshRef = useRef();
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.4;
  });

  return (
    <Float speed={2.5} rotationIntensity={0.8} floatIntensity={1.5}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[window.innerWidth < 768 ? 1.1 : 1.4, 0]} />
        <MeshDistortMaterial color="#28A745" roughness={0.2} metalness={0.8} distort={0.3} speed={2} />
      </mesh>
    </Float>
  );
}

// Floating Satellite Shape 1 (Box)
function FloatingBox({ position }) {
  const ref = useRef();
  useFrame(() => {
    ref.current.rotation.x += 0.01;
    ref.current.rotation.y += 0.015;
  });

  return (
    <Float speed={3} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <boxGeometry args={[0.5, 0.5, 0.5]} />
        <meshStandardMaterial color="#0D1B3D" roughness={0.3} metalness={0.9} />
      </mesh>
    </Float>
  );
}

// Floating Satellite Shape 2 (Ring)
function FloatingRing({ position }) {
  const ref = useRef();
  useFrame((state) => {
    ref.current.rotation.z = state.clock.getElapsedTime() * 0.5;
  });

  return (
    <Float speed={4} rotationIntensity={1.5} floatIntensity={2.5}>
      <mesh ref={ref} position={position}>
        <torusGeometry args={[0.6, 0.15, 16, 32]} />
        <meshStandardMaterial color="#28A745" roughness={0.1} metalness={0.8} />
      </mesh>
    </Float>
  );
}

export default function Hero3D() {
  return (
    <div className="relative min-h-[100svh] md:min-h-[700px] w-full bg-[#0D1B3D] text-white flex flex-col justify-center items-center overflow-hidden py-12 md:py-20 px-6">
      
      {/* Online Background Image with Dark Contrast Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-25 pointer-events-none mix-blend-overlay"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1920&auto=format&fit=crop')` }}
      ></div>

      {/* Deep Gradient Vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0D1B3D]/90 via-[#0D1B3D]/70 to-[#0D1B3D]/95 pointer-events-none"></div>

      {/* Hero Foreground Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto flex flex-col items-center my-auto">
        <div className="inline-flex items-center gap-2 bg-slate-900/80 border border-slate-700 text-[#28A745] px-4 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase shadow-inner mb-6">
          <Sparkles size={14} /> RC NO. 9637393
        </div>

        <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-md">
          Empowering Minds, <span className="text-[#28A745]">Transforming Futures</span>
        </h1>

        <p className="text-slate-300 mt-4 md:mt-6 text-sm sm:text-base md:text-xl max-w-2xl font-light leading-relaxed">
          From Collective Action to Lasting Impact. Delivering advanced software solutions, world-class IT training, and digital business services.
        </p>

        <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto">
          <Link to="/services/coretech" className="w-full sm:w-auto bg-[#28A745] hover:bg-emerald-600 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2 text-sm md:text-base">
            Explore Services <ArrowRight size={18} />
          </Link>
          <a href="mailto:nahdaseed@gmail.com" className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold px-8 py-3.5 rounded-xl transition-all duration-200 text-sm md:text-base text-center">
            Contact Support
          </a>
        </div>
      </div>

      {/* 
        3D Canvas Layer with pointer-events-none. 
        This is critical so mobile scrolling gestures pass straight through the canvas layer to the browser window.
      */}
      <Canvas className="absolute inset-0 pointer-events-none opacity-60">
        <ambientLight intensity={1.5} />
        <pointLight position={[10, 10, 10]} intensity={3} />
        <directionalLight position={[-5, 5, 5]} intensity={2} />
        
        {/* Main Center Icon & Multi-Icons */}
        <CentralSeed />
        <FloatingBox position={[-2.8, 1.3, -1]} />
        <FloatingRing position={[2.8, -1.0, -1]} />
        <FloatingBox position={[2.5, 1.5, -2]} />
        <FloatingRing position={[-2.5, -1.2, -1.5]} />

        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}