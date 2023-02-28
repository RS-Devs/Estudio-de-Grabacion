const animations = document.querySelectorAll('.animation');

setInterval(() => {
  animations.forEach((animation) => {
    const span = animation.querySelector('span');
    const height = window.innerHeight;
    const width = window.innerWidth;

    // Definir posiciones aleatorias para los ejes x, y y z
    const top = Math.floor(Math.random() * height);
    const left = Math.floor(Math.random() * width);
    const depth = Math.floor(Math.random() * 500) - 250; // Rango de -250 a 250

    // Definir duración de la animación aleatoria
    const speed = Math.floor(Math.random() * 10) + 5;

    // Establecer posiciones aleatorias para los ejes x, y y z
    span.style.top = `${top}px`;
    span.style.left = `${left}px`;
    span.style.transform = `translateZ(${depth}px)`;

    // Establecer duración de la animación aleatoria
    span.style.animationDuration = `${speed}s`;
  });
}, 4000);
