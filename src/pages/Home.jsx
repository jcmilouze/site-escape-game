import React from 'react'
    import LoginLayout from '../components/Layout/LoginLayout'
    import LoginForm from '../components/Form/LoginForm'
    import TodoCard from '../components/Card/TodoCard'
    import { useAuth } from '../context/AuthContext'

    export default function Home() {
      const { isAuthenticated } = useAuth()

      if (!isAuthenticated) {
        return (
          <LoginLayout>
            <h1>Connexion</h1>
            <LoginForm />
          </LoginLayout>
        )
      }

      const today = new Date()
      const formattedDate = today.toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
      const formattedTime = today.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })

      const todoItems = [
        {
          title: '1. Enseignement',
          items: [
            'Créer un exercice pratique sur les réactions chimiques pour les élèves de seconde.',
            'Corriger les copies du dernier contrôle sur la cinétique chimique.',
            'Mettre à jour le cahier de textes numérique avec les objectifs pédagogiques de la semaine.'
          ]
        },
        {
          title: '2. Projets pédagogiques',
          items: [
            'Préparer une sortie scolaire au laboratoire de la foudre.',
            'Rdv Mr Cornet – 10h'
          ]
        },
        {
          title: '3. Gestion administrative',
          items: [
            'Demander Annie mon code Parcoursup (prévoir des arguments !!)',
            'Rédiger un rapport pour le conseil de classe.',
            'Répondre au message Pronote.'
          ]
        },
        {
          title: '4. Développement professionnel',
          items: [
            'Lire un article scientifique récent sur l’enseignement des sciences dans les lycées professionnels.',
            'Rechercher des formations en ligne ou des webinaires pour approfondir ses connaissances en pédagogie active et numérique.'
          ]
        },
        {
          title: '5. Vie personnelle et bien-être',
          items: [
            'Planifier une randonnée en famille pour le week-end prochain dans la région.',
            'Essayer une nouvelle recette de pâtisserie pour se détendre après la journée.'
          ]
        }
      ]

      return (
        <div className="home">
          <h1>Bienvenue Anne !</h1>
          <p>Nous sommes ravis de vous retrouver.</p>
          <p>Nous sommes le {formattedDate} et il est {formattedTime}.</p>

          <div className="todo-list">
            <h2>To-Do List</h2>
            {todoItems.map((item, index) => (
              <TodoCard key={index} title={item.title} items={item.items} />
            ))}
          </div>
        </div>
      )
    }
