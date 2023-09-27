import { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import CardDetails from './CardDetails';

const Details = () => {

    const [card, setCard] = useState({})
    const { id } = useParams()
    const cards = useLoaderData();

    useEffect(() => {
        const findCard = cards.find(card => card.id === parseInt(id));
        setCard(findCard)
    }, [id, cards])

    return (
        <div className='mt-10 md:mt-20 mb-16 md:mb-32'>
            <CardDetails card={card}></CardDetails>
        </div>
    );
};

export default Details;