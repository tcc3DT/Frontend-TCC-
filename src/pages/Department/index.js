// import "./styleDrop.css";
// import React, { useState } from "react";
// import Select from "react-select";
// import Porta from "../../assets/porta.png";
// import Livro from "../../assets/livro.png";
// import Pao from "../../assets/pao.png";
// import Lab from "../../assets/tubo.png";
// import Ferramenta from "../../assets/ferramenta.png";
// import Header from "../../Components/Header";
// import { createContext } from "react";
// import ModalDeparmento from "../../Components/modalDepartamento";
import Title from "../../Components/TitlePage";


// export default function Departaments() {
//   const salas = [
//     {
//       value: 1,
//       text: "Sala 01",
//       icon: (
//         <>
//           <img src={Porta} height='20' />
//         </>
//       ),
//     },
//     {
//       value: 2,
//       text: "Sala 02",
//       icon:
//         <>
//           <img src={Porta} height='20' />
//         </>
//     },

//   ];
//   const laboratorios = [
//     {
//       value: 1,
//       text: "Lab 01",
//       icon: (
//         <>
//           <img src={Lab} height='20' />
//         </>
//       ),

//     },
//     {
//       value: 2,
//       text: "Lab 02",
//       icon: (
//         <>
//           <img src={Lab} height='20' />
//         </>
//       ),

//     },

//   ]
//   const oficinas = [
//     {
//       value: 1,
//       text: "Oficina 01",
//       icon: (
//         <>
//           <img src={Ferramenta} height='15' />
//         </>
//       ),

//     },
//     {
//       value: 2,
//       text: "Oficina 02",
//       icon: (
//         <>
//           <img src={Ferramenta} height='15' />
//         </>
//       ),

//     },

//   ]
//   const biblioteca = [
//     {
//       value: 1,
//       text: "Biblioteca",
//       icon: (
//         <>
//           <img src={Livro} height='20' />
//         </>
//       ),

//     },

//   ]
//   const refeitorio = [
//     {
//       value: 1,
//       text: "Refeitório",
//       icon: (
//         <>
//           <img src={Pao} height='20' />
//         </>
//       ),

//     },
//   ]

//   const [selectedOption1, setSelectedOption1] = useState(null);
//   const [selectedOption2, setSelectedOption2] = useState(null);
//   const [selectedOption3, setSelectedOption3] = useState(null);
//   const [selectedOption4, setSelectedOption4] = useState(null);
//   const [selectedOption5, setSelectedOption5] = useState(null);

//   // handle onChange event of the dropdown
//   const handleChange1 = (e) => {
//     setSelectedOption1(e);
//   };
//   const handleChange2 = (e) => {
//     setSelectedOption2(e);
//   };
//   const handleChange3 = (e) => {
//     setSelectedOption3(e);
//   };
//   const handleChange4 = (e) => {
//     setSelectedOption4(e);
//   };
//   const handleChange5 = (e) => {
//     setSelectedOption5(e);
//   };



//   return (
//       <div className={theme}>
//         <Header tema = {theme}/>
//         <ModalDeparmento tema={theme}/>
//         <SwitchComp 
//             theme= {toggleTheme} 
//             dark= {theme}
//         />
//         <div className="tudo">
//           <div className="drop-all">
//             <Select
//               placeholder="Salas"
//               value={selectedOption1}
//               options={salas}
//               color="black"
//               onChange={handleChange1}
//               getOptionLabel={(e) => (
//                 <div style={{ display: "flex", alignItems: "center", height: 40 }}>
//                   {e.icon}
//                   <span style={{ marginLeft: 5 }}>{e.text}</span>
//                 </div>
//               )}
//             />
//           </div>
//           <div className="drop-all">
//             <Select
//               placeholder="Laboratórios"
//               value={selectedOption2}
//               // style={{backgroundColor: '#0000',}}
//               options={laboratorios}
//               onChange={handleChange2}
//               getOptionLabel={(e) => (
//                 <div style={{ display: "flex", alignItems: "center", height: 40 }}>
//                   {e.icon}
//                   <span style={{ marginLeft: 5 }}>{e.text}</span>
//                 </div>
//               )}
//             />
//           </div>

//           <div className="drop-all">
//             <Select
//               placeholder="Oficinas"
//               value={selectedOption3}
//               options={oficinas}
//               onChange={handleChange3}
//               getOptionLabel={(e) => (
//                 <div style={{ display: "flex", alignItems: "center", height: 40 }}>
//                   {e.icon}
//                   <span style={{ marginLeft: 5 }}>{e.text}</span>
//                 </div>
//               )}
//             />
//           </div>
//           <div className="drop-all">
//             <Select
//               placeholder="Biblioteca"
//               value={selectedOption4}
//               options={biblioteca}
//               onChange={handleChange4}
//               getOptionLabel={(e) => (
//                 <div style={{ display: "flex", alignItems: "center", height: 40 }}>
//                   {e.icon}
//                   <span style={{ marginLeft: 5 }}>{e.text}</span>
//                 </div>
//               )}
//             />
//           </div>
//           <div className="drop-all">
//             <Select
//               placeholder="Refeitório"
//               value={selectedOption5}
//               options={refeitorio}
//               onChange={handleChange5}
//               getOptionLabel={(e) => (
//                 <div style={{ display: "flex", alignItems: "center", height: 40 }}>
//                   {e.icon}
//                   <span style={{ marginLeft: 5 }}>{e.text}</span>
//                 </div>
//               )}
//             />
//           </div>
//         </div>
//       </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./styleDrop.css";
import Header from "../../Components/Header";
import ModalDeparmento from "../../Components/modalDepartamento";
import { FaFlask, FaDoorClosed, FaTools, FaBook, FaUtensils } from "react-icons/fa";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';


function Departamentos() {
  const states = useSelector((state)=>state);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [departmentTypes, setDepartmentTypes] = useState([]);
  
  useEffect(()=>{
    const token = states.Token.value != "" ? states.Token.value : sessionStorage.getItem("token");
    if(states.Token.value = ""){dispatch({type:"ADD_TOKEN", data:token});}
    
    axios.get(`http://localhost:3500/department`,{headers:{"x-access-token":token}})
    .then(({data})=>{
      const newData = data.map((departments)=>{
        return departments

      });
      setDepartmentTypes(newData);
    })
    // .catch(()=>navigate("/"));
  },[])

  function nextPage(nRoom,department){
    console.log(department)
    dispatch({type:"ADD_NAV_DATA", data:{nRoom}})
    sessionStorage.setItem("room",nRoom)
    sessionStorage.setItem("department",department)
    navigate("/table");
  }

  function Selector({name, rooms}){
    return(
        <div className="drop-all">
         {rooms &&
        
          <Select placeholder={name}
            options={rooms}
            onChange={(e)=>nextPage(e.nRoom,name)}
            getOptionLabel={(e)=>(
              <div className="option-selector">
                <FaDoorClosed size={15}/>
    
                <p>{e.nRoom}</p>
              </div>
            )}
          />
         }
        </div>
    );
  };
  return (
    <>
      <div className="Department">
      <Header/>
      <Title title="Departamentos"/>
        <ModalDeparmento/>
      {/* Desativar sidebar nessa tela */}
      {departmentTypes.length != 0 &&
        <section id="selectors">
          {departmentTypes.map(({id, name, rooms})=>(<Selector key={id} name={name} rooms={rooms} id={id} />))} 
        </section>
      }
      </div>
    </>
  );
}

export default Departamentos;