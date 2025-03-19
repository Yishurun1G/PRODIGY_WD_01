// JavaScript for interactivity
// This is like giving the webpage a set of instructions to make it fun

window.addEventListener('scroll', () => {
    // This listens for when you scroll the page, like sliding down a hill
    const navbar = document.querySelector('.navbar');
    // This finds the menu bar so we can change it
    const scrollPosition = window.scrollY;
    // This checks how far you’ve scrolled down, like measuring your slide

    if (scrollPosition > 50) {
        // If you’ve scrolled more than 50 steps, do this
        navbar.classList.add('scrolled');
        // This adds a special look to the menu, like turning on a dark blue light
    } else {
        // If you’re near the top, do this instead
        navbar.classList.remove('scrolled');
        // This turns off the special look and makes the menu white again
    }
});

// Optional: Add active state to clicked menu items
const navLinks = document.querySelectorAll('.nav-link');
// This grabs all the menu links, like collecting all the buttons
navLinks.forEach(link => {
    // This looks at each link one by one
    link.addEventListener('click', (e) => {
        // This waits for you to click a link, like pressing a button
        navLinks.forEach(l => l.classList.remove('active'));
        // This turns off the “active” light on all links first
        e.target.classList.add('active');
        // This turns on the “active” light just for the link you clicked
    });
});// JavaScript for interactivity
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Optional: Add active state to clicked menu items
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        navLinks.forEach(l => l.classList.remove('active'));
        e.target.classList.add('active');
    });
});
