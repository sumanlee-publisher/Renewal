const menuTitle = document.getElementsByClassName('menu-title');
const header = document.querySelector('header');


for(let i = 0; i < menuTitle.length; i++) {
 menuTitle[i].addEventListener('mouseover', ()=> {
  removeActive();
  header.classList.add('open-menu');
  menuTitle[i].classList.add('active'); 
 })
}

header.addEventListener('mouseleave', ()=> {
 removeActive();
 header.classList.remove('open-menu');
})

function removeActive() {
 for(let i = 0; i < menuTitle.length; i++) {
  menuTitle[i].classList.remove('active');
 }
}
//transform = translateY(0%); 보인다
//스크롤
//transform = translateY(-100%); 숨는다

window.addEventListener('scroll', ()=> {
 for(let i = 0; i < header.length; i++) {
  console.log(header[i].getBoundingClientRect().top-window.innerHeight < 0);
 }
 if(window.scrollY <= 100) {
  header.classList.add('top-content');
 } else {
  header.classList.remove('top-content');
 }
})

