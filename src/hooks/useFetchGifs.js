import React, { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGift';

export const useFectchGifs = (category) => {
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect(() => {
        getGifs(category)
            .then(img => {
                setTimeout(() => {
                    setState({
                        data: img,
                        loading: false
                    })
                }, 3000)
            })
    }, [])

    // setTimeout(() => {
    //     setState({
    //         data: [1,2,3,4],
    //         loading: false
    //     })
    // }, 3000)

    return state;
}