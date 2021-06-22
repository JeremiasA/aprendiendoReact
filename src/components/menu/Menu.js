import React from 'react'
import './styles.css'

export const Menu = (props) =>{
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div style={{display:"flex"}}className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      <a className="nav-item nav-link active" href="#">Tasks <span class="sr-only"></span></a>
      <a className="nav-item nav-link" href="#">Completed</a>
      <a className="nav-item nav-link" href="#">Deleted</a>
      <a className="nav-item nav-link disabled" href="#">Options</a>
    </div>
    <div style={{width:"100%", justifySelf:"flex-end", alignSelf:"center"}}>
     <button 
        style={{float:"right", marginRight:"1rem"}}
        className="btn btn-primary float-rigth"
        onClick={()=>{props.cblogout()}}
        >Logout
        </button>
      <h4 style={{float:"right", lineHeight:"2.5rem", marginRight:"1rem"}}>{props.loggedUser.username}</h4>
    </div>
    
  </div>
</nav>


}