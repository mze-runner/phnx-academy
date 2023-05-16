// @mui material components
import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';
import './base/styles';

import colors from './base/colors';

export default createTheme({
	palette: { ...colors, mode: 'dark' },
	// palette: { mode: 'dark' },
	typography: {
		fontSize: 14,
	},
	shape: {
		borderRadius: 6,
	},
	components: {
		// overwrite color grading on evaluation
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: 'unset'
				}
			}
		},
		MuiIconButton: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					color: grey[600],
					'&:hover': {
						backgroundColor: 'transparent',
						color: '#FFFFFF',
						cursor: 'pointer',
					},
				},
			},
		},
		MuiButton: {
			defaultProps: {
				disableRipple: true,
			},
		},
		MuiRadio: {
			defaultProps: {
				disableRipple: true,
			},
			styleOverrides: {
				root: {
					'&:hover': {
						backgroundColor: 'transparent',
					},
				},
			},
		},
	},
});

