const user=JSON.parse(localStorage.getItem("userData"));
if(!user){
    alert("Invalid User data. Please log in again.");
    window.location.href="../HTML/login.html";
}else{
    document.getElementById("welcomeMessage").textContent= "welcome back",`${user.username}!` ;
}

//carousel move
 const track = document.getElementById('carouselTrack');
const itemWidth = 380; 
let currentIndex = 0;
        function moveCarousel(direction) {
  const totalItems = track.children.length;
  const containerWidth = document.querySelector('.carousel-container').offsetWidth;
  const visibleItems = Math.floor(containerWidth / itemWidth);
  const maxIndex = totalItems - visibleItems;

  currentIndex += direction;
  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > maxIndex) currentIndex = maxIndex;

  const newTransform = -currentIndex * itemWidth;
  track.style.transform = `translateX(${newTransform}px)`;
}

window.addEventListener("resize", () => moveCarousel(0)); 

//extra
const scrollTrack = document.getElementById('scrollTrack');

scrollTrack.addEventListener('mouseenter', () => {
  scrollTrack.style.animationPlayState = 'paused';
});

scrollTrack.addEventListener('mouseleave', () => {
  scrollTrack.style.animationPlayState = 'running';
});


