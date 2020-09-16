import React from 'react';
import './Contact.scss';

const Contact = (props) => {
  return <div className={'contact-element'}>
      <div className={'container contact-container'}>
          <div className={'left-column'}>
              <div>
                  <h4>„Koneser” Michał Kasperek</h4>
              </div>
              <div>
                  Tel: <a href={'tel:694 594 344'}>694 594 344</a>
              </div>
              <div>
                  Mail: <a href={'mailto:mike1236@wp.pl'}>mike1236@wp.pl</a>
              </div>
              <div>
                  Adres: 42-400 Zawiercie, ul. Rolnicza 77
              </div>
              <br/>
              <div>
                  NIP: 649-112-99-81
              </div>
              <div>
                  REGON: 240237443
              </div>
              <br/>
              <div>
                  Nr rachunku: 03 1050 1591 1000 0023 0038 6097
              </div>
              <iframe
                  className={'map'}
                  frameBorder="0"
                  src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAjNVjaTGYCkBRs5otdvGYMG5xkwRvdER8&q=Koneser.+FPHU.+Kasperek+M.`}
                  allowFullScreen/>
          </div>
          <div class={'right-column'}>
              <div className={'top'}>
                  <div>
                      <h4>Hurtownia „Profil”</h4>
                  </div>
                  <div>
                      Zainteresowanych zapraszamy również do zaprzyjaźnionej hurtowni z akcesoriami i materiałami do produkcji mebli - „Profil”
                  </div>
                  <br />
                  <div>
                      Tel: 518 910 997, 32 67 32 258
                  </div>
                  <div>
                      Adres: 42-400 Zawiercie, ul. Żabia 39
                  </div>
                  <div>
                      Strona: <a target={'_blank'} href={'http://profil-akcesoria.pl/'}>http://profil-akcesoria.pl/</a>
                  </div>
              </div>
              <div className={'bottom'}>
                  <iframe
                      className={'map'}
                      frameBorder="0"
                      src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAjNVjaTGYCkBRs5otdvGYMG5xkwRvdER8&q=Profil+Zawiercie`}
                      allowFullScreen/>
              </div>
          </div>
      </div>
  </div>
};

export default Contact;
