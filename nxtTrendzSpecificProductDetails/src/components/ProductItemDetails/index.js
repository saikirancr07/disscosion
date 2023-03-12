// Write your code here
import {Component} from 'react'
import {BsPlusSquare} from 'react-icons/bs'
import {BsDashSquare} from 'react-icons/bs'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import SimilarProductItem from '../SimilarProductItem'
import Header from '../Header'
import './index.css'

class ProductItemDetails extends Component {
  state = {status: 'INPROGRESS', data: [], count: 1}

  componentDidMount() {
    this.getTheProductsListById()
  }

  getTheProductsListById = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    this.setState({status: 'INPROGRESS'})
    const url = `https://apis.ccbp.in/products/${id}`
    const jwtToken = Cookies.get('jwt_token')
    console.log(jwtToken)
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const eachItem = await response.json()
      const updatedData = {
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        title: eachItem.title,
        price: eachItem.price,
        description: eachItem.description,
        brand: eachItem.brand,
        totalReviews: eachItem.total_reviews,
        rating: eachItem.rating,
        availability: eachItem.availability,
        similarProducts: eachItem.similar_products,
      }
      this.setState({data: updatedData, status: 'SUCCESS'})
    } else {
      this.setState({status: 'FAILURE'})
    }
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height={80} width={80} />
    </div>
  )

  clickTheContinueButton = () => {
    const {history} = this.props
    history.replace('/products')
  }

  renderFailureView = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-error-view-img.png"
        alt="failure view"
        className="failure-image"
      />
      <h1>Product Not Found</h1>
      <button
        type="button"
        className="shopping-button"
        onClick={this.clickTheContinueButton}
      >
        Continue Shopping
      </button>
    </div>
  )

  increaseTheCount = () => {
    console.log('count')
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  decreaseTheCount = () => {
    const {count} = this.state
    if (count > 1) {
      this.setState(prevState => ({count: prevState.count - 1}))
    }
  }

  renderSuccessView = () => {
    const {data, count} = this.state
    const {
      imageUrl,
      title,
      price,
      description,
      brand,
      availability,
      totalReviews,
      rating,
    } = data
    return (
      <div className="full-view">
        <div className="success-view">
          <img src={imageUrl} className="product-image" alt="product" />
          <div className="content">
            <h1>{title}</h1>
            <p>Rs {price}/-</p>
            <div className="review-rating">
              <button type="button" className="review-button">
                <p>{rating}</p>
                <img
                  src="https://assets.ccbp.in/frontend/react-js/star-img.png"
                  alt="star"
                  className="stars"
                />
              </button>
              <p>{totalReviews}</p>
            </div>
            <p>{description}</p>
            <p>Available: {availability}</p>
            <p>Brand: {brand}</p>
            <hr />
            <div className="icons-container">
              <button
                type="button"
                className="icon-button"
                onClick={this.decreaseTheCount}
                data-testid="minus"
              >
                <BsDashSquare />
              </button>
              <p>{count}</p>
              <button
                type="button"
                className="icon-button"
                data-testid="plus"
                onClick={this.increaseTheCount}
              >
                <BsPlusSquare />
              </button>
            </div>
            <button type="button" className="cart-button">
              Add To Cart
            </button>
          </div>
        </div>
        <SimilarProductItem details={data.similarProducts} />
      </div>
    )
  }

  getTheProductsFromId = () => {
    const {status} = this.state
    switch (status) {
      case 'INPROGRESS':
        return this.renderLoader()
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
      <div className="product-bg-container">
        <Header />
        {this.getTheProductsFromId()}
      </div>
    )
  }
}

export default ProductItemDetails
