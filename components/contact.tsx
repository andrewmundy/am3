import React, { useState, useEffect } from "react";
import { Styles, Socials } from "./helpers";

const Contact = (props) => {
	useEffect(() => {
		const vw = Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		);
		setSize({
			width: vw,
			height: window.screen.height,
		});
	}, []);

	const [status, setStatus] = useState({
		submitted: false,
		submitting: false,
		info: { error: false, msg: null },
	});

	const [size, setSize] = useState({
		height: 0,
		width: 0,
	});

	const [inputs, setInputs] = useState({
		email: "",
		name: "",
		message: "",
		sent: null,
	});

	const handleResponse = (status, msg) => {
		if (status === 200) {
			setStatus({
				submitted: true,
				submitting: false,
				info: { error: false, msg: msg },
			});
		} else {
			setStatus({
				submitted: false,
				submitting: false,
				info: { error: true, msg: msg },
			});
		}
	};

	const handleOnChange = (e) => {
		e.persist();
		setInputs((prev) => ({
			...prev,
			[e.target.id]: e.target.value,
		}));
		setStatus({
			submitted: false,
			submitting: false,
			info: { error: false, msg: null },
		});
	};

	const handleOnSubmit = async (e) => {
		e.preventDefault();
		setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
		const res = await fetch("/api/send", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(inputs),
		});
		const text = await res.text();
		handleResponse(res.status, text);
	};
	const handleCopy = () => {
		let str = document.getElementById("email").innerText;
		str = "andrewmundy@gmail.com";
		const el = document.createElement("textarea");
		el.value = str;
		el.setAttribute("readonly", "");
		el.style.position = "absolute";
		el.style.left = "-9999px";
		document.body.appendChild(el);
		el.select();
		document.execCommand("copy");
		document.body.removeChild(el);
	};
	const math = (coord, size) => {
		const halfWidth = size / 2;

		const result =
			coord < halfWidth
				? Math.floor(halfWidth - coord) / 80
				: Math.floor(halfWidth - coord) / 80;

		return result;
	};
	const socials = {
		codepen: "https://codepen.io/andrewmundy/",
		github: "https://github.com/andrewmundy/",
		linkedin: "https://www.linkedin.com/in/andrew-mundy/",
		behance: "https://www.behance.net/andrewmundy",
		twitter: "https://twitter.com/andrewmundy",
		// email: props.isMobile
		// 	? "mailto:andrewmundy@gmail.com"
		// 	: "mailto:%61%6e%64re&#119;%6d&#117;%6edy@%67ma&#105;l.c&#111;m",
	};
	return (
		<div className="container">
			<form onSubmit={handleOnSubmit}>
				<h1 className="contact">Contact</h1>
				<div className="inputs__name">
					<input
						id="name"
						type="name"
						onChange={handleOnChange}
						required
						placeholder="name"
						value={inputs.name}
						className="inputs__name--name"
					/>
					<input
						id="email"
						type="email"
						onChange={handleOnChange}
						required
						placeholder="email"
						value={inputs.email}
						className="inputs__name--email"
					/>
				</div>
				<textarea
					placeholder="message"
					id="message"
					onChange={handleOnChange}
					required
					value={inputs.message}
				/>
				<button
					type="submit"
					disabled={status.submitting}
					style={
						status.submitted
							? { background: Styles().green, color: "black" }
							: { background: "white" }
					}
				>
					{!status.submitting
						? !status.submitted
							? "Send"
							: "Sent 🎉"
						: "Sending..."}
				</button>
			</form>
			<div className="socials">
				{Object.entries(socials).map((social, i) => {
					const [name, url] = social;
					const color = Object.values(Styles())[i];
					return (
						<a
							style={{ color: color, width: "100px" }}
							key={i}
							href={url}
						>
							{Socials(name, color)}
						</a>
					);
				})}
			</div>
			<style jsx>{`
				.container {
					padding: 0 5rem;
					background: black;
					padding-top: 1rem;
				}
				.container form {
					display: flex;
					justify-content: center;
					align-items: center;
					flex-direction: column;
				}
				.container form * {
					border: none;
				}
				.contact {
					font-size: 100px;
					text-shadow: ${math(props.client.x, size.width)}px
						${math(props.client.y, size.height)}px 0 white;
					margin: 0;
				}
				.socials {
					margin-top: 100px;
					display: flex;
					justify-content: space-around;
					align-items: center;
				}
				.socials a {
					filter: opacity(0.2);
				}
				.socials a:hover {
					filter: none;
					opacity: 1;
				}
				input,
				textarea,
				button {
					font-size: 20px;
					color: black;
					font-family: "MintGrotesk-Medium";
					box-sizing: border-box;
					padding: 10px;
					background: white;
				}

				.inputs__name,
				textarea,
				button {
					width: 500px;
				}
				input,
				textarea,
				button {
					transition: background 0.05s;
					color: black;
				}
				input::placeholder,
				textarea::placeholder {
					color: black;
					font-family: "MintGrotesk-Medium";
					opacity: 1;
				}
				.inputs__name {
					display: flex;
					justify-content: space-between;
					margin-bottom: 10px;
				}
				.inputs__name input {
					height: 50px;
					width: 245px;
				}
				input:not(output):-moz-ui-invalid {
					box-shadow: none;
				}

				.inputs__name--name:focus,
				.inputs__name--name:valid {
					background: ${Styles().blue};
				}

				.inputs__name--email:focus,
				.inputs__name--email:valid {
					background: ${Styles().yellow};
				}
				textarea:focus,
				textarea:valid {
					background: ${Styles().pink};
				}
				button:focus {
					background: ${Styles().green};
				}
				textarea {
					width: 500px;
					height: 100px;
					margin-bottom: 10px;
				}
				button {
					border: none;
					height: 50px;
					width: 500px;
					cursor: pointer;
				}
				@media (max-width: 700px) {
					.container {
						padding: 0;
						padding-bottom: 2rem;
					}
					.inputs__name,
					textarea,
					button {
						width: calc(100vw - 20px);
						font-size: 16px;
					}
					button {
						height: 40px;
					}
					.inputs__name input {
						width: calc(50% - 5px);
						height: 40px;
						font-size: 16px;
					}
					.contact {
						font-size: 65px;
					}
					.socials {
						margin-top: 30px;
					}
					.socials a {
						width: 30px !important;
						filter: opacity(0.2);
					}
				}
			`}</style>
		</div>
	);
};

export default Contact;
