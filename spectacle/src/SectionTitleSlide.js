// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
} from 'spectacle';

import './title.css'
import myImage from './images/logo.png';

const SectionTitleSlide = (props) => {
  return (
    <Slide textColor='titleColor' bgImage={myImage} bgSize='contain' bgRepeat='no-repeat'>
      <div>
        <div class="heading">
          <Heading size={ 2 } caps fit textColor='black' lineHeight={1}>{props.titleText}</Heading>
        </div>
        <div className='metis_name_container'>
          <div className='metis_name'>
            METIS
          </div>
        </div>
      </div>
    </Slide>
  );
}

export default SectionTitleSlide;
