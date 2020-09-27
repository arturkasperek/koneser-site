import * as React from 'react';
import cn from 'classnames';
import './ImageAndTextGrid.scss';
import SzkicImg from '../assets/images/homepage/szkic.png';

const items = [{
  title: 'Pomiar',
  description: 'Osobisty pomiar  jest konieczny ze względu na ograniczenia budowlane istniejące w gotowych budynkach ( krzywizny ścian, umiejscowienie okien, drzwi, mediów itp.). Do wykonania  wstępnego pomiaru konieczny jest dostęp do ścian, oświetlenie i ewentualne informacje na temat planowanych przyłączy , instalacji itp.',
  image: 'http://blog.stabrawa.pl/wp-content/uploads/2018/06/POMIAR-KUCHNI-STABRAWA.PL-.jpg',
  imageOnRight: false,
}, {
  title: 'Projekt',
  description: 'Na podstawie wcześniejszych założeń, w ciągu kilku dni przygotowyjemy projekt komputerowy z wizualizacją. Projekt może być przygotowany w kilku wariantach ( np różne ustawienie szafek, różne opcje kolorów itd.)',
  image: SzkicImg,
  imageOnRight: true,
}, {
  title: 'Wycena',
  description: 'Po zaakceptowaniu projektu przygotowujemy dla Państwa indywidualną wycenę mebli. Wycena ta obejmuje wykonanie mebli z uzgodnionych materiałów i z ustalonym wyposażeniem ( np. Kosze cargo, kosze na odpady, segregatory, oswietlenie, uchwyty itp). W cenie mebli ujęte sa również ich transport, wniesienie i montaż, wraz z oprawieniem  sprzętu AGD.',
  image: 'http://brante.pl/wp-content/uploads/2017/01/xcoins-currency-investment-insurance-128867.jpeg.pagespeed.ic.-UMeSX9rB7.jpg',
  imageOnRight: false,
}, {
  title: 'Umowa',
  description: 'Jeżeli dojdziemy do porozumienia w kwestiach finansowych to spisujemy umowę o wykonanie mebli na zamówienie, gdzie wyszczególnione są podstawowe założenia dotyczące rodzaju materiałów i okuć uzgodnionych w projekcie, oraz wartość zamówienia i termin realizacji',
  image: 'https://blog.ipleaders.in/wp-content/uploads/2019/03/service-agreement-signing.jpg',
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
