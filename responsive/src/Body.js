import React from 'react';
import Card from './Card';

function Body() {

	return (
		<div className="flex-container">
			{/* {(()=>{
					for(let i=0;i<5;i++)
					{
						console.log(i);
					}
				})()}  //use to render component multiple times			 */}
			<Card title="State" para="State is like a data store to the ReactJS component. It is mostly used to update the component when user performed some action." />
			<Card title="Props" para="React controls the data flow in the components with state and props. The data in states and props are used to render the Component with dynamic data." />
			<Card title="Hook" para="Hooks are functions that let you “hook into” React state and lifecycle features from function components." />
			<Card title="SCSS" para="SCSS is a preprocessor which lets you use features that aren't a part of the wider CSS." />
			<Card title="Component" para="Components are the building blocks of any React app and a typical React app will have many of these." />
			<Card title="Function" para="A functional component is just a plain JavaScript function which accepts props as an argument and returns a React element." />
		</div>
	);
}

export default Body;