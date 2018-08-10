import React, {Component} from 'react';
import SliderImage from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import './slider-animations.css';
import header_cover from '../../img/header_cover.png';
import content from './slider_content';

class Slider extends React.Component {
  render() {
    return (<div>
      <section>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 g-pl-0 g-pr-0" >
              <div>
                <img className="img-fluid w-100" src={header_cover} style={{zIndex: '9999',position: 'absolute',bottom:'0'}}/>
              </div>
              <SliderImage autoplay={3000} touchDisabled={true}>
                {
                  content.map((item, index) => (<div key={index} style={{
                      background: `url('${item.image}') no-repeat center center`

                    }}>
                    <div className="text-center g-pt-150--md g-pt-80">
                      <h1 className="prompt-700 g-font-size-30 g-font-size-50--md ">
                        <span className="g-bg-primary-opacity-0_9 g-color-white g-pl-5 g-pr-5">{item.title}</span>
                      </h1>
                      <p className="prompt-500 h2 g-font-size-20 g-font-size-27--md">
                        <span className="g-bg-black-opacity-0_6 g-color-white g-pl-5 g-pr-5">{item.description}</span>
                      </p>
                    </div>
                  </div>

                ))
                }

              </SliderImage>

            </div>
          </div>
        </div>
      </section>
    </div>);
  }
}

export default Slider
