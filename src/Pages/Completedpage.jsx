import React from 'react'
import styles from "./Completedpage.module.css";

function Completedpage({todos}) {
    const completedTodos = todos.filter(todo => todo.completed);
  
    return (
        <div className={`${styles.container} ${styles.completedContainer}`}>
          <h2 className={styles.completedHeading}>Completed Todos:</h2>
          {completedTodos.map((todo, index) => (
            <div key={todo.id}>
              <h3>
                {index + 1}. {todo.title}
              </h3>
            </div>
          ))}
        </div>
      );
      
  }
  
  export default Completedpage