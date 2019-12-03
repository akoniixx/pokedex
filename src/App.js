import React, { Component } from 'react'
import './App.css'
import styled from 'styled-components'
import Card from './component/Card'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import API from './formAPI'

const Wrapper = styled.div`
display: flex;
height: 119vh;
`
const Footer = styled.footer`
display: flex;
justify-content: center;
height: 15vh;   
left: 0;
   bottom: 0;
   width: 100%;
   background-color: red;
   color: white;
   
  
`
const COLORS = {
  Psychic: "#f8a5c2",
  Fighting: "#f0932b",
  Fairy: "#c44569",
  Normal: "#f6e58d",
  Grass: "#badc58",
  Metal: "#95afc0",
  Water: "#3dc1d3",
  Lightning: "#f9ca24",
  Darkness: "#574b90",
  Colorless: "#FFF",
  Fire: "#eb4d4b"
}

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal: false,
      pokemon: null,
      mainItems: [],
    }
  }

  toggle = () => {
    this.setState(prevState => ({
      modal: !prevState.modal
    }))
  }

  componentDidMount(){
    this.getData()
  }

  getData = (event) =>{
      API.get('cards')
      .then((response)=>{
          console.log(response)
          this.setState({pokemon: response.data})
      })
  }

  addMainItems = (e, value) => {
    this.setState(prevState => ({
      mainItems: [...prevState.mainItems, value]
    }))
  }

  render() {
    console.log(this.state.mainItems)
    return (
      <div className="App">
        <Wrapper>
          <Card itemCards={this.state.mainItems} />
        </Wrapper>
       <Footer>
        {/* <MyModal /> */}
        <Button color="danger" onClick={this.toggle}>ball</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            {this.state.pokemon ? this.state.pokemon.cards.map((value, index) => {
                return (<div key={index} className="row" >
                  <div className="col-md-4">
                    <img src={value.imageUrl} key={index} height={300} />
                  </div>
                  <div className="col-md-8">
                    {/* <h4>{value.ability.name}</h4> */}
                    <h4>{value.hp}</h4>
                    <h4></h4>
                    <button onClick={(e) => this.addMainItems(e, value)}>Add</button>
                  </div>
                </div>)
            }) : null}
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
       </Footer>
      </div>
    )
  }
}

export default App
