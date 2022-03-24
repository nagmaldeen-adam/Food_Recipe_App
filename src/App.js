import React,{useState,useEffect} from 'react';
import Footer from './footer.js';
import { BiSearch } from "react-icons/bi";
import Recipes from './Component/Recipes.js';
import './App.scss';
 function App(){
     const APP_KEY ='72f94e5aee1b6a93700ff9ac4664e8f0';
     const APP_ID = '76b58839';
     const [recipes,setRecipes] = useState([]);
     const [search,setSearch] = useState("");
     const [Query,setQuery] = useState("mango");
    //  Render Fetching Data Function
     useEffect(() =>{
        FetchData();
     },[Query])
    //  Fetching Data
     const FetchData = async()=>{
           const Info = await fetch(`
           https://api.edamam.com/search?q=${Query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
           const data = await Info.json();
           setRecipes(data.hits);
     }
     const SearchApi = (e)=>{
         setSearch(e.target.value);
     }
     const changRecipe = (e)=>{
         e.preventDefault();
         setQuery(search);
         setSearch("");
     }

    return(
        <>
            <div className="app">
                <div className="app-container">
                    <div className='form-container'>
        <form onSubmit={changRecipe} className="form">
            <input type="text"  placeholder="enter your recipe name"
             value={search} onChange={SearchApi} 
             className="input"/>
            <button  type="submit" className="button"><BiSearch className="icon"/></button>
        </form>
        </div>
        <div className="recipe-container">
        {recipes.map( (item) =>(
            <Recipes 
            key={item.recipe.calories}
            title={item.recipe.label} 
            image={item.recipe.image}
            ingredients={item.recipe.ingredients}  />
        ))}
                    </div>
                    </div>
        <Footer />
        </div>
      </>
    )
}
export default App;