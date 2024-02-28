import { colombia, ecuador } from "../assets/icons"
import { logo } from '../assets/images'
import PropTypes from 'prop-types';

const PopUp = ({ onImageClick }) => {

    return (
        <div className="text-center text-white text-2xl font-avenir" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#0070B8',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
        }}>
            <img src={logo} className=" w-64 sm:w-96 mt-6 mb-14" alt="" />
            <p className=" md:text-4xl font-normal mb-14" >EN QUE LUGAR TE ENCUENTRAS?</p>
            <p>COLOMBIA</p>
            <img className="cursor-pointer w-[200px] mt-4 mb-10 border-4 border-white rounded-full" src={colombia} alt="Imagen 1" onClick={() => onImageClick(1)} />
            <p>ECUADOR</p>
            <img className="cursor-pointer w-[200px] mt-4 mb-10 border-4 border-white rounded-full" src={ecuador} alt="Imagen 2" onClick={() => onImageClick(2)} />
        </div>
    );
};
PopUp.propTypes = {
    onImageClick: PropTypes.func,
};

export default PopUp;