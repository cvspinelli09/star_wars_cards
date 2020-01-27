import React from 'react';
import CardList from '../cardlist/cardList.component';
import { people } from '../../people';

import './cardDisplay.styles.css';

class CardDisplay extends React.Component {
    constructor() {
        super();

        this.state = {
            people: people,
        }

    }

}