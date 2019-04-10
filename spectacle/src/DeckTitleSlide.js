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
import myImage from './images/logo_white.png';

const DeckTitleSlide = (props) => {
  return (
    <Slide textColor='titleColor' bgColor='rgb(33,33,33)'>
      <div class='title_container'>
        <div>
          <img src={myImage}/>
        </div>
        <div class='title_text'>
          <div class="line1">{props.first_line}</div>
          <div caps class="line2">{props.second_line}</div>
        </div>
      </div>
    </Slide>
  );
}

export default DeckTitleSlide;
