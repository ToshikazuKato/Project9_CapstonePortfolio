const screenWidth = window.innerWidth;
const bar = document.getElementById('bar');
const links = document.querySelectorAll('.links');
const toggleNav = document.getElementById('toggleNav');

// to display links when bar's clicked;
const toggleLinks = () => {
  if (toggleNav.className === "topnav") {
      toggleNav.className += " responsive";
  } else {
      toggleNav.className = "topnav";
    }
}
bar.addEventListener('click', ()=>{
  toggleLinks();
});

AOS.init({
  duration: 1200,
})
