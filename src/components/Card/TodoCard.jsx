import React from 'react'

    export default function TodoCard({ title, items }) {
      return (
        <div className="todo-card">
          <h3>{title}</h3>
          <ul>
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )
    }
