import { Brightness2, Brightness7 } from '@mui/icons-material';
import { Box, Tabs, Tab, ThemeProvider, createTheme, IconButton, CssBaseline } from '@mui/material';
import { useState } from 'react';
import Acknowledgements from './Acknowledgements';
import Contacts from './Contacts';
import Requirements from './Requirements';
import useLocalStorage from './utils/useLocalStorage';

export default function App() {
	const [value, setValue] = useState(1);
	const [darkTheme, setDarkTheme] = useLocalStorage('darkTheme', false);

	const theme = createTheme({
		palette: {
			mode: darkTheme ? 'dark' : 'light',
		},
	});

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<Box
				sx={{
					mb: 6,
					borderBottom: 1,
					borderColor: 'divider',
					display: 'flex',
					justifyContent: 'space-between',
				}}
			>
				<Tabs value={value} onChange={handleChange}>
					<Tab label='Requirements' />
					<Tab label='Contacts App' />
					<Tab label='Acknowledgements' />
				</Tabs>
				<IconButton sx={{ mr: 3 }} onClick={() => setDarkTheme(!darkTheme)} color='inherit'>
					{darkTheme ? <Brightness2 /> : <Brightness7 />}
				</IconButton>
			</Box>
			{value === 0 && <Requirements />}
			{value === 1 && <Contacts />}
			{value === 2 && <Acknowledgements />}
		</ThemeProvider>
	);
}
