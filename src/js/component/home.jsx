import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<body>
		<div class="semaforo">
			<div class='primero'>
				<div class="rojo"></div>
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
