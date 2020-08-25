import React from "react";
import Person from "./Person/Person";
const persons = (props) => {
	return (
		<div>
			{props.person.map((re, index) => {
				return (
					<Person
						name={re.name}
						age={re.age}
						key={index}
						change={(event) => props.changed(event, index)}
						delete={props.deleted.bind(this, index)}
					/>
				);
			})}
		</div>
	);
};
export default persons;
