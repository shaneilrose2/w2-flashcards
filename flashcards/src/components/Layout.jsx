import Card from "./Card";
import React, { useState } from "react";
import prev from "/previous.png"
import next from "/next.png"

const Layout = () => {
    /*const [flipped, setFlipped] = useState(false)*/
    const vocabulary = [
        {
            word: "Konnichiwa (こんにちは)",
            definition: "Hello"
        },
        {
            word: "Ohayou gozaimasu (おはようございます)",
            definition: "Good morning"
        },
        {
            word: "Konbanwa (こんばんは)",
            definition: "Good evening"
        },
        {
            word: "Arigatou Gozaimasu (ありがとうございます)",
            definition: "Thank you"
        },
        {
            word: "Sumimasen (すみません)",
            definition: "Excuse me/Sorry"
        },
        {
            word: "Hai (はい)",
            definition: "Yes"
        },
        {
            word: "Iie (いいえ)",
            definition: "No"
        },
        {
            word: "Onegaishimasu (お願いします)",
            definition: "Please (requesting)"
        },
        {
            word: "Eigo wa hanasemasu ka? (英語は話せますか？)",
            definition: "Do you speak English?"
        },
        {
            word: "Wakarimasen (分かりません)",
            definition: "I don't understand"
        },
        {
            word: "Itadakimasu (いただきます)",
            definition: "Said before a meal to express gratitude"
        },
        {
            word: "[Location] wa doko desu ka? (—はどこですか？)",
            definition: "Where is [location]?"
        },
        {
            word: "Eki (駅)",
            definition: "Train Station"
        },
        {
            word: "Toire (トイレ)",
            definition: "Restroom"
        },
        {
            word: "Kore wa ikura desu ka? (これはいくらですか？)",
            definition: "How much is this?"
        },
        {
            word: "Kore o kudasai (これをください)",
            definition: "This one, please"
        },
        {
            word: "Mizu o kudasai (水をください)",
            definition: "Water, please"
        },
        {
            word: "Wi-Fi arimasu ka? (Wi-Fiありますか？)",
            definition: "Do you have WiFi?"
        },
    ];

    const [currIndex, setCurrIndex] = useState(0);

    const nextCard = () => {
            setCurrIndex((currIndex + 1) % vocabulary.length);
    }

    const prevCard = () => {
            setCurrIndex((currIndex - 1) % vocabulary.length);
    }

    return (
        <div>
            <h3>Card: {(currIndex + 1)} of {vocabulary.length}</h3>
            <Card vocabulary={vocabulary[currIndex]} key={currIndex}/>
                <button onClick={prevCard}><img src={prev} alt="Previous button" style={{ width: '50px', height: '50px' }}/></button>
                <button onClick={nextCard}><img src={next} alt="Next button" style={{ width: '50px', height: '50px' }}/></button>
        </div>
    );
};

export default Layout;