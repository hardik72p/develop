import React from 'react';

function Header() {
	return (
		<div className="header">
			<div className="left-header"><h1>Header</h1></div>
			<div className="right-header">
				<div>
					<h5 >Home</h5>
				</div>
				<div>
					<h5>Menu</h5>
				</div>
				<div>
					<h5>Career</h5>
				</div>
				<div>
					<h5>Technology</h5>
				</div>
				<div>
					<h5>About Us</h5>
				</div>
			</div>
		</div>
	);
}

export default Header;