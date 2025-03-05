import { useEffect, useState } from "react";
import "./YourRecipe.css"

const YourRecipe = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        fetch("https://67c819aa0acf98d07084d58f.mockapi.io/recipes")
            .then(res => res.json())
            .then(data => setData(data))
    }, [])


    return (
        <>
            <div className="your-recipe">
                <h1>Emma Gonzalez's Recipe Box</h1>
                <div className="container-recipe">
                    {data.map((item, index) => (
                        <div className="box-recipe" key={index}>
                            <img src={item.image} alt="" />
                            <div className="title">
                                <h4>{item.name}</h4>
                                <p>{item.time} minutes</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default YourRecipe;