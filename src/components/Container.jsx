import Stats from "./Stats.jsx";
import Textarea from "./Textarea.jsx";
import {useState} from "react";
import {FACEBOOK_MAX_CHARACTERS, INSTAGRAM_MAX_CHARACTERS} from "../constants.js";

export default function Container() {

    const [text, setText] = useState("")

    const stats = {
        numberOfWords: text.trim() === "" ? 0 : text.trim().split(/\s+/).length,
        numberOfCharacters: text.length,
        instagramCharacterLeft: INSTAGRAM_MAX_CHARACTERS - text.length,
        facebookCharacterLeft: FACEBOOK_MAX_CHARACTERS - text.length
    }


    return (
        <main className="container">
            <Textarea text={text} setText={setText}/>
            <Stats stats={stats}/>
        </main>
    );
}
