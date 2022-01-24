import { GrCircleInformation } from 'react-icons/gr';

import './PopupContent.scss';

const PopupContent = ({ items, setItems }) => {
    
    const decreaseQuantityOfItem = (index) => {
        if(items[index].qtty - 1 < 1) {
            items.splice(index, 1);
        } else {
            items[index].qtty -= 1;
        }

        setItems([...items]);
    }

    const increaseQuantityOfItem = (index) => {
        items[index].qtty += 1;

        setItems([...items]);
    }

    const orderButtonClickHandler = () => {
        console.log('order');
    }

    return (
        <div className="popup-content-wrapper">
            <div className="popup-content">
                <div className="popup-header">
                    <div className="popup-order-message-1">
                        <p className="message-1-first-msg">TOO GOOD TO PASS UP, RIGHT?</p>
                        <p className="message-1-second-msg">Order now and receive <span className="msg-amount">€5,00</span> in your Wallet. <span className="info-icon"><GrCircleInformation /></span></p>
                    </div>
                    
                    <div className="popup-order-message-2">
                        <p className="message-2-first-msg">Your shopping cart</p>
                        <p className="message-2-second-msg">Order now and your order will be shipped for free.</p>
                    </div>
                </div>

                <div className="popup-items">
                    {items.map((item, i) => (
                        <div className="popup-item" key={item.id}>
                            <img className="item-image" src={item.image} alt={item.name}/>
    
                            <div className="item-content-text">
                                <p className="item-name">{item.name}</p>
                                    <div className="item-characteristics">
                                        {item.color || item.size || item.weght ?
                                        <>
                                            <span>Color: {item.color}</span>
                                            <span>・ Size: {item.size}cm ・</span>
                                            <span>Weight: {item.weght}kg</span>
                                        </>
                                            : ''
                                        }
                                    </div>
                                <div className="quantity-buttons-wrapper">
                                    <div className="quantity-buttons-content">
                                        <button onClick={() => decreaseQuantityOfItem(i)}>-</button>
                                        <span>{item.qtty}</span>
                                        <button onClick={() => increaseQuantityOfItem(i)}>+</button>
                                    </div>
                                    {item.oldPrice ?
                                        <div className="discount-price">
                                            <span className="old-price">€{item.oldPrice.toFixed(2)}</span>
                                            €{(item.price * item.qtty).toFixed(2)}
                                        </div>
                                        :
                                        <div className="price">
                                            €{(item.price * item.qtty).toFixed(2)}
                                        </div>
                                    }
                                </div>
                                
                            </div>
                        </div>
                    ))}
                    
                </div>

                <div className="footer-message"><GrCircleInformation /> The items in your shopping cart are not reserved for you.</div>

                <button className="order-button" onClick={orderButtonClickHandler}>Order</button>
            </div>
        </div>
    );
};

export default PopupContent;