export default function Stats({numberOfCharacter, instagramCharacterLeft, facebookCharacterLeft, numberOfWords}) {
    return (
        <section className="stats">
            <Stat number={numberOfWords} label="Words"/>
            <Stat number={numberOfCharacter} label="Characters"/>
            <Stat number={instagramCharacterLeft} label="Instagram"/>
            <Stat number={facebookCharacterLeft} label="Facebook"/>

        </section>

    );

}

function Stat({number, label}) {
    return (
        <section className="stat">
            <span className="stat__number">{number}</span>
            <h2 className="second-heading">{label}</h2>
        </section>

    );
}
