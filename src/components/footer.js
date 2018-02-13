import React, { Component } from 'react';
import Modal from 'react-modal';

const customStyles = {
  overlay : {
   zIndex            : 9999,
   position          : 'fixed',
   top               : 0,
   left              : 0,
   right             : 0,
   bottom            : 0,
   backgroundColor   : 'rgba(255, 255, 255, 0.75)'
 },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
      hoursModalIsOpen: false,
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.openHoursModal = this.openHoursModal.bind(this);
    this.closeHoursModal = this.closeHoursModal.bind(this);
  }

  componentWillMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  openHoursModal() {
    this.setState({hoursModalIsOpen: true})
  }

  closeHoursModal() {
    this.setState({hoursModalIsOpen: false});
  }

  render() {
    return (
      <nav>
        <ul className="footer">
          <li>1645 Reservoir St, Ste 135,
            Harrisonburg, VA 22801
          </li>
            <li className="footer-hours" onClick={this.openHoursModal}>
              <span>Hours</span>
            </li>
            <li>
              <Modal
                  isOpen={this.state.hoursModalIsOpen}
                  onRequestClose={this.closeHoursModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <h5 className="text-center">Hours</h5>
                <br />
                <div className="modal-hours">
                  <p>
                    Monday 11:00 AM to 10:00 PM
                    <br />
                    Tuesday 11:00 AM to 10:00 PM
                    <br />
                    Wednesday 11:00 AM to 10:00 PM
                    <br />
                    Thursday 11:00 AM to 10:00 PM
                    <br />
                    Friday 11:00 AM to 11:00 PM
                    <br />
                    Saturday 11:00 AM to 11:00 PM
                    <br />
                    Sunday 11:00 AM to 10:00 PM
                  </p>
                </div>
              </Modal>
            </li>
              <li>sun-thurs: 11:00am-10:00pm</li>
              <li>fri-sat: 11:00am-11:00pm</li>
            <li className="footer-pin">
              <span role="img" aria-label="Pin" onClick={this.openModal}>&#x1f4cc; map</span>
            </li>
            <li>
              <Modal
                  isOpen={this.state.modalIsOpen}
                  onRequestClose={this.closeModal}
                  style={customStyles}
                  contentLabel="Modal"
                >
                <p className="text-center">Poke Alakai</p>
                <iframe
                  title="Yummy Cafe"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3125.4751776702556!2d-78.85664328466338!3d38.430491879645416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b4929699c4f029%3A0x6c9885c083863b6b!2s1645+Reservoir+St+%23135%2C+Harrisonburg%2C+VA+22801!5e0!3m2!1sen!2sus!4v1518553772487"
                  width="100%"
                  height="300px"
                  frameBorder="0"
                  allowFullScreen>
                </iframe>
              </Modal>
            </li>
          <li className="footer-tel"><span role="img" aria-label="Phone1">&#128222;</span> 540-615-5694</li>
          <li id="footer-tel"><span role="img" aria-label="Phone2">&#128222;</span> 540-615-5694</li>
          <li id="footer-tel"><span role="img" aria-label="fax">&#128224;</span> 540.615.5194</li>
        </ul>
      </nav>
    )
  }
}

export default Footer;
