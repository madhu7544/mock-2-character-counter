import './index.css'

const UserInput = props => {
  const {userInputDetails} = props
  const {userEnteredText, textLength} = userInputDetails
  return (
    <ul className="count-container">
      <li className="count">
        <p>
          {userEnteredText} : {textLength}
        </p>
      </li>
    </ul>
  )
}

export default UserInput
