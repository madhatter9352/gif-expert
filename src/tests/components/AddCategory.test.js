import React from "react"
import { shallow } from "enzyme"
import AddCategory from "../../Components/AddCategory"

describe('Pruebas en <AddCategory />', () => {
    
    const setCategories = jest.fn()
    let wraper = shallow(<AddCategory setCateg = {setCategories}/>)

    beforeEach(() => {
        jest.clearAllMocks();
        wraper = shallow(<AddCategory setCateg = {setCategories}/>)
    })

    test('Debe mostrarse correctamente', () => {
        expect(wraper).toMatchSnapshot()
    })

    test('Debe de cambiar la caja de texto', () => {
        const input = wraper.find('input')
        const value = 'Hola mundo'

        input.simulate('change', {
            target: {
                value: value
            }} 
        )

        const p = wraper.find('p').text().trim()
        
        expect(p).toBe(value)

    })

    test('No debe de postear la informacion con submit', () => {
        wraper.find('form').simulate('submit', {preventDefault(){}})

        expect(setCategories).not.toHaveBeenCalled()
    })

    test('debe de llamar al setCategories y limpiar la caja de texto', () => {
        const value = "Hola mundo"

        //Simular el input change
        wraper.find('input').simulate('change', {target: {value}})

        //simular submit
        wraper.find('form').simulate('submit', { preventDefault(){} })

        //setCategories debe ser llamado
        expect(setCategories).toHaveBeenCalled()

        //el valor del input debe ser ''
        expect( wraper.find('input').prop('value') ).toBe('')
    })
    
    
})
