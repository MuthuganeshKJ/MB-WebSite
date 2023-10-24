import { logo } from "../assets/images"

const Nav = () => {
  return (
    <nav className="flex justify-between items-center margin h-10 padding">
        <img src = {logo} className="max-sm:w-[90px] w-[180px]"/>
        <div 
        className="flex justify-between gap-3 text-sm">
            <h4>About</h4>
            <h4>Services</h4>
        </div>
    </nav>
  )
}

export default Nav