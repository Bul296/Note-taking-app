import { Link, useLocation } from "react-router-dom";
import { BookOpen } from "lucide-react"

function Navbar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-900 text-white  py-3 px-6 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/*logo*/}
        <Link to="/" className="flex items-center gap-2 ">
          <BookOpen className=" w-7 h-7 text-blue-400" />
          <span className="text-2xl text-blue-400 tracking-wide">NoteKeeper</span>
        </Link>
        {/*links*/}
        <div className="space-x-6">
          <Link to="/" className={`hover:text-blue-400 trandition ${location.pathname === "/" ? "text-blue-400 font-semibold " : "text-gray-400"
            }`}>
            Home
          </Link>
          <Link to="/create" className={`hover:text-blue-400 transition ${location.pathname === "/create" ? "text-blue-400 font-semibold" : "text-gray-400"
            }`}>
            Createnote
          </Link>

          
        </div>
      </div>

    </nav>
  )
}

export default Navbar;