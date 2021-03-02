import * as React from 'react';
import cn from 'classnames';
import './ImageAndTextGrid.scss';
import {useStaticQuery} from "gatsby";

export default ({}) => {
  const imagesData = useStaticQuery(graphql`
        fragment ImageFields on ImageSharpFluid {
          srcWebp
          maxHeight: presentationHeight
          maxWidth: presentationWidth
        }
        
        query {
          pomiarImg: file(relativePath: {eq: "images/homepage/pomiar.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
          szkicImg: file(relativePath: {eq: "images/homepage/szkic.png"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
          wycenaImg: file(relativePath: {eq: "images/homepage/wycena.webp"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
          umowaImg: file(relativePath: {eq: "images/homepage/umowa.jpg"}) {
            childImageSharp {
              fluid(maxWidth: 2000, quality: 95) {
                ...ImageFields
              }
            }
          }
        }
    `);

  const items = [{
    title: 'Pomiar',
    description: 'Osobisty pomiar  jest konieczny ze względu na ograniczenia budowlane istniejące w gotowych budynkach (krzywizny ścian, umiejscowienie okien, drzwi, mediów itp.). Do wykonania  wstępnego pomiaru konieczny jest dostęp do ścian, oświetlenie i ewentualne informacje na temat planowanych przyłączy, instalacji itd.',
    image: imagesData['pomiarImg'].childImageSharp.fluid.srcWebp,
    imageOnRight: false,
  }, {
    title: 'Projekt',
    description: 'Na podstawie wcześniejszych założeń, w ciągu kilku dni przygotowujemy projekt komputerowy z wizualizacją. Projekt może być przygotowany w kilku wariantach (np. różne ustawienie szafek, kolorystyka).',
    image: imagesData['szkicImg'].childImageSharp.fluid.srcWebp,
    imageOnRight: true,
  }, {
    title: 'Wycena',
    description: 'Po zaakceptowaniu projektu przygotowujemy dla Państwa indywidualną wycenę mebli. Wycena ta obejmuje wykonanie mebli z uzgodnionych materiałów i z ustalonym wyposażeniem (np. kosze cargo, kosze na odpady, segregatory, oświetlenie, uchwyty). W cenie mebli ujęte są również ich transport, wniesienie i montaż, wraz z oprawieniem  sprzętu AGD.',
    image: imagesData['wycenaImg'].childImageSharp.fluid.srcWebp,
    imageOnRight: false,
  }, {
    title: 'Umowa',
    description: 'Jeżeli dojdziemy do porozumienia w kwestiach finansowych to spisujemy umowę o wykonanie mebli na zamówienie. Wyszczególnione są w niej podstawowe założenia dotyczące rodzaju materiałów i okuć uzgodnionych w projekcie oraz wartość zamówienia i termin realizacji.',
    image: imagesData['umowaImg'].childImageSharp.fluid.srcWebp,
    imageOnRight: true,
  }];
  return (
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
};
