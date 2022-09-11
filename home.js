let close = document.querySelector('.close');
let open = document.querySelector('.open');
let ul = document.querySelector('.ul');


//Display Nav Links
open.addEventListener('click', () => {
  ul.style.right = '0';
  open.style.display = 'none';
  close.style.display = 'block';
});


//Hide Nav Links

close.addEventListener('click', () => {
  ul.style.right = '-500px';
  open.style.display = 'block';
  close.style.display = 'none';
});




AOS.init();

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
};
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

