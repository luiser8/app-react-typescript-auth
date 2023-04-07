import { useState, useRef, useEffect } from "react";
import "../../public/css/navbar.css";

type Props = {
    email: string,
    logout: () => void,
}

const NavBar = ({ email, logout }: Props) => {
    const ref = useRef<HTMLLIElement>(null);
    const [show, setShow] = useState<string>("");

    useEffect(() => {
        window.onclick = (event: MouseEvent) => {
            const target = event.target as HTMLLIElement
                | HTMLInputElement
                | HTMLParagraphElement
                | HTMLButtonElement
                | HTMLHeadingElement;

            if (target?.contains(ref.current) && target !== ref.current) {
                setShow("");
            }
        }
    }, []);

    return (
        <nav>
            <img src="../../public/assets/menu.svg" alt="menu" className="menu" />
            <div className="navbar-left">
                <img src="../../public/assets/logo.svg" alt="logo" className="logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul className="dropdown">
                    <li className="email-nav">{email}
                        <img src="../../public/assets/flecha.svg" className="dropbtn" alt="flecha" onClick={() => setShow("show")} />
                    </li>
                    <li ref={ref} className={`dropdown-content ${show}`} id="myDropdown">
                        <a href="#" onClick={() => logout()}>Logout</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;