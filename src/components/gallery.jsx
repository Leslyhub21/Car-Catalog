import React from 'react'

const divPadre = {
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gridTemplateRows: 'repeat(5, 1fr)',
  gap: '8px'
}

const divEstilo  = {
  gridRow: 'span 2 / span 2'
}

const gallery = () => {
  return (
    <div style={divPadre}>
      <div style={divEstilo}>1</div>
      <div style={divEstilo}>2</div>
      <div style={divEstilo}>3</div>
      <div style={divEstilo}>4</div>
      <div style={divEstilo}>5</div>
      <div style={divEstilo}>6</div>
      <div style={divEstilo}>7</div>
      <div style={divEstilo}>8</div>
    </div>
  )
}

export default gallery