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



// window.addEventListener('scroll', ()=> {
//  for(let i = 0; i < header.length; i++) {
//   console.log(header[i].getBoundingClientRect().top-window.innerHeight < 0);
//  }
//  if(window.scrollY <= 100) {
//   header.classList.add('top-content');
//  } else {
//   header.classList.remove('top-content');
//  }
// })


// img-change
//condition

// img-container opacity 0; 
// middle-title, str-text opacity 0;
// second-img opacity 1;
// middle-title, str-text opacity 1;

// if (imgContainer === true) {
//  imgContainer.classList.add(".add-img");
// } else {
//  imgContainer.classList.remove(".add-img");
// }
// 마지막으로 setTimeout() 함수와 setInterval() 함수를 사용한 후에는 반드시 clearTimeout() 함수와 clearInterval() 함수를 사용해서 타이머를 청소해주는 습관을 들이시라고 말씀드리고 싶습니다. 특히, SPA(Single Page Application)을 개발할 때는 이 부분이 메모리 누수(memory leak)로 이어질 수 있기 때문에 각별히 주의가 필요합니다.
// const 변수 = [document.getElementsByClassName("클래스1"), document.getElementsByClassName("클래스2")];

// window.addEventListener('scroll', (e)=> {
//  e.preventDefault();
//  window.scrollTo({top: window.innerHeight, behavior: 'smooth'})
// }, {passive: false})

// ////////////////////////////////////////////////////////////////////////////////////////////
 changeImg.classList.add()

