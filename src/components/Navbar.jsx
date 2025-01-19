import React from 'react'
    import { Link } from 'react-router-dom'

    export default function Navbar() {
      return (
        <nav style={{
          background: '#2c3e50',
          padding: '1rem',
          color: 'white'
        }}>
          <ul style={{
            listStyle: 'none',
            display: 'flex',
            gap: '1rem',
            margin: 0,
            padding: 0
          }}>
            <li><Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Accueil</Link></li>
            <li><Link to="/cv" style={{ color: 'white', textDecoration: 'none' }}>CV</Link></li>
            <li><Link to="/portfolio" style={{ color: 'white', textDecoration: 'none' }}>Portfolio</Link></li>
            <li><Link to="/plan-urgence" style={{ color: 'white', textDecoration: 'none' }}>Plan d'Urgence</Link></li>
            <li><Link to="/blog" style={{ color: 'white', textDecoration: 'none' }}>Blog</Link></li>
          </ul>
        </nav>
      )
    }
