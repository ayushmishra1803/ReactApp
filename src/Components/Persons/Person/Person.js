import React from 'react';
const person=(props)=>{
    const Style={
        padding:"16px",
        border:"1px solid black",
        textAlign:"center",
        width:"60%",
        boxShadow:"0px 3px 3px #eee", 
        margin:"auto"
    }
return (
	<div style={Style}>
		<p onClick={props.delete}>
			{" "}
			Hello {props.name} And My age is {props.age}
		</p>
		<input type="text" value={props.name} onChange={props.change} />
	</div>
);
}
export default person;