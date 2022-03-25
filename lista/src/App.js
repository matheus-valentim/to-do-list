import { useState } from "react";
import "./App.css";

function App() {
	const [texto, setTexto] = useState(null);
	const [itens, setItens] = useState([]);
	const listHandler = (elemento) => {
		setItens([...itens, elemento]);
	};
	return (
		<div className="App">
			<div className="container">
				<h1>Tarefas</h1>
				<form
					onSubmit={(e) => {
						listHandler(texto);
						e.preventDefault();
					}}
				>
					<input
						onChange={(e) => {
							setTexto(e.target.value);
						}}
					></input>
					<button>add</button>
				</form>
			</div>
			{itens.map((item, key) => (
				<div className="itemDiv" key={key}>
					<div className="formDiv">
						<input id={"checkbox" + key} type="checkbox"></input>
						<label htmlFor={"checkbox" + key} className="item">
							{item}
						</label>
					</div>
					<button
						className="lixo"
						onClick={(e) => {
							const filtrado = itens.filter((aa, index) => key != index);
							setItens(filtrado);
						}}
					>
						<svg viewBox="0 0 10 12" fill="none">
							<path
								d="M1.66667 3H1.11111V10.8C1.11111 11.1183 1.22817 11.4235 1.43655 11.6485C1.64492 11.8736 1.92754 12 2.22222 12H7.77778C8.07246 12 8.35508 11.8736 8.56345 11.6485C8.77183 11.4235 8.88889 11.1183 8.88889 10.8V3H1.66667ZM7.56556 1.2L6.66667 0H3.33333L2.43444 1.2H0V2.4H10V1.2H7.56556Z"
								fill="black"
							/>
						</svg>
					</button>
				</div>
			))}
		</div>
	);
}

export default App;
