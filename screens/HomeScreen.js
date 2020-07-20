import React, {useState, useEffect} from 'react';
import {useSelector} from 'react-redux'
import Welcome from '../src/Components/Welcome'
import { ScrollView, SafeAreaView, Animated, Easing, StatusBar } from 'react-native'
import styled from 'styled-components'
import Card from '../src/Components/Card';
import Logo from '../src/Components/Logo';
import Courses from '../src/Components/Courses';
import Menu from '../src/Components/Menu'

const HomeScreen = () => {    
	const isOpen = useSelector(state => state.menu.isOpen)

	const[logos, setLogo] = useState([
		{
			image: require('../assets/logo-framerx.png'),
			text: "Framer X"
		},
		{
			image: require('../assets/logo-figma.png'),
			text: "Figma"
		},
		{
			image: require('../assets/logo-studio.png'),
			text: "Studio"
		},
		{
			image: require('../assets/logo-react.png'),
			text: "React"
		},
		{
			image: require('../assets/logo-swift.png'),
			text: "Swift"
		},
		{
			image: require('../assets/logo-sketch.png'),
			text: "Sketch"
		},		
	])

	const newScale = new Animated.Value(1)
	const NewOpacity = new Animated.Value(1)

	useEffect(() => {
		StatusBar.setBarStyle("dark-content", true)
		toggleMenu()
	}, [isOpen])

	const toggleMenu = () => {
		if(isOpen == true){
			Animated.timing(newScale, {
				toValue: 0.95,
				duration: 300,
				useNativeDriver: false,
				easing: Easing.in()
			}).start()
			Animated.spring(NewOpacity, {
				toValue: 0.5,
				useNativeDriver: false,
			}).start()

			StatusBar.setBarStyle("light-content", true)
		}
		if(isOpen == false) {
			Animated.timing(newScale, {
				toValue: 1,
				duration: 300,
				useNativeDriver: false,
				easing: Easing.in()
			}).start()
			Animated.spring(NewOpacity, {
				toValue: 1,
				useNativeDriver: false,
			}).start()

			StatusBar.setBarStyle("dark-content", true)
		}
	}

	const[Cards] = useState([
		{
			title: "React Native for Designers",
			image: require('../assets/background11.jpg'),
			subtitle: "React Native",
			caption: "1 of 12 sections",
			logo: require('../assets/logo-react.png')
		},
		{
			title: "Styled Components",
			image: require('../assets/background12.jpg'),
			subtitle: "React Native",
			caption: "2 of 12 sections",
			logo: require('../assets/logo-react.png')
		},
		{
			title: "Props and Icons",
			image: require('../assets/background13.jpg'),
			subtitle: "React Native",
			caption: "3 of 12 sections",
			logo: require('../assets/logo-react.png')
		},
		{
			title: "React Native for Designers",
			image: require('../assets/background1.jpg'),
			subtitle: "React Native",
			caption: "4 of 12 sections",
			logo: require('../assets/logo-react.png')
		},

	])

  return (
	<RootView>
		<Menu />
		<AnimatedContainer style={{transform: [{ scale: newScale}], opacity: NewOpacity}}>
			<SafeAreaView>
				<ScrollView>				
					<Welcome />
					<ScrollView showsHorizontalScrollIndicator={false} style={{flexDirection: "row", padding: 20, paddingLeft: 12, paddingTop: 30}} horizontal={true}>
						{logos.map((logo,i) => 
							<Logo key={i} image={logo.image} text={logo.text}/>					
						)}
					</ScrollView>
					<Subtitle>
						Continue Learning
					</Subtitle>				
					<ScrollView horizontal={true} style={{ paddingBottom: 30 }} showsHorizontalScrollIndicator={false}>
						{Cards.map((card, i) =>
							<Card 
								key={i}
								title={card.title} 
								image={card.image}
								caption={card.caption}
								logo={card.logo}
								subtitle={card.subtitle}
							/>
						)}
					</ScrollView>
					<Subtitle>popular courses</Subtitle>
					<Courses avatar={require('../assets/avatar.jpg')} image={require('../assets/background1.jpg')} logo={require('../assets/logo-studio.png')}/>			
				</ScrollView>
			</SafeAreaView>
		</AnimatedContainer>
	</RootView>
  );
}

const RootView = styled.View`
	background: #000;
	flex: 1;
`
const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;
	border-radius: 10px;	
`
export const AnimatedContainer = Animated.createAnimatedComponent(Container);

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 20px;
	text-transform: uppercase;
`
export default HomeScreen