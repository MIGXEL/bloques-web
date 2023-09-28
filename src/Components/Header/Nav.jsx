import './nav.css';

export const Nav = () => {
  return (
    <nav className="av_nav">
        <div className="av_container_logo">
            <p className="av_logo">BLOQUES</p>
        </div>
        <div className="av_container_menu">
            <ul className="av_list_items_menu">
                <li className="av_item_menu"><a className="av_item_text" href="#inicio">Inicio</a></li>
                <li className="av_item_menu"><a className="av_item_text" href="#nosotros">Nosotros</a></li>
                <li className="av_item_menu"><a className="av_item_text" href="#servicios">Servicios</a></li>
                <li className="av_item_menu"><a className="av_item_text" href="#contacto">Contacto</a></li>
            </ul>
        </div>
    </nav>
  )
}
