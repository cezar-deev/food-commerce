import { Routes, Route } from 'react-router-dom'

import MainPage from './pages/Main'
import { Burgers } from './pages/Main/Burgers'

export function AppRoutes() {
  return (
    <Routes>
      <Route path='/' element={<MainPage />} />
    </Routes>
  )
}
