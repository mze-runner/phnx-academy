import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
// layouts
import WelcomeLayout from '../layouts/Welcome';

// pages
import HomePage from '../pages/Home';

// under construction plug page

const router = createBrowserRouter([
	{
		path: '/',
		element: <WelcomeLayout />,
		children: [ {index: true, element: <HomePage/>} ]
	},
]);


export default router;
