// 1.Student details 

let name = "Ram raj";
let rollNo = 1;
let department = "Computer Science and ai/ml"; 

//2.subject marks in an array

let marks = [90, 95, 82, 91, 96]; 

// 3.calculate total marks

function calculateTotal(marksArray) {
    let total = 0;
    for (let i = 0; i < marksArray.length; i++) {
        total += marksArray[i];
    }
    return total;
}

// 4.calculate percentage 

function calculatePercentage(marksArray) {
    let total = calculateTotal(marksArray);
    let maxPossibleMarks = marksArray.length * 100;
    return (total / maxPossibleMarks) * 100;
}

// 5. finding  highest marks

function findHighest(marksArray) {
    let highest = marksArray[0];
    for (let i = 1; i < marksArray.length; i++) {
        if (marksArray[i] > highest) {
            highest = marksArray[i];
        }
    }
    return highest;
}

// 6.find the lowest marks

function findLowest(marksArray) {
    let lowest = marksArray[0];
    for (let i = 1; i < marksArray.length; i++) {
        if (marksArray[i] < lowest) {
            lowest = marksArray[i];
        }
    }
    return lowest;
}

// 7.  subjects marks greater than or equal to 40 

function countPassedSubjects(marksArray) {
    let count = 0;
    for (let i = 0; i < marksArray.length; i++) {
        if (marksArray[i] >= 40) {
            count++;
        }
    }
    return count;
}

// 8. student's name to uppercase 

let formattedName = name.toUpperCase();
let nameLength = name.length; 

// 9.final performance 

console.log("Student: " + formattedName);
console.log("Roll Number: " + rollNo);
console.log("Department: " + department);
console.log("Name Character Count: " + nameLength);
console.log("Total Marks: " + calculateTotal(marks));
console.log("Percentage: " + calculatePercentage(marks) + "%");
console.log("Highest Marks: " + findHighest(marks));
console.log("Lowest Marks: " + findLowest(marks));
console.log("Subjects Passed: " + countPassedSubjects(marks));
console.log("Performance: " + evaluatePerformance(marks));


// Bonus 

function evaluatePerformance(marksArray) {
    let percentage = calculatePercentage(marksArray);
    if (percentage >= 85) {
        return "Excellent";
    } else if (percentage >= 70) {
        return "Good";
    } else if (percentage >= 50) {
        return "Average";
    } else {
        return "Needs Improvement";
    }
}