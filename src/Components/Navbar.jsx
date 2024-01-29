import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.css';

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.logoContainer}>
        <h3>Todo App</h3>
      </div>
        <nav >
            <ul className={styles.navbarlist}>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/completedtodo">Completed Todos</Link></li>
            </ul>
        </nav>
      
    </div>
  )
}

export default Navbar
