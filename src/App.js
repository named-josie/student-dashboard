import React from 'react'
import './data/App.css'
import STUDENTS from './data/data.json'
import StudentSection from './Components/StudentSection'
import CorhortSection from "./Components/CohortSection"

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      studentData: [...STUDENTS],
      cohortListing: 'All Students',
      showMore: false,
    }
  }

  selectedCohort = (semester) => {
    let selectedCohortList = STUDENTS.filter(
      (students) =>
        students.cohort.cohortCode.replace(/\B(?=(\d{4})+(?!\d))/g, ' ') ===
        semester
    )

    this.setState({ studentData: [...selectedCohortList] })
    this.setState({ cohortListing: semester })

    if (semester === null) {
      this.setState({ cohortListing: 'All Students', studentData: [...STUDENTS] })
    }
  }



  render() {
    let { studentData, cohortListing, showMore } = this.state

    return (
      <section>
        <h1 className='header'>Student Dashboard</h1>
        <div className='student-dashboard'>
          <CorhortSection students={STUDENTS} selectedCohort={this.selectedCohort} />
          <StudentSection
            students={studentData}
            cohortListing={cohortListing}
            showMore={showMore}
            clickShowMore={this.clickShowMore}
          />
        </div>
      </section>
    )
  }
}

export default App;