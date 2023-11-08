import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Home = () => {
	const navigate = useNavigate();

	return <>
		<Box sx={ {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			justifyContent: 'center',
			marginTop: "10rem"
		} }>
			<img src="../../public/bug_icon.svg" alt="Bug Image."
				 style={ { maxWidth: "8rem", maxHeight: "8rem", marginBottom: "3rem" } }/>
			<Typography sx={ { fontSize: "3rem", fontWeight: "bold" } }>
				Bug Report Tool
			</Typography>
			<Button color='primary'
					type='submit'
					size='large'
					variant='outlined'
					onClick={ () => navigate('/login') }
					sx={ { marginTop: "6rem" } }
			>
				<Typography sx={ { fontSize: "1.4rem" } }>Login</Typography>
			</Button>
		</Box>
	</>
}

export default Home
