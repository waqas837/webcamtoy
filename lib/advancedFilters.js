// app/lib/advancedFilters.js
export const createSnowParticles = (canvas, ctx) => {
  const particles = [];
  const maxParticles = 50;
  let animationFrameId;

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 2 + 1,
      speed: Math.random() * 2 + 1,
      wind: Math.random() * 0.3 - 0.15,
    });
  }

  return {
    update: () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
      cancelAnimationFrame(animationFrameId);
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();

        // Update position
        particle.y += particle.speed;
        particle.x += particle.wind;

        // Reset particle if it goes off screen
        if (particle.y > canvas.height) {
          particle.y = -5;
          particle.x = Math.random() * canvas.width;
        }
        if (particle.x > canvas.width) {
          particle.x = 0;
        }
        if (particle.x < 0) {
          particle.x = canvas.width;
        }
      });
    },
  };
};

export const createRainParticles = (canvas, ctx) => {
  const particles = [];
  const maxParticles = 200;

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      length: Math.random() * 20 + 10,
      speed: Math.random() * 10 + 5,
    });
  }

  return {
    update: () => {
      ctx.strokeStyle = "rgba(174, 194, 224, 0.5)";
      ctx.lineWidth = 1;
      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.moveTo(particle.x, particle.y);
        ctx.lineTo(particle.x, particle.y + particle.length);
        ctx.stroke();

        particle.y += particle.speed;

        if (particle.y > canvas.height) {
          particle.y = -particle.length;
          particle.x = Math.random() * canvas.width;
        }
      });
    },
  };
};

export const createBubbleParticles = (canvas, ctx) => {
  const particles = [];
  const maxParticles = 50;

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 10 + 5,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 4 - 2,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }

  return {
    update: () => {
      // Create a gradient for the background effect
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(255, 0, 255, 0.1)"); // Purple to Transparent
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.2)"); // White to Transparent

      // Set the gradient as the background color
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`; // Particle color
        ctx.fill();

        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Bounce off the walls
        if (
          particle.x + particle.radius > canvas.width ||
          particle.x - particle.radius < 0
        ) {
          particle.speedX *= -1;
        }
        if (
          particle.y + particle.radius > canvas.height ||
          particle.y - particle.radius < 0
        ) {
          particle.speedY *= -1;
        }
      });
    },
  };
};

export const createUnderwaterParticles = (canvas, ctx) => {
  const particles = [];
  const maxParticles = 150;

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 5 + 2,
      speed: Math.random() * 2 + 1,
      opacity: Math.random() * 0.5 + 0.5,
    });
  }

  return {
    update: () => {
      // Create a gradient for the water effect
      const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
      gradient.addColorStop(0, "rgba(0, 0, 255, 0.3)");
      gradient.addColorStop(1, "rgba(0, 150, 255, 0.3)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 150, 255, ${particle.opacity})`; // Set the bubble color
        ctx.fill();

        particle.y -= particle.speed;

        if (particle.y < -particle.radius) {
          particle.y = canvas.height + particle.radius;
          particle.x = Math.random() * canvas.width;
        }
      });
    },
  };
};

export const createFlareParticles = (canvas, ctx) => {
  const particles = [];
  const maxParticles = 75;

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 6 + 2, // Increased size
      speed: Math.random() * 1.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      angle: Math.random() * Math.PI * 2,
      angularSpeed: Math.random() * 0.02 - 0.01,
    });
  }

  return {
    update: () => {
      // Create a gradient for the flare effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, "rgba(255, 69, 0, 0.3)"); // Red-Orange center
      gradient.addColorStop(1, "rgba(255, 255, 255, 0.1)"); // White edges
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        ctx.beginPath();
        ctx.moveTo(-particle.radius, 0);
        ctx.lineTo(particle.radius, 0);
        ctx.strokeStyle = `rgba(255, 69, 0, ${particle.opacity})`; // Flare color
        ctx.lineWidth = 2;
        ctx.stroke();
        ctx.restore();

        particle.y -= particle.speed;
        particle.angle += particle.angularSpeed;

        if (particle.y < -particle.radius) {
          particle.y = canvas.height + particle.radius;
          particle.x = Math.random() * canvas.width;
        }
      });
    },
  };
};

export const createBokehParticles = (canvas, ctx) => {
  const particles = [];
  const maxParticles = 80;

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: Math.random() * 15 + 5,
      speed: Math.random() * 0.5 + 0.5,
      opacity: Math.random() * 0.5 + 0.5,
      hue: Math.random() * 360, // Random hue for color variation
    });
  }

  return {
    update: () => {
      // Create a gradient for the bokeh effect
      const gradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        canvas.width / 2
      );
      gradient.addColorStop(0, "rgba(255, 255, 255, 0.1)");
      gradient.addColorStop(1, "rgba(0, 0, 0, 0.1)");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${particle.hue}, 100%, 50%, ${particle.opacity})`; // Bokeh color with hue
        ctx.fill();

        particle.y += particle.speed;

        if (particle.y > canvas.height + particle.radius) {
          particle.y = -particle.radius;
          particle.x = Math.random() * canvas.width;
        }
      });
    },
  };
};

export const createEmojiParticles = (canvas, ctx) => {
  const particles = [];
  const maxParticles = 50;
  const emojis = ["😀", "😂", "😍", "😎", "🤔", "😜", "😢", "😡", "👍", "👎"];

  for (let i = 0; i < maxParticles; i++) {
    particles.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 30 + 20,
      speedX: Math.random() * 4 - 2,
      speedY: Math.random() * 4 - 2,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    });
  }

  return {
    update: () => {
      // Avoid clearing the entire canvas here, so no unwanted background color.
      particles.forEach((particle) => {
        ctx.font = `${particle.size}px Arial`;
        ctx.fillText(particle.emoji, particle.x, particle.y);

        // Update particle position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Reset particle position if it goes off the screen
        if (particle.x > canvas.width) {
          particle.x = 0;
        }
        if (particle.x < 0) {
          particle.x = canvas.width;
        }
        if (particle.y > canvas.height) {
          particle.y = 0;
        }
        if (particle.y < 0) {
          particle.y = canvas.height;
        }
      });
    },
  };
};
