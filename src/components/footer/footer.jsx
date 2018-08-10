import React, {Component} from 'react';

class Footer extends React.Component {

  render() {
    return (<div>
      <div id="contacts-section" className="g-bg-main g-color-white g-py-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
              <h2 className="u-heading-v2__title h6 mb-0 prompt-400">
                <span className="">บริษัท สยามแท็ปโก้ จำกัด</span>
              </h2>
              <address className="g-bg-no-repeat g-font-size-18 mb-0">
                <div className="d-flex g-mb-0">
                  <p className="mb-0">99/135 ถนนปทุมสามโคก ตำบลบางปรอก อำเภอเมือง จังหวัดปทุมธานี 12000</p>

                </div>
                <div className="d-flex g-mb-10">
                  <p className="mb-0">โทร 02 116 5461,085 616 4446</p>
                </div>
                <div className="d-flex g-mb-10">
                  <p className="mb-0">99/135 Pathum-Samkok rd., Bangprok, Muang, Pathumtani, THAILAND 12000</p>
                </div>

              </address>
            </div>

            <div className="col-lg-3 col-md-6 g-mb-40 g-mb-0--lg">
              <h2 className="u-heading-v2__title h6 mb-0 prompt-400">
                <span className="">สนใจเข้าร่วมธุรกิจแฟรนไชส์</span>
              </h2>
              <p>โรงงานผลิตปุ๋ยตราเพชรน้ำหนึ่งประจำอำเภอ ดูรายละเอียดเพิ่มเติม หรือติดต่อ</p>
            </div>

            <div className="col-lg-4 col-md-6 g-mb-40 g-mb-0--lg">
              <h2 className="u-heading-v2__title h6 mb-0 prompt-400">
                <span className="">เครื่องผลิตปุ๋ยเคมี KPT-512 และ KPT-612</span>
              </h2>
              <p className="mb-0">อนุสิทธิบัตรเลขที่ 1703000962</p>
              <p className="mb-0">ทะเบียนนวัตกรรมเลขที่ 02020005
              </p>
              <p className="mb-0">สงวนสิทธิรูปแบบ แนวคิด และนวัตกรรม ตามกฎหมาย</p>
              <div className="embed-responsive embed-responsive-16by9 g-mb-30">
                <iframe width="100%" src="https://www.youtube.com/embed/09uj7IIvrXg" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen="allowfullscreen"></iframe>
              </div>
            </div>

            <div className="col-lg-2 col-md-6 g-mb-40 g-mb-0--lg">
              <h2 className="u-heading-v2__title h6 mb-0 prompt-400">
                <span className="5">Link</span>
              </h2>
              <ul className="g-list-style-square">
                <li>ยื่นคำขอกรมวิชาการเกษตร</li>
                <li>กรมการข้าว</li>
                <li>การยางแห่งประเทศไทย</li>
                <li>เกษตรฟอรั่ม</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <footer className="g-bg-primary g-color-white g-py-10">
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center g-mb-10 g-mb-0--md">
              <p className="d-block g-mr-10 g-mb-10 g-mb-0--md">
                Siam Tapco Co.,Ltd. © 2018-2018, All Right Reserved
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>);
  }
}

export default Footer
