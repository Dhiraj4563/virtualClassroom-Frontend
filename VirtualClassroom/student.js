// student.js

// Example student data (this would normally come from a database or API)
const students = [
    {
        name: "John Doe",
        rollNumber: "12345",
        email: "john.doe@example.com",
        mobile: "9876543210",
        attendance: {
            Mathematics: "85%",
            Science: "90%",
            English: "80%"
        },
        marks: {
            Mathematics: 88,
            Science: 92,
            English: 84
        }
    },
    {
        name: "Jane Smith",
        rollNumber: "67890",
        email: "jane.smith@example.com",
        mobile: "9876543211",
        attendance: {
            Mathematics: "95%",
            Science: "98%",
            English: "92%"
        },
        marks: {
            Mathematics: 90,
            Science: 95,
            English: 89
        }
    }
];

// Function to display student details
function displayStudentDetails() {
    const studentInfo = document.getElementById('studentInfo');

    students.forEach(student => {
        const studentCard = document.createElement('div');
        studentCard.className = 'studentCard';

        const studentName = document.createElement('h3');
        studentName.textContent = student.name;
        studentCard.appendChild(studentName);

        const studentDetails = document.createElement('div');
        studentDetails.className = 'studentDetails';
        studentDetails.innerHTML = `<p><strong>Roll Number:</strong> ${student.rollNumber}</p>
                                    <p><strong>Email:</strong> ${student.email}</p>
                                    <p><strong>Mobile:</strong> ${student.mobile}</p>`;
        studentCard.appendChild(studentDetails);

        const attendance = document.createElement('div');
        attendance.className = 'attendance';
        attendance.innerHTML = `<h4>Attendance</h4>
                                ${Object.keys(student.attendance).map(subject => 
                                    `<p>${subject}: ${student.attendance[subject]}</p>`
                                ).join('')}`;
        studentCard.appendChild(attendance);

        const marks = document.createElement('div');
        marks.className = 'marks';
        marks.innerHTML = `<h4>Internal Marks</h4>
                           ${Object.keys(student.marks).map(subject => 
                               `<p>${subject}: ${student.marks[subject]}</p>`
                           ).join('')}`;
        studentCard.appendChild(marks);

        studentInfo.appendChild(studentCard);
    });
}

// Call the function to display the details when the page loads
window.onload = displayStudentDetails;
