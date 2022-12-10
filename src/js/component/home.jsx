import React,{useState} from "react";



//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const[selected, setSelected] = useState("rojo")
	
	const change = (newSelected) => setSelected( newSelected)

	return (
	<body>
		<div className="semaforo">
			<div className='primero'>
		
                <div className={selected == "rojo" ? "rojo red" : "rojo"}  onClick={() => change("rojo")}></div>
					
			</div>
			<div className='segundo'>
				<div className={selected == "amarillo" ? "amarillo yellow" : "amarillo"} onClick={() => change("amarillo")}></div>
			</div>
			<div className='tercero'>
				<div className={selected == "verde" ? "verde green" : "verde"} onClick={() => change("verde")}></div>
			</div>
		</div>
	</body>
	);
};

export default Home;
