import React from 'react';
const Cockpit=(props)=>{
    return (
			<div>
				<p>Hello React We Are Here Again</p>
				<button style={props.Style} onClick={props.TogglePerson}>
					Show Person
				</button>
			</div>
		);
}
export default Cockpit