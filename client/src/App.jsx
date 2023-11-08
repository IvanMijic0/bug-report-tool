import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login.jsx";
import { createTheme, ThemeProvider } from "@mui/material";
import BugsDashboard from "./components/BugsDashboard.jsx";
import Home from "./components/Home.jsx";

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
	},
});

const App = () => {

	return <ThemeProvider theme={ darkTheme }>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={ <Home/> } index={ true }/>
				<Route path='/login' element={ <Login/> }/>
				<Route path='/bugs-overview' element={ <BugsDashboard/> }/>
			</Routes>
		</BrowserRouter>
	</ThemeProvider>
}

export default App
