/**
 * @license MIT
 * @author codewithsadee <mohammadsadee24@gmail.com>
 * @copyright codewithsadee 2023
 */


'use strict';

const $HTML = document.documentElement;

const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
console.log(isDark)
if(sessionStorage.getItem('theme')){
    $HTML.dataset.theme = sessionStorage.getItem('theme')
}else {
    $HTML.dataset.theme = isDark ? 'dark' : 'light';
}
let isPressed = false
let changeTheme  = function (){
   isPressed = !isPressed
   this.setAttribute('aria-pressed',isPressed)
   $HTML.setAttribute('data-theme',$HTML.dataset.theme==='light' ? 'dark' :'light');
   sessionStorage.setItem('theme',$HTML.dataset.theme)
}

window.addEventListener('load',function (){
const $themebtn = document.querySelector('[data-theme-btn]')

$themebtn.addEventListener('click',changeTheme)

})