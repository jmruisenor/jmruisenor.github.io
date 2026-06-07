// nav scrolled state
const nav = document.querySelector('.nav');
const onScroll = () => nav && nav.classList.toggle('scrolled', window.scrollY > 24);
onScroll(); window.addEventListener('scroll', onScroll, {passive:true});

// mobile menu
const burger = document.querySelector('.nav__burger');
if(burger){
  burger.addEventListener('click', () => document.body.classList.toggle('nav-on'));
  document.querySelectorAll('.nav__links a').forEach(a =>
    a.addEventListener('click', () => document.body.classList.remove('nav-on')));
}

// scroll reveal
const reveals = document.querySelectorAll('.reveal');
if(!('IntersectionObserver' in window)){
  reveals.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  }, {threshold:.12, rootMargin:'0px 0px -8% 0px'});
  reveals.forEach(el => io.observe(el));
}

// current year
document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
