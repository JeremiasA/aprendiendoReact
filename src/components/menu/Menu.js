import React from 'react'
import './styles.css'

export const Menu = props =>{
    return <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <a class="nav-item nav-link active" href="#">Tasks <span class="sr-only"></span></a>
      <a class="nav-item nav-link" href="#">Completed</a>
      <a class="nav-item nav-link" href="#">Deleted</a>
      <a class="nav-item nav-link disabled" href="#">Options</a>
    </div>
  </div>
</nav>


}