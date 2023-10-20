import './footer.scss';

const Footer = () => {
  return (
    <footer className='footer'>
      <p className='footer__text'>
        Made with ❤️ by{' '}
        <a className='footer__link' href='https://github.com/mig-code'>
          Miguel PGómez
        </a>
      </p>
    </footer>
  );
};

export default Footer;
