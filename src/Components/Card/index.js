import React from 'react'
import {Container, Cover, Image, Title, Logo, Caption, Subtitle, Content, Wrapper} from './style'

const Card = ({title, image, logo, caption, subtitle}) => {
    return(
        <Container>
            <Cover>
                <Image source={image}/>
                <Title>{title}</Title>
            </Cover>
            <Content>
                <Logo source={logo}/>
                <Wrapper>
                    <Caption>{caption}</Caption>                    
                    <Subtitle>{subtitle}</Subtitle>
                </Wrapper>
            </Content>
        </Container>
    )
}

export default Card