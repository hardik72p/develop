import React, { Component } from "react";

import logo from '../assets/image/logo.png';
import { logOut } from '../utils';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBell, faUser, faLock, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Navbar from '../common-component/Navbar';

class Header extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dropdownOpen: false
		}
	}

	toggle = () => this.setState({ dropdownOpen: !this.state.dropdownOpen });

	logOutHandler = () => {
		logOut();
		this.props.history.replace("/login");
	}

	render() {
		const { dropdownOpen } = this.state;
		let userName = localStorage.getItem('userName');
		return (
			<>
				<div className="header">
					<div className="img">
						<img src={logo} alt="seeradio" />
					</div>
					<div className="icon">
						<div className="notification">
							<FontAwesomeIcon icon={faBell} />
						</div>
						<div className="user">
							<div className='testCircle'>
								{userName[0] + userName[userName.indexOf(' ') + 1]}
							</div>
							<ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
								<DropdownToggle color="link" style={{ padding: "0px" }}>
									<FontAwesomeIcon icon={faChevronDown} />
								</DropdownToggle>
								<DropdownMenu>
									<DropdownItem>
										<FontAwesomeIcon icon={faUser} style={{ color: "#3a85f5" }} />		Profile
								</DropdownItem>
									<DropdownItem>
										<FontAwesomeIcon icon={faLock} style={{ color: "#3a85f5" }} />		Change Password
								</DropdownItem>
									<DropdownItem onClick={this.logOutHandler}>
										<FontAwesomeIcon icon={faSignOutAlt} style={{ color: "red" }} />		Sign Out
								</DropdownItem>
								</DropdownMenu>
							</ButtonDropdown>
						</div>
						<div className="details">
							<div style={{ color: "#3a85f5" }} >See Radio Administrator</div>
							<div>Hardik.pedhadiya@bacancytechnology.com</div>
						</div>
					</div>
				</div>
				<Navbar>
				</Navbar>
			</>
		);
	}
}

export default Header;