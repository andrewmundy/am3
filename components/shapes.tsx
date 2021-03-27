import { Component } from "react";
import { MouseCoordinates } from "./helpers";
import { Styles } from "./helpers";

interface Props {
	theposition?: number;
	// name:string;
	client?: MouseCoordinates;
}
interface State {
	height: number;
	width: number;
}

class Shapes extends Component<Props, State> {
	constructor(props) {
		super(props);
		this.state = {
			height: 0,
			width: 0,
		};
	}
	componentDidMount() {
		const vw = Math.max(
			document.documentElement.clientWidth,
			window.innerWidth || 0
		);
		this.setState({
			width: vw,
			height: window.screen.height,
		});
	}
	render() {
		const {
			peacock,
			purple,
			red,
			yellow,
			green,
			blue,
			pink,
			khaki,
			starling,
		} = Styles();
		const { height, width } = this.state;
		const { client } = this.props;

		const calculateShapeMovement = (coord, size, negative = 0) => {
			const halfWidth = size / 2;

			const result =
				coord < halfWidth
					? Math.floor(halfWidth - coord) / 20
					: Math.floor(halfWidth - coord) / 20;
			return negative ? -result : result;
		};
		const calculateShapeScale = () => {
			const calculation = (width / client.x) * 0.6;

			if (calculation > 1) {
				return 1;
			} else if (calculation < 0.2) {
				return 0.2;
			} else {
				return calculation;
			}
		};
		const transformNegative = `translate(${calculateShapeMovement(
			client.x,
			width,
			1
		)} ${calculateShapeMovement(client.y, height, 1)})`;
		const transformPositive = `translate(${calculateShapeMovement(
			client.x,
			width,
			0
		)} ${calculateShapeMovement(client.y, height, 0)})`;

		const cylinder = (
			<svg
				width="170%"
				height="650"
				fill="none"
				viewBox="0 0 750 700"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m38.64 234.13 0.0377-0.01 0.0374-0.012 593.15-186.35c7e-3 -0.0021 0.015-0.0043 0.022-0.0064 47.909-14.087 94.339-1.5971 132.14 26.09 37.839 27.716 66.917 70.594 79.892 116.92 12.976 46.333 10.726 99.265-6.902 143.79-17.611 44.484-50.48 80.4-98.687 93.236-0.01 2e-3 -0.021 5e-3 -0.031 8e-3l-604.95 144.13-0.048 0.012-0.047 0.013c-96.051 26.9-198.8-23.262-225.61-118.98-26.806-95.717 34.944-191.95 130.99-218.85z"
					stroke={red}
					strokeWidth="5"
					transform={transformNegative}
				/>
			</svg>
		);
		const cube = (
			<svg
				width="900"
				height="650"
				fill="none"
				viewBox="0 0 1039 1049"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m1000.8 393.75-255.23 472.79-251.73 92.221-456.15-321.19 273.04-483.67 215.9-74.294 474.17 314.14z"
					stroke={pink}
					strokeWidth="5"
					transform={transformPositive}
				/>
			</svg>
		);
		const square = (
			<svg
				width="900"
				height="650"
				fill="none"
				viewBox="0 0 2000 1000"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m-2.479 14.645 1440.3-12.121-81.75 644.34-1354-96.572-4.5081-535.65z"
					stroke={blue}
					strokeWidth="5"
					transform={transformNegative}
				/>
			</svg>
		);
		const pyramid = (
			<svg
				width="900"
				height="650"
				fill="none"
				viewBox="0 0 928 1086"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m910.16 449.26-399.61 264.86-646.12-59.745 418.41-646.37 627.32 441.25z"
					stroke={green}
					strokeWidth="5"
					transform={transformPositive}
				/>
			</svg>
		);
		const oval = (
			<svg
				width="900"
				height="650"
				fill="none"
				viewBox="0 0 984 990"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="m736.23 764.35c-67.088 59.523-159.5 80.875-251.6 68.886-92.094-11.989-183.66-57.3-248.87-130.8-130.56-147.16-134.74-348.24-0.526-467.32 134.4-119.24 372.33-106.13 502.72 40.835 130.54 147.14 132.51 369.3-1.732 488.4z"
					strokeWidth="5"
					stroke={starling}
					transform={transformNegative}
				/>
			</svg>
		);
		const moon = (
			<svg
				width="900"
				height="650"
				viewBox="0 0 930 973"
				xmlns="http://www.w3.org/2000/svg"
			>
				<mask id="a" fill="white">
					<path
						d="m147.84 826.56c182.44 117.16 425.32 64.248 542.48-118.19s80.826-473.34-101.61-590.5c-69.252-44.474-149.6-57.522-229.05-46.616 80.717 125.32 86.138 291.36 0.328 424.98-78.523 122.27-213.51 186.36-348.93 180.07 30.538 59.311 76.619 111.62 136.79 150.26z"
						clipRule="evenodd"
						fillRule="evenodd"
					/>
				</mask>
				<path
					d="m359.65 71.244-0.68-4.9536-7.771 1.0667 4.247 6.5943 4.204-2.7074zm-348.6 605.05 0.2321-4.994-8.6341-0.402 3.9567 7.685 4.4453-2.289zm675.06 29.371c-115.67 180.12-355.46 232.36-535.57 116.69l-5.403 8.415c184.76 118.66 430.73 65.065 549.39-119.7l-8.414-5.404zm-100.11-583.59c89.734 57.628 143.84 158.2 160.92 267.34 17.082 109.14-2.978 226.2-60.811 316.26l8.414 5.404c59.33-92.385 79.684-211.99 62.277-323.2-17.407-111.22-72.69-214.67-165.4-274.21l-5.404 8.414zm-225.67-45.87c78.466-10.771 157.57 2.1383 225.67 45.87l5.404-8.414c-70.408-45.217-152-58.404-232.43-47.363l1.36 9.9071zm-4.884-2.2461c79.696 123.74 85.037 287.66 0.325 419.57l8.414 5.404c86.907-135.32 81.407-303.48-0.331-430.38l-8.408 5.4148zm0.325 419.57c-77.52 120.71-210.78 183.99-344.49 177.78l-0.4642 9.989c137.13 6.372 273.84-58.531 353.37-182.36l-8.414-5.404zm-205.24 328.83c-59.409-38.153-104.9-89.797-135.04-148.35l-8.8907 4.578c30.929 60.071 77.603 113.06 138.53 152.18l5.403-8.415z"
					mask="url(#a)"
					fill={yellow}
					transform={transformPositive}
				/>
			</svg>
		);

		const shapes = [cylinder, cube, square, pyramid, oval, moon];

		return (
			<div className="container">
				<div className="shapes">
					{shapes.map((shape, i) => {
						return (
							<div
								className={i % 2 == 0 ? "left" : "right"}
								key={i}
							>
								{shape}
							</div>
						);
					})}
				</div>
				<style jsx>
					{`
						.container {
							min-height: 100vh;
							background: black;
						}
						.shapes {
							display: flex;
							justify-content: center;
							align-items: center;
							flex-direction: column;
							padding: 300px 0;
						}
						.shapes .left,
						shapes .right {
							margin-top: 300px;
						}
						.shapes .left {
							margin-left: -800px;
						}
						.shapes .right {
							margin-right: -800px;
						}
						@media (max-width: 700px) {
							.shapes .left,
							shapes .right {
								margin-top: 50px;
							}
							.shapes .left {
								margin-left: -150px;
							}
							.shapes .right {
								margin-right: -150px;
							}
						}
					`}
				</style>
			</div>
		);
	}
}

export default Shapes;
