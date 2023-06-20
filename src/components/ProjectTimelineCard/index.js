// Write your code here
import './index.css'
import {Component} from 'react'
import {AiFillCalendar} from 'react-icons/ai'

class ProjectItems extends Component {
  render() {
    const {item} = this.props
    console.log(item)
    return (
      <>
        <div className="projectItem">
          <img src={item.imageUrl} alt="project" className="projectImage" />
          <div className="headcal">
            <h1 className="heading">{item.projectTitle}</h1>
            <p className="days">
              <AiFillCalendar className="clock" /> {item.duration}
            </p>
          </div>
          <p className="discription">{item.description}</p>
          <a className="anchor" href={item.projectUrl}>
            Visit
          </a>
        </div>
      </>
    )
  }
}
export default ProjectItems
