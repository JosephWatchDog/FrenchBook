import React, { useState, useEffect, Suspense, Component } from 'react';

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section id="center">
        <h1 id="Headline">Frenchbook</h1>

        <p class= "text-primary lead">Un réseau social français</p>

        <ul class="nav blanco">
          <li class="nav-item">
            <a class="nav-link" href="#">Retrouvez tous vos amis</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Partagez-leur des contenus</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Échangez avec eux régulièrement.</a>
          </li>
        </ul>
        
        <button class="btn btn-primary btn-lg">S'inscrire dès maintenant</button>
        
      </section>

    </>
  )
}

export default App
