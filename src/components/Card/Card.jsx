import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ card }) => {
    const { id, images, title, category, category_bg, card_bg, text_button_bg } = card;

    return (
        <Link to={`/donation-details/${id}`}>
            <div className='rounded-lg' style={{ background: card_bg }}>
                <img className='w-full' src={images?.image1} alt="" />
                <div className='p-4' style={{ color: text_button_bg }}>
                    <button className='py-1 px-3 text-sm font-medium rounded' style={{ background: category_bg }}>{category}</button>
                    <h2 className='text-lg font-semibold mt-2'>{title}</h2>
                </div>
            </div>
        </Link>
    );
};

Card.propTypes = {
    card: PropTypes.object
};

export default Card;