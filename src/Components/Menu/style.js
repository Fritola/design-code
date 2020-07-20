import styled from 'styled-components'
import {Animated} from 'react-native'

export const Container = styled.View`
    position: absolute;
    background: #FFF;
    width: 100%;
    height: 100%;
    z-index: 100;
    border-radius: 10px;
    overflow: hidden;
`
export const AnimatedContainer = Animated.createAnimatedComponent(Container);

export const Cover = styled.View`
    height: 142px;
    background: #000;
    justify-content: center;
    align-items: center;
`
export const Content = styled.View`    
    /* height: ${props => props.screenHeight}; */
    background: #f0f3f5;
    padding: 50px;
`
export const CloveView = styled.View`
    width: 44px;
    height: 44px;
    border-radius: 22px;
    background: #fff;
    justify-content: center;
    align-items: center;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.15);
`
export const Image = styled.Image`
    position: absolute;
    width: 100%;
    height: 100%;
`
export const Title = styled.Text`
    color: #fff;
    font-size: 24px;
    font-weight: 600;
`
export const Subtitle = styled.Text`
    font-size: 13px;
    color: rgba(255, 255, 255, 0.5);
    margin-top: 8px;
`