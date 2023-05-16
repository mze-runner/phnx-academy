import React, { FC } from 'react';
import { Divider, Typography } from '@mui/material';


const WelcomeWidget: FC = () => {

	return (
		<>
			<Typography variant="h4" sx={{ color: 'info.main'}}>useState show case</Typography>
			<Divider />
		</>
	);
};

export default WelcomeWidget;