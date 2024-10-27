import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AppRouter from './router.tsx'
import { FontSizeProvider } from './context/fontContext.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FontSizeProvider>
        <AppRouter />
      </FontSizeProvider>
    </BrowserRouter>
  </StrictMode>,
)
