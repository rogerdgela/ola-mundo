import styles from "./Menu.module.css"
import MenuLink from "../MenuLink"

export default function Menu() {
    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink to="/">
                    Inicio
                </MenuLink>

                <MenuLink to="/sobre-mim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    )
}