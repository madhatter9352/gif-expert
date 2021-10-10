import { getGifs } from "../../helpers/getGift"

describe('Pruebas con getGifts', () => {
    // test('Debe traer 10 elementos', async() => {
    //     const gifs = await getGifs("One punch");

    //     expect(gifs.length).toBe(10)
    // })

    test('No trae ningun elemento', async() => {
        const gifs = await getGifs("");

        expect(gifs.length).toBe(0)
    })
})
