const menuTitle = document.getElementsByClassName('menu-title');
const header = document.querySelector('header');
const changeImg = document.getElementsByClassName('change-img');


// 마우스 호버시 메뉴창 색상변경
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
//////////////////////////////////////////////////
//scrollTo
// window.scrollTo({top: 300 b})


// 스크롤시 메뉴창 사라짐
let zero = 0;

window.addEventListener("scroll", ()=> {
 if(window.scrollY >= 100) {
  header.classList.add("scrolled");
 } else {
  header.classList.remove("scrolled");
 }

 if(zero <  window.scrollY) {
  header.classList.add("hide");
 } else {
  header.classList.remove("hide");
 }

 zero = window.scrollY;
})



// scroll width: 100%;
const contentContainerWrapper = document.getElementsByClassName('content-container-wrapper');
window.addEventListener('scroll', ()=> {
 // console.log(contentContainerWrapper[0].getBoundingClientRect().top);
 if (contentContainerWrapper[0].getBoundingClientRect().top - window.scrollY/2< 0 ) {
  contentContainerWrapper[0].classList.add("active");
 } else {
  contentContainerWrapper[0].classList.remove("active");
 }
})

//sticky-section
const stickySection = document.getElementsByClassName("sticky-section");
let opacityText = document.getElementsByClassName("opacity-text");

const stickyInitPos = stickySection[0].getBoundingClientRect().top + window.scrollY;
window.addEventListener('scroll', ()=>{
 
 
 for(let i = 0; i < opacityText.length; i++) {
  console.log(stickySection[0].getBoundingClientRect().top < -500-(i*700));
  if(stickySection[0].getBoundingClientRect().top < -500-(i*500)){
   opacityText[i].classList.add('active');
  }else{
   opacityText[i].classList.remove('active')
  }
 }
})


//