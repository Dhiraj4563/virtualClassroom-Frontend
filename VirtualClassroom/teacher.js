// teacher.js

let subjects = []; // Array to hold subjects

// Function to create a subject
function createSubject() {
    const subjectName = document.getElementById('subjectName').value;
    if (subjectName) {
        subjects.push(subjectName);
        updateSubjectList();
        document.getElementById('subjectName').value = '';
    } else {
        alert('Please enter a subject name');
    }
}

// Function to update the subject list in the UI
function updateSubjectList() {
    const container = document.getElementById('subjectsContainer');
    container.innerHTML = ''; // Clear current subjects
    subjects.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject';
        subjectDiv.innerHTML = `<h3>${subject}</h3>
            <input type="file" id="file_${subject}" multiple>
            <button onclick="uploadAssignment('${subject}')">Upload Assignment</button>
            <div id="assignmentList_${subject}"></div>`;
        container.appendChild(subjectDiv);
    });
}

// Function to handle assignment upload
function uploadAssignment(subject) {
    const fileInput = document.getElementById(`file_${subject}`);
    const fileList = document.getElementById(`assignmentList_${subject}`);
    const files = fileInput.files;

    if (files.length > 0) {
        for (let i = 0; i < files.length; i++) {
            const file = document.createElement('div');
            file.className = 'assignment';
            file.textContent = files[i].name;
            fileList.appendChild(file);
        }
    } else {
        alert('Please select a file to upload');
    }
}
