import { Button, Container, Grid, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import ContactsList from './ContactsList';
import letters from './letters';
import AddIcon from '@mui/icons-material/Add';

function generateName(): string {
	let name = '';
	for (let i = 0; i < 5; i++) {
		const randomIdx = Math.floor(Math.random() * 26);
		name += letters[randomIdx];
	}
	name = name[0].toUpperCase() + name.slice(1);
	return name;
}

export default function App() {
	const [contacts, setContacts] = useState<string[]>([]);
	const [filteredContacts, setFilteredContacts] = useState<string[]>([]);
	const [searchTerm, setSearchTerm] = useState<string>('');
	const [isAsc, setIsAsc] = useState(false);

	function addContact() {
		const newContacts = [...contacts, generateName()];
		setContacts(newContacts.sort());
	}

	function deleteContact(name: string) {
		setContacts(contacts.filter((contact) => contact !== name));
	}

	function toggleSort() {
		setContacts([...contacts.reverse()]);
		setIsAsc(!isAsc);
	}

	useEffect(() => {
		const matching = contacts.filter((contact) =>
			contact.toLowerCase().startsWith(searchTerm.toLowerCase())
		);
		setFilteredContacts(matching);
	}, [searchTerm, contacts]);

	return (
		<Container maxWidth='sm'>
			<Grid container spacing={2} mt={5}>
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
			</Grid>
			<ContactsList contacts={filteredContacts} deleteContact={deleteContact} />
		</Container>
	);
}
