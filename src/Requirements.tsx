import { Typography, Container } from '@mui/material';

export default function Requirements() {
	return (
		<Container maxWidth='md'>
			<Typography variant='h4'>Building a React Contact List Application</Typography>
			<br />
			<Typography variant='h5'>Requirements:</Typography>
			<ul>
				<li>
					<Typography>Input field to filter out contacts</Typography>
				</li>
				<ul>
					<li>
						<Typography>
							As text is entered into the input field contact list should be updated to only display
							contacts beginning with letter(s) entered into the input field
						</Typography>
					</li>
				</ul>
				<li>
					<Typography>Button to add a new contact</Typography>
					<ul>
						<li>
							<Typography>
								If button = clicked/pressed a new name will be randomly generated + added to contact
								list
							</Typography>
						</li>
						<li>
							<Typography>Randomly generated name</Typography>
						</li>
						<ul>
							<li>
								<Typography>5 letters:</Typography>
							</li>
							<li>
								<Typography>
									First letter as a capital letter and rest small letters (Random between "Aaaaa" to
									"Zzzzz")
								</Typography>
							</li>
						</ul>
					</ul>
				</li>
				<li>
					<Typography>
						Contacts should be displayed in a sorted order (ascending alphabetical??)
					</Typography>
				</li>
				<li>
					<Typography>Simply designed page</Typography>
				</li>
			</ul>

			<Typography variant='h5'>Example of filter:</Typography>
			<ul>
				<li>
					<Typography>
						First all contacts are shown: [Arthur", "Bella", "Catherine", "Frank", "Rick", "Rohan",
						"Ron", "Steve", "Zodik"]
					</Typography>
				</li>
				<li>
					<Typography>
						If the letter "R" is typed into the input field, the contacts list should only show
						"Rick", "Rohan", "Ron"]
					</Typography>
				</li>
				<li>
					<Typography>
						If the letters "Ro" are typed into the input field the contacts list should only show
						[Rohan", "Ron']
					</Typography>
				</li>
			</ul>

			<Typography variant='h5'>Example of adding a new contact:</Typography>
			<ul>
				<li>
					<Typography>
						First all contacts are shown: ["Arthur", "Bella", "Catherine", "Frank", "Rick", "Rohan",
						"Ron", "Steve", "Zodik"]
					</Typography>
				</li>
				<li>
					<Typography>If the button is dicked, a name is generated i.e. "Kdumw"</Typography>
				</li>
				<li>
					<Typography>
						Then the contact should show [Arthur", "Bella", "Catherine", "Frank", "Kdumw", "Rick",
						"Rohan", "Ron", "Steve", "Zodik"]
					</Typography>
				</li>
			</ul>

			<Typography variant='h5'>Bonus Tasks:</Typography>
			<ul>
				<li>
					<Typography>Clear all contacts</Typography>
				</li>
				<li>
					<Typography>Delete first contact in list</Typography>
				</li>
				<li>
					<Typography>Delete individual contact</Typography>
				</li>
				<li>
					<Typography>Reverse order of list (reverse alphabetical)</Typography>
				</li>
			</ul>
		</Container>
	);
}
