import React, {Component} from 'react';

import homeContent1 from '../../img/home_content_1.jpg';
import homeContent2 from '../../img/home_content_2.jpg';
import serviceCover01 from '../../img/service/product_01.jpg';
import serviceCover02 from '../../img/service/product_02.jpg';
import serviceCover03 from '../../img/service/product_03.jpg';
import serviceCover04 from '../../img/service/product_04.jpg';

class Content extends React.Component {
  render() {
    return (<div>
      <section className="g-bg-secondary">
        <div className="container g-pt-20">
          <div class="row no-gutters">
            <div className="col-md-12 text-center">
              <header className="u-heading-v2-3--bottom g-brd-primary g-mb-20">
                <h2 className="h2 u-heading-v2__title g-color-primary prompt-500">ปุ๋ยตราเพชรน้ำหนึ่ง โปร่งใส เต็มสูตร ทุกกระสอบ</h2>
              </header>
            </div>
            <div class="col-lg-3 g-px-40 g-mb-50 g-mb-0--lg">
              <div class="text-center">
                <span class="d-inline-block u-icon-v3 u-icon-size--xl g-bg-primary g-color-white rounded-circle g-mb-30">
                  <i class="icon-finance-086 u-line-icon-pro"></i>
                </span>
                <h3 class="h4 g-color-gray-dark-v2 mb-3 prompt-500">โปร่งใส</h3>
                <p class="mb-0">ปุ๋ยทุกกระสอบบรรจุในถุงใส มองเห็นเนื้อในก่อนซื้อ ทุกกระสอบมี QR CODE ตรวจสอบย้อนหลังได้</p>
              </div>
            </div>

            <div class="col-lg-3 g-brd-left--lg g-brd-gray-light-v4 g-px-40 g-mb-50 g-mb-0--lg">
              <div class="text-center">
                <span class="d-inline-block u-icon-v3 u-icon-size--xl g-bg-primary g-color-white rounded-circle g-mb-30">
                  <i class="icon-education-108 u-line-icon-pro"></i>
                </span>
                <h3 class="h4 g-color-gray-dark-v2 mb-3 prompt-500">เต็มสูตร</h3>
                <p class="mb-0">ปุ๋ยทุกกระสอบผลิตจากแม่ปุ๋ยคุณภาพดี ธาตุอาหารครบ NPK เต็มสูตรทุกกระสอบ</p>
              </div>
            </div>

            <div class="col-lg-3 g-brd-left--lg g-brd-gray-light-v4 g-px-40 g-mb-50 g-mb-0--lg">
              <div class="text-center">
                <span class="d-inline-block u-icon-v3 u-icon-size--xl g-bg-primary g-color-white rounded-circle g-mb-30">
                  <i class="fa fa-thumbs-up"></i>
                </span>
                <h3 class="h4 g-color-gray-dark-v2 mb-3 prompt-500">น้ำหนักครบ</h3>
                <p class="mb-0">ปุ๋ยทุกกระสอบผลิตจากเครื่องจักรทันสมัย น้ำหนักวัตถุดิบเที่ยงตรง แม่นยำ น้ำหนักเนื้อปุ๋ยครบ 50 กิโลกรัม</p>
              </div>
            </div>

            <div class="col-lg-3 g-brd-left--lg g-brd-gray-light-v4 g-px-40">
              <div class="text-center">
                <span class="d-inline-block u-icon-v3 u-icon-size--xl g-bg-primary g-color-white rounded-circle g-mb-30">
                  <i class="icon-education-112 u-line-icon-pro"></i>
                </span>
                <h3 class="h4 g-color-gray-dark-v2 mb-3 prompt-500">สูตรสั่งตัดรายพื้นที่</h3>
                <p class="mb-0">ใช้ปุ๋ยเพชรน้ำหนึ่งจากโรงงานใกล้บ้านจะได้ปุ๋ยสูตรที่เหมาะกับพื้นที่มากที่สุดและผลิตปุ๋ยสั่งตัดได้</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="container g-pt-60">
        <div class="row justify-content-center text-center g-mb-15">
          <div class="col-lg-12">
            <h2 class="h2 g-color-primary mb-2 prompt-500">สินค้าและบริการ</h2>
            <div class="d-inline-block g-width-30 g-height-2 g-bg-primary mb-2"></div>
            <p class="mb-0">คัดสรรสิ่งดีเพื่อพัฒนาวงการเกษตรไทย</p>
          </div>
        </div>
        <div class="row no-gutters g-mb-50">
          <div class="col-sm-6 col-lg-3">

            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15 g-pb-30">
              <img className="img-fluid w-100 mb-3" src={serviceCover01} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400">ปุ๋ยเคมีตราเพชรน้ำหนึ่ง</h3>
              <p class="g-color-gray-dark-v4">ปุ๋ยโปร่งใส เต็มสูตรทุกกระสอบ</p>
            </div>

          </div>

          <div class="col-sm-6 col-lg-3">

            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15 g-pb-30  g-ml-minus-1">
              <img className="img-fluid w-100 mb-3" src={serviceCover02} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400">แม่ปุ๋ยเคมี</h3>
              <p class="g-color-gray-dark-v4">พร้อมจัดส่งทั่วประเทศ</p>
            </div>

          </div>

          <div class="col-sm-6 col-lg-3">

            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15 g-pb-30  g-ml-minus-1">
              <img className="img-fluid w-100 mb-3" src={serviceCover03} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400">เครื่องผสมปุ๋ยนวัตกรรม 4.0</h3>
              <p class="g-color-gray-dark-v4">เที่ยงตรง แม่นยำ ทันสมัย</p>
            </div>

          </div>

          <div class="col-sm-6 col-lg-3">

            <div class="u-shadow-v21--hover text-center g-brd-around g-brd-gray-light-v4 g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15 g-pb-30  g-ml-minus-1">
              <img className="img-fluid w-100 mb-3" src={serviceCover04} alt=""/>
              <h3 class="h5 g-color-black mb-3 prompt-400">แฟรนไชส์ปุ๋ยเพชรน้ำหนึ่ง</h3>
              <p class="g-color-gray-dark-v4">กำไรดี คืนทุนไว</p>
            </div>

          </div>
        </div>
      </section>
    </div>);
  }
}

export default Content;
