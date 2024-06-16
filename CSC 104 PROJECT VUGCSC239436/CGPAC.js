// Function to calculate GPA
function calculateGPA(grades) {
    if (!Array.isArray(grades) || grades.length === 0) {
        throw new Error('Grades should be a non-empty array');
    }

    let totalPoints = 0;

    for (let i = 0; i < grades.length; i++) {
        if (typeof grades[i] !== 'number' || grades[i] < 0 || grades[i] > 4) {
            throw new Error('Grades should be numbers between 0 and 4');
        }
        totalPoints += grades[i];
    }

    return totalPoints / grades.length;
}

// Get number of courses
let numCourses = parseInt(prompt("Enter the number of courses:"));

if (isNaN(numCourses) || numCourses <= 0) {
    alert("Please enter a valid number of courses.");
} else {
    let grades = [];
    for (let i = 0; i < numCourses; i++) {
        let grade = parseFloat(prompt(`Enter grade for course ${i + 1} (0 - 4):`));
        if (isNaN(grade) || grade < 0 || grade > 4) {
            alert("Invalid grade. Please enter a number between 0 and 4.");
            i--; // Re-enter the grade for the current course
        } else {
            grades.push(grade);
        }
    }

    try {
        const gpa = calculateGPA(grades);
        alert(`Your GPA is ${gpa.toFixed(2)}`);
    } catch (error) {
        alert(error.message);
    }
}