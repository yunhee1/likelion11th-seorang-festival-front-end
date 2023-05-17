import React from "react";
import Nav from "../../components/Nav";
import { ReactComponent as BoothMap } from "../../images/MapPage/booth_map.svg";
import { ReactComponent as BoothBtn} from "../../images/MapPage/booth_button.svg";
import "../../css/map-page.scss";
import {ReactComponent as FootIcon} from '../../images/MapPage/foot_icon.svg';

const MapPage = () => {
  return (
    <div className="container">
      <Nav location="map" />
      <div className='map-container'>
        <BoothMap />
      </div>

      <div className ='scroll-container'>
        <div>
          <ul className='booth-wrapper' width ='300'>
            <li >
              <div className='footicon'>
              <FootIcon/>
              </div>
              <p className='booth-name'>멋쟁이 사자처럼 부스</p>
            </li>
            <li >
              <p className='booth-name'>멋쟁이 사자처럼 부스</p>
            </li>
            <li >
              <p className='booth-name'>멋쟁이 사자처럼 부스</p>
            </li>
            <li >
              <p className='booth-name'>멋쟁이 사자처럼 부스</p>
            </li>
            <li >
              <p className='booth-name'>멋쟁이 사자처럼 부스</p>
            </li>
            <li >
              <p className='booth-name'>멋쟁이 사자처럼 부스</p>
            </li>
            <li >
              <p className='booth-name'>멋쟁이 사자처럼 부스</p>
            </li>


          </ul>

        </div>
      </div>
    </div>
  );
};

export default MapPage;
