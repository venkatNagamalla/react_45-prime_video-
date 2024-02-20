// Write your code here

import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css' // mandatory
import 'slick-carousel/slick/slick-theme.css'
import './index.css'

import MovieItem from '../MovieItem'

const MoviesSlider = props => {
  const {movies} = props

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
  }

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {movies.map(eachMovie => (
          <MovieItem key={eachMovie.id} eachMovie={eachMovie} />
        ))}
      </Slider>
    </div>
  )
}

export default MoviesSlider
