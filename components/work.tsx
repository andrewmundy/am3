import { Component } from "react";

interface Props {}
interface State {}

class Work extends Component<Props, State> {
	constructor(props) {
		super(props);
		// this.state = {
		// };
	}
	componentDidMount() {}
	render() {
		return (
			<div className="container">
				<h1>Hi 👋</h1>
				<h1>I'm currently an internal tools developer at Dropbox</h1>
				<style jsx>
					{`
						h1 {
							color: white;
						}
						.container {
							// min-height: 100vh;
							background: black;
							padding: 4em;
						}
						@media (max-width: 700px) {
							.container {
								padding: 1em;
							}
						}
					`}
				</style>
			</div>
		);
	}
}

export default Work;
