/* eslint-disable jsx-a11y/control-has-associated-label */
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player'
import {IoMdClose} from 'react-icons/io'

import './index.css'

const MovieItem = props => {
  const {eachMovie} = props
  const {thumbnailUrl, videoUrl} = eachMovie

  return (
    <div>
      <Popup
        modal
        trigger={
          <img src={thumbnailUrl} className="thumbnail" alt="thumbnail" />
        }
        className="popup-content"
      >
        {close => (
          <div className="modal-container">
            <button
              onClick={() => close()}
              data-testid="closeButton"
              className="close-btn"
              type="button"
            >
              <IoMdClose size={20} />
            </button>
            <div className="player-container">
              <ReactPlayer url={videoUrl} controls />
            </div>
          </div>
        )}
      </Popup>
    </div>
  )
}

export default MovieItem
