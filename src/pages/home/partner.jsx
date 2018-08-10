import React, {Component} from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//import Slider from "../src/slider";

import partnerCover01 from '../../img/partner/partner_01.png';
import partnerCover02 from '../../img/partner/partner_02.png';
import partnerCover03 from '../../img/partner/partner_03.png';
import partnerCover04 from '../../img/partner/partner_04.png';


class Partner extends React.Component {
  render() {
    return (<div>
      <section class="container g-pb-10 g-pt-10">
        <div class="row justify-content-center text-center g-mb-10">
          <div class="col-lg-12">
            <h2 class="h2 g-color-primary mb-0 prompt-500">พันธมิตร</h2>
            <p class="mb-0">รวมพลังผู้เชี่ยวชาญจากหลายสาขา</p>
          </div>
        </div>
        <div class="row no-gutters g-mb-10">
          <div class="col-3">
            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15">
                <img className="img-fluid w-100" src={partnerCover01} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400 d-none d-sm-block">บริษัท สยามแท็ปโก้ จำกัด</h3>
            </div>
          </div>

          <div class="col-3">
            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15 g-ml-minus-1">
              <img className="img-fluid w-100" src={partnerCover02} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400 d-none d-sm-block">KPT Group</h3>
            </div>
          </div>

          <div class="col-3">
            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15 g-ml-minus-1">
              <img className="img-fluid w-100" src={partnerCover03} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400 d-none d-sm-block">Thai Screw Conveyor</h3>
            </div>
          </div>
          <div class="col-3">
            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15 g-ml-minus-1">
              <img className="img-fluid w-100" src={partnerCover04} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400 d-none d-sm-block">YVP Group</h3>
            </div>

          </div>
        </div>
      </section>
    </div>);
  }
}

export default Partner
