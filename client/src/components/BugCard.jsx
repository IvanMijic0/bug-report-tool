import Card from "../ui/Card.jsx";
import React from "react";
import { Box, Button, CardContent, Typography } from "@mui/material";

const BugCard = ({ title, steps, role, onSetIsBugModalOpen }) => {
	return <Box sx={ {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		textAlign: "center",
		justifyContent: 'center',
	} }>
		<Card>
			<CardContent>
				<Typography sx={ { fontWeight: "bold" } }><span style={ { color: "lightBlue" } }>Title:</span> { title }
				</Typography>
				<Typography sx={ { fontWeight: "bold" } }><span
					style={ { color: "lightblue" } }>Reproduction Steps:</span> { steps }</Typography>
				{
					role === 'qa' ?
						<Button variant="outlined" sx={ { marginTop: "2rem" } }
								onClick={ () => onSetIsBugModalOpen(true) }>Edit</Button>
						: <Button variant="outlined" sx={ { marginTop: "2rem" } }>Finish</Button>
				}
			</CardContent>
		</Card>
	</Box>
}

export default BugCard
