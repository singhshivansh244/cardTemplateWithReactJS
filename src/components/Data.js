import coverImg1 from '../image/mount-fuji.jpg'
import coverImg2 from '../image/sydney-opera.webp'
import coverImg3 from '../image/taj-mahal.webp'
import Card from './Card'

export default function Map() {
    const val = [
        {
            id: 1,
            img: coverImg1,
            country: "Japan",
            location: "Mount Fuji",
            dateFrom: "12 Jan 2021-",
            dateTo: "24 Jan 2021",
            desc: "Mount Fuji is one of Japan's \"Three Holy Mountains\" along with Mount Tate and Mount Haku. It is a Special Place of Scenic Beauty and one of Japan's Historic Sites. "
        },
        {
            id: 2,
            img: coverImg2,
            country: "Australia",
            location: "Sydney Opera House",
            dateFrom: "12 Jan 2021-",
            dateTo: "24 Jan 2021",
            desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of Sydney Harbour, it is widely regarded as one of the world's most famous and distinctive buildings and a masterpiece of 20th century architecture."
        },
        {
            id: 3,
            img: coverImg3,
            country: "India",
            location: "Taj Mahal",
            dateFrom: "12 Jan 2021-",
            dateTo: "24 Jan 2021",
            desc: "The Taj Mahal 'Crown of the Palace', taj mahal is an Islamic ivory-white marble mausoleum on the right bank of the river Yamuna in the Indian city of Agra."
        }
    ];

    const map1 = val.map((item) => {
        {
            return (
                <Card
                    key={item.id}
                    item={item}
                />
            )
        }
    })

    return (
        <div>
            {map1}
        </div>
    )
}