import * as React from 'react';
import cn from 'classnames';
import './ImageAndTextGrid.scss';
import {TextAndImageItem} from "../utils/API";

export interface Settings {
    items: TextAndImageItem[];
}

export default ({ items }: Settings) => (
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
