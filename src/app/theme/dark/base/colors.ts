import { PaletteOptions } from '@mui/material/styles/createPalette';

const colors : PaletteOptions = {
	// general
	// Used by `getContrastText()` to maximize the contrast between
	// the background and the text.
	contrastThreshold: 3,
	// Used by the functions below to shift a color's luminance by approximately
	// two indexes within its tonal palette.
	// E.g., shift from Red 500 to Red 300 or Red 700.
	tonalOffset: 0.2,
	// mu
	background: {
		default: '#1E1E24',
		// default: '#1a2035', // source
		// sidenav: '#1f283e',
		// card: '#202940',
		// paper: '#27293D',
		paper: '#1e1e2f' // text mode
	},
	// main colors
	primary: {
		main: '#1d8cf8', // '#1d8cf8', // old project e14eca
	},
	// consider action color for now
	secondary: {
		main: '#e14eca', // '#e14eca', // old project f4f5f7
	},
	// Fot information only
	info: {
		main: '#1d8cf8',  //'#1A73E8', // olf project 1d8cf8
	},
	success: {
		main: '#00f2c3',
	},
	error: {
		main: '#fd5d93',
	},
	warning: {
		main: '#ff8d72',
	},
	// text: {
	//     primary: '#ffffffcc',
	//     // focus: '#ffffffcc',
	// },

	// transparent: {
	//     main: 'transparent',
	// },

	// white: {
	//     main: '#ffffff',
	//     focus: '#ffffff',
	// },

	// black: {
	//     light: '#000000',
	//     main: '#000000',
	//     focus: '#000000',
	// },

	// light: {
	//     main: '#f0f2f566',
	//     focus: '#f0f2f566',
	// },

	// grey: {
	//     100: '#f8f9fa',
	//     200: '#f0f2f5',
	//     300: '#dee2e6',
	//     400: '#ced4da',
	//     500: '#adb5bd',
	//     600: '#6c757d',
	//     700: '#495057',
	//     800: '#343a40',
	//     900: '#212529',
	// },

	// gradients: {
	//     primary: {
	//         main: '#EC407A',
	//         actions: '#D81B60',
	//     },

	//     secondary: {
	//         main: '#747b8a',
	//         actions: '#495361',
	//     },

	//     info: {
	//         main: '#49a3f1',
	//         actions: '#1A73E8',
	//     },

	//     success: {
	//         main: '#66BB6A',
	//         actions: '#43A047',
	//     },

	//     warning: {
	//         main: '#FFA726',
	//         actions: '#FB8C00',
	//     },

	//     error: {
	//         main: '#EF5350',
	//         actions: '#E53935',
	//     },

	//     light: {
	//         main: '#EBEFF4',
	//         actions: '#CED4DA',
	//     },

	//     dark: {
	//         main: '#323a54',
	//         actions: '#1a2035',
	//     },
	// },
};

export default colors;
