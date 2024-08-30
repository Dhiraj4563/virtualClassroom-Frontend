// index.js

// Function to add news (static example)
function addNews(newsText) {
    const newsContainer = document.getElementById('newsContainer');
    const newsItem = document.createElement('div');
    newsItem.className = 'newsItem';
    newsItem.textContent = newsText;
    newsContainer.appendChild(newsItem);
}

// Example of adding news
addNews("Mid-term exams will start from September 10.");
addNews("New assignment on Mathematics has been uploaded.");

// Handle contact form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const teacherEmail = document.getElementById('teacherEmail').value;
    const studentEmail = document.getElementById('studentEmail').value;
    const message = document.getElementById('message').value;

    // Displaying the sent email details at the bottom
    const footer = document.querySelector('footer');
    const emailDetails = document.createElement('div');
    emailDetails.innerHTML = `<p><strong>From:</strong> ${studentEmail}</p>
                              <p><strong>To:</strong> ${teacherEmail}</p>
                              <p><strong>Message:</strong> ${message}</p>`;
    footer.appendChild(emailDetails);

    // Reset form
    document.getElementById('contactForm').reset();
});
