<script>
document.addEventListener('DOMContentLoaded', () => {
  // Mark active nav by pathname
  const here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('header .links a').forEach(a=>{
    const href = a.getAttribute('href');
    if(href && (href === here || (here==='index.html' && href==='index.html'))) a.classList.add('is-active');
  });
  // Show image fallback if no video
  const vid = document.querySelector('.hero video');
  if(!vid){ const img = document.querySelector('.hero img.bg'); if(img) img.style.display='block'; }
});
</script>
