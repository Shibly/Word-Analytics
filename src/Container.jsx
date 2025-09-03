import Stats from "./Stats";
import Textarea from "./Textarea";
import {useState} from "react";

export default function Container() {

    const [text, setText] = useState("")
    const numberOfCharacter = text.length;

    const instagramCharacterLeft = 280 - numberOfCharacter;
    const facebookCharacterLeft = 2200 - numberOfCharacter;
    const numberOfWords = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

    return (
        <main className="container">
            <Textarea text={text} setText={setText}/>
            <Stats
                numberOfCharacter={numberOfCharacter}
                numberOfWords={numberOfWords}
                instagramCharacterLeft={instagramCharacterLeft}
                facebookCharacterLeft={facebookCharacterLeft}/>
        </main>
    );
}
