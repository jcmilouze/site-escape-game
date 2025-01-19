import React, { useState } from 'react'
    import { useNavigate } from 'react-router-dom'
    import { useAuth } from '../context/AuthContext'

    export default function Login() {
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
        <div className="login">
          <h1>Connexion</h1>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Identifiant"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="error">{error}</p>}
            <button type="submit">Se connecter</button>
          </form>
        </div>
      )
    }
