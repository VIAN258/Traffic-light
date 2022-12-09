import React from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[selected, setSelected] = useState("")
	const modified = color => {
		if (color === selected) {
			setSelected("");
		} else {
			setSelected(color);
		}
	};

	return (
	<body>
		<div className="semaforo">
			<div className='primero'>
		
                  <div className={
					selected == "red" ? "rojo red" : "rojo"
				  }
				    onClick={() => modified("red")}></div>
				
			</div>
			<div className='segundo'>
				<div className="amarillo"></div>
			</div>
			<div className='segundo'>
				<div className="verde"></div>
			</div>
		</div>
	</body>
	);
};

export default Home;
