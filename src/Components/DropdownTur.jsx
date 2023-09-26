import { NavLink } from "react-router-dom"
function DropTurban(){
return(

    <div className="pagg-dropdown-parent">
        <ul className="pagg-dropdown">
            <NavLink to={'/fullvoile'}>
            <li>Full Voile / ਫੁੱਲਵਾਇਲ</li>
            </NavLink>
            <NavLink to={'/rubia'}>
            <li>Rubia Voile / ਰੂਬੀਆ</li>
            </NavLink>
        </ul>

    </div>
 )
}
export default DropTurban