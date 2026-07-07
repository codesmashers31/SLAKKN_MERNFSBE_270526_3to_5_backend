import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ThemeProvider from './provider/ThemeProvider.jsx'
import InputProvider from './provider/InputProvider.jsx'

createRoot(document.getElementById('root')).render(
  <ThemeProvider>
     <InputProvider>
     <App/>
     </InputProvider>
     
  </ThemeProvider>
   

)
