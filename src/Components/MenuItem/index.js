import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import {Container, Content, IconView, Title, Text} from './style'

const MenuItem = ({icon, title, text}) => {
    return(
        <Container>
            <IconView>
                <Ionicons name={icon} size={24} color="#546bfb"/>
            </IconView>
            <Content>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Content>
        </Container>
    )
}

export default MenuItem