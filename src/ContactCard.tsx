import { Card, CardContent, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

interface Props {
	contact: string;
	deleteContact: (name: string) => void;
}

export default function ContactCard({ contact, deleteContact }: Props) {
	return (
		<Card sx={{ m: 2 }}>
			<CardContent sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
				<Typography>{contact}</Typography>
				<IconButton onClick={() => deleteContact(contact)}>
					<DeleteIcon color='error' />
				</IconButton>
			</CardContent>
		</Card>
	);
}
