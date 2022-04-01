import { Card, CardContent, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
	contacts: string[];
	deleteContact: (name: string) => void;
}

export default function ContactsList({ contacts, deleteContact }: Props) {
	return (
		<>
			{contacts.map((contact, index) => (
				<Card key={index} sx={{ m: 2 }}>
					<CardContent
						sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
					>
						<Typography>{contact}</Typography>
						<IconButton onClick={() => deleteContact(contact)}>
							<DeleteIcon color='error' />
						</IconButton>
					</CardContent>
				</Card>
			))}
		</>
	);
}
