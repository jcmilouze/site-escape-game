import React from 'react'

    export default function Portfolio() {
      const projects = [
        {
          title: "Construire un Électroaimant",
          description: "Enseigner aux élèves comment créer un électroaimant simple et explorer les variables qui influencent sa force.",
          image: "https://via.placeholder.com/400x250",
          details: [
            "Objectif : Comprendre les champs magnétiques et expérimenter avec des variables.",
            "Activité : Enrouler un fil autour d'un clou en fer et le connecter à une pile.",
            "Compétences : Expérimentation scientifique, analyse des résultats."
          ]
        },
        {
          title: "Projet Interdisciplinaire : Énergies Renouvelables",
          description: "Intégrer physique-chimie et développement durable en étudiant les principes d’électromagnétisme dans les éoliennes ou les barrages hydroélectriques.",
          image: "https://via.placeholder.com/400x250",
          details: [
            "Objectif : Sensibiliser au développement durable et à la production d'énergie.",
            "Activité : Conception d'une maquette d’éolienne ou d’hydro-générateur.",
            "Compétences : Collaboration interdisciplinaire, créativité."
          ]
        }
      ]

      return (
        <div className="portfolio-container">
          <h1>Portfolio</h1>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <div key={index} className="project-card">
                <img src={project.image} alt={project.title} />
                <div className="project-content">
                  <h2>{project.title}</h2>
                  <p>{project.description}</p>
                  <div className="project-details">
                    <h3>Détails du projet :</h3>
                    <ul>
                      {project.details.map((detail, i) => (
                        <li key={i}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
    }
