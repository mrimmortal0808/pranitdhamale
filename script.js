// Function to open the modal and display project details
function openModal(projectId) {
    document.getElementById('projectModal').style.display = 'block';
    loadProjectDetails(projectId);
}

// Function to close the modal
function closeModal() {
    document.getElementById('projectModal').style.display = 'none';
}

// Function to load project details dynamically (for demo purposes, using static content)
function loadProjectDetails(projectId) {
    const projectDetails = {
        project1: {
            title: 'Project 1',
            description: 'This is a detailed description of Project 1. It includes features, technologies used, and other relevant information.',
            image: 'project1-full.jpg'
        },
        project2: {
            title: 'Project 2',
            description: 'This is a detailed description of Project 2. It includes features, technologies used, and other relevant information.',
            image: 'project2-full.jpg'
        },
        project3: {
            title: 'Project 3',
            description: 'This is a detailed description of Project 3. It includes features, technologies used, and other relevant information.',
            image: 'project3-full.jpg'
        }
        // Add more projects as needed
    };

    const project = projectDetails[projectId];
    document.getElementById('projectDetails').innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}">
        <p>${project.description}</p>
    `;
}


function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    document.getElementById('contactForm').style.display = 'none'; // Hide the contact form
    document.getElementById('thank-you').style.display = 'block'; // Show the thank you message
}


// JavaScript to simulate typing animation
const typedText = document.getElementById('typed-text');
const typedDescription = document.getElementById('typed-description');

const textArray = ["𝐇𝐞𝐥𝐥𝐨, 𝐈𝐭'𝐬 𝐌𝐞", "𝐏𝐫𝐚𝐧𝐢𝐭 𝐃𝐡𝐚𝐦𝐚𝐥𝐞", "𝑨𝒏𝒅 𝑰'𝒎 𝒂 𝑭𝒓𝒐𝒏𝒕𝒆𝒏𝒅 𝑾𝒆𝒃 𝑫𝒆𝒗𝒆𝒍𝒐𝒑𝒆𝒓 𝑨𝒏𝒅 𝒆𝒕𝒉𝒊𝒄𝒂𝒍 𝒉𝒂𝒄𝒌𝒆𝒓."];
const delay = 2000; // Delay in milliseconds between each text change

let arrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[arrayIndex].length) {
        if (charIndex === 0) {
            typedText.textContent = ''; // Clear previous text
        }
        typedText.textContent += textArray[arrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, 100);
    } else {
        setTimeout(erase, delay);
    }
}

function erase() {
    if (charIndex > 0) {
        typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, 100);
    } else {
        arrayIndex++;
        if (arrayIndex >= textArray.length) arrayIndex = 0;
        setTimeout(type, 1000); // Delay before typing the next text
    }
}

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(type, 2000); // Delay before starting the typing animation
});




// Example JavaScript for scroll animations with Intersection Observer API
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in-view');
        } else {
            entry.target.classList.remove('animate-in-view');
        }
    });
});

document.querySelectorAll('.animate-scroll').forEach(section => {
    observer.observe(section);
});
// Example JavaScript for modal animation
const modal = document.querySelector('.modal');

function openModal() {
    modal.classList.add('active');
}

function closeModal() {
    modal.classList.remove('active');
}
// Example JavaScript for animated chart with Chart.js
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to handle scroll event and add animation class
function handleScrollAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        if (isInViewport(item)) {
            item.classList.add('animation-slide-in');
        }
    });
}

// Event listener for scroll event
window.addEventListener('scroll', handleScrollAnimation);

// Initial check when the page loads
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
