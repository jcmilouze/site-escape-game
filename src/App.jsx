import React from 'react'
    import { Routes, Route, Navigate } from 'react-router-dom'
    import Home from './pages/Home'
    import CV from './pages/CV'
    import Portfolio from './pages/Portfolio'
    import EmergencyPlan from './pages/EmergencyPlan'
    import Blog from './pages/Blog'
    import Legal from './pages/Legal'
    import { useAuth } from './context/AuthContext'
    import Navbar from './components/Navbar'
    import Footer from './components/Footer'

    function App() {
      const { isAuthenticated } = useAuth()

      return (
        <div className="app">
          {isAuthenticated && <Navbar />}
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              {isAuthenticated ? (
                <>
                  <Route path="/cv" element={<CV />} />
                  <Route path="/portfolio" element={<Portfolio />} />
                  <Route path="/plan-urgence" element={<EmergencyPlan />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="/mentions-legales" element={<Legal />} />
                </>
              ) : (
                <Route path="*" element={<Navigate to="/" />} />
              )}
            </Routes>
          </main>
          {isAuthenticated && <Footer />}
        </div>
      )
    }

    export default App
