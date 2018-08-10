import React, {Component} from 'react';

import news01 from '../../img/news/news_01.jpg';
import news02 from '../../img/news/news_02.jpg';
import icon1 from '../../img/icon/km_01.png';
import icon2 from '../../img/icon/km_02.png';
import icon3 from '../../img/icon/km_03.png';
import icon4 from '../../img/icon/km_04.png';
import news from '../../img/1531553727581.jpg';
import new_cover from '../../img/1531554003096.jpg';
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import ReactDOM from 'react-dom';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
//import 'react-accessible-accordion/dist/fancy-example.css';

class Article extends React.Component {


  render() {
    return (<div>
      <section className="g-bg-white">
        <div className="container">
          <div class="row justify-content-center g-mb-15">
            <div className="col-md-12 text-center">
              <h2 className="h2 g-color-primary mb-0 prompt-500">สาระความรู้</h2>
              <p className="mb-0">รวมบทความและสาระความรู้เพื่อพัฒนาการเกษตรไทย</p>
            </div>
            <div className="col-md-8">

              <Tabs>
                <TabList>
                  <Tab>เกษตรต้นแบบ</Tab>
                  <Tab>ดินและปุ๋ย</Tab>
                  <Tab>พืชเศรษฐกิจ</Tab>
                  <Tab>การเพิ่มผลผลิต</Tab>
                </TabList>

                <TabPanel>
                  <div className="row">
                    <div className="col-md-2 text-center g-pr-0 d-none d-sm-block">
                      <img className="img-fluid g-width-60x" src={icon1} alt=""/>
                    </div>
                    <div className="col-md-10 g-pl-0 g-pr-0 align-self-center d-none d-sm-block">
                      <p className="g-pl-0 g-pr-0 g-mb-0">
                        <strong>ความสำเร็จของเกษตรต้นแบบ ที่ใช้ความรู้ แรงบันดาลใจ และความมุ่งมั่นพยายาม ทำให้เกิดเกษตรมิติใหม่ที่ประสบความสำเร็จ ควรที่จะได้รู้ไว้เพื่อเป็นกรณีศึกษา</strong>
                      </p>
                    </div>
                  </div>

                  <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
                      <article>
                        <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                          <img className="img-fluid w-100" src={news01} alt=""/>
                        </figure>
                        <h3 className="h5 g-mb-0">
                          <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">เทคนิคดีๆ ปลูกขนุนผลดกดก บังคับออกผลตามจุดที่ต้องการ</a>
                        </h3>
                        <p className="g-color-gray-dark-v2 g-mb-0"><small>
                          บังคับขนุนออกลูกตามจุดที่ต้องการ ขนุนเป็นผลไม้ที่นิยมรับประทานในเอเชียใต้และเอเชียตะวันออกเฉียงใต้ </small>
                        </p>
                        <a className="" href="#!">อ่านต่อ...</a>
                      </article>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
                      <article>
                        <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                          <img className="img-fluid w-100" src={news01} alt=""/>
                        </figure>
                        <h3 className="h5 g-mb-0">
                          <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">เทคนิคดีๆ ปลูกขนุนผลดกดก บังคับออกผลตามจุดที่ต้องการ</a>
                        </h3>
                        <p className="g-color-gray-dark-v2 g-mb-0"><small>
                          บังคับขนุนออกลูกตามจุดที่ต้องการ ขนุนเป็นผลไม้ที่นิยมรับประทานในเอเชียใต้และเอเชียตะวันออกเฉียงใต้ </small>
                        </p>
                        <a className="" href="#!">อ่านต่อ...</a>
                      </article>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
                      <article>
                        <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                          <img className="img-fluid w-100" src={news01} alt=""/>
                        </figure>
                        <h3 className="h5 g-mb-0">
                          <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">เทคนิคดีๆ ปลูกขนุนผลดกดก บังคับออกผลตามจุดที่ต้องการ</a>
                        </h3>
                        <p className="g-color-gray-dark-v2 g-mb-0"><small>
                          บังคับขนุนออกลูกตามจุดที่ต้องการ ขนุนเป็นผลไม้ที่นิยมรับประทานในเอเชียใต้และเอเชียตะวันออกเฉียงใต้ </small>
                        </p>
                        <a className="" href="#!">อ่านต่อ...</a>
                      </article>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6 col-6">
                      <article>
                        <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                          <img className="img-fluid w-100" src={news01} alt=""/>
                        </figure>
                        <h3 className="h5 g-mb-0">
                          <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">เทคนิคดีๆ ปลูกขนุนผลดกดก บังคับออกผลตามจุดที่ต้องการ</a>
                        </h3>
                        <p className="g-color-gray-dark-v2 g-mb-0 "><small>
                          บังคับขนุนออกลูกตามจุดที่ต้องการ ขนุนเป็นผลไม้ที่นิยมรับประทานในเอเชียใต้และเอเชียตะวันออกเฉียงใต้ </small>
                        </p>
                        <a className="" href="#!">อ่านต่อ...</a>
                      </article>
                    </div>

                  </div>

                </TabPanel>

                <TabPanel>
                  <div className="row">
                    <div className="col-md-2 text-center g-pr-0 d-none d-sm-block">
                      <img className="img-fluid g-width-60x" src={icon2} alt=""/>
                    </div>
                    <div className="col-md-10 g-pl-0 g-pr-0 align-self-center d-none d-sm-block">
                      <p className="g-pl-0 g-pr-0 g-mb-0">
                        <strong>ความรู้เรื่องดินและปุ๋ย เป็นพื้นฐานสำคัญที่เกษตรกรทุกคนต้องรู้ พืชจะงาม ผลผลิตจะดี</strong>
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-md-2 text-center g-pr-0 d-none d-sm-block">
                      <img className="img-fluid g-width-60x" src={icon3} alt=""/>
                    </div>
                    <div className="col-md-10 g-pl-0 g-pr-0 align-self-center d-none d-sm-block">
                      <p className="g-pl-0 g-pr-0 g-mb-0">
                        <strong>วิธีการปลูกข้าว ข้าวโพด อ้อย มันสำปะหลัง ปาล์มน้ำมัน ยางพารา และพืชอื่นอีกหลายชนิด</strong>
                      </p>
                    </div>
                  </div>

                </TabPanel>
                <TabPanel>
                  <div className="row">
                    <div className="col-md-2 text-center g-pr-0 d-none d-sm-block">
                      <img className="img-fluid g-width-60x" src={icon4} alt=""/>
                    </div>
                    <div className="col-md-10 g-pl-0 g-pr-0 align-self-center d-none d-sm-block">
                      <p className="g-pl-0 g-pr-0 g-mb-0">
                        <strong>วิธีการปลูกพืชที่ถูกต้อง เริ่มจากการปลูก บำรุงรักษา และใส่ปุ๋ยตามคำแนะนำ</strong>
                      </p>
                    </div>
                  </div>

                </TabPanel>
              </Tabs>

            </div>
            <div class="col-md-4">
              <h3 className="prompt-500 text-center g-bg-primary g-color-white g-mb-0 g-pt-5"><span className="">ปุ๋ยตราเพชรน้ำหนึ่ง <br/>โปร่งใส เต็มสูตร ทุกกระสอบ</span></h3>
              <Accordion>
                  <AccordionItem expanded="true">
                      <AccordionItemTitle>
                          โปร่งใส
                      </AccordionItemTitle>
                      <AccordionItemBody>
                          <p>ปุ๋ยทุกกระสอบบรรจุในถุงใส มองเห็นเนื้อในก่อนซื้อ ทุกกระสอบมี QR CODE ตรวจสอบย้อนหลังได้</p>
                      </AccordionItemBody>
                  </AccordionItem>
                  <AccordionItem>
                      <AccordionItemTitle>
                          เต็มสูตร
                      </AccordionItemTitle>
                      <AccordionItemBody>
                          <p>ปุ๋ยทุกกระสอบผลิตจากแม่ปุ๋ยคุณภาพดี ธาตุอาหารครบ NPK เต็มสูตรทุกกระสอบ</p>
                      </AccordionItemBody>
                  </AccordionItem>
                  <AccordionItem>
                      <AccordionItemTitle>
                        น้ำหนักครบ
                      </AccordionItemTitle>
                      <AccordionItemBody>
                          <p>ปุ๋ยทุกกระสอบผลิตจากเครื่องจักรทันสมัย น้ำหนักวัตถุดิบเที่ยงตรง แม่นยำ น้ำหนักเนื้อปุ๋ยครบ 50 กิโลกรัม</p>
                      </AccordionItemBody>
                  </AccordionItem>
                  <AccordionItem>
                      <AccordionItemTitle>
                          สูตรสั่งตัดรายพื้นที่
                      </AccordionItemTitle>
                      <AccordionItemBody>
                          <p>ใช้ปุ๋ยเพชรน้ำหนึ่งจากโรงงานใกล้บ้าน จะได้ปุ๋ยสูตรที่เหมาะกับพื้นที่มากที่สุด และผลิตปุ๋ยสั่งตัดได้</p>
                      </AccordionItemBody>
                  </AccordionItem>
              </Accordion>
            </div>

          </div>

        </div>
      </section>

      <section>
        <div className="container">
          <div className="row g-bg-main">
            <div className="col-md-3 align-self-center">
              <h3 className="h2 prompt-500 text-center g-color-white">ข่าวกิจกรรม</h3>
            </div>
            <div className="col-md-9">
              <div className="row g-color-gray">
                <div className="col-md-3 text-center g-pt-10 g-pb-10">
                  <div className="u-shadow-v21 g-brd-around--md g-brd-gray-light-v4 g-bg-secondary">
                    <p className="g-mb-0"><small>เตรียมพบกับโรงงานปุ๋ยสั่งตัดใกล้บ้าน</small></p>
                    <p className="g-mb-0"><small>ส.กย.หลังสวน จ.ชุมพร</small></p>
                  </div>

                </div>
                <div className="col-md-3 text-center g-pt-10 g-pb-10">
                  <div className="u-shadow-v21 g-brd-around--md g-brd-gray-light-v4 g-bg-secondary">
                    <p className="g-mb-0"><small>เตรียมพบกับโรงงานปุ๋ยสั่งตัดใกล้บ้าน</small></p>
                    <p className="g-mb-0"><small>นิยมการเกษตร จ.สุราษฎร์ธานี</small></p>
                  </div>

                </div>
                <div className="col-md-3 text-center g-pt-10 g-pb-10">
                  <div className="u-shadow-v21 g-brd-around--md g-brd-gray-light-v4 g-bg-secondary">
                    <p className="g-mb-0"><small>เตรียมพบกับโรงงานปุ๋ยสั่งตัดใกล้บ้าน</small></p>
                    <p className="g-mb-0"><small>ส.กย.บ้านชัยพร จ.บึงกาฬ</small></p>
                  </div>

                </div>
                <div className="col-md-3 text-center g-pt-10 g-pb-10">
                  <div className="u-shadow-v21 g-brd-around--md g-brd-gray-light-v4 g-bg-secondary">
                    <p className="g-mb-0"><small>เตรียมพบโรงงานใหม</small>่</p>
                    <p className="g-mb-0"><small>ส.กย.บ้านชัยพร จ.บึงกาฬ</small></p>
                  </div>

                </div>
              </div>
            </div>


          </div>
          <div className="row g-bg-primary">
            <div className="col-md-3 g-pl-0 d-none d-sm-block">
              <img className="img-fluid w-100" src={news} alt=""/>
            </div>
            <div className="col-md-9">
              <div className="row g-mt-10">
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-6 text-center">
                  <article>
                    <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                      <img className="img-fluid w-100" src={new_cover} alt=""/>
                    </figure>
                    <p className="g-color-gray-dark-v2 g-mb-0"><small>พิธีเปิดโรงงานปุ๋ยเพชรน้ำหนึ่ง สกย.</small></p>
                    <a className="" href="#!">อ่านต่อ...</a>
                  </article>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-6 text-center">
                  <article>
                    <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                      <img className="img-fluid w-100" src={new_cover} alt=""/>
                    </figure>
                    <p className="g-color-gray-dark-v2 g-mb-0"><small>พิธีเปิดโรงงานปุ๋ยเพชรน้ำหนึ่ง สกย.</small></p>
                    <a className="" href="#!">อ่านต่อ...</a>
                  </article>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-6 text-center">
                  <article>
                    <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                      <img className="img-fluid w-100" src={new_cover} alt=""/>
                    </figure>
                    <p className="g-color-gray-dark-v2 g-mb-0"><small>พิธีเปิดโรงงานปุ๋ยเพชรน้ำหนึ่ง สกย.</small></p>
                    <a className="" href="#!">อ่านต่อ...</a>
                  </article>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-6 col-6 text-center">
                  <article>
                    <figure className="u-shadow-v25 g-pos-rel g-mb-0">
                      <img className="img-fluid w-100" src={new_cover} alt=""/>
                    </figure>
                    <p className="g-color-gray-dark-v2 g-mb-0"><small>พิธีเปิดโรงงานปุ๋ยเพชรน้ำหนึ่ง สกย.</small></p>
                    <a className="" href="#!">อ่านต่อ...</a>
                  </article>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>);
  }

}

export default Article
