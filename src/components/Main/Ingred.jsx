
export default function Ingred(props){
    
    const list = props.Ing.map(i=>{
       return <li key={i}>{i}</li>
    })
    
    return(
        <section className="main-section">
            <h2>Ingredients on hand:</h2>
            <ul>
                {list}
            </ul>
            {props.Ing.length > 3 && <div className="footer-div">
                <div className="footer-info">
                    <h3>Ready for recipe?</h3>
                    <p>Generate a recipe from your list of ingredients</p>
                </div>
                <div className="button-div">
                    <button onClick={props.clickhandle}>Get a recipe</button>
                </div>
            </div>}
        </section>
    )
    
}