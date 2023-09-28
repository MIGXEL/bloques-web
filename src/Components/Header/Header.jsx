import { Nav } from './Nav';
import './header.css';

export const Header = () => {
  return (
    <div className="av_header">
        <Nav/>
        <div className='av_container_banner'>
            <div className='av_content_banner'>
                <h1 className='av_title_banner'>Lorem ipsum</h1>
                <p className='av_subtitle_banner'>Lorem ipsum dolor sit amet consectetur</p>
                <a className='av_btn av_btn_fill av_btn_banner' href="#contacto">Contactanos!</a>
            </div>
            <div className='av_img_banner'></div>
        </div>
    </div>
  )
}
