import React, { FC, PropsWithChildren } from 'react';
import { Box, Divider, Typography } from '@mui/material';
import RocketLaunchSharpIcon from '@mui/icons-material/RocketLaunchSharp';

interface SectionProps {
    header: string;
    color?: string;
}

const LearningModule: FC<PropsWithChildren<SectionProps>> = (
	{
		header,
		color = 'info.main',
		children
	}) => {

	return (
		<Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '0.5rem'  }}>
			<Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '1rem'  }}>
				<RocketLaunchSharpIcon fontSize="large" />
				<Typography variant="h4" sx={{ color }}>{header}</Typography>
			</Box>
			<Divider />
			<Box sx={{ display: 'flex', flexDirection: 'row', columnGap: '2rem', rowGap: '2rem',  flexWrap: 'wrap' }}>
				{children}
			</Box>
		</Box>
	);
};

export default LearningModule;