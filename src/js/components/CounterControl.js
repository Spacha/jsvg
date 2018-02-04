import React from 'react'

const CounterControl = ({ counter, increment, decrement }) => (
	<div style={{ border: '1px solid #000' }}>
		<button onClick={e => increment(e) }>+</button>
		<button onClick={e => decrement(e) }>-</button>
	</div>
)

export default CounterControl
