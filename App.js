import React from 'react';
import Welcome from './src/Components/Welcome'

import styled from 'styled-components'
import Card from './src/Components/Card';

export default function App() {
  return (
    <Container>
		<Welcome />
		<Subtitle>
			Continue Learning
		</Subtitle>
		<Card />
    </Container>
  );
}

const Container = styled.View`
	flex: 1;
	background-color: #f0f3f5;	
`

const Subtitle = styled.Text`
	color: #b8bece;
	font-weight: 600;
	font-size: 15px;
	margin-left: 20px;
	margin-top: 50px;
	text-transform: uppercase;
`
