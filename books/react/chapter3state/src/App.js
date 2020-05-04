import React, {Component} from 'react';
import './App.css';

class App extends Component {

	data = [
		"this is list sample",
		"これはリストのサンプルです",
		"配列をリストに変換します",
	];

	msgStyle = {
		fontSize: "20pt",
		color: "#900",
		margin: "20px 0",
		padding: "5px",
	};

	area = {
		width: "500px",
		height: "500px",
		border: "1px solid blue"
	};

	// msgStyle = {
	// 	fontSize: '24pt',
	// 	color: '#900',
	// 	margin: '20px 0',
	// 	padding: '5px',
	// 	borderBottom: '2px solid #900',
	// };

	// msgStyle2 = {
	// 	fontSize: "20pt",
	// 	color: "white",
	// 	backgroundColor: "#900",
	// 	margin: "20px 0",
	// 	padding: "5px",
	// 	borderBottom: "2px solid #900"
	// };

	// btnStyle = {
	// 	fontSize: "20pt",
	// 	padding: "0 10px",
	// };

	constructor(props) {
		super(props);
		this.state = {
			// msg: 'Hello Component',
			// counter: 0,
			// flg: true,
			list: this.data,
		};
		// let timer = setInterval(() => {
		// 	this.setState((state) => ({
		// 		msg: state.msg + "!"
		// 	}))
		// }, 1000);
		this.doAction = this.doAction.bind(this);
	}

	// doAction(e) {
	// 	this.setState ((state) => ({
	// 		counter: state.counter + 1,
	// 		msg: 'counter:' + state.counter,
	// 		flg: !state.flg,
	// 	}));
	// }

	doAction(e) {
		let x = e.pageX;
		let y = e.pageY;
		this.data.push ({
			x:x, y:y
		});
		this.setState({
			list: this.data
		});
	}

	draw(d) {
		let s = {
			position: "absolute",
			left: (d.x - 25) + "px",
			top: (d.y - 25) + "px",
			width: "50px",
			height: "50px",
			backgroundColor: "#66F3",
		};
		return (
			<div style={s}></div>
		);
	}

	render() {
		return (
			<div>
				<h1>React</h1>
				{/* {
					this.state.flg ?
						<p style={this.msgStyle}>counter: {this.state.counter}</p>
					:
						<p style={this.msgStyle2}>counter: {this.state.counter}</p>
				} */}
					{/* <p style={this.msgStyle}>{this.state.msg}</p> */}
				{/* <button style={this.btnStyle} onClick={this.doAction}>Click</button> */}

				{/* <h2 style={this.msgStyle}>show rect.</h2>
				<div style={this.area} onClick={this.doAction}>
					{
						this.data.map((value) => this.draw(value))
					}
				</div> */}
				<h2 style={this.msgStyle}>show rect.</h2>
				<List title="サンプル・リスト" data={this.data} />
			</div>
			);
	}
}

class List extends Component {
	number = 1;
	 title = {
		 fontSize: "20pt",
		 fontWeight: "bold",
		 color: "blue"
	 };

	 render() {
		 let data = this.props.data;
		 return (
			<div>
				<p style={this.title}>{this.props.title}</p>
				<ul>
					{
						data.map((item) => (
							<Item number={this.number++} value={item} key={this.number} />
						))
					}
				</ul>
			</div>
		 );
	 }
}

class Item extends Component {
	li = {
		listStyleType: "square",
		fontSize: "16pt",
		color: "#06",
		margin: 0,
		padding: 0,
	}
	num = {
		fontWeight: "bold",
		color: "red"
	}

	render() {
		return(
			<li style={this.li}>
				<span style={this.num}>[{this.props.number}]</span>
					{this.props.value}
			</li>
		);
	}
}
export default App;
