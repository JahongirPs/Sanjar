import './Footer.scss'
import { FiPhoneCall,FiMail,FiMapPin,FiSend,FiFacebook,FiYoutube } from "react-icons/fi";
import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";




const  Footer = () => {
  return (
    <div className="footer">
      <div className={'footer_primary'}>
        <div className="footer_title_group">
          <div className="footer_secondary">
           <div>
             <FiMapPin className="footer_icons"/>
           </div>
            <div>
              <strong className="footer_title">Бизнинг манзил</strong>
              <p className="footer_text">Наманган вилояти , Давлатобод тумани , Дустлик Шох кучаси 109-уй</p>
            </div>
          </div>
          <div className="footer_secondary">
            <div>
              <FiPhoneCall className="footer_icons" />
            </div>
            <div>
              <b className="footer_title"
                 style={{whiteSpace:"nowrap"}}>Биз билан богланинг</b>
              <div className="footer_text">
                +998 91 176 00 85</div>
            </div>
          </div>
          <div className="footer_secondary">
            <div>
              <FiMail className="footer_icons" />
            </div>
            <div>
              <strong className="footer_title">Электрон манзил</strong>
              <div className="footer_text">erkinjon.hodjaev@gmail.com</div>
            </div>
          </div>
        </div>
        <div className="footer_main">
         <div className="footer_main_info">
         <div className="footer_main_logo">
           <img src={logo}/>
           <div className="footer_main-text">
             Қолип тайёрлаш учун барча асбоблар, қолип бутловчи қисмлари ва аксессуарлари, қолип учун киёвий моддалар, силлиқлаш
             ва сайқаллаш асбоблари, абразив тошлар, CNC дастгохлари, Термопластавтоматлар ва хоказолар.
           </div>
           <div className="footer_main-follow">
            <b className="footer_title" style={{whiteSpace:"nowrap"}}>Бизни кузатиб боринг</b>
             <div className="footer_follow_wrapper">
            <Link to="" className="footer_follow-links">
              <FiSend className="footer_follow-icons"/>
            </Link>
               <Link to="" className="footer_follow-links">
                 <FiFacebook className="footer_follow-icons"/>
               </Link>
               <Link to="" className="footer_follow-links">
                 <FiYoutube className="footer_follow-icons"/>
               </Link>
             </div>
           </div>
         </div>
         </div>
          <div className="footer_main_info">
            <div>
              <strong className="footer_title">
                Фойдали xаволалар
              </strong>
              <div className="footer_line"></div>
            </div>
            <ul className="footer_link">
              <Link className="footer_title_link">Бош сахифа</Link>
              <Link className="footer_title_link">Хамкорлар</Link>
              <Link className="footer_title_link">Биз ҳаrимизда</Link>
              <Link className="footer_title_link">Алока</Link>
            </ul>
          </div>
          <div className="footer_main_info">
            <div>
              <strong className="footer_title">
                Таклифлар учун
              </strong>
              <div className="footer_line"></div>
            </div>
            <div className="footer_main-text">
              Доимий мижозларга кулайлик яратиш ва янги мижозларни жалб қилиш учун ушбу сайт
              яратилган болиб, унда сиз керакли кисмлар, бутловчи қисмлар, асбоблар, каталоглар ва
              махсулот маълумотларини топишингиз мумкин. Агар бирор нарсани
              топа олмасангиз - биз билан телефон ёки почта орқали богланинг, биз сизга дархол ёрдам берамиз.
            </div>
          </div>
        </div>
        <div className="footer_copyright"></div>
      </div>
    </div>
  )
}
export default Footer