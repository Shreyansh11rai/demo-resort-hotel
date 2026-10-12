const navItems = [
  ['Stay', 'rooms.html'], ['The Resort', 'about.html'], ['Dining', 'dining.html'],
  ['Wellness', 'spa.html'], ['Experiences', 'experiences.html'], ['Celebrations', 'weddings.html'],
  ['Journal', 'blog.html'], ['Contact', 'contact.html']
];
const brand = `<a class="brand" href="index.html" aria-label="The Retreat home"><span class="brand-mark">J</span><span class="brand-name">The Retreat<small>Forest &amp; River Retreat</small></span></a>`;
const header = `<div class="announcement">A quieter kind of escape · An invitation to slow down, all year long</div><header class="site-header">${brand}<button class="nav-toggle" type="button" aria-expanded="false" aria-label="Open navigation">Menu</button><nav class="main-nav" aria-label="Main navigation">${navItems.map(([name,url])=>`<a href="${url}">${name}</a>`).join('')}<a class="button" href="offers.html">Plan your stay</a></nav></header>`;
const footer = `<footer class="footer"><div class="footer-main"><div>${brand}<p style="margin-top:20px">A small hideaway shaped by forest, river and the unhurried rhythms of the Western Ghats.</p><p>Near Malshej Ghat, Maharashtra, India</p></div><div><h3>Discover</h3><div class="footer-links"><a href="rooms.html">Rooms &amp; villas</a><a href="amenities.html">Resort amenities</a><a href="dining.html">Dining</a><a href="spa.html">Spa &amp; wellness</a><a href="experiences.html">Experiences</a></div></div><div><h3>Plan your visit</h3><div class="footer-links"><a href="offers.html">Offers &amp; packages</a><a href="location.html">Location &amp; connectivity</a><a href="events.html">Events &amp; corporate</a><a href="faq.html">Frequently asked questions</a><a href="contact.html">Contact us</a></div></div><div><h3>Get in touch</h3><p>Reservations<br><a href="tel:+912245670890">+91 22 4567 0890</a><br><a href="mailto:stay@theretreat.example">stay@theretreat.example</a></p><p>Daily, 9:00 am – 7:00 pm IST</p></div></div><div class="footer-bottom"><span>© 2026 The Retreat Forest &amp; River Retreat · A demonstration website</span><nav aria-label="Legal"><a href="privacy.html">Privacy</a><a href="terms.html">Terms</a><a href="cancellation.html">Cancellation policy</a><a href="accessibility.html">Accessibility</a></nav></div></footer><div class="lightbox" role="dialog" aria-label="Image preview" aria-modal="true"><button type="button" aria-label="Close image preview">×</button><img alt="Expanded gallery photograph"></div>`;
document.body.insertAdjacentHTML('afterbegin', header);
document.body.insertAdjacentHTML('beforeend', footer);
const toggle = document.querySelector('.nav-toggle');
toggle.addEventListener('click', () => {
  const open = document.body.classList.toggle('mobile-nav-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.textContent = open ? 'Close' : 'Menu';
});
document.querySelectorAll('form[data-demo-form]').forEach(form => form.addEventListener('submit', event => {
  event.preventDefault();
  const message = form.querySelector('.notice');
  if (message) { message.textContent = 'Thank you — this is a demo enquiry, and no information has been sent.'; message.style.display = 'block'; }
}));
document.querySelectorAll('.gallery-grid img').forEach(image => image.addEventListener('click', () => {
  const lightbox = document.querySelector('.lightbox');
  lightbox.querySelector('img').src = image.src;
  lightbox.classList.add('active');
}));
document.querySelector('.lightbox button').addEventListener('click', () => document.querySelector('.lightbox').classList.remove('active'));
document.querySelector('.lightbox').addEventListener('click', event => { if (event.target.classList.contains('lightbox')) event.currentTarget.classList.remove('active'); });
