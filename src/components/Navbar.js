import React from 'react'
function Navbar() {
    return (
     <>
     <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="/">G<sub>ame</sub>F<sup>orever</sup></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Todays Deals</a>
          </li>
      
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Shop By Category
            </a>
            <ul class="dropdown-menu">
              <li><a class="dropdown-item" href="/">Mens</a></li>
              <li><a class="dropdown-item" href="/">Womens</a></li>
              <li><hr class="dropdown-divider"/></li>
              <li><a class="dropdown-item" href="/">Something else here</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Orders</a>
          </li>
        </ul>
        <form class="d-flex" role="search">
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
        <button type="button" class="btn btn-outline-primary login-button">Login</button>
      </div>
    </div>
  </nav>
  
  </>
    );
  }
  
  export default Navbar;
  