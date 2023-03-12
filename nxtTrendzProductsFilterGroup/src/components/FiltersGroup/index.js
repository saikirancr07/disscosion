import {AiOutlineSearch} from 'react-icons/ai'
import './index.css'

const FiltersGroup = props => {
  const {
    categoryOptions,
    ratingsList,
    changeCategoryId,
    changeRatingId,
    changeSearchInput,
    clearTheValues,
  } = props

  const getTheRatingId = event => {
    changeRatingId(event.target.value)
  }

  const clickTheFilterButton = () => {
    clearTheValues()
  }

  const getTheCategoryId = event => {
    changeCategoryId(event.target.value)
  }

  const changeTheSearchValue = event => {
    changeSearchInput(event.target.value)
  }

  const renderTheCategoryList = () => (
    <ul className="category-list-container">
      {categoryOptions.map(eachItem => (
        <li
          className="category-item"
          key={eachItem.categoryId}
          value={eachItem.categoryId}
          onClick={getTheCategoryId}
        >
          <p>{eachItem.name}</p>
        </li>
      ))}
    </ul>
  )

  const renderTheRatingList = () => (
    <ul className="rating-list-container">
      {ratingsList.map(rating => (
        <li
          className="rating-item"
          key={rating.ratingId}
          value={rating.ratingId}
          onClick={getTheRatingId}
        >
          <div className="image-container">
            <img
              src={rating.imageUrl}
              className="rating-image"
              alt={rating.ratingId}
            />
            <p>& Up</p>
          </div>
        </li>
      ))}
    </ul>
  )

  return (
    <div className="filters-group-container">
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search"
          onChange={changeTheSearchValue}
        />
        <AiOutlineSearch />
      </div>
      <h1>Category</h1>
      {renderTheCategoryList()}
      <h1>Ratings</h1>
      {renderTheRatingList()}
      <button
        type="button"
        onClick={clickTheFilterButton}
        className="clear-filter"
      >
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
