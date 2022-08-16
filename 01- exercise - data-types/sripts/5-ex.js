function gradeOfStudent() {
  document.getElementById("nameOfTask").innerHTML = "Grade of student";

  setTimeout(() => {
    let pointsFromTest = prompt("Please enter points :");

    let grade;

    pointsFromTest = parseInt(pointsFromTest);

    if (pointsFromTest >= 0 && pointsFromTest <= 40) {
      grade = 2.0;
      // document.getElementById("demo").innerHTML = "Grade is" + " " + grade;
    } else if (pointsFromTest >= 41 && pointsFromTest <= 60) {
      grade = 3.0;
      // document.getElementById("demo").innerHTML = "Grade is" + " " + grade;
    } else if (pointsFromTest >= 61 && pointsFromTest <= 80) {
      grade = 4.0;
      // document.getElementById("demo").innerHTML = "Grade is" + " " + grade;
    } else if (pointsFromTest >= 81 && pointsFromTest <= 90) {
      grade = 5.0;
      // document.getElementById("demo").innerHTML = "Grade is" + " " + grade;
    } else if (pointsFromTest >= 91 && pointsFromTest <= 100) {
      grade = 6.0;
      // document.getElementById("demo").innerHTML = "Grade is" + " " + grade;
    }

    if (grade !== undefined) {
      document.getElementById("result-text").innerHTML =
        "Grade is" + " " + grade;
    }
  }, "1000");
}
