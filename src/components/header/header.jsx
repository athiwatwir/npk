import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import { Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {bubble as Menu} from 'react-burger-menu';

import logo from '../../img/logo1.png';
import qrScan from '../../img/qr-code-scanner.png';

import Home from '../../pages/home/index.js';
import QrCodeScan from '../../pages/qrcode/scanner';
import QrCodeScanResult from '../../pages/qrcode/scanresult';



import { BrowserRouter, Switch } from 'react-router-dom';

class Header extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (<BrowserRouter>
      <div>
      <Menu burgerButtonClassName={"d-block d-sm-none"}>
        <Link to="/" className="menu-item prompt-500">
          <i className="fa fa-home g-pr-5"></i>
          หน้าแรก
        </Link>
        <a id="about" className="menu-item prompt-500" href="/about">
          <i className="fa fa-smile-o g-pr-5"></i>
          เกี่ยวกับเรา</a>
        <a id="contact" className="menu-item prompt-500" href="/contact">
          <i className="fa fa-commenting-o g-pr-5"></i>
          ข่าวกิจกรรม</a>
        <a id="contact" className="menu-item prompt-500" href="/contact">
          <i className="fa fa-video-camera g-pr-5"></i>
          วีดิโอ</a>
        <a id="contact" className="menu-item prompt-500" href="/contact">
          <i className="fa fa-coffee g-pr-5"></i>
          เว็บบอร์ด</a>
        <a className="menu-item prompt-500" href="">
          <i className="fa fa-tty g-pr-5"></i>
          ติดต่อเรา</a>
      </Menu>
      <section className="g-bg-main">
        <div className="container">
          <div className="row">
            <div className="col-8 offset-2 text-center">
              <a href="#l" className="navbar-brand g-pt-0 g-pb-0">
                <img src={logo} alt=""></img>
              </a>
            </div>
            <div className="col-2 text-rigth d-flex align-items-center">
              <Link to="/qrcode/scanner" className="g-pt-0 g-pb-0">
                <img src={qrScan} alt="" className="w-100 d-block d-sm-none"></img>
              </Link>

            </div>
          </div>
        </div>
      </section>
      <header id="" className="u-header u-header--static d-none d-sm-block">
        <div className="u-header__section u-header__section--light g-bg-main g-transition-0_3">
          <nav className="js-mega-menu navbar navbar-expand-sm hs-menu-initialized hs-menu-horizontal">
            <div className="container">

              <div className="collapse navbar-collapse align-items-center g-mr-40--sm" id="navBar">
                <ul className="navbar-nav mx-auto prompt-400">
                  <li className="nav-item  g-mx-5--sm g-mx-10--md g-mx-10--lg g-mx-15--xl">
                    <Link to="/" className="nav-link g-py-7 g-px-0 g-color-white">หน้าแรก</Link>
                  </li>
                  <li className="nav-item g-mx-5--sm  g-mx-10--md g-mx-10--lg g-mx-15--xl">
                    <a href="#" className="nav-link g-py-7 g-px-0 g-color-white">เกี่ยวกับเรา</a>
                  </li>
                  <li className="nav-item g-mx-5--sm  g-mx-10--md g-mx-10--lg g-mx-15--xl">
                    <a href="#" className="nav-link g-py-7 g-px-0 g-color-white">ข่าวกิจกรรม</a>
                  </li>
                  <li className="nav-item g-mx-5--sm  g-mx-10--md g-mx-10--lg g-mx-15--xl">
                    <a href="#" className="nav-link g-py-7 g-px-0 g-color-white">วีดิโอ</a>
                  </li>
                  <li className="nav-item g-mx-5--sm  g-mx-10--md g-mx-10--lg g-mx-15--xl">
                    <a href="#" className="nav-link g-py-7 g-px-0 g-color-white">เว็บบอร์ด</a>
                  </li>
                  <li className="nav-item g-mx-5--sm  g-mx-10--md g-mx-10--lg g-mx-15--xl">
                    <a href="#" className="nav-link g-py-7 g-px-0 g-color-white">ติดต่อเรา</a>
                  </li>
                  <li className="nav-item g-mx-5--sm  g-mx-10--md g-mx-10--lg g-mx-15--xl">
                    <Link to="/qrcode/scanner" className="nav-link g-py-7 g-px-0 g-color-white">QR-CODE</Link>

                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      <div className="d-block d-sm-none">
        <div className="metabar-inner u-marginAuto u-maxWidth1000 js-metabarBottom">
          <div class="metabar-block metabar-block--below u-overflowHidden u-height44 u-noWrap u-overflowX">
            <div className="menu-slide-block"><Link to="/" >หน้าแรก</Link></div>
            <div className="menu-slide-block"><a href="#">เกี่ยวกับเรา</a></div>
            <div className="menu-slide-block"><a href="#">ข่าวกิจกรรม</a></div>
            <div className="menu-slide-block"><a href="#">วีดิโอ</a></div>
            <div className="menu-slide-block"><a href="#">เว็บบอร์ด</a></div>
            <div className="menu-slide-block"><a href="#">ติดต่อเรา</a></div>
            <div className="menu-slide-block"><Link to="/qrcode/scanner" >QR-CODE</Link></div>
          </div>
        </div>
      </div>
        <Route exact path="/" component={Home} />
        <Route exact path="/qrcode/scanner" component={QrCodeScan} />
        <Route exact path="/qrcode/scanresult" component={QrCodeScanResult} />
    </div>
  </BrowserRouter>)
  }
}

export default Header
