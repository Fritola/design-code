import React from 'react'
import { TitleBar, Avatar, Title, Name,  WelcomeContainer} from './style'

const Welcome = () => {
    return(
        <TitleBar>
			<Avatar source={require('../../../assets/avatar.jpg')}/>
			<WelcomeContainer>
				<Title>Welcome back,</Title>      
				<Name>Fritz</Name>
			</WelcomeContainer>
		</TitleBar>
    )
}

export default Welcome