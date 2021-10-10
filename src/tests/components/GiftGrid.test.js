import { shallow } from "enzyme"
import { GiftGrid } from "../../Components/GiftGrid"
import { useFectchGifs } from "../../hooks/useFetchGifs";
jest.mock('../../hooks/useFetchGifs')

describe('Pruebas en GiftGrid', () => {
    const category = "One peace";

    test('debe mostrar el componente correctamente', () => {
      
        const wraper = shallow( <GiftGrid category={category}/> )

        expect(wraper).toMatchSnapshot()
    })

    test('Debe mostrar items cuando se cargan imagenes', () => {
        
        const wraper = shallow( <GiftGrid category={category}/> )
    })
    
})
