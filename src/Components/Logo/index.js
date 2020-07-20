import React from 'react'
import {Container, Image, Text} from './style'

const Logo = ({image, text}) => {
    return(
        <Container>
            <Image source={image} resizeMode="contain"/>
            <Text>{text}</Text>
        </Container>
    )
}

export default Logo