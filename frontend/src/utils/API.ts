import axios from 'axios';
import queryString from 'query-string';
import {ItemsPerPage} from "../Constans";

export interface TextAndImageItem {
    title: string;
    description: string;
    image: string;
    imageOnRight: boolean;
}

export interface Slide {
    image: string;
    name: string;
}

export interface AboutContent {
    description: string;
    image: string;
    title: string;
    bottom: string;
}

export const emptyAboutContent: AboutContent = {
    description: '',
    image: '',
    title: '',
    bottom: '',
};

interface HomeResources {
    slides: Slide[];
    about: AboutContent;
    textAndImageItems: TextAndImageItem[];
}

export interface GalleryPickAsset {
    image: string;
    slug: string;
    name: string;
}

export interface GalleryResource {
    introName: string;
    introImage: string;
    name: string;
    images: string[];
}

export interface GalleryPickerResources {
    galleries: GalleryPickAsset[];
}

interface CommonResources {
    logo: string;
    logoWhite: string;
    motto: string;
    footerLeftColumnText: string;
    footerLeftColumnTextBottom: string;
    phoneNumber: string;
    address: string;
}

class API {
    static BACKEND_URL = `${process.env.REACT_APP_BACKEND_URL}/api`;

    getCommonResources = (): Promise<CommonResources> => {
        return Promise.resolve({
            logo: 'http://res.cloudinary.com/luxuryp/image/upload/q_auto:good,f_auto/v1471294760/umhnz2mevc6xzbuylini.png',
            logoWhite: '/logo_white_koneser.png',
            motto: 'Meble dla wymagających',
            footerLeftColumnText: 'Koneser | Meble na wymiar',
            footerLeftColumnTextBottom: 'Właściciel: Michał Kasperek',
            phoneNumber: '(310) 285-7508',
            address: '42-400 Zawiercie, Rolnicza 77'
        });
    };

    getGalleryPickerResources = (): Promise<GalleryPickerResources> => {
      return Promise.resolve({
          galleries: [{
              image: 'https://wallpapers.ae/wp-content/uploads/2018/12/interior.jpg',
              name: 'Łazienki',
              slug: 'lazienki',
          }, {
              image: 'https://images2.alphacoders.com/270/thumb-1920-270990.jpg',
              name: 'Kuchnie',
              slug: 'kuchnie',
          }, {
              image: 'https://images.wallpaperscraft.com/image/kitchen_furniture_design_68101_1920x1080.jpg',
              name: 'Salony',
              slug: 'salony',
          }],
      })
    };

    getGalleryResource = (id: string): Promise<GalleryResource> => {
        if ( id === 'not-exist' ) {
            throw new Error('Brak zasobu');
        }

        return Promise.resolve({
            introName: 'Meble Kuchenne',
            introImage: 'https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg',
            name: 'Meble kuchenne',
            images: ["https://picsum.photos/id/0/5616/3744", "https://picsum.photos/id/1/5616/3744", "https://picsum.photos/id/10/2500/1667", "https://picsum.photos/id/100/2500/1656", "https://picsum.photos/id/1000/5626/3635", "https://picsum.photos/id/1001/5616/3744", "https://picsum.photos/id/1002/4312/2868", "https://picsum.photos/id/1003/1181/1772", "https://picsum.photos/id/1004/5616/3744", "https://picsum.photos/id/1005/5760/3840", "https://picsum.photos/id/1006/3000/2000", "https://picsum.photos/id/1008/5616/3744", "https://picsum.photos/id/1009/5000/7502", "https://picsum.photos/id/101/2621/1747", "https://picsum.photos/id/1010/5184/3456", "https://picsum.photos/id/1011/5472/3648", "https://picsum.photos/id/1012/3973/2639", "https://picsum.photos/id/1013/4256/2832", "https://picsum.photos/id/1014/6016/4000", "https://picsum.photos/id/1015/6000/4000", "https://picsum.photos/id/1016/3844/2563", "https://picsum.photos/id/1018/3914/2935", "https://picsum.photos/id/1019/5472/3648", "https://picsum.photos/id/102/4320/3240", "https://picsum.photos/id/1020/4288/2848", "https://picsum.photos/id/1021/2048/1206", "https://picsum.photos/id/1022/6000/3376", "https://picsum.photos/id/1023/3955/2094", "https://picsum.photos/id/1024/1920/1280", "https://picsum.photos/id/1025/4951/3301"],
        });
    };

