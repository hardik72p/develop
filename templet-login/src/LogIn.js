import React from 'react';
import './LogIn.css';
import './my.scss';

class LogIn extends React.Component {
	constructor(props) {
		super(props);
		this.state = {

		}
	}
	render() {
		return <div className="w-50" style={{ float: " right", marginRight: "10%" }}>
			<div className="container register">
				<div className="row">
					<div className="col-md-12">
						{/* <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
							<li className="nav-item">
								<a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Login Form 1</a>
							</li> 
							<li className="nav-item">
								<a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Login Form 2</a>
							</li> 
						</ul> */}
						<div className="tab-content" id="myTabContent">
							<div className="tab-pane fade show active text-align form-new" id="home" role="tabpanel" aria-labelledby="home-tab">
								<h3 className="register-heading">Login</h3>
								<div className="row register-form">
									<div className="col-md-12">
										<form method="post">
											<div className="form-group">
												<input type="text" name="LGform1_user" className="form-control" placeholder="Your Email *" value="" required="" />
											</div>
											<div className="form-group">
												<input type="password" name="LGform1_pwd" className="form-control" placeholder="Your Password *" value="" required="" />
											</div>
											<div className="form-group">
												<input type="submit" name="LGform1" className="btnContactSubmit" value="Login" />
												{/* <a href="ForgetPassword.php" className="btnForgetPwd" value="Login">Forget Password?</a> */}
											</div>
										</form>
									</div>
								</div>
							</div>
							{/* <div className="tab-pane fade show text-align form-new" id="profile" role="tabpanel" aria-labelledby="profile-tab">
								<h3 className="register-heading">Login Form 2</h3>
								<div className="row register-form">
									<div className="col-md-12">
										<form method="post">
											<div className="form-group">
												<input type="text" name="LGform2_user" className="form-control" placeholder="Your Email *" value="" required="" />
											</div>
											<div className="form-group">
												<input type="password" name="LGform2_pwd" className="form-control" placeholder="Your Password *" value="" required="" />
											</div>
											<div className="form-group">
												<input type="submit" name="LGform2" className="btnContactSubmit" value="Login" />
												<a href="ForgetPassword.php" className="btnForgetPwd" value="Login">Forget Password?</a>
											</div>
										</form>
									</div>
								</div>
							</div> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	}

}

export default LogIn;