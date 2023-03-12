// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByAge from '../VaccinationByAge'
import VaccinationByGender from '../VaccinationByGender'

import './index.css'

class CowinDashBoard extends Component {
  state = {status: '', products: {}}

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({status: 'INPROGRESS'})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = {
        last7DaysVaccination: data.last_7_days_vaccination,
        vaccinationByAge: data.vaccination_by_age,
        vaccinationByGender: data.vaccination_by_gender,
      }
      this.setState({status: 'SUCCESS', products: updatedData})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  renderLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  renderSuccessView = () => {
    const {products} = this.state
    const {
      last7DaysVaccination,
      vaccinationByAge,
      vaccinationByGender,
    } = products
    const data = last7DaysVaccination.map(eachItem => ({
      vaccineDate: eachItem.vaccine_date,
      dose1: eachItem.dose_1,
      dose2: eachItem.dose_2,
    }))
    return (
      <>
        <VaccinationCoverage data={data} />
        <VaccinationByGender data={vaccinationByGender} />
        <VaccinationByAge data={vaccinationByAge} />
      </>
    )
  }

  renderFailureView = () => (
    <>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-image"
      />
      <h1 className="heading">Something went wrong</h1>
    </>
  )

  getTheResult = () => {
    const {status} = this.state
    switch (status) {
      case 'INPROGRESS':
        return this.renderLoading()
      case 'SUCCESS':
        return this.renderSuccessView()
      case 'FAILURE':
        return this.renderFailureView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="bg-container">
        <div className="logo-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
            alt="website logo"
            className="website-logo"
          />
          <h1 className="cowin">Co-Win</h1>
        </div>
        <h1 className="title">Cowin Vaccination In India</h1>
        <div className="table">{this.getTheResult()}</div>
      </div>
    )
  }
}

export default CowinDashBoard
