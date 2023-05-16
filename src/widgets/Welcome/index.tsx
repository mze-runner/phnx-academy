import React, { FC } from 'react';
import { Box } from '@mui/material';
import LearningModule from '../../shared/ui/LearningModule';
import LearningCard from './ui/LearningCard';


const useStateCards = [
	{
		header: 'useState Basics',
		img: 'card_sample.jpg',
		body: 'Basics of useState hook. How to add to the functional component and update the state of the component.',
		link: '/useState/example01'
	},
];

const WelcomeWidget: FC = () => {

	return (
		<>
			<Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '2rem' }}>
				<LearningModule header="useState show case" >
					{useStateCards.map(( el ) => {
						return <LearningCard key={el.header} header={el.header} img={el.img} body={el.body} link={el.link} />;
					})}
				</LearningModule>
				<LearningModule header="useReducer show case" >Coming Soon....</LearningModule>
				<LearningModule header="useEffect show case" >Coming Soon....</LearningModule>
			</Box>
		</>
	);
};

export default WelcomeWidget;