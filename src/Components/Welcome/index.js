import React from 'react'
import {TouchableOpacity} from 'react-native'
import { TitleBar, Avatar, Title, Name} from './style'
import {Animated, Dimensions} from 'react-native'
import {NotificationIcon} from '../Icons'
import {useDispatch,useSelector} from 'react-redux'
import {openMenu} from '../../../src/store/actions/Menu'

const Welcome = () => {

	const screenHeight = Dimensions.get("window").height;     
    const MoveTop = new Animated.Value(screenHeight)   

	const isOpen = useSelector(state => state.menu.isOpen)
	const dispatch = useDispatch()

	const open = () => {						
		dispatch(openMenu())
		console.log(isOpen)	
	}	
	
    return(
        <TitleBar>

				<TouchableOpacity onPress={open} style={{position: "absolute", top: 0, left: 20}}>
					<Avatar source={require('../../../assets/avatar.jpg')}/>		
				</TouchableOpacity>

				<Title>Welcome back,</Title>      
				<Name>Fritz</Name>
				<NotificationIcon 					
					style={{ position: "absolute", right: 20, top: 5 }}
				/>
			
		</TitleBar>
    )
}

export default Welcome