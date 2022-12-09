import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[color, setColor] = useState("red")
	const change = (color) => setColor(previous => color)


	return (
	<body>
		<div class="semaforo">
			<div class='primero'>
				{
                  color == red ? <div class="rojo red"></div> : <div class="rojo"></div>
				  
				}
				<a onClick={() => change("red")} href="#"></a>
				
			</div>
			<div class='segundo'>
				<div class="amarillo"></div>
			</div>
			<div class='segundo'>
				<div class="verde"></div>
			</div>
		</div>
	</body>
	);
};

export default Home;
