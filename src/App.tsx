import { Box, Tabs, Tab, Container } from '@mui/material';
import { useState } from 'react';
import Acknowledgements from './Acknowledgements';
import Contacts from './Contacts';
import Requirements from './Requirements';
import useLocalStorage from './utils/useLocalStorage';

export default function App() {
	const [value, setValue] = useLocalStorage<number>('tab', 1);

	const handleChange = (event: React.SyntheticEvent, newValue: number) => {
		setValue(newValue);
	};

	return (
		<>
			<Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 6 }}>
				<Tabs value={value} onChange={handleChange} aria-label='basic tabs example'>
					<Tab label='Requirements' />
					<Tab label='Contacts App' />
					<Tab label='Acknowledgements' />
				</Tabs>
			</Box>
			{value === 0 && <Requirements />}
			{value === 1 && <Contacts />}
			{value === 2 && <Acknowledgements />}
		</>
	);
}
