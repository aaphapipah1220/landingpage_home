import React from 'react'

const Header = () => {
  return (
    <div>
        <nav className="main-header navbar navbar-expand navbar-primary navbar-dark">
  {/* Left navbar links */}
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
  </ul>
</nav>

    </div>
  )
}

export default Header