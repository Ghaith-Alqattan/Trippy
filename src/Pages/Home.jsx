import Hero from '../Components/Hero/Hero'
import PopularDestinations from '../Components/PopularDestinations/PopularDestinations'
import Trips from '../Components/Trips/Trips'
export default function Home() {
    return (
        <>
            <Hero
                img="../../public/img/hero.jpg"
                title="Your Journey Your Story"
                desc="Choose Your Favorite Destination."
                btn={{ show: true, content: 'Travel Now' }}
            />
            <PopularDestinations />
            <Trips
                card={[
                    {
                        img: '../../public/img/card1.jpg',
                        title: 'Trip in Indonesia',
                        para: 'Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea',
                    },
                    {
                        img: '../../public/img/card2.jpg',
                        title: 'Trip in Malaysia',
                        para: "Malaysia, is a country in Southeast Asia. The federal constitutional monarchy consists of thirteen states and three federal territories, separated by the South China Sea into two regions, Peninsular Malaysia and Borneo's East Malaysia",
                    },
                    {
                        img: '../../public/img/card3.jpg',
                        title: 'Trip in France',
                        para: 'France, officially the French Republic is a transcontinental country predominantly located in Western Europe and spanning overseas regions and territories in the Americas and the Atlantic, Pacific and Indian Oceans.',
                    },
                ]}
            />
        </>
    )
}
