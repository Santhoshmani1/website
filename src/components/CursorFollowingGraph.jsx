import { useRef, useEffect } from "react";

const CursorFollowingGraph = () => {
  const canvasRef = useRef(null);
  const particlesRef = useRef([]); // Keep the particles in a useRef to maintain reference
  const maxParticles = 160;

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const canvasSection = document.getElementById("canvas-bg");
    let width = canvasSection.offsetWidth;
    let height = canvasSection.offsetHeight;
    canvas.width = width;
    canvas.height = height;

    const mouse = { x: -100, y: -100 }; // Initialize mouse position off-screen

    // Particle class to manage individual particles
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.life = 100;
        this.color = `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.life -= 1;
        if (this.life <= 0) {
          this.size = 0;
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
    }

    const createParticles = (x, y) => {
      if (particlesRef.current.length < maxParticles) {
        particlesRef.current.push(new Particle(x, y));
      }
    };

    const createRandomParticles = () => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      createParticles(x, y);
    };

    const connectParticles = () => {
      for (let i = 0; i < particlesRef.current.length; i++) {
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const distance =
            (particlesRef.current[i].x - particlesRef.current[j].x) ** 2 +
            (particlesRef.current[i].y - particlesRef.current[j].y) ** 2;

          if (distance < 5000) {
            ctx.strokeStyle = "rgba(255,255, 255, 0.1)"; // Edge color
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particlesRef.current[i].x, particlesRef.current[i].y);
            ctx.lineTo(particlesRef.current[j].x, particlesRef.current[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height); // Clear canvas

      createParticles(mouse.x, mouse.y); // Create particles following the cursor

      particlesRef.current.forEach((particle, index) => {
        particle.update();
        particle.draw();
        if (particle.size === 0) {
          particlesRef.current.splice(index, 1); // Remove dead particles
        }
      });

      connectParticles();
      requestAnimationFrame(animate);
    };

    // canvasSection.addEventListener("mousemove", handleMouseMove);
    // window.addEventListener("resize", handleResize);

    const randomParticleInterval = setInterval(createRandomParticles, 1); // Create random particles every 500ms

    animate(); // Start the animation

    return () => {
      // canvasSection.removeEventListener("mousemove", handleMouseMove);
      // window.removeEventListener("resize", handleResize);
      clearInterval(randomParticleInterval); // Clear the interval on cleanup
    };
  }, []);

  return (
    <canvas ref={canvasRef} className="absolute top-0 left-0 w-full h-full" />
  );
};

export default CursorFollowingGraph;
