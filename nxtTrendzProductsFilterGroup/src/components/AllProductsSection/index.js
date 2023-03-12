import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import FiltersGroup from '../FiltersGroup'
import ProductCard from '../ProductCard'
import ProductsHeader from '../ProductsHeader'

import './index.css'

const categoryOptions = [
  {
    name: 'Clothing',
    categoryId: '1',
  },
  {
    name: 'Electronics',
    categoryId: '2',
  },
  {
    name: 'Appliances',
    categoryId: '3',
  },
  {
    name: 'Grocery',
    categoryId: '4',
  },
  {
    name: 'Toys',
    categoryId: '5',
  },
]

const sortbyOptions = [
  {
    optionId: 'PRICE_HIGH',
    displayText: 'Price (High-Low)',
  },
  {
    optionId: 'PRICE_LOW',
    displayText: 'Price (Low-High)',
  },
]

const ratingsList = [
  {
    ratingId: '4',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-four-stars-img.png',
  },
  {
    ratingId: '3',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-three-stars-img.png',
  },
  {
    ratingId: '2',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-two-stars-img.png',
  },
  {
    ratingId: '1',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/rating-one-star-img.png',
  },
]
console.log(sortbyOptions[0].optionId)
const initial = {
  productsList: [],
  activeOptionId: sortbyOptions[0].optionId,
  activeCategoryId: '',
  activeRatingId: '',
  searchInput: '',
  activeValue: '',
}

class AllProductsSection extends Component {
  state = initial

  componentDidMount() {
    this.getProducts()
  }

  getProducts = async () => {
    this.setState({
      activeValue: 'INPROGRESS',
    })
    const jwtToken = Cookies.get('jwt_token')

    // TODO: Update the code to get products with filters applied

    const {
      activeOptionId,
      activeCategoryId,
      activeRatingId,
      searchInput,
    } = this.state
    const apiUrl = `https://apis.ccbp.in/products?sort_by=${activeOptionId}&category=${activeCategoryId}&title_search=${searchInput}&rating=${activeRatingId}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()
      const updatedData = fetchedData.products.map(product => ({
        title: product.title,
        brand: product.brand,
        price: product.price,
        id: product.id,
        imageUrl: product.image_url,
        rating: product.rating,
      }))
      this.setState({
        productsList: updatedData,
        activeValue: 'SUCCESS',
      })
    } else if (response.status === 401) {
      this.setState({activeValue: 'FAILURE'})
    }
  }

  changeCategoryId = id => {
    this.setState({activeCategoryId: id}, this.getProducts)
  }

  changeRatingId = id => {
    this.setState({activeRatingId: id}, this.getProducts)
  }

  changeSearchInput = value => {
    this.setState({searchInput: value}, this.getProducts)
  }

  clearTheValues = () => {
    this.setState(initial, this.getProducts)
  }

  changeSortby = activeOptionId => {
    this.setState({activeOptionId}, this.getProducts)
  }

  renderProductsList = () => {
    const {productsList, activeOptionId} = this.state
    const length = productsList.length > 1

    // TODO: Add No Products View
    return (
      <>
        {length && (
          <div className="all-products-container">
            <ProductsHeader
              activeOptionId={activeOptionId}
              sortbyOptions={sortbyOptions}
              changeSortby={this.changeSortby}
            />
            <ul className="products-list">
              {productsList.map(product => (
                <ProductCard productData={product} key={product.id} />
              ))}
            </ul>
          </div>
        )}
        {!length && (
          <div className="no-products">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
              alt="no products"
              className="no-products-image"
            />
            <h1>No Products Found</h1>
            <p>We couldn`t find any products. try another filters</p>
          </div>
        )}
      </>
    )
  }

  getFailureStatus = () => (
    <div className="failure-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-products-error-view.png"
        alt="products failure"
        className="failure-image"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble processing your request. Please try again.
      </p>
    </div>
  )

  renderLoader = () => (
    <div className="products-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  renderAllProductsList = () => {
    const {activeValue} = this.state

    switch (activeValue) {
      case 'INPROGRESS':
        return this.renderLoader()
      case 'SUCCESS':
        return this.renderProductsList()
      case 'FAILURE':
        return this.getFailureStatus()
      default:
        return null
    }
  }

  // TODO: Add failure view

  render() {
    return (
      <div className="all-products-section">
        {/* TODO: Update the below element */}
        <FiltersGroup
          categoryOptions={categoryOptions}
          ratingsList={ratingsList}
          changeCategoryId={this.changeCategoryId}
          changeRatingId={this.changeRatingId}
          changeSearchInput={this.changeSearchInput}
          clearTheValues={this.clearTheValues}
        />

        {this.renderAllProductsList()}
      </div>
    )
  }
}

export default AllProductsSection
