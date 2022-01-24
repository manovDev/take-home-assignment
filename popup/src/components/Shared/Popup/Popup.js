import { AiFillCloseCircle } from 'react-icons/ai';

import './Popup.scss';

const Popup = ({ isOpen, toggleClickHandler, children }) => {

    return (
        <>
            {isOpen &&
                <div className="modal" onClick={toggleClickHandler}>
                    <div className="popup-wrapper" onClick={e => e.stopPropagation()}>
                        <div className="close-icon-wrapper">
                            <AiFillCloseCircle className="close-icon" onClick={toggleClickHandler} />
                        </div>

                        {children}

                    </div>
                </div>
            }
        </>
    );
};

export default Popup;