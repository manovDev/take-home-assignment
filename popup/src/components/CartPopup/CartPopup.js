import { useState } from 'react';

import { CART_ITEMS } from './PopupContent/data/cartItems';

import Popup from '../Shared/Popup';
import PopupContent from './PopupContent';

import './CartPopup.scss';

const CartPopup = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [items, setItems] = useState([...CART_ITEMS]);


    const handlePopupToggle = () => {
        setItems([...CART_ITEMS]);

        setIsOpen(!isOpen);
    }

    return (
        <div className="main-wrapper">
            <button className="popup-open-button" onClick={handlePopupToggle}>Open</button>

            <Popup 
                isOpen={isOpen}
                toggleClickHandler={handlePopupToggle}
            >
                <PopupContent items={[...items]} setItems={setItems} />
            </Popup>
        </div>
    );
};

export default CartPopup;