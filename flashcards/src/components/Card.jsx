import React, { useState } from "react";
import './Card.css'



const Card = ({vocabulary}) => {

    const [isFlipped, setIsFlipped] = useState(false);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    return (
       
            <div className={`Card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                <div className="Card-inner">
                    <div className="front">
                        {vocabulary.word}
                    </div>
                    <div className="back">
                        {vocabulary.definition}
                    </div>
                </div>
            </div>
    );
};

export default Card;