window.onscroll = function() {myFunction()};

let navbar = document.getElementById("nav-bar");

let sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


let stats = document.querySelectorAll('.fade-in') 
let slide = document.querySelectorAll('.slide')

let options ={
  root: null,
  threshold: 0.20,
  rootMargin: "-100px"
};

let appear = new IntersectionObserver(function(entries, appear) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    }

    entry.target.classList.add('appear');
    appear.unobserve(entry.target)

  });

}, options);

stats.forEach(section => {
  appear.observe(section)
})

slide.forEach(section => {
  appear.observe(section)
})




