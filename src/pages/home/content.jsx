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
      <section className="container">
        <div className="row justify-content-center text-center g-mb-15">
          <div className="col-lg-12">
            <h2 className="h2 g-color-primary mb-0 prompt-500">สินค้าและบริการ</h2>
            <p className="mb-0">คัดสรรสิ่งดีเพื่อพัฒนาวงการเกษตรไทย</p>
          </div>
        </div>
        <div className="row no-gutters g-mb-50">
          <div className="col-sm-4 col-lg-3 col-xs-6 col-6">

            <div className="text-center g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15">
              <img className="img-fluid w-100 mb-3" src={serviceCover01} alt=""/>
              <h3 className="h5 g-color-black mb-1 prompt-400">ปุ๋ยเคมีตราเพชรน้ำหนึ่ง</h3>
              <p className="g-color-gray-dark-v4 mb-0">ปุ๋ยโปร่งใส เต็มสูตรทุกกระสอบ</p>
            </div>

          </div>

          <div className="col-sm-4 col-lg-3 col-xs-6 col-6">

          <div className="text-center g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15">
              <img className="img-fluid w-100 mb-3" src={serviceCover02} alt=""/>
              <h3 className="h5 g-color-black mb-1 prompt-400">แม่ปุ๋ยเคมี</h3>
              <p className="g-color-gray-dark-v4 mb-0">พร้อมจัดส่งทั่วประเทศ</p>
            </div>

          </div>

          <div className="col-sm-4 col-lg-3 col-xs-6 col-6">

            <div className="text-center g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15">
              <img className="img-fluid w-100 mb-3" src={serviceCover03} alt=""/>
              <h3 className="h5 g-color-black mb-1 prompt-400">เครื่องผสมปุ๋ยนวัตกรรม 4.0</h3>
              <p className="g-color-gray-dark-v4 mb-0">เที่ยงตรง แม่นยำ ทันสมัย</p>
            </div>

          </div>

          <div className="col-sm-4 col-lg-3 col-xs-6 col-6">

            <div className="text-center g-brd-transparent--hover g-bg-white--hover g-transition-0_3 g-cursor-pointer g-px-15 g-pt-15">
              <img className="img-fluid w-100 mb-3" src={serviceCover04} alt=""/>
              <h3 className="h5 g-color-black mb-1 prompt-400">แฟรนไชส์ปุ๋ยเพชรน้ำหนึ่ง</h3>
              <p className="g-color-gray-dark-v4 mb-0">กำไรดี คืนทุนไว</p>
            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}

export default Content;
