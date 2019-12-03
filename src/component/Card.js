import React, { Component } from 'react'
import styled from 'styled-components'
import API from "../formAPI"

const Container = styled.div`
display: flex;
margin: 10px;
width: 100%;
`
const Face = styled.image`
width: 50px;
height: 50px;
`


class Card extends Component{
    constructor(props){
        super(props);
        // this.state={
        //     itemCards: null,
        // }
    }

    render(){
        return(
            <Container>
                {this.props.itemCards ? this.props.itemCards.map((value, index) => {
                    return (<div key={index}>
                        <img src={value.imageUrl} key={index} />
                    </div>)
                }) : null}
            </Container>

        )
    }
}

export default Card