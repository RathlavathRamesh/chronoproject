// Write your code here
import './index.css'
import {Component} from 'react'
import {Chrono} from 'react-chrono'
import CourseCard from '../CourseTimelineCard'

class TimelineView extends Component {
  render() {
    const {timelineItemsList} = this.props
    const projectList = timelineItemsList.filter(
      each => each.categoryId === 'PROJECT',
    )
    return (
      <div className="ccbpJourney">
        <h1 className="heading">
          MY JOURNEY OF
          <br />
          <span>CCBP 4.0</span>
        </h1>
        <div className="chronoCard">
          <Chrono mode="VERTICAL_ALTERNATING" items={projectList}>
            {timelineItemsList.map(each => (
              <CourseCard item={each} key={each.id} />
            ))}
          </Chrono>
        </div>
      </div>
    )
  }
}
export default TimelineView
