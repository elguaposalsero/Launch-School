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
  }
}


let foo = createStudent('Foo', '1st');
foo.info();
"Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
"Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
"Math: Fun course; Remember to study for algebra"
"Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
"Math: Fun course"
"Advanced Math: Difficult subject"