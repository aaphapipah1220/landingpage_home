import React from 'react';
import { Link } from 'react-router-dom';

function Aside({ logout }) {

  return (
    <div>
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a className="brand-link">
          <img src="dist/img/idpay.jpg" alt="Admin Logo" className="brand-image img-rounded elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">IdPay</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
            </div>
            <div className="info">
              <a className="d-block">Hi, User</a>
            </div>
          </div>
          <div className="form-inline">
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              <li className='nav-item'>
                <Link to='/home'>
                  <a className="nav-link">
                    <i className="nav-icon fas fa-home" /><p>Home</p>
                  </a>
                </Link>
              </li>
              <li className='nav-item'><Link to='/form'>
                <a className="nav-link">
                  <i className="nav-icon fas fa-edit" /><p>Form</p>
                </a>
              </Link></li>
              <li className='nav-item'><Link to='/table'>
                <a className="nav-link">
                  <i className="nav-icon fas fa-table" /><p>Table</p>
                </a></Link></li>
              <li className='nav-item'><Link to='/report'><a className="nav-link">
                <i className="nav-icon fas fa-archive" /><p>Report</p>
              </a>
              </Link></li>
              <li className='nav-item'>
                <Link to='/report'>
                  <i className="nav-icon fas fa-reply-all nav-link" />
                  <button onClick={logout}>Log Out</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </aside>
    </div>
  )
}



// const Aside = () => {
//   // const navigate = NavLink();
//   const menus = [
//     {
//       key: 'home',
//       path: '/home',
//       label: 'Home',
//       icon: 'fa-home'
//     },
//     {
//       key: 'create-ticket',
//       path: '/form',
//       label: 'Create Ticket',
//       icon: 'fa-edit'
//     },
//     {
//       key: 'tables',
//       path: '/data',
//       label: 'Tables',
//       icon: 'fa-table'
//     },
//     {
//       key: 'report',
//       path: '/report',
//       label: 'Report',
//       icon: 'fa-archive'
//     },
//     {
//       key: 'logout',
//       path: '/#',
//       label: 'Log Out',
//       icon: 'fa-reply-all'
//     }
//   ];

//   return (
//     <div><aside className="main-sidebar sidebar-dark-primary elevation-4">
//   {/* Brand Logo */}
//   <a className="brand-link">
//     <img src="dist/img/idpay.jpg" alt="Admin Logo" className="brand-image img-rounded elevation-3" style={{opacity: '.8'}} />
//     <span className="brand-text font-weight-light">IdPay</span>
//   </a>
//   {/* Sidebar */}
//   <div className="sidebar">
//     {/* Sidebar user panel (optional) */}
//     <div className="user-panel mt-3 pb-3 mb-3 d-flex">
//       <div className="image">
//         <img src="dist/img/avatar5.png" className="img-circle elevation-2" alt="User Image" />
//       </div>
//       <div className="info">
//         <a className="d-block">Hi, User</a>
//       </div>
//     </div>
//     <div className="form-inline">
//     </div>
//     {/* Sidebar Menu */}
//     <nav className="mt-2">
//       <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
//         {menus.map(val => {
//           return <li style={{cursor:'pointer'}} key={val.key} className="nav-item">
//           <p onClick={() => navigate(val.path)} className="nav-link">
//             <i className={`nav-icon fas ${val.icon}`} />
//             <p> {val.label}</p>
//           </p>
//         </li>
//         })}
//       </ul>
//     </nav>
//   </div>
// </aside>
//         </div>
//   )
// }

export default Aside