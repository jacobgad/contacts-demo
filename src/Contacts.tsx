import { Button, Container, Grid, TextField, Typography } from '@mui/material';
import { useMemo, useState } from 'react';
import Contact from './ContactCard';
import AddIcon from '@mui/icons-material/Add';
import useLocalStorage from './utils/useLocalStorage';

const letters = 'abcdefghijklmnopqrstuvwxyz';

function getRandomLetter(): string {
	return letters[Math.floor(Math.random() * 26)];
}

function generateName(): string {
	let name = getRandomLetter().toUpperCase();
	for (let i = 0; i < 4; i++) {
		name += getRandomLetter();
	}
	return name;
}

export default function Contacts() {
	const [contacts, setContacts] = useLocalStorage<string[]>('contacts', []);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [isAsc, setIsAsc] = useState(false);

	const filteredContacts = useMemo(
		() => contacts.filter((contact) => contact.toLowerCase().startsWith(searchTerm.toLowerCase())),
		[contacts, searchTerm]
	);

	function addContact() {
		const newContacts = [...contacts, generateName()].sort();
		isAsc ? setContacts(newContacts.reverse()) : setContacts(newContacts);
	}

	function deleteContact(name: string) {
		setContacts(contacts.filter((contact) => contact !== name));
	}

	function toggleSort() {
		setContacts([...contacts.reverse()]);
		setIsAsc(!isAsc);
	}

	return (
		<Container maxWidth='sm'>
			<Grid container spacing={2}>
				<Grid item xs={10}>
					<TextField
						label='Filter'
						value={searchTerm}
						onChange={(e) => setSearchTerm(e.target.value)}
						fullWidth
					/>
				</Grid>
				<Grid item xs={2}>
					<Button variant='contained' onClick={addContact} sx={{ width: '100%', height: '100%' }}>
						<AddIcon />
					</Button>
				</Grid>
				<Grid item xs={12} display='flex' justifyContent={'space-between'} gap={2}>
					<Button variant='contained' fullWidth onClick={toggleSort}>
						Sort {isAsc ? '▲' : '▼'}
					</Button>
					<Button
						variant='contained'
						color='warning'
						fullWidth
						onClick={() => setContacts(contacts.splice(1))}
					>
						Delete First
					</Button>
					<Button variant='contained' color='error' fullWidth onClick={() => setContacts([])}>
						Delete All
					</Button>
				</Grid>
				<Grid item xs={12}>
					<Typography align='right' mt={2} mr={2}>
						Showing {filteredContacts.length} of {contacts.length}
					</Typography>
				</Grid>
			</Grid>
			{filteredContacts.map((contact, idx) => (
				<Contact key={idx} contact={contact} deleteContact={deleteContact} />
			))}
		</Container>
	);
}
