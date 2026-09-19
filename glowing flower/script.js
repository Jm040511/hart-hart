// Color palettes: [petal color 1, petal color 2, circle/petal-base color, glow color, sparkle light 1, sparkle light 2]
const flowerPalettes = [
  ['#ff6236', '#ffd85f', '#ffe4a0', '#ffd85f', '#ffe4a0', '#ff6236'], // amber (original)
  ['#ff2f7e', '#ff9ecb', '#ffd6e8', '#ff5fa2', '#ffd6e8', '#ff2f7e'], // pink
  ['#7b2ff7', '#c9a4ff', '#e6d6ff', '#a86bff', '#e6d6ff', '#7b2ff7'], // violet
  ['#0091ff', '#9be8ff', '#d6f3ff', '#4fc3ff', '#d6f3ff', '#0091ff'], // cyan
  ['#ff2b2b', '#ffb199', '#ffe0d6', '#ff5f4f', '#ffe0d6', '#ff2b2b'], // crimson
  ['#10c98a', '#baffe0', '#daffee', '#3fe0ab', '#daffee', '#10c98a'], // mint
];

document.querySelectorAll('.flower-container').forEach((el, i) => {
  const [petal1, petal2, circle, glow, light1, light2] = flowerPalettes[i % flowerPalettes.length];
  el.style.setProperty('--petal-color-1', petal1);
  el.style.setProperty('--petal-color-2', petal2);
  el.style.setProperty('--circle-color', circle);
  el.style.setProperty('--glow-color', glow);
  el.style.setProperty('--light-color-1', light1);
  el.style.setProperty('--light-color-2', light2);

  el.innerHTML = `<div class="flower-top">
                  <div class="flower-petal flower-petal__1"></div>
                  <div class="flower-petal flower-petal__2"></div>
                  <div class="flower-petal flower-petal__3"></div>
                  <div class="flower-petal flower-petal__4"></div>
                  <div class="flower-petal flower-petal__5"></div>
                  <div class="flower-petal flower-petal__6"></div>
                  <div class="flower-petal flower-petal__7"></div>
                  <div class="flower-petal flower-petal__8"></div>
                  <div class="flower-circle"></div>
                  <div class="flower-light flower-light__1"></div>
                  <div class="flower-light flower-light__2"></div>
                  <div class="flower-light flower-light__3"></div>
                  <div class="flower-light flower-light__4"></div>
                  <div class="flower-light flower-light__5"></div>
                  <div class="flower-light flower-light__6"></div>
                  <div class="flower-light flower-light__7"></div>
                  <div class="flower-light flower-light__8"></div>
                  </div>

                  <div class="flower-bottom">
                  <div class="flower-stem"></div>
                  <div class="flower-leaf flower-leaf__1"></div>
                  <div class="flower-leaf flower-leaf__2"></div>
                  <div class="flower-leaf flower-leaf__3"></div>
                  <div class="flower-leaf flower-leaf__4"></div>
                  <div class="flower-leaf flower-leaf__5"></div>
                  <div class="flower-leaf flower-leaf__6"></div>

                  <div class="flower-grass flower-grass__1"></div>
                  <div class="flower-grass flower-grass__2"></div>
                  <div class="flower-grass flower-grass__3"></div>
                  <div class="flower-grass flower-grass__4"></div>
                  </div>`;
    });

    const flowers = Array.from(document.querySelectorAll('.flower-container'));
    const animatedClass = 'animate';
    
    flowers[0].classList.add(animatedClass);
    
    setTimeout(() => {
      for (let i = 1; i <= 2 && i < flowers.length; i++) {
        flowers[i].classList.add(animatedClass);
      }
    
      let remaining = flowers.slice(3); 
      const interval = setInterval(() => {
        if (remaining.length === 0) {
          clearInterval(interval);
          return;
        }
    
        const randomIndex = Math.floor(Math.random() * remaining.length);
        const el = remaining.splice(randomIndex, 1)[0]; 
        el.classList.add(animatedClass);
      }, 500);
    
    }, 3000);