import React from 'react'
import Social from './social'



export default () => (
	<header className='vh-100 w-100 dt pa3 pa4-l'>
		<div className='dtc v-mid v-btm-l navy sans-serif bg-washed-blue ba b--light-blue pa3 pa4-l tc tl-ns'>
			<h1 className='f2 fw1 ma0 tracked'>charles duong</h1>
			<h2 className='f6 fw6 ttu measure bb bw2 b--light-blue pb2 ma0 tracked-mega'>product designer</h2>

			<div className="flex-ns">
				<Social
					url='https://twitter.com/hicarlesd'
					site='twitter'
					color='1DA1F2'
				/>
				<Social
					url='https://linkedin.com/in/charlesduong'
					site='linkedin'
					color='0077B5'
				/>
				<Social
					url='https://instagram.com/charlesduong'
					site='instagram'
					color='E4405F'
				/>
			<a className="ph2 flex items-center-ns" href ='mailto:charles@charlesduong.com'>E-mail</a>
			</div>

		</div>
	</header>
)
