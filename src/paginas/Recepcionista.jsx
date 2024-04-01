import { useEffect, useState } from "react";
import Alert from "../components/Alert";
import clienteAxios from "../config/clienteAxios";
import {
  validarNombre,
  validarApellidos,
  validarHistoriaClinica,
  validarCamaSala,
} from "../utils/regEx";

const Recepcionista = () => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [historia_clinica, setHistoriaClinica] = useState("");
  const [cama, setCama] = useState("");
  const [sala, setSala] = useState("1");
  const [alert, setAlert] = useState({});
  const [camasSalas, setCamasSalas] = useState([]);

  useEffect(() => {
    const getCamasSalas = async () => {
      const access_token = localStorage.getItem("access_token");
      try {
        const { data } = await clienteAxios("/disponibilidad", {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        });
        // data = data.filter(cama => cama)
        setCamasSalas(data.filter((cama) => !cama.ocupada));
      } catch (error) {
        setAlert({
          msg: error.response.data.detail,
          error: true,
        });
      }
    };
    getCamasSalas();
  }, [alert]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const access_token = localStorage.getItem("access_token");
    if ([name, surname, historia_clinica, cama, sala].includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios.",
        error: true,
      });
      return;
    }
    if (!validarNombre(name)) {
      setAlert({
        msg: "Los nombres deben iniciar con mayúsculas.",
        error: true,
      });
      return;
    }
    if (!validarApellidos(surname)) {
      setAlert({
        msg: "Los apellidos deben iniciar con mayúsculas.",
        error: true,
      });
      return;
    }
    if (!validarHistoriaClinica(historia_clinica)) {
      setAlert({
        msg: "La historia clínica debe estar compuesta por 5 dígitos.",
        error: true,
      });
      return;
    }
    if (validarCamaSala(cama) && validarCamaSala(sala)) {
    } else {
      setAlert({
        msg: "Introduzca los datos correctamente",
        error: true,
      });
      return;
    }
    try {
      const { data } = await clienteAxios.post(
        `/paciente/`,
        { name, surname, historia_clinica, cama, sala },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${access_token}`,
          },
        }
      );

      setAlert({ msg: "Paciente Agregado", error: false });
      setName("");
      setSurname("");
      setHistoriaClinica("");
      setCama("");
      setSala("");
    } catch (error) {
      setAlert({
        msg: error.response.data.detail,
        error: true,
      });
    }
  };

  const { msg } = alert;
  return (
    <div className="md:flex md:justify-center">
      <div className="min-w-96 md:mr-10 md:w-4/5">
        <h2 className="text-3xl text-center font-black">Agregar Paciente</h2>
        <div className="block w-full">{msg && <Alert alert={alert} />}</div>
        <form
          className="my-10 bg-white shadow rounded-lg px-10 py-5"
          onSubmit={handleSubmit}
        >
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-md font-bold"
              htmlFor="name"
            >
              Nombre del Paciente:
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nombre del Paciente"
              className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-md font-bold"
              htmlFor="surname"
            >
              Apellidos del Paciente:
            </label>
            <input
              id="surname"
              type="text"
              placeholder="Apellidos del Paciente"
              className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
              value={surname}
              onChange={(e) => setSurname(e.target.value)}
            ></input>
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-md font-bold"
              htmlFor="historiaClinica"
            >
              Historia Clínica:
            </label>
            <input
              id="historiaClinica"
              type="text"
              placeholder="Historia Clinica"
              className="w-full mt-3 p-2 border rounded-xl bg-gray-50"
              value={historia_clinica}
              onChange={(e) => setHistoriaClinica(e.target.value)}
            ></input>
          </div>

          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-md font-bold"
              htmlFor="sala"
            >
              Sala:
            </label>
            <select
              id="sala"
              className="w-full mt-3 p-2 rounded-xl bg-gray-50 border"
              defaultValue={sala}
              onChange={(e) => setSala(e.target.value)}
            >
              <option value={"1"}>1</option>
              <option value={"2"}>2</option>
              <option value={"3"}>3</option>
              <option value={"4"}>4</option>
              <option value={"5"}>5</option>
              <option value={"6"}>6</option>
              <option value={"7"}>7</option>
              <option value={"8"}>8</option>
              <option value={"9"}>9</option>
              <option value={"10"}>10</option>
            </select>
          </div>
          <div className="my-5">
            <label
              className="uppercase text-gray-600 block text-md font-bold"
              htmlFor="cama"
            >
              Cama:
            </label>
            <select
              id="cama"
              className="w-full mt-3 p-2 rounded-xl bg-gray-50 border"
              defaultValue={cama}
              onChange={(e) => setCama(e.target.value)}
            >
              <option value={cama}></option>
              {camasSalas
                .filter((cama) => cama.sala.numero === sala)
                .map((cama) => {
                  return (
                    <option value={cama.numero} key={cama.id}>
                      {cama.numero}
                    </option>
                  );
                })}
            </select>
          </div>
          <input
            type="submit"
            value="Agregar"
            className="bg-sky-600 w-full py-3 text-white uppercase text-bold rounded-md hover:bg-sky-700 hover:cursor-pointer transition-colors mb-5 mt-5"
          ></input>
        </form>
      </div>
    </div>
  );
};
export default Recepcionista;
