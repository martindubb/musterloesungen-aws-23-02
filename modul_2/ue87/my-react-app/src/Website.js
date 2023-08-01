import './Website.css'; // CSS Styles importieren
import React from 'react'; // import React für Aufgabe 2


export default function Website() {
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}


function Header() {
    return (
        <header>
            <h1>Mustermann's React Komponenten</h1>
        </header>
    );
}


function Main() {
    return (
        <main>
            <Section title="Willkommen" text="Herzlich willkommen auf meiner einfachen Webseite!" />
            <Section title="Über mich" text="Hier ist eine kurze Beschreibung über mich und meine Interessen." />
            <Section title="Kontakt" text="Bei Fragen oder Anregungen können Sie mich gerne kontaktieren: kontakt@meinewebseite.de" />
            <Counter />
            <Time />
        </main>
    );
}

function Section(props) {
    return (
        <section>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    );
}


function Footer() {
    return (
        <footer>
            <p>&copy; 2023 Meine Webseite</p>
        </footer>
    );
}

// Aufgabe 2

function Counter() {
    const [count, setCount] = React.useState(0);

    const element = (
        <>
            <h2>Counter: {count}</h2>
            <button onClick={() => setCount(count + 2)}>add 2</button>
        </>
    );
    return element;
}


function Time() {
    const [currentTime, setCurrentTime] = React.useState(new Date());

    const formatTime = (time) => {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        return `${hours}:${minutes}:${seconds}`;
    };

    setInterval(() => {
        setCurrentTime(new Date());
    }, 1000);

    return (
        <section>
            <h2>Aktuelle Uhrzeit: {formatTime(currentTime)}</h2>
        </section>
    );
}