import { BrowserRouter, Route, Routes } from 'react-router'
import { HomePage } from './pages/home-page/HomePage'
import { AppLayout } from './shared/layout/AppLayout'

function App() {
  return (
    <BrowserRouter>
      <AppLayout>
        <Routes>
          <Route path='/' element={<HomePage />} />
        </Routes>
      </AppLayout>
    </BrowserRouter>
  )
}

export default App
