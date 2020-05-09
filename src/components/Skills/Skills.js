import React from 'react';
import style from './Skills.module.css';

const Skills = () => {

     return(
         <div className={style.skillsConteiner}>
             <h2>My skills</h2>
             <ul className={style.skills}>
                 <li>HTML/CSS/SCSS</li>
                 <li>ES6/React JS/Redux</li>
                 <li>Gatsby JS</li>
                 <li>GraphQL</li>
                 <li>Contentful</li>
             </ul>
         </div>
     )
}

export default Skills;