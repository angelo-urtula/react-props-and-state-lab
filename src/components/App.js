import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = (change) => {
    this.setState({
      filters: {
        type: change
      }
    })
  }

  onFindPetsClick =() => {
    if (this.state.filters.type === 'all'){
    fetch('/api/pets')
    .then(response => response.json())
    .then(data => this.setState({pets: data}))
  } else {
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(response => response.json())
      .then(data => this.setState({pets: data}))
    }
  }

  onAdoptPet = (id) => {
    this.setState(prevState => ({
      pets: prevState.pets.map(
        pet => (pet.id === id ? Object.assign(pet, {isAdopted: true}) : pet)
      )
    }))
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter {this.state.filters.type}</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
