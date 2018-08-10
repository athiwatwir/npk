import React, {Component} from 'react';
import ReactDOM from "react-dom";
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class GoogleMap extends React.Component{
  

  render() {
    return (
      <div>
        <section>
          <div className="container-fluid">
            <div class="row justify-content-center text-center g-mb-0">
              <div class="col-lg-12 g-pr-0 g-pl-0">
                <h2 class="h2 g-color-primary mb-0 prompt-500">โรงงานของเรา</h2>

                <p class="mb-0">เครือข่ายโรงงานผลิตปุ๋ยเคมีเต็มสูตรใกล้บ้านทั่วประเทศ</p>
              </div>
            </div>
          <div style={{ height: '55vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: 'AIzaSyBJQYLgPSNagLAl2qN572V3CDyMKjAC7QY'}}
              defaultCenter={this.props.center}
              defaultZoom={this.props.zoom}
            >
              <AnyReactComponent
                lat={18.7994005}
                lng={98.9712039}
                text={'Kreyser Avrora'}
              />
            </GoogleMapReact>
          </div>
          </div>
        </section>

      </div>
    );
  }
}

export default GoogleMap
