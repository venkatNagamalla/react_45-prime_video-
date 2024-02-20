// Write your code here
import MoviesSlider from '../MoviesSlider'
import './index.css'

const PrimeVideo = props => {
  const {moviesList} = props

  const actionMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'ACTION',
  )

  const comedyMoviesList = moviesList.filter(
    eachMovie => eachMovie.categoryId === 'COMEDY',
  )

  return (
    <div className="prime-video-container">
      <img
        className="prime-video-img"
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png"
        alt="prime video"
      />
      <div className="videos-container">
        <h1 className="category-heading">Action Movies</h1>
        <MoviesSlider movies={actionMoviesList} />
      </div>
      <div className="videos-container">
        <h1 className="category-heading">Comedy Movies</h1>
        <MoviesSlider movies={comedyMoviesList} />
      </div>
    </div>
  )
}

export default PrimeVideo
