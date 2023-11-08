import { Box, Button, CardActions, CardContent, TextField } from "@mui/material";
import { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = props => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const navigate = useNavigate();

	useEffect(() => {

	}, []);

	const loginHandler = async e => {
		e.preventDefault();

		const result = await axios.post('http://localhost:4000/auth/login', {
			email: email,
			password: password
		})
		if (result?.data && result?.status === 200) {
			localStorage.setItem("token", result.data.access_token);
			navigate('/bugs-overview')
		}
	}

	return <form onSubmit={ loginHandler }>
		<Box sx={ {
			display: 'flex',
			flexDirection: 'column',
			alignItems: 'center',
			textAlign: "center",
			justifyContent: 'center',
			marginTop: "15vh"
		} }>
			<Card sx={ { minWidth: 400 } }>
				<div>
					<h1 style={ { fontSize: "2vw" } }>Login Form</h1>
				</div>
				<CardContent>
					<TextField
						id="outlined-basic-email"
						label="Email"
						variant="outlined"
						fullWidth
						margin="normal"
						value={ email }
						onChange={ e => setEmail(e.target.value) }
					/>
					<TextField
						id="outlined-basic-password"
						label="Password"
						variant="outlined"
						type="password"
						fullWidth
						margin="normal"
						value={ password }
						onChange={ e => setPassword(e.target.value) }
					/>
				</CardContent>
				<CardActions sx={ { justifyContent: 'center' } }>
					<Button
						color='primary'
						type='submit'
						size='large'
						variant='outlined'
					>
						Submit
					</Button>
				</CardActions>
			</Card>
		</Box>
	</form>
};

export default Login;