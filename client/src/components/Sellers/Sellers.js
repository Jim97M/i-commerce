import React from 'react';
import './Sellers.scss';
import Waves from '../../assets/bg-pattern-card.svg';
import TopCircle from '../../assets/bg-pattern-top.svg';
import BottomCircle from '../../assets/bg-pattern-bottom.svg';

const App = () => {
	return (
		<div className='App'>
			<img className='TopCircle' src={TopCircle} alt='Top Circle' />
			<img className='BottomCircle' src={BottomCircle} alt='Bottom Circle' />
			<div className='CardContainer'>
				<img src={Waves} alt='Top Section' />
				<img
					className='ProfilePhoto'
					alt='Profile'
				/>
				<div className='Details'>
					<h1>
						Victor Crest
						<span>26</span>
					</h1>
					<h2>London</h2>
				</div>
				<div className='Social'>
					<div className='Followers'>
						<h1>80K</h1>
						<h3>Followers</h3>
					</div>
					<div className='Likes'>
						<h1>803K</h1>
						<h3>Likes</h3>
					</div>
					<div className='Photos'>
						<h1>1.4K</h1>
						<h3>Sales</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;