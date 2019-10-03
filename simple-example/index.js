let squarer;

const loadWASM = fileName => {
	return fetch(fileName)
		.then(response => response.arrayBuffer())
		.then(buffer => WebAssembly.compile(buffer))
		.then(module => new WebAssembly.Instance(module))
		.catch(err => console.error("Error loading WASM module"));
};

loadWASM("squarer.wasm").then(instance => (squarer = instance.exports._Z7squareri));

let btn = document.getElementById("square");
btn.onclick = () => {
	let square = squarer(document.getElementsByTagName("input")[0].value);
	document.getElementById("squareResult").innerText = square;
};
