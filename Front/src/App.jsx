import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import AddStore from './components/AddStore'
import IntroPage from './components/IntroPage'
import AuthPage from './components/AuthPage'
import AuthHalykPage from './components/AuthHalykPage'
import VerificationPage from './components/VerificationPage'
import VerificationResendPage from './components/VerificationResendPage'
import ConnectionProgressPage from './components/ConnectionProgressPage'
import SyncPage from './components/SyncPage'
import StorePage from './components/StorePage'
import ProductsPage from './components/ProductsPage'
import Products2Page from './components/Products2Page'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add-store" element={<AddStore />} />
          <Route path="/intro" element={<IntroPage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/auth-halyk" element={<AuthHalykPage />} />
          <Route path="/verification" element={<VerificationPage />} />
          <Route path="/verification-resend" element={<VerificationResendPage />} />
          <Route path="/connection-progress" element={<ConnectionProgressPage />} />
          <Route path="/sync" element={<SyncPage />} />
          <Route path="/store" element={<StorePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/products2" element={<Products2Page />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
