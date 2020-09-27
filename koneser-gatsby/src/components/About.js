import React from 'react';
import './About.scss';
import AboutImg from '../assets/images/homepage/about.jpg'


const About = (props) => {
    return (
        <div className={'about-home'}>
            <div className={'container'}>
                <div className={'content-wrapper'}>
                    <div className={'left'}>
                        <div className={'left-wrapper'}>
                            <div className={'image-wrapper'} style={{backgroundImage: `url(${AboutImg})`}}/>
                        </div>
                    </div>
                    <div className={'right'}>
                        <div className={'title-wrapper'}>
                            <h3>O Koneserze</h3>
                        </div>
                        <div className={'content'}>
                            <p>Firma „Koneser” działa od 2006 roku i specjalizuje się w produkcji mebli na zamówienie. Działamy przede wszystkim na rynku lokalnym, tj. Zawiercie, Myszków i okolice, ale nie unikamy również zamówień z odleglejszych miejscowośći. Z naszych mebli korzystają klienci z Katowic , Częstochowy , Krakowa i itd.</p>
                            <p>Bazujemy przede wszystkim na klientach z „polecenia”. Nie posiadamy stałej ekspozycji z naszymi produktami, bo z jednej strony ciągle zmieniające sie trendy i nowości w branży wymuszałyby częste zmiany wystawy, a z drugiej nakłady finansowe zwiazane  z prowadzeniem takowej wolimy przeznaczać na rozwój parku maszynowego i produkcji. Ponad to dzięki temu jesteśmy w stanie zaoferować atrakcyjniejsze ceny.</p>
                            <p>Głównymi kierunkami naszej działalności jest produkcja mebli kuchennych oraz szaf z drzwiami przesuwnymi. Nie unikamy jednak żadnych nie typowych zamówień i wykonujemy również meble do salonu , sypialni czy łazienki.</p>
                            <p>Jako naszą główną dewizę uznajemy jakość i terminowość naszych realizacji przy zachowaniu atrakcyjnej ceny.</p>
                        </div>
                        <div className={'bottom handwritten'}>Michał Kasperek</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
