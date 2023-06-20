// Write your code here
import './index.css'
import {Component} from 'react'
import {AiFillClockCircle} from 'react-icons/ai'
import ProjectItems from '../ProjectTimelineCard'

class CourseCard extends Component {
  render() {
    const {item} = this.props
    const {tagsList} = item
    console.log(item)
    const course = item.categoryId === 'COURSE'
    return (
      // { ===false  (&& )}
      <>
        {!course && <ProjectItems item={item} />}
        {course && (
          <div className="courseCard">
            <div className="headcal">
              <h1 className="heading">{item.courseTitle}</h1>
              <p className="days">
                <AiFillClockCircle className="clock" /> {item.duration}
              </p>
            </div>
            <p className="discription">{item.description}</p>
            <div className="buttons">
              {tagsList.map(each => (
                <p type="button" className="but" key={each.id}>
                  {each.name}
                </p>
              ))}
            </div>
          </div>
        )}
      </>
    )
  }
}
export default CourseCard
