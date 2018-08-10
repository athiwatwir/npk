import React, {Component} from 'react';

import news01 from '../../img/news/news_01.jpg';
import news02 from '../../img/news/news_02.jpg';

class Article extends React.Component {

  render() {
    return (
      <div>
        <section className="g-bg-white">
          <div className="container">
            <div class="row justify-content-center text-center g-mb-15">
              <div class="col-lg-12">
                <h2 class="h2 g-color-primary mb-0 prompt-500">สาระความรู้</h2>
                <p class="mb-0">รวมบทความและสาระความรู้เพื่อพัฒนาการเกษตรไทย</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-7">
                <article>
                  <figure className="u-shadow-v25 g-pos-rel g-mb-20">
                    <img className="img-fluid w-100" src={news01} alt="" />
                  </figure>
                  <h3 className="h4 g-mb-10">
                    <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">เทคนิคดีๆ ปลูกขนุนผลดกดก บังคับออกผลตามจุดที่ต้องการ ง่ายมากๆ</a>
                  </h3>
                  <ul className="list-inline g-color-gray-dark-v4 g-font-size-12">
                    <li className="list-inline-item">July 20, 2017</li>
                  </ul>
                  <p className="g-color-gray-dark-v2">
                    บังคับขนุนออกลูกตามจุดที่ต้องการ ขนุนเป็นผลไม้ที่นิยมรับประทานในเอเชียใต้และเอเชียตะวันออกเฉียงใต้ ด้วยประโยชน์หลากหลายของไม้ผลชนิดนี้ เรามีวิธีบังคับให้ติดดอกออกผลตามที่ใจต้องการได้มาให้ทดลองกันครับ ก่อนอื่นต้องเตรียมอุปกรณ์ ดังนี้
                  </p>
                  <a className="" href="#!">อ่านต่อ...</a>
                </article>
              </div>
              <div className="col-lg-5">
                <article className="media">
                  <a className="d-flex u-shadow-v25 align-self-center mr-3" href="#!">
                    <img className="g-width-80 g-height-80" src={news02} alt="" />
                  </a>
                  <div className="media-body">
                    <h3 className="h5">
                      <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">10วิธีการปลูกผักง่ายๆ มันจะง่ายแค่ไหนไปดูกัน</a>
                    </h3>
                    <ul className="u-list-inline g-font-size-12 g-color-gray-dark-v4">
                      <li className="list-inline-item">July 20, 2017</li>
                    </ul>
                  </div>
                </article>
                <hr class="g-brd-gray-light-v4 g-my-10" />
                <article className="media">
                  <a className="d-flex u-shadow-v25 align-self-center mr-3" href="#!">
                    <img className="g-width-80 g-height-80" src={news02} alt="" />
                  </a>
                  <div className="media-body">
                    <h3 className="h5">
                      <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">10วิธีการปลูกผักง่ายๆ มันจะง่ายแค่ไหนไปดูกัน</a>
                    </h3>
                    <ul className="u-list-inline g-font-size-12 g-color-gray-dark-v4">
                      <li className="list-inline-item">July 20, 2017</li>
                    </ul>
                  </div>
                </article>
                <hr class="g-brd-gray-light-v4 g-my-10" />
                <article className="media">
                  <a className="d-flex u-shadow-v25 align-self-center mr-3" href="#!">
                    <img className="g-width-80 g-height-80" src={news02} alt="" />
                  </a>
                  <div className="media-body">
                    <h3 className="h5">
                      <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">10วิธีการปลูกผักง่ายๆ มันจะง่ายแค่ไหนไปดูกัน</a>
                    </h3>
                    <ul className="u-list-inline g-font-size-12 g-color-gray-dark-v4">
                      <li className="list-inline-item">July 20, 2017</li>
                    </ul>
                  </div>
                </article>
                <hr class="g-brd-gray-light-v4 g-my-10" />
                <article className="media">
                  <a className="d-flex u-shadow-v25 align-self-center mr-3" href="#!">
                    <img className="g-width-80 g-height-80" src={news02} alt="" />
                  </a>
                  <div className="media-body">
                    <h3 className="h5">
                      <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">10วิธีการปลูกผักง่ายๆ มันจะง่ายแค่ไหนไปดูกัน</a>
                    </h3>
                    <ul className="u-list-inline g-font-size-12 g-color-gray-dark-v4">
                      <li className="list-inline-item">July 20, 2017</li>
                    </ul>
                  </div>
                </article>
                <hr class="g-brd-gray-light-v4 g-my-10" />
                <article className="media">
                  <a className="d-flex u-shadow-v25 align-self-center mr-3" href="#!">
                    <img className="g-width-80 g-height-80" src={news02} alt="" />
                  </a>
                  <div className="media-body">
                    <h3 className="h5">
                      <a className="u-link-v5 g-color-gray-dark-v1 g-color-primary--hover prompt-400" href="#!">10วิธีการปลูกผักง่ายๆ มันจะง่ายแค่ไหนไปดูกัน</a>
                    </h3>
                    <ul className="u-list-inline g-font-size-12 g-color-gray-dark-v4">
                      <li className="list-inline-item">July 20, 2017</li>
                    </ul>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </section>
      </div>
      );
  }

}

export default Article
