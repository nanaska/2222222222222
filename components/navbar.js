import NavBarStart from "./NavBarStart";
import NavBarEnd from "./NavBarEnd";
import DeliveryZone from "./DeliveryZone";
import {Link} from 'react-scroll'

export default function Navbar() {
    return (<>

            <div className="navbar  md:px-2.5 bg-base-100">
                <div className="navbar-start">
                    <NavBarStart/>
                    <ul className="menu menu-horizontal p-0  hidden lg:flex">

                        <div className="dropdown dropdown-hover">
                            <label tabIndex="0" className="btn btn-outline m-1">Меню</label>
                            <ul tabIndex="0"
                                className="dropdown-content menu p-2 grid grid-cols-2 place-items-center shadow bg-base-100 rounded-box w-52">
                                <li className="active:bg-white">
                                    <Link to="PizzaMenu" spy={true} smooth={true} offset={-60} duration={500}>
                                        Пицца
                                    </Link>
                                </li>
                                <li>
                                    <Link to="RollsMenu" spy={true} smooth={true} offset={-60} duration={500}>
                                        Роллы
                                    </Link>
                                </li>
                                <li>Горячее</li>
                                <li>Супы</li>

                            </ul>
                        </div>
                        <DeliveryZone/>
                        <div className="dropdown dropdown-hover">
                            <label tabIndex="0" className="btn btn-outline  m-1">Hover</label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                <li><a>Item 1</a></li>
                                <li><a>Item 2</a></li>
                            </ul>
                        </div>
                    </ul>
                </div>
                <div className="navbar-center">


                </div>
                <div className="navbar-end  flex flex-row space-x-1">
                    <NavBarEnd/>
                </div>

            </div>
        </>
    )
}