document.addEventListener('DOMContentLoaded', function() {
   const text = "Merupakan salah satu Desa yang terletak di Kecamatan Bojong, Kabupaten Tegal, Provinsi Jawa Tengah";
   const target = document.getElementById('typing-target');
   let index = 0;

   function type() {
       if (index < text.length) {
           target.textContent += text.charAt(index);
           index++;
           setTimeout(type, 100);  // Kecepatan ketikan dalam milidetik
       }
   }

   type();
});

let loginForm = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () =>{
   loginForm.classList.add('active');
}

document.querySelector('#close-login-form').onclick = () =>{
   loginForm.classList.remove('active');
}

let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .nav');

menu.onclick = () =>{
   menu.classList.toggle('fa-times');
   navbar.classList.toggle('active');
}

window.onscroll = () =>{
   loginForm.classList.remove('active');
   menu.classList.remove('fa-times');
   navbar.classList.remove('active');

   if(window.scrollY > 0){
      document.querySelector('.header').classList.add('active');
   }else{
      document.querySelector('.header').classList.remove('active');
   }
}
window.addEventListener('load', function() {
   // Set timeout to hide the loading animation after 5 seconds
   setTimeout(function() {
       document.getElementById('loading').style.display = 'none';
       document.getElementById('content').style.display = 'block';
   }, 2000); // 5000 milliseconds = 5 seconds
})
document.addEventListener('contextmenu', event => event.preventDefault());
document.onkeydown = function(e) {
    if (e.keyCode == 123) { // F12 key
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}
var swiper = new Swiper('.swiper-container', {
    loop: true,
    autoplay: {
      delay: 3000, // 3000 ms = 3 detik
      disableOnInteraction: false, // Lanjutkan autoplay meskipun ada interaksi pengguna
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
   // Akhir       