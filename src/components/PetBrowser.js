import React from 'react';
import {getAll, getByType, getBetweenAge} from '../data/pets';
import Pet from './Pet';

class PetBrowser extends React.Component {
  render() {
    return <div className="ui cards">{this.props.pets.map(unit =><Pet pet={unit} onAdoptPet={this.props.onAdoptPet}/>)}</div>
  }
}

export default PetBrowser
