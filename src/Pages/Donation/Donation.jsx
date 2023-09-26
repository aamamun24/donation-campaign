import { useEffect, useState } from "react";
import DonationCard from "./DonationCard";

const Donation = () => {
    const [cards, setCards] = useState([])

    useEffect(() => {
        const donations = JSON.parse(localStorage.getItem('donation'));
        setCards(donations)
    }, [])

    return (
        <div className="mt-10 md:mt-20 mb-16 md:mb-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {
                    cards.map(card => <DonationCard key={card.id} card={card}></DonationCard>)
                }
            </div>
            <button className="text-white font-semibold bg-[#009444] py-4 px-7 rounded-lg mt-10 block mx-auto">See All</button>
        </div>
    );
};

export default Donation;