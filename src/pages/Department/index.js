import React, { useState } from "react";
import Select from "react-select";
import "./styleDrop.css";
import Header from "../../Components/Header";
import ModalDeparmento from "../../Components/modalDepartamento";
import { FaFlask, FaDoorClosed, FaTools, FaBook, FaUtensils } from "react-icons/fa";


function Departamentos() {
  const salas = [
    {
      value: 1,
      text: "Sala 01",
      icon: (
        <>
          <FaDoorClosed size={15}/>
        </>
      ),
    },
    {
      value: 2,
      text: "Sala 02",
      icon:
        <>
          <FaDoorClosed size={15}/>
        </>
    },

  ];
  const laboratorios = [
    {
      value: 1,
      text: "Lab 01",
      icon: (
        <>
          <FaFlask size={15}/>
        </>
      ),

    },
    {
      value: 2,
      text: "Lab 02",
      icon: (
        <> 
          <FaFlask size={15}/>
        </>
      ),

    },

  ]
  const oficinas = [
    {
      value: 1,
      text: "Oficina 01",
      icon: (
        <>
          <FaTools size={15}/>
        </>
      ),

    },
    {
      value: 2,
      text: "Oficina 02",
      icon: (
        <>
          <FaTools size={15}/>
        </>
      ),

    },

  ]
  const biblioteca = [
    {
      value: 1,
      text: "Biblioteca",
      icon: (
        <>
          <FaBook size={15}/>
        </>
      ),

    },

  ]
  const refeitorio = [
    {
      value: 1,
      text: "Refeitório",
      icon: (
        <>
          <FaUtensils size={15}/>
        </>
      ),

    },

  ]


  const [selectedOption1, setSelectedOption1] = useState(null);
  const [selectedOption2, setSelectedOption2] = useState(null);
  const [selectedOption3, setSelectedOption3] = useState(null);
  const [selectedOption4, setSelectedOption4] = useState(null);
  const [selectedOption5, setSelectedOption5] = useState(null);

  // handle onChange event of the dropdown
  const handleChange1 = (e) => {
    setSelectedOption1(e);
  };
  const handleChange2 = (e) => {
    setSelectedOption2(e);
  };
  const handleChange3 = (e) => {
    setSelectedOption3(e);
  };
  const handleChange4 = (e) => {
    setSelectedOption4(e);
  };
  const handleChange5 = (e) => {
    setSelectedOption5(e);
  };

  return (
    <>
    <Header/>
    <ModalDeparmento/>
    <div className="tudo">
      
      <div  className="drop-all">
        <Select
          placeholder="Selecione..."
          value={selectedOption1}
          options={salas}
          onChange={handleChange1}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      
      <div className="drop-all">
        <Select
          placeholder="Selecione..."
          value={selectedOption2}
          options={laboratorios}
          onChange={handleChange2}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      
      <div className="drop-all">
        <Select
          placeholder="Selecione..."
          value={selectedOption3}
          options={oficinas}
          onChange={handleChange3}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      
      <div className="drop-all">
        <Select
          //   placeholder={<img src={Imagem} height='20' />}
          placeholder="Selecione..."
          value={selectedOption4}
          options={biblioteca}
          onChange={handleChange4}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
      
      <div className="drop-all">
        <Select
          placeholder="Selecione..."
          value={selectedOption5}
          options={refeitorio}
          onChange={handleChange5}
          getOptionLabel={(e) => (
            <div style={{ display: "flex", alignItems: "center", height: 40 }}>
              {e.icon}
              <span style={{ marginLeft: 5 }}>{e.text}</span>
            </div>
          )}
        />
      </div>
    </div>
    </>
  );
}

export default Departamentos;
