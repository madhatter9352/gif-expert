import { useState } from "react";
import AddCategory from "./Components/AddCategory";
import { GiftGrid } from "./Components/GiftGrid";

const GiftExpertApp = () => {
    //const categories = ["categ 1", "categ 2", "categ 3"]
    const [categories, setCategories] = useState(["Rick and Morty"])

    // const handleCategories = () => {
    //     setCategories([...categories, "categ 4"]);
    // }

    return (
        <>
            <h2>Gift Expert</h2>
            <AddCategory setCateg = {setCategories} />
            <hr />

            <ol>
                {
                    categories.map( category => (
                        <GiftGrid 
                            category = { category }
                            key = { category }
                        />
                    ))
                }
            </ol>

        </>
    )
};

export default GiftExpertApp;