import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CardDetails = ({ card }) => {
    const { id, images, title, price, text_button_bg, description } = card || {}

    const handleDonate = () => {
        const donationCard = []

        const donations = JSON.parse(localStorage.getItem('donation'))

        if (!donations) {
            donationCard.push(card)
            localStorage.setItem('donation', JSON.stringify(donationCard));
            toast.success('Donation successfully completed', { theme: "colored" });
        }
        else {
            const exit = donations.find(donation => donation.id === id)
            if (!exit) {
                donationCard.push(...donations, card)
                localStorage.setItem('donation', JSON.stringify(donationCard))
                toast.success('Donation successfully completed', { theme: "colored" });
            }
            else {
                toast.warn('You have already donated', { theme: "colored" });
            }
        }
    }

    return (
        <div>
            <div className='relative'>
                <img className='w-full rounded-lg' src={images?.image1} alt="" />
                <div className='absolute w-full h-1/3 md:h-1/6 bg-black bottom-0 bg-opacity-50 flex items-center rounded-b-lg'>
                    <button onClick={handleDonate} className='text-white py-2 lg:py-4 px-4 lg:px-7 rounded text-xl font-medium md:font-bold ml-6 md:ml-10' style={{ background: text_button_bg }}>Donate ${price}</button>
                </div>
            </div>
            <h1 className='text-[#0B0B0B] text-4xl font-bold mt-12'>{title}</h1>
            <p className='text-[#0B0B0B70] leading-7 mt-6 text-justify'>{description}</p>
            <ToastContainer />
        </div>
    );
};

CardDetails.propTypes = {
    card: PropTypes.object
};

export default CardDetails;