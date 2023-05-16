import React, { FC } from 'react';
import { Card, CardMedia, Typography, CardContent, CardActions, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LearningCardProps {
	img: string; // file name on public folder public/assets/FILE_NAME
	header: string;
	body: string;
	link: string
}

const LearningCard: FC<LearningCardProps> = ({ img, header, body, link } ) => {

	const navigate = useNavigate();
	const onActionButtonClick = () => {
		navigate(link);
	};
	
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardMedia
				component="img"
				height="140"
				image={`${window.location.origin}/assets/${img}`}
				alt="phnx academy"
			/>
			<CardContent>
				<Typography gutterBottom variant="h5" component="div">{header}</Typography>
				<Typography variant="body2" color="text.secondary">{body}</Typography>
			</CardContent>
			<Box sx={{ marginTop: 'auto !important' }}>
				<CardActions sx={{ justifyContent: 'center' }}>
					<Button onClick={onActionButtonClick} size="medium" color="primary">
					Open
					</Button>
				</CardActions>
			</Box>
		</Card>);
};

export default LearningCard;