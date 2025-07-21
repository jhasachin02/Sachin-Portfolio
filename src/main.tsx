import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SinglePagePortfolio from './SinglePagePortfolio.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SinglePagePortfolio />
  </StrictMode>,
)
