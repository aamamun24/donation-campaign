import PropTypes from 'prop-types';
import Card from '../Card/Card';

const Cards = ({ categories }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-10 md:mt-20 mb-16 md:mb-32'>
            {
                categories.map(card => <Card
                    key={card.id}
                    card={card}
                ></Card>)
            }
        </div>
    );
};

Cards.propTypes = {
    categories: PropTypes.array
};

export default Cards;