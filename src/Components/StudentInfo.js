import React from 'react'
import ShowMore from './ShowMore'
import './StudentInfo.css'
class StudentInfo extends React.Component {
  constructor() {
    super()

    this.state = {
      showMore: false,
    }
  }

  onTrack = (person) => {
    let certified = person.certifications
    let verified = Object.values(certified)
    let codeGrades = person.codewars.current.total

    if (!verified.includes(false) && codeGrades > 600) {
      return true
    }
    return false
  }
  clickShowMore = () => {
    const { showMore } = this.state
    this.setState({ showMore: !showMore })
  }
  
  render() {
    
    const { student } = this.props
    const { names, username, profilePhoto, dob } = student
    const { showMore } = this.state
    const dobFormatted = new Date(dob).toDateString().substring(4);
    return (
      <article className='student-gallery'>
        <img src={profilePhoto} alt={names.preferredName} />
        <p>
          {names.preferredName} {names.middleName.charAt()}. {names.surname}
        </p>
        <p>{username}</p>
        <p style={{ color: "purple" }} >Birthday: {dobFormatted}</p>
        <p className='ontrack'>
          {this.onTrack(student) ? 'On Track to Graduate' : null}
        </p>
        <p
          className={showMore ? 'visited' : 'showmore'}
          onClick={() => this.clickShowMore()}
        >
          {showMore ? 'Show less...' : 'Show more...'}
        </p>
        {showMore ? <ShowMore student={student} /> : null}
      </article>
    )
  }
}

export default StudentInfo