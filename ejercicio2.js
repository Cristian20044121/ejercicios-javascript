function getAverage(scores) {
  var total = 0;
  for (let score of scores) {
    total += score;
    console.log(total);
  }
  const totalScores = scores.length;
  const resultado = total / totalScores;
  console.log(resultado);
}

//    console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(
  "*****************************************************************"
);

function getGrade(score) {
  if (score === 100) {
    return "A++";
  } else if (score >= 90 && score <= 99) {
    return "A";
  } else if (score >= 80 && score <= 89) {
    return "B";
  } else if (score >= 70 && score <= 79) {
    return "C";
  } else if (score >= 60 && score <= 69) {
    return "D";
  } else if (score >= 0 && score <= 59) {
    return "F";
  }
}

console.log(getGrade(96));
console.log(getGrade(82));
console.log(getGrade(56));
console.log("*******************************");

function hasPassingGrade(score) {
  const nota = getGrade(score);
  if (
    nota == "A++" ||
    nota == "A" ||
    nota == "B" ||
    nota == "C" ||
    nota == "D"
  ) {
    return true;
  } else {
    return false;
  }
}

function studentMsg(totalScores, studentScore) {
  const average = getAverage(totalScores);
  const grade = getGrade(studentScore);
  const status =
    grade === "A++" ||
    grade === "A" ||
    grade === "B" ||
    grade === "C" ||
    grade === "D"
      ? "You passed the course."
      : "You failed the course.";
  return `Class average: ${average}. Your grade: ${grade}. ${status}`;
}
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
