import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
import Application from './Application'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<Application />
	</StrictMode>
)
