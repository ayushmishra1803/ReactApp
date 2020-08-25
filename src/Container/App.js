import React from "react";
import "./App.css";
import Radium from "radium";
import Persons from "../Components/Persons/Persons";
class App extends React.Component {
	state = {
		person: [
			{ name: "Ayush Mishra", age: 20 },
			{ name: "Kalpana Mishra", age: 63 },
			{ name: "Sunil Kumar Mishra", age: 62 },
		],
		Show: true,
	};
	Style = {
		backgroundColor: "red",
		color: "white",
		padding: "16px",
		margin: "16px",
		":hover": {
			backgroundColor: "blue",
		},
	};
	ShowPerson = -null;
	TogglePersonHandler = () => {
		const show = this.state.Show;
		this.setState({
			Show: !show,
		});
		console.log(this.state.Show);
	};

	ChangePersonsHandler = (event, index) => {
		console.log(event.target.value + index);
		const Person = this.state.person;
		Person[index].name = event.target.value;
		this.setState({
			person: Person,
		});
	};
	deletePersonHandler = (index) => {
		let PersonsArray = [...this.state.person];
		PersonsArray.splice(index, 1);
		this.setState({
			person: PersonsArray,
		});
	};
	render() {
		let ShowPerson = null;
		if (this.state.Show === true) {
			ShowPerson = (
				<div>
					<Persons
						person={this.state.person}
						changed={this.ChangePersonsHandler}
						deleted={this.deletePersonHandler}
					/>
				</div>
			);
		}
		return (
			<div className="App">
				<p>Hello React We Are Here Again</p>
				<button style={this.Style} onClick={this.TogglePersonHandler}>
					Show Person
				</button>

				{ShowPerson}
			</div>
		);
	}
}

export default Radium(App);
