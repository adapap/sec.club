import React from "react";
import { Box, Container, Grid } from "@material-ui/core";
import "./Home.scss";
import logo from "../../assets/logo.svg";

export default function HomeView() {
	return (
		<Box>
			<Grid container direction="column" justify="center" alignItems="center" className="hero">
				<Grid item>
					<img src={logo} alt="SEC logo" width="400" />
				</Grid>
				<Grid item>
					<span>Software Engineering Club</span>
				</Grid>
			</Grid>
			<Container>
				<h1>hi this is home :)</h1>
				<p>this is a paragraph</p>
			</Container>
		</Box>
	)
}