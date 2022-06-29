import React from 'react'
import "./Form.css"
class Form extends React.Component {
  constructor() {
    super()
    this.state = {
      commenterName: '',
      comment: '',
      comments: [],
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    console.log(event)
    let { comments, commenterName, comment } = this.state
    let newComment = `${commenterName} says, "${comment}"`
    this.setState({ comments: [...comments, newComment] })
    event.target.reset()
  }

  name = (event) => {
    const { value } = event.target
    this.setState({ commenterName: value })
  }
  commenting = (event) => {
    const { value } = event.target
    this.setState({ comment: value })
  }

  render() {
    let { commentName, comment, comments } = this.state
    const { student } = this.props

    return (
      <div className='notes'>
        <h3 className='note-title'>Leave A Note</h3>
        <form onSubmit={this.handleSubmit}>
          <label  >  Name:  </label>
          <input
            className='name'
            id='text'
            name='value'
            type='text'
            value={commentName}
            onChange={this.name}
          />
          <br></br>
          <label> Message: </label>
          <input
            id='text'
            className='message'
            name='value'
            type='text'
            value={comment}
            onChange={this.commenting}
          />
          <br />
          <br />
          <button className='note-button' type='submit'>Add Note</button>
        </form>
        <div>
          <ul>
            {student.notes.length ? (
              <li>
                {student.notes[0].commenter} : {student.notes[0].comment}
              </li>
            ) : null}
            {comments.map((comment,ind) => (
              <li key={ind}>{comment}</li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default Form
