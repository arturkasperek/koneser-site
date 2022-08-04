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
                  src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2538.181236708819!2d19.408491115674583!3d50.49358457948137!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4717238d6f4fbeef%3A0x81e2bddb68efff5e!2sKoneser%20-%20Meble%20na%20wymiar!5e0!3m2!1sen!2spl!4v1658749510928!5m2!1sen!2spl`}
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
                      Strona: <a target={'_blank'} href={'https://profil-akcesoria.pl/'}>https://profil-akcesoria.pl/</a>
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
