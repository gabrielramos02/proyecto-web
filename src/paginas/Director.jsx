import { Link } from "react-router-dom"
import busc from "/src/iconos/loupe.png"
const Director = () => {
  return (
    <div className="flex justify-between">
      <h1 className="text-4xl font-black">Pagina principal</h1>
      <div className="flex-row">
        <img src={busc}
        className="h-12 w-12 p-1 rounded-md">
        </img>
        <span className="font-black text-lg">Buscar</span>
      </div>
    </div>
  )
}
export default Director