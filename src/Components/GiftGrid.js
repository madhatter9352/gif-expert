import React from 'react'
import {GiftGridItem} from './GiftGridItem'

import { useFectchGifs } from '../hooks/useFetchGifs';

export const GiftGrid = ( { category } ) => {
    
    // const [images, setImages] = useState([]);
    const {data:images, loading} = useFectchGifs(category);
    // useEffect(() => {
    //     getGifs(category)
    //         .then( imgs => setImages(imgs))
    // }, [category])

    return (
        <>
        <h3>{category}</h3>
        { loading && <h1>Loading</h1> }
        <div className="card-grid">
            {images.map( gif => (
                    <GiftGridItem 
                        key={gif.id}
                        {... gif}
                    />
                ))}
        </div>
        </>
    )
}
