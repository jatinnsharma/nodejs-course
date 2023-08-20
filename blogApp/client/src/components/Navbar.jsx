import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="bg-gray-200 flex justify-between p-4 text-lg">
        <div><Link to={'/'} className="text-2xl">Blog App</Link></div>
        <div className="  flex gap-11 ">
            <Link to={'/'}>Home</Link>
            <Link to={""}>Create</Link>
            <Link to={""}>Contact</Link>
        </div>
        <div className="flex gap-4">
            <Link to={'/register'}>Resgister</Link>
            <Link to={'/login'}>Login</Link>
            </div>
    </div>
  )
}

export default Navbar