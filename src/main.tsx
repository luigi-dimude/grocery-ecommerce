import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// import 'normalize.css';
import './styles/main.css'
import ThemeProvider from './styles/Theme';
import { Provider } from 'react-redux'
import store from './context/store'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
