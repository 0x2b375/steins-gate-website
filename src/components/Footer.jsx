// src/components/Footer.jsx
const Footer = () => (
  <div className='text-center text-accent p-6 border-t border-accent'>
    <p className='text-sm'>El Psy Congroo &copy; {new Date().getFullYear()}</p>
    <div className='flex justify-center space-x-6 mt-4'>
      <a
        href='https://twitter.com'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-blue-500'
      >
        Twitter
      </a>
      <a
        href='https://facebook.com'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-blue-500'
      >
        Facebook
      </a>
      <a
        href='https://discord.com'
        target='_blank'
        rel='noopener noreferrer'
        className='hover:text-blue-500'
      >
        Discord
      </a>
    </div>
  </div>
);
export default Footer;
