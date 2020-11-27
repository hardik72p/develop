import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faLaptop,
  faUsers,
  faGripHorizontal,
  faHandPointUp,
  faCogs, faNewspaper,
  faLock,
  faUserPlus,
  faPen,
  faShareSquare,
  faSpaceShuttle,
  faLongArrowAltRight
} from '@fortawesome/free-solid-svg-icons'


function Layout(props) {
  return (
    <div className="main-container">
      <div className="header">
        <div className="d-flex align-items-center justify-content-between">
          <img
            className="logo"
            src="https://i.ibb.co/w4STxBw/Logo.png"
            alt="Logo"
          />
          <ul className="d-flex align-items-center mb-0 nav-box-list">
            <li className="nav-box-list-item active"><span></span><a href="">How it works</a></li>
            <li className="nav-box-list-item"><a href="">Fetures</a></li>
            <li className="nav-box-list-item"><a href="">Pricing</a></li>
            <li className="nav-box-list-item"><a href="">About Us</a></li>
            <li className="nav-box-list-item"><button className="btn btn-outline-secondary">Log In</button></li>
            <li className="nav-box-list-item"><button className="btn btn-success">Buy Now</button></li>
          </ul>
        </div>
      </div>

      <div className="img-container">
        <div className="content" >
          <p>DON'T SETTLE FOR LESS</p>
          <p className="main-heading">Choose the <b>#1</b></p>
          <p className="main-heading">eSignature brand, <b>iEsign</b>.</p>
          <button className="btn btn-success">Get Started <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
        </div>
      </div>
      <div className="main-body">
        <div className="title">OUR FEATURES</div>
        <div className="heading">Move business forward <b>securely and reliably</b></div>
        <p className="content">
          Go digital with iEsign. We'll help you all the way and scale with you.
          even to a global level. it's easy to get started and easy to grow when you choose the eSignature company that Aragon Research* considers the industry leader.
        </p>
        <div className="card-container">
          <div className="card-block">
            <div><FontAwesomeIcon className="icon" icon={faBook} /></div>
            <div><p><b>Get it done, faster than ever</b></p></div>
            <p className="card-content">
              Easy to use, quick to learn and a snap to implement, approvals and agreements are simple and convenient for everyone involved.
            </p>
          </div>
          <div className="card-block">
            <div><FontAwesomeIcon className="icon" icon={faLaptop} /></div>
            <div><p><b>Anywhere, andtime, any device</b></p></div>
            <p className="card-content">
              Access,sign and send important documents from your desk, on the road or everywhere in between.
            </p>
          </div>
          <div className="card-block">
            <div><FontAwesomeIcon className="icon" icon={faGripHorizontal} /></div>
            <div><p><b>Works with your favorite apps</b></p></div>
            <p className="card-content">
              DocuSign works with the services, applications, and devices you already use: Microsoft, Salesforce, Google, Apple and many more.
            </p>
          </div>
          <div className="card-block">
            <div><FontAwesomeIcon className="icon" icon={faUsers} /></div>
            <div><p><b>Over 85 million users worldwide</b></p></div>
            <p className="card-content">
              DocuSign is the most reliable and globally trusted services for electronic signatures and approvals.
            </p>
          </div>
        </div>
      </div>
      <div className="img-box">
        <div className="img-body">
          <div className="d-flex flex-column align-items-center just mt-5 mb-5">
            <div className="title">EXPLORE US</div>
            <div className="heading text-white">Discover the <b>iEsign</b> that's right for you</div>
          </div>
          <div className="card-container">
            <div className="card-block">
              <div><FontAwesomeIcon className="icon" icon={faBook} /></div>
              <div><p><b>For individuals</b></p></div>
              <p className="card-content">
                From school permission slips to business contracts,
                take charge of your digital life. Electronically sign and
                manage all your documents from one place so you can focus on
                what truly matters.
            </p>
            </div>
            <div className="card-block">
              <div><FontAwesomeIcon className="icon" icon={faLaptop} /></div>
              <div><p><b>For small & medium business</b></p></div>
              <p className="card-content">
                Delight customers with an easier way to work together. Save valuable time and keep your business moving from anywhere.
            </p>
            </div>
          </div>
        </div>
      </div>
      <div className="about-us">
        <div className="list-items ">
          <p className="title">ABOUT US</p>
          <p className="heading">Our promise to continue <b>innovating</b></p>
          <li className="card-content mb-3 text-left">Stops document such as contracts being modified after you've signed them</li>
          <li className="card-content mb-3 text-left">Save time - send documents for signing in few clicks. No more scanning!</li>
          <li className="card-content mb-3 text-left">Simple to use with templates and workflows that can match your process</li>
          <li className="card-content mb-3 text-left">Automate manual tasks wasting your time - i.e. following up signatures</li>
          <li className="card-content mb-3 text-left">Is legally accepted in major countries with securely encrypted PKI technology  </li>
          <div className="d-flex align-items-baseline">
            <button className="btn btn-success mr-5">Buy Now</button>
            <p><b>Learn more about pricing</b></p>
          </div>
        </div>
        <div className="functional-item">
          <div className="item">
            <div className="circled-item bg-warning">
              <FontAwesomeIcon icon={faHandPointUp} />
            </div>
            <div><p><b>Easy to use</b></p></div>
          </div>
          <div className="item">
            <div className="circled-item bg-success">
              <FontAwesomeIcon icon={faCogs} />
            </div>
            <div><p><b>Customisation</b></p></div>
          </div>
          <div className="item">
            <div className="circled-item bg-primary">
              <FontAwesomeIcon icon={faNewspaper} />
            </div>
            <div><p><b>Paperless proven reasults</b></p></div>
          </div>

          <div className="item">
            <div className="circled-item bg-danger">
              <FontAwesomeIcon icon={faLock} />
            </div>
            <div><p><b>Secure and legally binding</b></p></div>
          </div>

          <div className="item">
            <div className="circled-item bg-info">
              <FontAwesomeIcon icon={faLaptop} />
            </div>
            <div><p><b>Works on laptop and desktop</b></p></div>
          </div>
        </div>
      </div>
      <div className="img-ss">
      </div>
      <div className="process">
        <p className="title">OUR PROCESS</p>
        <p className="heading">How it <b>works</b></p>
        <div className="process-steps">

          <div className="step-after">
            <div className="step">
              <div className="circled-item bg-light">
                <FontAwesomeIcon icon={faBook} />
              </div>
              <p className="title">STEP 1</p>
              <div><p><b>Add document to iEsign</b></p></div>
              <div className="card-content">
                Upload your document create a template and personalize it
              </div>
            </div>
          </div>

          <div className="step-after">
            <div className="step">
              <div className="circled-item bg-light">
                <FontAwesomeIcon icon={faUserPlus} />
              </div>
              <p className="title">STEP 2</p>
              <div><p><b>Add prties and send</b></p></div>
              <div className="card-content">
                Add recipients and send for eSignature
            </div>
            </div>
          </div>

          <div className="step-after">
            <div className="step">
              <div className="circled-item bg-light">
                <FontAwesomeIcon icon={faPen} />
              </div>
              <p className="title">STEP 3</p>
              <div><p><b>eSign documents</b></p></div>
              <div className="card-content">
                Get multiple parties to eSign documents
            </div>
            </div>
          </div>

          <div className="step-after">
            <div className="step">
              <div className="circled-item bg-light">
                <FontAwesomeIcon icon={faShareSquare} />
              </div>
              <p className="title">STEP 4</p>
              <div><p><b>Archive documents</b></p></div>
              <div className="card-content">
                Save, send, and archive tamper-proof documents
            </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="start d-flex align-items-center justify-content-around">
          <div className="d-flex align-items-center">
            <div className="circled-item bg-light mr-3">
              <FontAwesomeIcon icon={faSpaceShuttle} className="fa-rotate-270" />
            </div>
            <div>
              <div><b>GET STARTED</b></div>
              <div className="heading text-white">Ready to get started with <b>iEsign</b>?</div>
            </div>
          </div>
          <button className="btn btn-success">Get Started <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
        </div>
        <div className="copyright">
          <p>@ 2021 Copyright iEsign. Allrights reserved  </p>
        </div>
      </div>
    </div>
  );
}

export default Layout;