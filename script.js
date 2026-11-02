document.documentElement.classList.add('js');

window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
});

function setMenuIcon(open){
    var icon = document.querySelector('.toggle i');
    icon.className = open ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
}

function toggleMenu(){
    var open = document.querySelector('.menu').classList.toggle('active');
    setMenuIcon(open);
}

function closeMenu(){
    document.querySelector('.menu').classList.remove('active');
    setMenuIcon(false);
}

document.getElementById('year').textContent = new Date().getFullYear();

// Fade sections in as they scroll into view
var revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
    var observer = new IntersectionObserver(function(entries){
        entries.forEach(function(entry){
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });
    revealItems.forEach(function(item){ observer.observe(item); });
} else {
    revealItems.forEach(function(item){ item.classList.add('visible'); });
}

// No backend: open the visitor's mail client with the message pre-filled
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    var fields = this.elements;
    var name = fields['name'].value.trim();
    var email = fields['email'].value.trim();
    var message = fields['message'].value.trim();
    var subject = 'Portfolio message from ' + name;
    var body = message + '\n\n' + name + ' <' + email + '>';
    window.location.href = 'mailto:fmcoskun@gmail.com'
        + '?subject=' + encodeURIComponent(subject)
        + '&body=' + encodeURIComponent(body);
});
