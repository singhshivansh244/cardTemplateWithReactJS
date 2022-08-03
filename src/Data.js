import image1 from './image/macbook.jpg'
import image2 from './image/dellMonitor.jpg'
import image3 from './image/iphone13.jpg'
import image4 from './image/keyboard.jpg'
import Card from './components/Card'

const val = [
    {
        img: image1,
        id: 1,
        rating: 5.0,
        reviewCount: 7,
        country: 'USA',
        price: 999,
        desc: 'Best of all in the market laptop. Best for Programmers and productivity work',
        openSpot: 2
    },
    {
        rating: 3.7,
        id: 2,
        reviewCount: 8675,
        img: image2,
        country: 'INDIA',
        price: 200,
        desc: 'Best of all in the market laptop. Best for Programmers and productivity work',
        openSpot: 0
    },
    {
        img: image3,
        id: 3,
        rating: 4.8,
        reviewCount: 734,
        country: 'online',
        price: 999,
        desc: 'Best of all in the market laptop.',
        openSpot: 5
    },
    {
        img: image4,
        id: 4,
        rating: 4.78,
        reviewCount: 2223,
        country: 'CANADA',
        price: 449,
        desc: 'Best of all in the market laptop. Best for Programmers and productivity work',
        openSpot: 99
    }
]

export default function Rand() {
    const map1 = val.map(item => {
        return (
            <Card
                key={item.id}
                {...item}
            />
        )
    })
    return (
        <div className='card--main'>
            {map1}
        </div>
    )
}