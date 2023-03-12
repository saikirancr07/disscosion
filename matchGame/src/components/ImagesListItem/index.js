import './index.css'

const ImagesListItem = props => {
  const {imageDetails, findTheImageMatched} = props
  const {imageUrl, thumbnailUrl} = imageDetails

  const giveTheImageUrl = () => {
    findTheImageMatched(imageUrl)
  }

  return (
    <li className="items">
      <img
        src={thumbnailUrl}
        alt=""
        className="bottom-image"
        onClick={giveTheImageUrl}
      />
    </li>
  )
}

export default ImagesListItem
