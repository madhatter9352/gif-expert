import React from 'react';
import { shallow } from 'enzyme';
import { GiftGridItem } from '../../Components/GiftGridItem';

describe('Pruebas en GifGrdiItem', () => {
    const title = 'Un titulo';
    const url = 'https://localhost.com'
    const wraper = shallow(<GiftGridItem title={title} url={url}/>)

    test('debe mostrar el componente correctamente', () => {
        expect(wraper).toMatchSnapshot()
    })

    test('debe tener un parrafo con el titulo', () => {
        const p = wraper.find('p')
        expect(p.text().trim()).toBe(title)
    })
    
    test('debe tener la imagen igual al url y alt de los props', () => {
        const img = wraper.find('img');

        // console.log(img.prop('src'));

        expect(img.prop('src')).toBe(url)
        expect(img.prop('alt')).toBe(title)
    })

    test('debe de tener animate__bounce', () => {
        const div = wraper.find('div')
        const className = div.prop('className')
        expect(className.includes('animate__bounce')).toBe(true)
    })
    
})
