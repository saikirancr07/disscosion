// Write your code here
import './index.css'

const LatestMatch = props => {
  const {details} = props
  const updatedData = {
    competingTeam: details.competing_team,
    competingTeamLogo: details.competing_team_logo,
    date: details.date,
    firstInnings: details.first_innings,
    id: details.id,
    manOfTheMatch: details.man_of_the_match,
    matchStatus: details.match_status,
    result: details.result,
    secondInnings: details.second_innings,
    umpires: details.umpires,
    venue: details.venue,
  }
  return (
    <div className="latest-match-card">
      <div className="left">
        <p>{updatedData.competingTeam}</p>
        <p>{updatedData.date}</p>
        <p>{updatedData.venue}</p>
        <p>{updatedData.result}</p>
      </div>
      <img
        src={updatedData.competingTeamLogo}
        alt={`latest match ${updatedData.competingTeam}`}
        className="logo"
      />
      <div className="right">
        <p>First Innings</p>
        <p>{updatedData.firstInnings}</p>
        <p>Second Innings</p>
        <p>{updatedData.secondInnings}</p>
        <p>Man Of The Match</p>
        <p>{updatedData.manOfTheMatch}</p>
        <p>umpires</p>
        <p>{updatedData.umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
