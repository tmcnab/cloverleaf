import React, { useState } from 'react'

const createItem = (value, completed = false) => {
	return ({
		completed,
		key: crypto.randomUUID(),
		value,
	})
}

export default function Application() {
	const [items, setItems] = useState([
		createItem('Cool'),
		createItem('Story'),
		createItem('Bro', true)
	])

	const onClick = (event) => {
		const key = event.target.value
		const idx = items.findIndex(item => item.key === key)
		
		// Since we control the data it'll always return a zero+ number but just to be safe...
		if (idx >= 0) {
			const nextItem = {  ...items[idx], completed: true }
			const nextItems = [...items]
			nextItems.splice(idx, 1, nextItem)
			setItems(nextItems)
		}
	}

	const onSubmit = (event) => {
		event.preventDefault()
		
		const value = event.target.elements.value.value
		const item = createItem(value)
		
		setItems([item, ...items])
		event.target.reset()
	}

	return (
		<>
			<h1>Todo App</h1>
			<form onSubmit={onSubmit}>
				<input name='value' required type='text' />
				<button type='submit'>Submit</button>
			</form>
			<ul>
			{items.map(item => 
				<li key={item.key}>
					{item.completed ? <s>{item.value}</s> : item.value}
					<input 
						defaultChecked={item.completed}
						disabled={item.completed}
						onClick={onClick}
						type='checkbox'
						value={item.key}
					/>
				</li>
			)}
			</ul>
		</>
	)
}