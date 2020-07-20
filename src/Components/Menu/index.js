import React, {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {AnimatedContainer, CloveView, Cover, Content, Image, Title, Subtitle} from './style'
import { Animated, TouchableOpacity, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'

import MenuItem from '../MenuItem'
import {closeMenu} from '../../../src/store/actions/Menu'

const Menu = () => {    

    const isOpen = useSelector(state => state.menu.isOpen)
    const dispatch = useDispatch()
    
    const[items] = useState([
        {
            icon: 'ios-settings',
            title: 'Account',
            text: 'settings'
        },
        {
            icon: 'ios-card',
            title: 'Billing',
            text: 'payments'
        },
        {
            icon: 'ios-compass',
            title: 'Learn React',
            text: 'start course'
        },
        {
            icon: 'ios-exit',
            title: 'Log out',
            text: 'See you soon'
        },
    ])

    const screenHeight = Dimensions.get("window").height;     
    const MoveTop = new Animated.Value(screenHeight)   

    useEffect(() => {
        CloseMenu()
    }, [isOpen])

    const CloseMenu = (action) => {                        
        if(isOpen == true){
            Animated.spring(MoveTop, {
                toValue: 54,
                useNativeDriver: false            
              }).start();
        }

        if(action == false){                        
            Animated.spring(MoveTop, {
                toValue: screenHeight,
                useNativeDriver: false
            }).start(({finished}) => {
                dispatch(closeMenu())
            })            
        }
    }
    
    return(
        <AnimatedContainer style={{ top: MoveTop }}>
            <Cover>
                <Image source={require('../../../assets/background2.jpg')}/>
                <Title>Fritz</Title>
                <Subtitle>Programmer at FritzTech</Subtitle>
            </Cover>
            <TouchableOpacity onPress={() =>CloseMenu(false)} style={{position: "absolute", top: 120, left: "50%", marginLeft: -22, zIndex: 1}}>
                <CloveView>
                    <Ionicons name="ios-close" size={44} color="#546bfb"/>
                </CloveView>
            </TouchableOpacity>
            <Content style={{height: screenHeight}}>
                {items.map((item,i) =>
                    <MenuItem key={i} icon={item.icon} title={item.title} text={item.text}/>
                )}
            </Content>
        </AnimatedContainer>
    )
}

export default Menu;