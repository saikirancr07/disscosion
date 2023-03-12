// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsCardList: []}

  componentDidMount() {
    this.getTheTeamsList()
  }

  getTheSinner = () => (
    <div className="loader" testid="loader">
      <Loader type="TailSpin" color="##ffffff" width={50} height={50} />
    </div>
  )

  getTheTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const updatedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    console.log(updatedData)

    this.setState({teamsCardList: updatedData, isLoading: false})
  }

  getTheTeamCardsList = () => {
    const {teamsCardList} = this.state
    return (
      <>
        <div className="dashboard-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="dashboard-icon"
          />
          <h1 className="dashboard-heading">IPL Dashboard</h1>
        </div>
        <ul className="list-container">
          {teamsCardList.map(eachItem => (
            <TeamCard key={eachItem.id} details={eachItem} />
          ))}
        </ul>
      </>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="home-container">
        {isLoading ? this.getTheSinner() : this.getTheTeamCardsList()}
      </div>
    )
  }
}

export default Home
