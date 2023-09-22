
import { useState } from "react"
import { AddCategory, GifGrid } from "./components";



export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);



    const onAddCategory = (newCategories) => {
        // console.log(newCategories);
        if (categories.includes(newCategories)) return;
        setCategories([newCategories, ...categories]);
    };

    return (
        <>
            {/* titulo */}
            <h1>GifExperApp</h1>

            {/* Input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={(event) => onAddCategory(event)}
            />

            {/* listado de gif */}
            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {
                categories.map(category => {
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    )
                })
            }

            {/* gif item */}
        </>
    )
}
