import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../axios-instance";
import BugCard from "./BugCard.jsx";
import { useJwt } from "react-jwt";

const BugsDashboard = () => {
	const [bugs, setBugs] = useState([]);
	const [isBugModalOpen, setIsBugModalOpen] = useState(false);
	const { decodedToken: user } = useJwt(localStorage.getItem("token"));

	useEffect(() => {
		const getBugs = async () => {
			const results = await axiosInstance.get('/bugs');
			results && setBugs(results.data)
		}

		try {
			getBugs().then(() => console.log("Successful fetch!"));
		} catch (e) {
			console.log("Could net fetch bugs.")
		}

	}, []);

	return (
		<Box>
			<AppBar position="static" sx={ {
				backgroundColor: "lightBlue",
				display: "flex",
				flexGrow: "1",
				justifyContent: "center",
				textAlign: "center",
				alignItems: "center"
			} }>
				<Toolbar>
					<Typography variant="h4" color="black">
						Bugs
					</Typography>
				</Toolbar>
			</AppBar>
			<Box sx={ { marginTop: "3rem", maxWidth: "98%" } }>
				<ul style={ { display: "grid", gap: "1rem", justifyContent: "center" } }>
					{
						bugs?.map(bug => <BugCard key={ bug?._id } title={ bug?.title } steps={ bug?.steps }
												  role={ user.data.role } onSetIsBugModalOpen={ setIsBugModalOpen }/>)
					}
				</ul>
			</Box>
		</Box>
	);
};

export default BugsDashboard;

