import React, { useEffect, useRef } from 'react';

const ThreeBackground = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;

    let scene, camera, renderer, globeGroup;
    let animationId;

    const initThreeScene = () => {
      container.innerHTML = '';

      scene = new window.THREE.Scene();
      camera = new window.THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 250;

      renderer = new window.THREE.WebGLRenderer({ antialias: true, alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

      container.appendChild(renderer.domElement);

      globeGroup = new window.THREE.Group();
      scene.add(globeGroup);

      const radius = 90;
      const geometry = new window.THREE.SphereGeometry(radius, 64, 64);
      const textureLoader = new window.THREE.TextureLoader();
      const earthTexture = textureLoader.load('https://unpkg.com/three-globe/example/img/earth-dark.jpg');

      const material = new window.THREE.MeshBasicMaterial({
        color: 0xffffff,
        map: earthTexture,
        transparent: true,
        opacity: 0.9
      });
      const globe = new window.THREE.Mesh(geometry, material);
      globe.rotation.y = -Math.PI / 2;
      globeGroup.add(globe);

      const atmosMaterial = new window.THREE.MeshBasicMaterial({
        color: 0x6366f1,
        transparent: true,
        opacity: 0.05,
        side: window.THREE.BackSide
      });
      globeGroup.add(new window.THREE.Mesh(new window.THREE.SphereGeometry(radius * 1.1, 32, 32), atmosMaterial));

      const getCoordinatesFromLatLng = (lat, lng, radius) => {
        const phi = (90 - lat) * (Math.PI / 180);
        const theta = (lng + 180) * (Math.PI / 180);
        return new window.THREE.Vector3(
          -(radius * Math.sin(phi) * Math.cos(theta)),
          radius * Math.cos(phi),
          radius * Math.sin(phi) * Math.sin(theta)
        );
      };

      const airHubs = [
        { name: "JFK", lat: 40.6413, lng: -73.7781 },
        { name: "LHR", lat: 51.4700, lng: -0.4543 },
        { name: "DXB", lat: 25.2532, lng: 55.3657 },
        { name: "NRT", lat: 35.7647, lng: 140.3863 },
        { name: "SYD", lat: -33.9461, lng: 151.1772 },
        { name: "GRU", lat: -23.4356, lng: -46.4731 },
        { name: "LAX", lat: 33.9425, lng: -118.4081 },
        { name: "CDG", lat: 49.0097, lng: 2.5479 },
        { name: "SIN", lat: 1.3644, lng: 103.9915 },
        { name: "JNB", lat: -26.1392, lng: 28.246 },
        { name: "ICN", lat: 37.4602, lng: 126.4407 },
        { name: "MEX", lat: 19.4361, lng: -99.0719 }
      ];

      const seaHubs = [
        { name: "Shanghai", lat: 31.2304, lng: 121.4737 },
        { name: "Singapore", lat: 1.3521, lng: 103.8198 },
        { name: "Rotterdam", lat: 51.9244, lng: 4.4777 },
        { name: "Los Angeles", lat: 34.0522, lng: -118.2437 },
        { name: "Dubai Port", lat: 25.2697, lng: 55.2963 },
        { name: "Busan", lat: 35.1796, lng: 129.0756 },
        { name: "Hamburg", lat: 53.5511, lng: 9.9937 },
        { name: "Santos", lat: -23.9608, lng: -46.3336 },
        { name: "Mumbai", lat: 18.9488, lng: 72.8355 },
        { name: "Cape Town", lat: -33.9249, lng: 18.4241 },
        { name: "Tokyo Bay", lat: 35.6532, lng: 139.8395 },
        { name: "New York Port", lat: 40.6892, lng: -74.0445 }
      ];

      const landHubs = [
        { name: "Chicago", lat: 41.8781, lng: -87.6298 },
        { name: "Frankfurt", lat: 50.1109, lng: 8.6821 },
        { name: "Beijing", lat: 39.9042, lng: 116.4074 },
        { name: "Sao Paulo", lat: -23.5505, lng: -46.6333 },
        { name: "Moscow", lat: 55.7558, lng: 37.6173 },
        { name: "Delhi", lat: 28.7041, lng: 77.1025 },
        { name: "Istanbul", lat: 41.0082, lng: 28.9784 },
        { name: "Lagos", lat: 6.5244, lng: 3.3792 },
        { name: "Buenos Aires", lat: -34.6037, lng: -58.3816 },
        { name: "Sydney", lat: -33.8688, lng: 151.2093 }
      ];

      const airMat = new window.THREE.MeshBasicMaterial({ color: 0x0ea5e9 });
      const seaMat = new window.THREE.MeshBasicMaterial({ color: 0x10b981 });
      const landMat = new window.THREE.MeshBasicMaterial({ color: 0xf59e0b });
      const pointGeo = new window.THREE.SphereGeometry(0.5, 16, 16);

      const addHubs = (hubsList, mat) => {
        hubsList.forEach(hub => {
          const pos = getCoordinatesFromLatLng(hub.lat, hub.lng, radius);
          const pt = new window.THREE.Mesh(pointGeo, mat);
          pt.position.copy(pos);
          globeGroup.add(pt);
        });
      };
      addHubs(airHubs, airMat);
      addHubs(seaHubs, seaMat);
      addHubs(landHubs, landMat);

      const darkBodyMat = new window.THREE.MeshBasicMaterial({
        color: 0x080812,
        transparent: true,
        opacity: 0.9
      });
      const edgeGlowMat = new window.THREE.LineBasicMaterial({
        color: 0x7c8cff,
        transparent: true,
        opacity: 0.95
      });

      const createVehicleGroup = (type) => {
        const group = new window.THREE.Group();
        const shape = new window.THREE.Shape();
        let depth = 0.2;

        if (type === 'AIR') {
          shape.moveTo(0, 2);
          shape.lineTo(0.2, 1.5);
          shape.lineTo(0.3, 0.5);
          shape.lineTo(1.8, -0.5);
          shape.lineTo(1.8, -0.8);
          shape.lineTo(0.3, -0.5);
          shape.lineTo(0.2, -1.5);
          shape.lineTo(0.8, -1.8);
          shape.lineTo(0.8, -2);
          shape.lineTo(0, -1.8);
          shape.lineTo(-0.8, -2);
          shape.lineTo(-0.8, -1.8);
          shape.lineTo(-0.2, -1.5);
          shape.lineTo(-0.3, -0.5);
          shape.lineTo(-1.8, -0.8);
          shape.lineTo(-1.8, -0.5);
          shape.lineTo(-0.3, 0.5);
          shape.lineTo(-0.2, 1.5);
          shape.closePath();
        } else if (type === 'SEA') {
          shape.moveTo(0, 2);
          shape.lineTo(0.6, 1);
          shape.lineTo(0.6, -2);
          shape.lineTo(-0.6, -2);
          shape.lineTo(-0.6, 1);
          shape.closePath();
          depth = 0.6;
        } else {
          shape.moveTo(0.4, 2);
          shape.lineTo(0.4, 1.2);
          shape.lineTo(0.5, 1);
          shape.lineTo(0.5, -2);
          shape.lineTo(-0.5, -2);
          shape.lineTo(-0.5, 1);
          shape.lineTo(-0.4, 1.2);
          shape.lineTo(-0.4, 2);
          shape.closePath();
          depth = 0.5;
        }

        const geo = new window.THREE.ExtrudeGeometry(shape, {
          depth,
          bevelEnabled: true,
          bevelSegments: 2,
          steps: 1,
          bevelSize: 0.05,
          bevelThickness: 0.05
        });
        geo.center();

        const mesh = new window.THREE.Mesh(geo, darkBodyMat);
        mesh.rotation.x = -Math.PI / 2;

        const edges = new window.THREE.EdgesGeometry(geo, 15);
        const edgeLines = new window.THREE.LineSegments(edges, edgeGlowMat);
        edgeLines.rotation.x = -Math.PI / 2;

        group.add(mesh);
        group.add(edgeLines);
        return group;
      };

      const routesData = [
        { type: 'AIR', start: airHubs[0], end: airHubs[1] },
        { type: 'AIR', start: airHubs[1], end: airHubs[2] },
        { type: 'AIR', start: airHubs[2], end: airHubs[3] },
        { type: 'AIR', start: airHubs[3], end: airHubs[4] },
        { type: 'AIR', start: airHubs[4], end: airHubs[5] },
        { type: 'AIR', start: airHubs[5], end: airHubs[0] },
        { type: 'AIR', start: airHubs[6], end: airHubs[3] },
        { type: 'AIR', start: airHubs[7], end: airHubs[8] },
        { type: 'AIR', start: airHubs[9], end: airHubs[1] },
        { type: 'SEA', start: seaHubs[0], end: seaHubs[1] },
        { type: 'SEA', start: seaHubs[1], end: seaHubs[4] },
        { type: 'SEA', start: seaHubs[4], end: seaHubs[2] },
        { type: 'SEA', start: seaHubs[2], end: seaHubs[11] },
        { type: 'SEA', start: seaHubs[11], end: seaHubs[3] },
        { type: 'LAND', start: landHubs[0], end: landHubs[3] },
        { type: 'LAND', start: landHubs[1], end: landHubs[2] }
      ];

      const vehicles = [];

      routesData.forEach(route => {
        const startPos = getCoordinatesFromLatLng(route.start.lat, route.start.lng, radius);
        const endPos = getCoordinatesFromLatLng(route.end.lat, route.end.lng, radius);
        const group = createVehicleGroup(route.type);
        group.scale.set(1.6, 1.6, 1.6);
        globeGroup.add(group);

        let curve = null, axis = null, angle = 0;

        if (route.type === 'AIR') {
          const distance = startPos.distanceTo(endPos);
          const midPoint = startPos.clone().lerp(endPos, 0.5);
          midPoint.normalize().multiplyScalar(radius + distance * 0.4);
          curve = new window.THREE.QuadraticBezierCurve3(startPos, midPoint, endPos);
        } else {
          axis = new window.THREE.Vector3().crossVectors(startPos, endPos).normalize();
          angle = startPos.angleTo(endPos);
        }

        const trailPointCount = 80;
        const trailPositions = new Float32Array(trailPointCount * 3);

        for (let i = 0; i < trailPointCount; i++) {
          let pt = route.type === 'AIR'
            ? curve.getPointAt(i / 79)
            : startPos.clone().applyAxisAngle(axis, angle * (i / 79));
          trailPositions[i * 3] = pt.x;
          trailPositions[i * 3 + 1] = pt.y;
          trailPositions[i * 3 + 2] = pt.z;
        }

        const trailGeo = new window.THREE.BufferGeometry();
        trailGeo.setAttribute('position', new window.THREE.BufferAttribute(trailPositions, 3));

        let trailColor = route.type === 'AIR' ? 0x0ea5e9 : (route.type === 'SEA' ? 0x10b981 : 0xf59e0b);
        const trailMat = new window.THREE.PointsMaterial({
          color: trailColor,
          size: 0.6,
          transparent: true,
          opacity: 0.8
        });
        const trailPoints = new window.THREE.Points(trailGeo, trailMat);
        trailGeo.setDrawRange(0, 0);
        globeGroup.add(trailPoints);

        vehicles.push({
          group,
          type: route.type,
          startPos,
          endPos,
          curve,
          axis,
          angle,
          trailGeo,
          trailPointCount,
          progress: Math.random(),
          speed: 0.001 + Math.random() * 0.0015
        });
      });

      const particlesGeo = new window.THREE.BufferGeometry();
      const posArray = new Float32Array(400 * 3);
      for (let i = 0; i < 1200; i++) {
        posArray[i] = (Math.random() - 0.5) * 600;
      }
      particlesGeo.setAttribute('position', new window.THREE.BufferAttribute(posArray, 3));
      scene.add(new window.THREE.Points(
        particlesGeo,
        new window.THREE.PointsMaterial({
          size: 1.5,
          color: 0x6366f1,
          transparent: true,
          opacity: 0.3
        })
      ));

      globeGroup.rotation.x = 0.3;

      const clock = new window.THREE.Clock();

      const animate = () => {
        animationId = requestAnimationFrame(animate);
        const delta = clock.getDelta();

        globeGroup.rotation.y += 0.001;

        vehicles.forEach(v => {
          v.progress += v.speed * (delta * 60);
          if (v.progress > 0.999) v.progress = 0;

          const t = v.progress;
          const nextT = Math.min(t + 0.01, 0.999);

          let pos, nextPos;
          if (v.type === 'AIR') {
            pos = v.curve.getPointAt(t);
            nextPos = v.curve.getPointAt(nextT);
          } else {
            pos = v.startPos.clone().applyAxisAngle(v.axis, v.angle * t);
            nextPos = v.startPos.clone().applyAxisAngle(v.axis, v.angle * nextT);
          }

          v.group.position.copy(pos);

          const normal = pos.clone().normalize();
          const tangent = nextPos.clone().sub(pos).normalize();
          tangent.sub(normal.clone().multiplyScalar(tangent.dot(normal))).normalize();
          const binormal = new window.THREE.Vector3().crossVectors(tangent, normal).normalize();

          const m = new window.THREE.Matrix4();
          m.makeBasis(binormal, normal, tangent.clone().negate());
          v.group.quaternion.setFromRotationMatrix(m);

          let currentIdx = Math.floor(v.progress * v.trailPointCount);
          v.trailGeo.setDrawRange(Math.max(0, currentIdx - 20), Math.min(20, currentIdx));
        });

        renderer.render(scene, camera);
      };

      animate();
    };

    const handleResize = () => {
      if (!camera || !renderer) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    const loadThreeJS = () => {
      if (window.THREE) {
        initThreeScene();
      } else {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
        script.onload = initThreeScene;
        document.head.appendChild(script);
      }
    };

    loadThreeJS();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
      if (container && renderer) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return <div id="three-container" ref={containerRef} />;
};

export default ThreeBackground;
