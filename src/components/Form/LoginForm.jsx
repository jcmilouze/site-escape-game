import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { useAuth } from '../../context/AuthContext'

    export default function LoginForm() {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')
      const [error, setError] = useState('')
      const { login } = useAuth()
      const navigate = useNavigate()

      const handleSubmit = (e) => {
        e.preventDefault()
        if (login(username, password)) {
          navigate('/')
        } else {
          setError('Identifiant ou mot de passe incorrect')
        }
      }

      return (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Identifiant</label>
            <input
              type="text"
              id="username"
              placeholder="Entrez votre identifiant"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              placeholder="Entrez votre mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          {error && <p className="error">{error}</p>}
          <button type="submit">Se connecter</button>
        </form>
      )
    }
