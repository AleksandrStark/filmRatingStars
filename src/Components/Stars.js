import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Star from './Star'

function Stars({ count }) {

  useEffect(() => {
    document.title = `${count}* Film Ratings React Component`
  })

  const isValid = count >= 1 && count <= 5

  return (
    <>
      <p className="sr-only">{count + ' Star Rating'}</p>
      <ul className="card-body-stars u-clearfix">
        {isValid && Array.from({ length: count }, (_, i) => <Star key={i} />)}
      </ul>
    </>
  )
}

// Set default value:
Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
  count: PropTypes.number,
}

export default Stars