import React from 'react'
import {Container, Cover, Image, Title, Logo, Caption, Subtitle, Content, Wrapper} from './style'

const Card = () => {
    return(
        <Container>
            <Cover>
                <Image source={require('../../../assets/background2.jpg')}/>
                <Title>Styled Components</Title>
            </Cover>
            <Content>
                <Logo source={require('../../../assets/logo-react.png')}/>
                <Wrapper>
                    <Caption>React Native</Caption>                    
                    <Subtitle>React 5 of 12 sections</Subtitle>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Card