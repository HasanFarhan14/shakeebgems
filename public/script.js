// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal functionality
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImage = document.getElementById("modal-image");
const modalDescription = document.getElementById("modal-description");
const closeBtn = document.getElementsByClassName("close")[0];

document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('click', function() {
        const title = this.querySelector('h3').textContent;
        const imgSrc = this.querySelector('img').src;
        const description = this.querySelector('p').textContent;

        modalTitle.textContent = title;
        modalImage.src = imgSrc;
        modalDescription.textContent = description;
        modal.style.display = "block";
    });
});

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Form submission
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your message. We will get back to you soon!');
    this.reset();
});

const puppeteer = require('puppeteer');

async function searchForImages(searchTerm) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto(`https://www.google.com/search?q=${searchTerm}&tbm=isch`); // Google Images search

  // Extract image URLs from the page
  const imageURLs = await page.evaluate(() => {
    const imageElements = document.querySelectorAll('img');
    return Array.from(imageElements).map(img => img.src); 
  });

  // Do something with the URLs, like downloading the images
  console.log('Found image URLs:', imageURLs);

  await browser.close();
}

searchForImages('jewelry similar to the image') // Replace with more specific search terms

