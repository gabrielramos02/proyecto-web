import logt from "/src/iconos/log-out.png";

const Header = ({ value }) => {
  const cerrarSesion = (e) => {
    const resultado = window.confirm("¿Está seguro que desea cerrar sesión?")
    if (!resultado){
        return
    }
    e.preventDefault();
    localStorage.clear();
    window.location.reload();
  };
  const [isOpen, setIsOpen] = value;
  return (
    <header className="px-4 py-5 bg-white border-b">
      <div className="md:flex md:justify-between">
        <div>
          <h2 className="font-black text-4xl uppercase text-sky-600 text-center">
            Hospital
          </h2>
          <button
            className="py-2 px-2 mt-2 bg-sky-600 text-white font-semibold rounded-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            Toggle Sidebar
          </button>
        </div>
        <div
          className="flex flex-row items-center cursor-pointer"
          onClick={cerrarSesion}
        >
          <p className="mx-2 font-semibold text-sky-700 text-xl">
            Cerrar <span className="text-slate-600"> Sesión</span>
          </p>
          <img
            src={logt}
            className="h-12 w-12 p-1 rounded-md"
            onClick={cerrarSesion}
          ></img>
        </div>
      </div>
    </header>
  );
};
export default Header;
