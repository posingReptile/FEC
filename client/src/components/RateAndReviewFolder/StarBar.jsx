import React from 'react'

const StarBar = ({ starRating, height }) => {
  const parentDiv = {
    height: height,
    width: '20%',
    backgroundColor: 'lightgray',
    // borderRadius: 40,
    // margin: 50
  }

  const childDiv ={
    height: '100%',
    width: `${starRating}%`,
    backgroundColor: 'green',
    // borderRadius: 40,
    textAlign: 'right'
  }

  return (
    <div style={parentDiv}>
      <div style={childDiv}>
        {/* <span>{`${starRating}`}</span> */}
      </div>
    </div>
  )
}

export default StarBar;