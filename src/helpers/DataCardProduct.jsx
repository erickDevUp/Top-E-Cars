import Img2 from '../assets/18ef84df1a4523e922b17b2a3bfc870f.jpg'
import Img3 from '../assets/bf76a72897160591e3d2a1a0ea41063a.jpg'
import Img4 from '../assets/239de6ebe456d97d68a85d4997b80bc7.jpg'
import Img5 from '../assets/744bc28887751df15f7085bed3a1dfc5.jpg'
import Img6 from '../assets/866639da7841efb55f774e2d562e1bd9.jpg'
import Img7 from '../assets/cf0f0c88b6b1f42ff41517f34463e7d2.jpg'
import Img8 from '../assets/e63801dbdfc01b174ef4ba33ed1968ca.jpg'
import Img9 from '../assets/157348230f3e8b6832e45c26910a5b2f.jpg'
import Img10 from '../assets/f38fe47ea63597750ceb641af769d7d1.jpg'
import Img12 from '../assets/f8b94f5b625c85d9776e300b22c74b81.jpg'
import Img13 from '../assets/65b5114fbef2502c612c2cdc97361ff4.jpg'
import Img14 from '../assets/888dcd18b7b8ec57c5150cb9985e2f90.jpg'
import Img15 from '../assets/e6f203995c790a7c146243dd27013f51.jpg'

import { useMemo } from 'react'


const DataCardProduct=()=>
{
    const Img =useMemo(()=>[
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img8,
        Img9,
        Img10,
        Img12,
        Img13,
        Img14,
        Img15
    ])
    const products =useMemo(()=>
        [
            {
                name: 'mercedes-benz',
                price: 100000,
                quantity: 0,
                IMG: Img2
            },
            {
                name: 'mercedes-benz'    ,
                price: 220000,
                quantity: 0,
                IMG: Img3
            },
            {
                name: 'Lamborghini ',
                price: 125000,
                quantity: 0,
                IMG: Img4
            },
            {
                name: 'Lamborghini ',
                price: 100000,
                quantity: 0,
                IMG: Img5
            },
            {
                name: 'Lamborghini ',
                price: 270000,
                quantity: 0,
                IMG: Img6
            },
            {
                name: 'Lamborghini ',
                price: 227000,
                quantity: 0,
                IMG: Img7
            },  
            {
                name: 'Lamborghini ',
                price: 325000,
                quantity: 0,
                IMG: Img8
            },
            {
                name: 'ferrari ',
                price: 255000,
                quantity: 0,
                IMG: Img9
            },
            {
                name: 'ferrari ',
                price: 365000,
                quantity: 0,
                IMG: Img10
            },
            {
                name: 'ferrari ',
                price: 175000,
                quantity: 0,
                IMG: Img12
            },
            {
                name: 'ferrari       ',
                price: 295000,
                quantity: 0,
                IMG: Img14
            },
            {
                name: 'ferrari',
                price: 309000,
                quantity: 0,
                IMG: Img15
            },
        ]
    )

    return {products,Img}
}
export default DataCardProduct