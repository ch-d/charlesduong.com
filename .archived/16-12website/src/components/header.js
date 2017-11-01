import React from 'react'
import Social from './social'
import Button from './button'
import styled from 'styled-components/';

const Box = styled.div`
	background-color:#FAFAFA;
	border: 3px double #F8F8F8;
`;

export default () => (
	<header className='vh-100 w-100 dt pa3 pa4-l'>
		<Box className='dtc v-mid v-btm-l navy sans-serif pa3 pa4-l tc tl-ns'>
			<h1 className='f2 fw1 ma0 tracked'>charles duong</h1>
			<h2 className='f6 fw6 ttu measure pb2 ma0 tracked-mega'>product designer</h2>
			<Social
				url='https://twitter.com/hicharlesd'
				site='twitter'
				color='1DA1F2'
			/>
			<Social
				url='https://linkedin.com/in/charlesduong'
				site='linkedin'
				color='0077B5'
			/>
			<Social
				url='https://github.com/ch-d'
				site='github'
				color='181717'
			/>
			<Social
				url='mailto:charles@charlesduong.com'
				site='gmail'
				color='D14836'
			/>

		</Box>
	</header>
)
