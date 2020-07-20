import React from 'react'
import {
    CardContainer,
    Logo,
    Cover,
    Image,
    Wrapper,
    CourseInfo,
    Subtitle,
    Title,
    Avatar,
    ClassTitle,
    Teacher
} from './style'

const Courses = ({avatar, image, logo}) => {
    return (
        <Wrapper>            
            <CardContainer>
                <Cover>
                    <Image source={image}/>
                    <Logo source={logo} resizeMode="contain"/>
                    <Subtitle>10 SECTIONS</Subtitle>
                    <Title>Prototype in InVision Studio</Title>
                </Cover>   
                <CourseInfo>
                    <Avatar source={avatar}/>
                    <ClassTitle>Learning to design and code a React site</ClassTitle>
                    <Teacher>Taught by Men to</Teacher>
                </CourseInfo>          
            </CardContainer>
        </Wrapper>
    )
}

export default Courses