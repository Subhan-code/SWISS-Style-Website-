import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeCity: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff); // White background

    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 20;

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);
    const dirLight = new THREE.DirectionalLight(0xffffff, 0.5);
    dirLight.position.set(10, 10, 10);
    scene.add(dirLight);

    // Materials
    const wireframeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0x000000, 
      wireframe: true,
      transparent: true,
      opacity: 0.3
    });
    
    const accentMaterial = new THREE.MeshBasicMaterial({
      color: 0xff3333,
      wireframe: true
    });

    // Geometry
    const shapes: THREE.Mesh[] = [];

    const box = new THREE.Mesh(new THREE.BoxGeometry(4, 4, 4), wireframeMaterial);
    box.position.x = -6;
    scene.add(box);
    shapes.push(box);

    const sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 32, 32), accentMaterial);
    sphere.position.x = 0;
    scene.add(sphere);
    shapes.push(sphere);

    const cone = new THREE.Mesh(new THREE.ConeGeometry(3, 5, 32), wireframeMaterial);
    cone.position.x = 6;
    scene.add(cone);
    shapes.push(cone);

    // Animation Loop
    const animate = () => {
      requestAnimationFrame(animate);

      shapes.forEach((shape, index) => {
        shape.rotation.x += 0.002;
        shape.rotation.y += 0.002 + (index * 0.001);
      });

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none opacity-50" />;
};