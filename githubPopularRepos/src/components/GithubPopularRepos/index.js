import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LanguageFilterItem from '../LanguageFilterItem'
import RepositoryItem from '../RepositoryItem'
import './index.css'

const languageFiltersData = [
  {id: 'ALL', language: 'All'},
  {id: 'JAVASCRIPT', language: 'Javascript'},
  {id: 'RUBY', language: 'Ruby'},
  {id: 'JAVA', language: 'Java'},
  {id: 'CSS', language: 'CSS'},
]

// Write your code here

class GithubPopularRepos extends Component {
  state = {
    languageFilter: languageFiltersData[0].id,
    isLoading: true,
    productsList: [],
    status: true,
  }

  componentDidMount() {
    this.getTheProducts()
  }

  getTheProducts = async () => {
    this.setState({isLoading: true})
    const {languageFilter} = this.state
    const githubReposApiUrl = `https://apis.ccbp.in/popular-repos?language=${languageFilter}`

    const response = await fetch(githubReposApiUrl)

    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.popular_repos.map(eachItem => ({
        id: eachItem.id,
        name: eachItem.name,
        starsCount: eachItem.stars_count,
        forksCount: eachItem.forks_count,
        issuesCount: eachItem.issues_count,
        avatarUrl: eachItem.avatar_url,
      }))
      this.setState({productsList: updatedData, isLoading: false})
    } else {
      this.setState({status: false, isLoading: false})
    }
  }

  changeTheActiveId = id => {
    this.setState({languageFilter: id}, this.getTheProducts)
  }

  getTheLanguageFilterItem = () => {
    const {languageFilter} = this.state
    return (
      <ul className="list-container">
        {languageFiltersData.map(eachItem => (
          <LanguageFilterItem
            details={eachItem}
            key={eachItem.id}
            isActive={languageFilter === eachItem.id}
            changeTheActiveId={this.changeTheActiveId}
          />
        ))}
      </ul>
    )
  }

  getTheProductsFromTheList = () => {
    const {productsList, status} = this.state

    return (
      <>
        {!status && (
          <>
            <img
              src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
              alt="failure view"
              className="image"
            />
            <p>Something went Wrong</p>
          </>
        )}
        {status && (
          <ul className="unOrder-list">
            {productsList.map(item => (
              <RepositoryItem cardDetails={item} key={item.id} />
            ))}
          </ul>
        )}
      </>
    )
  }

  getLoading = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0284c7" height={80} width={80} />
    </div>
  )

  render() {
    const {isLoading, status} = this.state
    console.log(status)
    return (
      <div className="bg-container">
        <h1 className="heading">Popular</h1>
        {this.getTheLanguageFilterItem()}
        {isLoading ? this.getLoading() : this.getTheProductsFromTheList()}
      </div>
    )
  }
}

export default GithubPopularRepos
