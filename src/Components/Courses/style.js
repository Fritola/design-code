import styled from 'styled-components'

export const Wrapper = styled.View`
    justify-content: center;
    align-items: center;
`

export const CardContainer = styled.View`
    background: #fff;
    width: 385px;
    height: 290px;
    border-radius: 14px;    
    margin-top: 20px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`
export const Cover = styled.View`
    width: 100%;
    height: 230px;
    border-top-left-radius: 14px;
    border-top-right-radius: 14px;
    overflow: hidden;
`
export const Image = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
`

export const Logo = styled.Image`
    width: 44px;
    height: 44px;    
    margin: 0 auto;
    margin-top: 20px;    
`

export const CourseInfo = styled.View`
    padding-left: 80px;    
`

export const Subtitle = styled.Text`
    color: #eee;
    padding: 20px;    
    width: 100%;    
    position: absolute;
    bottom: 40px;
`
export const Title = styled.Text`
    color: #FFF;
    margin-bottom: 10px;
    margin-left: 20px;
    font-weight: bold;
    font-size: 24px;
    position: absolute;
    bottom: 0;
`

export const Avatar = styled.Image`
    width: 44px;
	height: 44px;
	background: #000;
	border-radius: 22px;
	margin-left: 20px;
    margin-top: 10px;
    position: absolute;
    top: 0;
    left: 0;
`
export const ClassTitle = styled.Text`
    margin-top: 15px;
`
export const Teacher = styled.Text`
    color: #ccc;
`
