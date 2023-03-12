// Write your code here
import './index.css'

const MatchCard = props => {
  const {details} = props
  const filterDetails = {
    umpires: details.umpires,
    result: details.result,
    manOfTheMatch: details.man_of_the_match,
    date: details.date,
    id: details.id,
  }

  return (
    <>
      <li>
        <p>{filterDetails.result}</p>
      </li>
      <li>
        <p>sai</p>
      </li>
    </>
  )
}

export default MatchCard
