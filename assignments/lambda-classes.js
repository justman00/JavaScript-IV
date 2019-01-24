// CODE here for your Lambda Classes
class Person {
  constructor({ name, age, location, gender }) {
    this.name = name;
    this.location = location;
    this.age = age;
    this.gender = gender;
  }

  speak() {
    return `Hello my name is ${this.name}, I am from ${this.location}`;
  }
}

class Instructor extends Person {
  constructor(props) {
    super(props);
    this.specialty = props.specialty;
    this.favLanguage = props.favLanguage;
    this.catchPhrase = props.catchPhrase;
  }

  demo(subject) {
    return `Today we are learning about ${subject}`;
  }

  grade(student, subject) {
    return `${student.name} receives a perfect score on ${subject}`;
  }

  gradeStudent(student) {
    if (Math.random() >= 0.5) {
      student.grade += Math.floor(Math.random() * 10) + 1;
    } else {
      student.grade -= Math.floor(Math.random() * 10) + 1;
    }
  }
}

class Student extends Person {
  constructor(props) {
    super(props);
    this.previousBackground = props.previousBackground;
    this.className = props.className;
    this.favSubjects = props.favSubjects;
    this.grade = props.grade;
  }

  listSubjects() {
    this.favSubjects.forEach(s => console.log(s));
  }

  PRAssignment(subject) {
    console.log(`${student.name} has submitted a PR for ${subject}`);
  }

  sprintChallenge(subject) {
    console.log(`${student.name} has begun sprint challenge on ${subject}`);
  }

  graduate() {
    if (this.grade > 70) {
      console.log("You are ready to graduate");
    } else {
      console.log("Go back to grinding");
    }
  }
}

class PM extends Instructor {
  constructor(props) {
    super(props);
    this.gradClassName = props.gradClassName;
    this.favInstructor = props.favInstructor;
  }

  standUp(channel) {
    console.log(
      `${this.name} announces to ${channel}, @channel standy times!​​​​​`
    );
  }

  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const vlad = new Student({
  name: "Vlad",
  location: "Moldova",
  age: 18,
  gender: "male",
  className: "WEB17",
  grade: 65
});

fred.gradeStudent(vlad);
console.log(vlad.grade);
fred.gradeStudent(vlad);
console.log(vlad.grade);
fred.gradeStudent(vlad);
console.log(vlad.grade);
fred.gradeStudent(vlad);
console.log(vlad.grade);
vlad.graduate();
