import React from 'react';
import style from './Recipe.module.scss';
 const Recipes = ({title,image,ingredients}) =>{
     return(
         <div className={style.recipe}>
        <h2 className={style.name}>{title}</h2>
        <img src={image} alt="Problem"  className={style.image}/>
        <ol>
            {ingredients.map((info,index) =>(
                <div key={index}  className={style.container}>
               <li className={style.information}>{info.text}</li>
               </div> 
            ))}
        </ol>
         </div>
     )
 }
 export default Recipes;