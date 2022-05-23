import StudentInfo from './StudentInfo';

/**
 *
 * @param {students, cohortListing}
 * @returns
 */

function StudentSection({ students, cohortListing }) {
  const student = students.map((student) => (
    <div key={student.id}>
      <StudentInfo student={student} />
    </div>
  ));
  return (
    <section className='student-list'>
      <h2>{cohortListing}</h2>
      <p className='total' >Total Students: {student.length}</p>
      {student}
    </section>
  );
}

export default StudentSection;
