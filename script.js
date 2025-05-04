 // DOM Elements
 const openingScreen = document.querySelector('.opening-screen');
 const openBtn = document.querySelector('.open-invitation-btn');
 const mainContent = document.querySelector('.main-content');
 const musicPlayer = document.getElementById('musicPlayer');
 const bgMusic = document.getElementById('bgMusic');
 const copyBtn = document.getElementById('copyBtn');
 const accountNumber = document.getElementById('accountNumber');
 const copyNotification = document.getElementById('copyNotification');
 const floatingHearts = document.getElementById('floatingHearts');
 
 // Open Invitation
 openBtn.addEventListener('click', () => {
   openingScreen.classList.add('hidden');
   setTimeout(() => {
     mainContent.classList.add('show');
     // Start countdown
     startCountdown();
     // Create floating hearts
     createHearts();
   }, 1500);
 });
 
 // Music Player
 let isPlaying = false;
 musicPlayer.addEventListener('click', () => {
   if (isPlaying) {
     bgMusic.pause();
     musicPlayer.innerHTML = '<i class="fas fa-music music-icon"></i>';
   } else {
     bgMusic.play();
     musicPlayer.innerHTML = '<i class="fas fa-pause music-icon"></i>';
   }
   isPlaying = !isPlaying;
 });
 
 // Copy Account Number
 copyBtn.addEventListener('click', () => {
   navigator.clipboard.writeText(accountNumber.textContent).then(() => {
     copyNotification.classList.add('show');
     setTimeout(() => {
       copyNotification.classList.remove('show');
     }, 2000);
   });
 });
 
 // Countdown Timer
 function startCountdown() {
   const weddingDate = new Date('October 12, 2025 08:00:00').getTime();
   
   const countdown = setInterval(() => {
     const now = new Date().getTime();
     const distance = weddingDate - now;
     
     const days = Math.floor(distance / (1000 * 60 * 60 * 24));
     const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     const seconds = Math.floor((distance % (1000 * 60)) / 1000);
     
     document.getElementById('days').textContent = days.toString().padStart(2, '0');
     document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
     document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
     document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
     
     if (distance < 0) {
       clearInterval(countdown);
       document.getElementById('days').textContent = '00';
       document.getElementById('hours').textContent = '00';
       document.getElementById('minutes').textContent = '00';
       document.getElementById('seconds').textContent = '00';
     }
   }, 1000);
 }
 
 // Floating Hearts Animation
 function createHearts() {
   const heartIcons = ['❤️', '💖', '💗', '💓', '💘'];
   
   setInterval(() => {
     const heart = document.createElement('div');
     heart.classList.add('heart');
     heart.innerHTML = heartIcons[Math.floor(Math.random() * heartIcons.length)];
     
     // Random position
     heart.style.left = Math.random() * 100 + 'vw';
     heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
     heart.style.animationDuration = (Math.random() * 3 + 3) + 's';
     
     floatingHearts.appendChild(heart);
     
     // Remove heart after animation
     setTimeout(() => {
       heart.remove();
     }, 6000);
   }, 300);
 }
 
 // Form Submission
 const rsvpForm = document.getElementById('rsvpForm');
 rsvpForm.addEventListener('submit', (e) => {
   e.preventDefault();
   
   // Get form data
   const formData = new FormData(rsvpForm);
   
   // Here you would normally send the data to your server
   // For demo purposes, we'll just show an alert
   alert('Terima kasih telah mengkonfirmasi kehadiran Anda!');
   rsvpForm.reset();
 });