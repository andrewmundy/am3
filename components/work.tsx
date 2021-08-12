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
				<h1>Feel free to reach out with anything</h1>
				<style jsx>
					{`
						h1 {
							color: white;
						}
						.container {
							background: black;
							padding: 0 4em;
						}
						@media (max-width: 700px) {
							.container {
								padding: 1em;
							}
							h1 {
								font-size: 20px;
							}
						}
					`}
				</style>
			</div>
		);
	}
}

export default Work;
