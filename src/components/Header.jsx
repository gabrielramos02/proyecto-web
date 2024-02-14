const Header = () => {
    return (
        <header className="px-4 py-5 bg-white border-b">
            <div className="md:flex md:justify-between">
                <h2 className="font-black text-4xl uppercase text-sky-600 text-center">
                    Hospital
                </h2>
                <button
                    type="button"
                    className="place-self-center text-semi text-xl font-bold hover:underline"
                >
                    Cerrar <span className="text-sky-600">Sesion</span>
                </button>
            </div>
        </header>
    )
}
export default Header
