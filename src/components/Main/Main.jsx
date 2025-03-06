import "./Main.css"
import React from "react"
import Recipe from "./Recipe"
import Ingred from "./Ingred"
import {getRecipeFromMistral} from "./ai"

export default function Main(){
    
    const [ing,setIng] = React.useState([])

    const[recipeShow,setShowState] = React.useState("")
    
    function submitted(formData){
        const newI = formData.get("ingredient")
        setIng(prev => [...prev,newI])
        document.querySelector("form").reset()
    }
    async function clickhandle(){
        const generated = await getRecipeFromMistral(ing)
        setShowState(generated)
    
    }
    return(
        <main>
            <form action={submitted}>
                <input 
                    type="text"
                    placeholder="e.g. orangano"
                    aria-label="Add ingredient"
                    name="ingredient"
                />
                <button>Add ingredient</button>
            </form>
            {ing.length > 0 && <Ingred  Ing = {ing}
            clickhandle={clickhandle}
            />}
            {recipeShow && <Recipe recipe={recipeShow}/>}
            
            
            
        </main>
    )
}