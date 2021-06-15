// eslint-disable-next-line max-lines-per-function
function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],

    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    addCourse(course) {
      this.courses.push(course);
    },

    listCourses() {
      console.log(this.courses);
    },

    addNote(code, note) {
      let course = this.courses.filter(course => course.code === code)[0];
      if (!course) return;
      if (course.hasOwnProperty(note)) {
        course.note += note;
      } else {
        course.note = note;
      }
    },

    updateNote(code, note) {
      let course = this.courses.filter(course => course.code === code)[0];
      course.note = note;
    },

    viewNotes() {
      for (let course of this.courses) {
        if (course.hasOwnProperty('note')) console.log(`${course.name}: ${course.note}`);
      }
    }
  };
}

let school = {
  students: [],

  addStudent(name, year) {
    const VALID_YEARS = ['1st', '2nd', '3rd', '4th', '5th']
    if (!VALID_YEARS.includes(name)) console.log("Invalid Year");

    let newStudent = createStudent(name, year);
    this.students.push(newStudent);
    return newStudent;
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    student.courses.filter(course => course.code === courseCode).grade = grade;
  },

  getReportCard(student) {
    for (let course of student.courses) {
      if (course.hasOwnProperty('grade')) {
        console.log(`${course.name}: ${course.grade}`);
      } else {
        console.log(`${course.name}: In Progress`);
      }
    }
  },

  courseReport(courseName) {
    let grades = [];
    console.log(`=course=`);
    for (let student of this.students) {
      student.courses.forEach(course => {
        if (course.name === courseName) {
          console.log(`${student.name}: ${course.grade}`);
          grades.push(course.grade);
        }
      });
    }
    console.log('---');
    console.log(`Course Average: ${grades.reduce((acc, curr) => acc + curr) / grades.length}`);
  },
};


let foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

let bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

let qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
  ],
};

school.students.push(foo);
school.students.push(bar);
school.students.push(qux);


school.getReportCard(foo);

// = Math: 95
// = Advanced Math: 90
// = Physics: In progress

school.courseReport('Math');
// = =Math Grades=
// = foo: 95
// = bar: 91
// = qux: 93
// = ---
// = Course Average: 93

school.courseReport('Advanced Math');
// = =Advanced Math Grades=
// = foo: 90
// = qux: 90
// = ---
// = Course Average: 90

school.courseReport('Physics');
// // = undefined