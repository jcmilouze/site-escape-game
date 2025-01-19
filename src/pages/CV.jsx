import React from 'react'

    export default function CV() {
      return (
        <div className="cv-container">
          <header>
            <h1>Anne Simoni</h1>
            <p>Professeure de Physique-Chimie</p>
          </header>

          <section className="cv-section">
            <h2>Informations Personnelles</h2>
            <ul>
              <li><strong>Adresse :</strong> 12, rue des Lilas, 19110 Bort-les-Orgues</li>
              <li><strong>Téléphone :</strong> 06 12 34 56 78</li>
              <li><strong>Email :</strong> A.Simoni@email.com</li>
              <li><strong>LinkedIn :</strong> linkedin.com/in/Anne-Simoni</li>
            </ul>
          </section>

          <section className="cv-section">
            <h2>Profil Professionnel</h2>
            <p>
              Enseignante expérimentée en physique-chimie, passionnée par la transmission des savoirs scientifiques et l'accompagnement pédagogique des élèves. Forte de plus de 15 ans d'expérience dans l'enseignement secondaire, je m'investis dans la réussite scolaire et le développement des compétences des jeunes générations.
            </p>
          </section>

          <section className="cv-section">
            <h2>Expériences Professionnelles</h2>
            <div>
              <h3>Professeure de Physique-Chimie</h3>
              <p><strong>Lycée Professionnel Bort-Artense, Corrèze</strong> - <em>2010 - Présent</em></p>
              <ul>
                <li>Enseignement de la physique-chimie à des élèves de lycée professionnel, avec une pédagogie adaptée aux besoins spécifiques.</li>
                <li>Conception et mise en œuvre de cours interactifs pour favoriser l’apprentissage pratique et théorique.</li>
                <li>Participation active aux conseils de classe et à l'élaboration des projets pédagogiques de l'établissement.</li>
              </ul>
            </div>

            <div>
              <h3>Enseignante Contractuelle</h3>
              <p><strong>Académie de Nice</strong> - <em>2008 - 2010</em></p>
              <ul>
                <li>Enseignement de la physique-chimie dans plusieurs établissements secondaires.</li>
                <li>Adaptation rapide à différents environnements scolaires et niveaux d’élèves.</li>
                <li>Organisation d’ateliers scientifiques pour stimuler l’intérêt des élèves pour les sciences.</li>
              </ul>
            </div>
          </section>

          <section className="cv-section">
            <h2>Formation</h2>
            <ul>
              <li><strong>CAPES Physique-Chimie</strong> - 2008</li>
              <li><strong>Master Sciences de la Matière</strong> - Université de Nice Sophia Antipolis</li>
            </ul>
          </section>
        </div>
      )
    }
