// let students = [
//   {
//     name: "Ivan",
//     notes: [5, 6, 4],
//   },
//   {
//     name: "Dimitar",
//     notes: [4, 4, 3],
//   },
// ];

function topNote(students) {
  const studentsAndNotes = students.map((student) => {
    return { name: student.name, topNote: Math.max(...student.notes) };
  });

  const t = topNoteStudent(studentsAndNotes);
  return t;
}

function topNoteStudent(studentsAndNotes) {
  const returnName = studentsAndNotes.map((s) => {
    return s.name;
  });

  return returnName;
}

const p = topNote([
  {
    name: "Ivan",
    notes: [5, 6, 4],
  },
  {
    name: "Dimitar",
    notes: [4, 4, 3],
  },
]);

p.map((e) => console.log(e));

//     let maxNote;
//   const notes = students.map((obj) => {
//     return obj.notes;
//   });
//   notes.map((note) => {
//     maxNote = Math.max(...note);
//     console.log(maxNote);
//   });
//   students.map((student) => {
//     console.log(`name: ${student.name}, topNote: ${maxNote}`);
//   });
