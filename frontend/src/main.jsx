import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router.jsx'
import { store } from './redux/store.js'
import { Provider } from 'react-redux'
import 'sweetalert2/src/sweetalert2.scss'
import { FavoriteProvider } from './context/FavoriteContext';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <FavoriteProvider>
      <RouterProvider router={router} />
    </FavoriteProvider>
  </Provider>
)
