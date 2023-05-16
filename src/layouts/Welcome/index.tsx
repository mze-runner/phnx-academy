import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Container from '@mui/material/Container';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const WelcomeLayout: FC = () => {
	const theme = useTheme();
	return (
		<>
			<Container maxWidth="lg" sx={{ marginTop: '1.5rem' }} disableGutters={useMediaQuery(theme.breakpoints.down('md'))}>
				<Outlet />
			</Container>
		</>
	);
};

export default WelcomeLayout;
