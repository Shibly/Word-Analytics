import Stats from "./Stats";
import Textarea from "./Textarea";
import {useState} from "react";

export default function Container() {

    const [text, setText] = useState("")

    const stats = {
        numberOfWords: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
        numberOfCharacters: text.length,
        instagramCharacterLeft: 200 - text.length,
        facebookCharacterLeft: 2200 - text.length
    }


    return (
        <main className="container">
            <Textarea text={text} setText={setText}/>
            <Stats stats={stats}/>
        </main>
    );
}
