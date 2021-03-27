import { Component } from "react";
import { MouseCoordinates } from "./helpers";

interface Props {
	theposition?: number;
	name?: string;
	client?: MouseCoordinates;
	id?: string;
}

class Jubalee extends Component<Props> {
	constructor(props) {
		super(props);
	}
	render() {
		const { name, theposition, id } = this.props;
		return (
			<div className="container" id={id}>
				<div className="soup">
					{name.split("").map((letter, i) => {
						const half = name.length / 2;
						const direction = i < half ? i : i - (half - 1);
						const everyOther = i % 2 != 0 ? -i : i;
						const whack = everyOther * direction * theposition;

						return letter === " " ? (
							<div key={i} className="break" />
						) : (
							<div
								key={i}
								id="soup__letters"
								style={{
									transform: `translate3d(${whack * 50}px, ${
										whack * 50
									}px, ${whack * 50}px) rotate(${
										whack * 35
									}0deg) scale(${whack + 1 / 1})`,
								}}
							>
								{letter}
							</div>
						);
					})}
				</div>
				<h1>Designer and developer</h1>
				<style jsx>
					{`
						.container {
							overflow: hidden;
							height: 100vh;
							background: white;
							padding-top: 100px;
						}
						.container h1 {
							margin: 50px;
						}
						.break {
							flex-basis: 100%;
							height: 0;
						}
						.soup {
							display: flex;
							justify-content: flex-start;
							align-items: flex-start;
							flex-wrap: wrap;
							margin: 50px;
						}
						#soup__letters {
							will-change: transform, rotate;
							font-size: 100px;
							font-family: "MintGrotesk-Bold";
						}

						@media (max-width: 700px) {
							.container h1 {
								margin: 10px;
							}
							.soup {
								margin: 0;
								padding: 10px;
							}
							#soup__letters {
								font-size: 70px;
							}
						}
					`}
				</style>
			</div>
		);
	}
}

export default Jubalee;
