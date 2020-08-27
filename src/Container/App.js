import React from "react";
import "./App.css";
import Radium from "radium";
import Persons from "../Components/Persons/Persons";
import Cockpit from "../Components/Cockpit/cockpit";
class App extends React.Component {
	constructor(props) {
		super(props);
		console.log("Constructor Called");
	}

	static getDerivedSateFromProps(props, state) {
		console.log("Method getDerived from Props");
	}

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
		console.log("Redner Called");
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
				<Cockpit Style={this.Style} TogglePerson={this.TogglePersonHandler} />

				{ShowPerson}
			</div>
		);
	}
	componentDidMount() {
		console.log("componentDidMount");
	}
}

export default Radium(App);
