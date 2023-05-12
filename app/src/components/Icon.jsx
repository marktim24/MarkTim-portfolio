import cn from 'classnames'
import React from 'react'

const icons = {
	'arrow-bottom':
		'M10.5323 0L9.80426 14.9323L17.1717 9.32949L18.1818 11.4071L9.09091 20L0 11.4071L1.01008 9.32949L8.37755 14.9323L7.64954 0H10.5323Z',
}

const Icon = props => {
	const size = props.size ? props.size : 16

	return (
		<svg
			className={cn(props.className)}
			width={size}
			height={size}
			viewBox='0 0 16 16'
		>
			<path d={icons[props.name]}></path>
		</svg>
	)
}

export default Icon
