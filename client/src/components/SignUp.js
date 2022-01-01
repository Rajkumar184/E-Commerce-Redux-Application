import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
	return (
		<>
			<section className="vh-100 py-1">
				<div className="container h-custom">
					<div className="row d-flex justify-content-center align-items-center  h-100 shadow-lg p-6  bg-white my-4">
						<div className="col-md-9 col-lg-6 col-xl-5 signup-logo">
							<img
								src="/images/signup_img.png"
								className="img-fluids"
								alt="signup_image"
							/>
						</div>
						<div className="col-md-7 col-lg-4 col-xl-5 offset-xl-1 pb-4">
							<form
								className="register-form"
								id="register-form"
								method="POST"
								autoComplete="off"
							>
								<h2 className="text-center">Sign Up</h2>
								<p className="text-center">
									Please fill in this form to create an account!
								</p>

								<hr />
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<span className="fa fa-user"></span>
											</span>
										</div>
										<input
											type="text"
											className="form-control"
											name="name"
											placeholder="Username"
											required="required"
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-paper-plane"></i>
											</span>
										</div>
										<input
											type="email"
											className="form-control"
											name="email"
											placeholder="Email Address"
											required="required"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i class="fas fa-phone"></i>
											</span>
										</div>
										<input
											type="tel"
											minLength="10"
											maxLength="10"
											className="form-control"
											name="phone"
											placeholder="Phone"
											pattern="[7-9]{1}[0-9]{9}"
											title="Phone number with 7-9 and remaing 9 digit with 0-9"
											required="required"
										/>
									</div>
								</div>

								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i class="fas fa-user-tie"></i>
											</span>
										</div>
										<input
											type="text"
											className="form-control"
											name="work"
											placeholder="Profession"
											required="required"
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-lock"></i>
											</span>
										</div>
										<input
											type="password"
											className="form-control"
											name="password"
											placeholder="Password"
											required="required"
										/>
									</div>
								</div>
								<div className="form-group">
									<div className="input-group">
										<div className="input-group-prepend">
											<span className="input-group-text">
												<i className="fa fa-check"></i>
											</span>
										</div>
										<input
											type="password"
											className="form-control"
											name="cpassword"
											placeholder="Confirm Password"
											required="required"
										/>
									</div>
								</div>
								<div className="form-group">
									<label className="form-check-label">
										<input type="checkbox" required="required" /> I accept the
										<a href="#*">Terms of Use</a> &amp;
										<a href="#*">Privacy Policy</a>
									</label>
								</div>
								<div className="form-group text-center">
									<button
										type="submit"
										className="btn btn-primary btn-lg"
										value="register"
									>
										Sign Up
									</button>
								</div>
							</form>
							<div className="text-center pb-2">
								Already have an account?
								<Link className="text-success" to="/login">
									Login here
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SignUp;
