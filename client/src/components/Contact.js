import React, { useEffect, useState } from "react";
import "./Contact.css";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

const Contact = () => {
	const [userData, setUserData] = useState("");
	const history = useHistory();

	const [msg, setMsg] = useState({
		message: "",
	});

	const userContactPage = async () => {
		try {
			const res = await axios.get("/getdata");

			const data = await res.data.userProfile;
			console.log(data);
			setUserData(data);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		userContactPage();
	}, []);

	// storing data in states
	const handleInputs = (e) => {
		const { name, value } = e.target;

		setMsg({
			...msg,
			[name]: value,
		});
	};

	// send data to backend
	const submitConatctForm = async (e) => {
		e.preventDefault();

		const { message } = msg;

		if (!message) {
			return toast.warning("All fields are mandatory!", {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
		try {
			const res = await axios.post("/contact", msg);

			const data = await res.data;

			if (!data) {
				return toast.warning("message not send", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			} else {
				history.push("/");

				return toast.success("Message Send !", {
					position: toast.POSITION.TOP_CENTER,
					autoClose: 3000,
				});
			}
		} catch (error) {
			return toast.error(error.response.data.message, {
				position: toast.POSITION.TOP_CENTER,
				autoClose: 3000,
			});
		}
	};

	return (
		<>
			<div class="contact-content py-4">
				<div class="container">
					<div class="row justify-content-center shadow-lg p-4 my-5 bg-white">
						<div class="col-md-10">
							<div class="row justify-content-center">
								<div class="col-md-6">
									<h3 class="heading mb-4">Contact US!</h3>
									<p>
										Lorem ipsum dolor sit amet, consectetur adipisicing elit.
										Voluptas debitis, fugit natus?
									</p>
									<p>
										<img
											src="/images/contacts.png"
											alt="Images"
											class="img-fluids"
										/>
									</p>
								</div>
								<div class="col-md-6">
									<form
										onSubmit={submitConatctForm}
										class="mb-5"
										method="post"
										id="contactForm"
										name="contactForm"
										novalidate="novalidate"
									>
										<div class="row">
											<div class="col-md-12 form-group">
												<input
													type="text"
													class="form-control"
													name="name"
													id="name"
													placeholder="Your name"
													onChange={handleInputs}
													value={userData.name}
												/>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12 form-group">
												<input
													type="text"
													class="form-control"
													name="email"
													id="email"
													placeholder="Email"
													onChange={handleInputs}
													value={userData.email}
												/>
											</div>
										</div>

										<div class="row">
											<div class="col-md-12 form-group">
												<input
													type="text"
													class="form-control"
													name="subject"
													id="subject"
													placeholder="Subject"
												/>
											</div>
										</div>
										<div class="row">
											<div class="col-md-12 form-group">
												<textarea
													class="form-control"
													name="message"
													id="message"
													cols="30"
													rows="7"
													placeholder="Write your message"
													onChange={handleInputs}
												></textarea>
											</div>
										</div>
										<div class="row">
											<div class="col-12">
												<input
													type="submit"
													value="Send Message"
													class="btn btn-primary rounded-0 py-2 px-4"
												/>
												<span class="submitting"></span>
											</div>
										</div>
									</form>
									<div id="form-message-warning mt-4"></div>
									<div id="form-message-success">
										Your message was sent, thank you!
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Contact;
