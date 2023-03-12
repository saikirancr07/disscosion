// Write your code here
import './index.css'

const SimilarProductItem = props => {
  const {details} = props
  const updatedData = details.map(eachItem => ({
    id: eachItem.id,
    imageUrl: eachItem.image_url,
    title: eachItem.title,
    style: eachItem.style,
    price: eachItem.price,
    description: eachItem.description,
    brand: eachItem.brand,
    totalReviews: eachItem.total_reviews,
    rating: eachItem.rating,
    availability: eachItem.availability,
  }))
  console.log(updatedData)
  return (
    <div className="similar-container">
      <h1>Similar Products</h1>
      <ul className="similar-list-container">
        {updatedData.map(product => (
          <li className="similar-item" key={product.id}>
            <img
              src={product.imageUrl}
              alt={`similar product ${product.title}`}
              className="similar-image"
            />
            <h1>{product.title}</h1>
            <p>by {product.brand}</p>
            <div className="similar-review-rating-container">
              <p>Rs {product.price}/-</p>
              <button type="button" className="similar-button">
                {product.rating} <img src="" alt="star" className="stars" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default SimilarProductItem
