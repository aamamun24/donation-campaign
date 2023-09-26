import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const DonationCard = ({ card }) => {
    const { id, images, title, category, price, category_bg, card_bg, text_button_bg } = card || {};

    return (
        <div className='flex rounded-lg gap-6' style={{ background: card_bg }}>
            <img className='h-full w-1/3' src={images?.image2} alt="" />
            <div className='flex flex-col justify-center items-start my-8'>
                <button className='py-1 px-3 text-sm font-medium rounded' style={{ background: category_bg, color: text_button_bg }}>{category}</button>
                <h2 className='text-2xl font-semibold text-[#0B0B0B] my-2'>{title}</h2>
                <h4 className='font-semibold' style={{ color: text_button_bg }}>${price.toFixed(2)}</h4>
                <Link to={`/donation-details/${id}`}>
                    <button className='text-white text-lg font-semibold py-2 px-4 rounded mt-5' style={{ background: text_button_bg }}>View Details</button>
                </Link>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    card: PropTypes.object
};

export default DonationCard;