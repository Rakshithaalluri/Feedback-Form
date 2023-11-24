// Write your React code here.
import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isFeedbackSelected: false}

  onChangeFeedbackButton = () => this.setState({isFeedbackSelected: true})

  renderFeedbackScreen = () => {
    const {resources} = this.props
    const {emojis} = resources

    return (
      <div className="feedback-question-container">
        <h1 className="heading">
          {' '}
          How satisfied are you with our customer support performance?{' '}
        </h1>
        <ul className="emoji-list">
          {emojis.map(emoji => (
            <li key={emoji.id}>
              <button
                type="button"
                className="emoji-button"
                onClick={this.onChangeFeedbackButton}
              >
                <img src={emoji.imageUrl} alt={emoji.name} className="emoji" />
                <br />
                <span className="emoji-name"> {emoji.name} </span>
              </button>
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderThankyouScreen = () => {
    const {resources} = this.props
    const {loveEmojiUrl} = resources

    return (
      <div className="thank-you-container">
        <img src={loveEmojiUrl} className="love-emoji" alt="love emoji" />
        <h1 className="thank-text">Thank You! </h1>
        <p className="feed">
          We will use your feedback to improve our customer support performance.{' '}
        </p>
      </div>
    )
  }

  render() {
    const {isFeedbackSelected} = this.state

    return (
      <div className="app-container">
        <div className="feedback-card">
          {isFeedbackSelected
            ? this.renderThankyouScreen()
            : this.renderFeedbackScreen()}
        </div>
      </div>
    )
  }
}

export default Feedback
