// $headerLinks.forEach( (link) => {
//   link.addEventListener('click', smoothScroll)
// })

// $heroLink.addEventListener('click', smoothScroll)

// function smoothScroll (e) {
//   e.preventDefault()

//   const easeInOutCubic = (t, b, c, d) => {
//       t /= d/2; if (t < 1) return c/2 * t*t*t + b;
//       t -= 2; return c/2 * (t*t*t + 2) + b;
//   };

//   // console.log('link:',e.target,e.currentTarget)
//   // const fold = link.getAttribute('href');
//   // const fold = link.hash; 
//   const fold = e.currentTarget.hash;
//   const targetPosition = document.querySelector(fold).offsetTop;
//   const startPosition = window.pageYOffset;
//   const distance = targetPosition - startPosition;
//   const duration = 1500;
//   let start = null;
  
//   window.requestAnimationFrame(step);
//   function step(timestamp) {
//       if (!start) start = timestamp;
//       const progress = timestamp - start;
//       window.scrollTo(0, easeInOutCubic(
//           progress, startPosition, distance, duration
//       ))
//       if (progress < duration) window.requestAnimationFrame(step);
//   }
// }
