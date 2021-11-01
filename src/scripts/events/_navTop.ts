// window.addEventListener('scroll', (e) => {
//   $header.classList.toggle('nav-top', window.scrollY > 0)

//   let navInactive = $navUl.querySelector('.nav-active');
//   if (navInactive) { navInactive.classList.remove('nav-active') }

//   let winTopPos = window.scrollY + $navLinks.length;
//   $navLinks.forEach( (link) => {
//       let section = document.querySelector(link.hash);
//       (
//           section.offsetTop <= winTopPos &&
//           section.offsetTop + 
//           section.offsetHeight > winTopPos
//       ) 
//       ? link.classList.add('nav-active')
//       : link.classList.remove('nav-active');
//   })
// })