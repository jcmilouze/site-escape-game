import React from 'react'

    export default function LoginLayout({ children }) {
      return (
        <div className="login-container">
          <div className="login-box">
            {children}
          </div>
        </div>
      )
    }
