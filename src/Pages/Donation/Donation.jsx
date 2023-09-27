import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [cards, setCards] = useState([]);
    const [noDonation, setNoDonation] = useState(false);
    const [seeAll, setSeeAll] = useState(false);

    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem('donation'));
        if (donations) {
            setCards(donations)
        }
        else {
            setNoDonation("You have not donate yet")
        }
    }, [])

    return (
        <div>
            {
                noDonation ? <h2 className="text-3xl text-center font-semibold flex items-center justify-center h-[75vh]">{noDonation}</h2> :
                    <div className="mt-10 md:mt-20 mb-16 md:mb-32">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            {
                                seeAll ? cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                                    :
                                    cards.slice(0, 4).map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                            }
                        </div>
                        {cards.length > 4 && <button onClick={() => setSeeAll(!seeAll)} className={`${seeAll ? 'hidden' : 'text-white font-semibold bg-[#009444] py-4 px-7 rounded-lg mt-10 block mx-auto'}`}>See All</button>}
                    </div>
            }
        </div>
    );
};

export default Donation;