    getHomeResources = (): Promise<HomeResources> => {
        return Promise.resolve({
            slides: [{
                image: 'https://wallpapers.ae/wp-content/uploads/2018/12/interior.jpg',
                name: 'Łazienki'
            }, {
                image: 'https://images2.alphacoders.com/270/thumb-1920-270990.jpg',
                name: 'Kuchnie'
            }, {
                image: 'https://images.wallpaperscraft.com/image/kitchen_furniture_design_68101_1920x1080.jpg',
                name: 'Salony'
            }],
            about: {
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
                image: 'https://scontent-frt3-2.xx.fbcdn.net/v/t1.0-9/r90/12208704_438295593020925_925318761056719790_n.jpg?_nc_cat=108&_nc_ht=scontent-frt3-2.xx&oh=51b2fcbb92027c04fcf46a408066aa96&oe=5D9A1C0C',
                title: 'O Koneserze',
                bottom: 'Michał Kasperek'
            },
            textAndImageItems: [{
                title: 'Pomiar',
                description: 'Osobisty pomiar  jest konieczny ze względu na ograniczenia budowlane istniejące w gotowych budynkach ( krzywizny ścian, umiejscowienie okien, drzwi, mediów itp.). Do wykonania  wstępnego pomiaru konieczny jest dostęp do ścian, oświetlenie i ewentualne informacje na temat planowanych przyłączy , instalacji itp.',
                image: 'http://blog.stabrawa.pl/wp-content/uploads/2018/06/POMIAR-KUCHNI-STABRAWA.PL-.jpg',
                imageOnRight: true,
            }, {
                title: 'Projekt',
                description: 'Na podstawie wcześniejszych założeń, w ciągu kilku dni przygotowyjemy projekt komputerowy z wizualizacją. Projekt może być przygotowany w kilku wariantach ( np różne ustawienie szafek, różne opcje kolorów itd.)',
                image: 'https://static.turbosquid.com/Preview/2017/09/21__13_45_49/3dad_poliformkitchenB.jpgAE7F8C9E-1B5D-4BB6-BA5C-32A22FCD97DBOriginal.jpg',
                imageOnRight: false,
            }, {
                title: 'Wycena',
                description: 'Po zaakceptowaniu projektu przygotowujemy dla Państwa indywidualną wycenę mebli. Wycena ta obejmuje wykonanie mebli z uzgodnionych materiałów i z ustalonym wyposażeniem ( np. Kosze cargo, kosze na odpady, segregatory, oswietlenie, uchwyty itp). W cenie mebli ujęte sa również ich transport, wniesienie i montaż, wraz z oprawieniem  sprzętu AGD.',
                image: 'http://brante.pl/wp-content/uploads/2017/01/xcoins-currency-investment-insurance-128867.jpeg.pagespeed.ic.-UMeSX9rB7.jpg',
                imageOnRight: true,
            }, {
                title: 'Umowa',
                description: 'Jeżeli dojdziemy do porozumienia w kwestiach finansowych to spisujemy umowę o wykonanie mebli na zamówienie, gdzie wyszczególnione są podstawowe założenia dotyczące rodzaju materiałów i okuć uzgodnionych w projekcie, oraz wartość zamówienia i termin realizacji',
                image: 'https://blog.ipleaders.in/wp-content/uploads/2019/03/service-agreement-signing.jpg',
                imageOnRight: false,
            }],
        });
    };
}

export default new API();