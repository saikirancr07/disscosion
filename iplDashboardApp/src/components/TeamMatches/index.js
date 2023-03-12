// Write your code here

import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class TeamMatches extends Component {
  state = {isSpinner: true, teamMatchesList: {}}

  componentDidMount() {
    this.getTheList()
  }

  getTheList = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      recentMatches: data.recent_matches,
      latestMatchDetails: data.latest_match_details,
    }
    console.log(updatedData)
    this.setState({teamMatchesList: updatedData, isSpinner: false})
  }

  getTheLoaderSpinner = () => (
    <div className="loader" testid="loader">
      <Loader type="TailSpin" color="##ffffff" width={50} height={50} />
    </div>
  )

  getTheTeamMatches = () => {
    const {teamMatchesList} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = teamMatchesList

    return (
      <>
        <ul>
          <li>
            <img
              src={teamBannerUrl}
              alt="team banner"
              className="team-banner"
            />
          </li>
          <li>
            <p className="latest-matches">Latest Matches</p>
          </li>
        </ul>
        <LatestMatch key={latestMatchDetails.id} details={latestMatchDetails} />

        <ul>
          {recentMatches.map(eachItem => (
            <MatchCard key={eachItem.id} details={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isSpinner} = this.state
    return (
      <div className="team-matches-container">
        {isSpinner ? this.getTheLoaderSpinner() : this.getTheTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
