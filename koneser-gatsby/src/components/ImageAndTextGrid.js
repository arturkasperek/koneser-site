import * as React from 'react';
import cn from 'classnames';
import './ImageAndTextGrid.scss';
import PomiarImg from '../assets/images/homepage/pomiar.jpg';
import SzkicImg from '../assets/images/homepage/szkic.png';
import WycenaImg from '../assets/images/homepage/wycena.webp';
import UmowaImg from '../assets/images/homepage/umowa.jpg';

const items = [{
  title: 'Pomiar',
  description: 'Osobisty pomiar  jest konieczny ze względu na ograniczenia budowlane istniejące w gotowych budynkach (krzywizny ścian, umiejscowienie okien, drzwi, mediów itp.). Do wykonania  wstępnego pomiaru konieczny jest dostęp do ścian, oświetlenie i ewentualne informacje na temat planowanych przyłączy, instalacji itd.',
  image: PomiarImg,
  imageOnRight: false,
}, {
  title: 'Projekt',
  description: 'Na podstawie wcześniejszych założeń, w ciągu kilku dni przygotowujemy projekt komputerowy z wizualizacją. Projekt może być przygotowany w kilku wariantach (np. różne ustawienie szafek, kolorystyka).',
  image: SzkicImg,
  imageOnRight: true,
}, {
  title: 'Wycena',
  description: 'Po zaakceptowaniu projektu przygotowujemy dla Państwa indywidualną wycenę mebli. Wycena ta obejmuje wykonanie mebli z uzgodnionych materiałów i z ustalonym wyposażeniem (np. kosze cargo, kosze na odpady, segregatory, oświetlenie, uchwyty). W cenie mebli ujęte są również ich transport, wniesienie i montaż, wraz z oprawieniem  sprzętu AGD.',
  image: WycenaImg,
  imageOnRight: false,
}, {
  title: 'Umowa',
  description: 'Jeżeli dojdziemy do porozumienia w kwestiach finansowych to spisujemy umowę o wykonanie mebli na zamówienie. Wyszczególnione są w niej podstawowe założenia dotyczące rodzaju materiałów i okuć uzgodnionych w projekcie oraz wartość zamówienia i termin realizacji.',
  image: UmowaImg,
  imageOnRight: true,
}];

export default (props) => (
    <div className={'image-and-text-grid'}>
        <div className={'items-container'}>
            {items.map((i, index) => (
                <div key={index} className={cn('item container', { 'image-on-right': i.imageOnRight })}>
                    <div className={cn('image-wrapper', { fadeInLeft: !i.imageOnRight, fadeInRight: i.imageOnRight })}>
                        <div className={'image-holder'} style={{backgroundImage: `url(${i.image})`}} />
                    </div>
                    <div className={'content-wrapper'}>
                        <h3 className={'fadeInUp title'}>
                            {i.title}
                        </h3>
                        <div className={'description-holder fadeInUp'}>
                            {i.description}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);
