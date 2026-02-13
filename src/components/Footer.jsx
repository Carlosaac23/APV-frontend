export default function Footer() {
  return (
    <footer className='mt-auto bg-sky-500 p-2 text-white'>
      <p className='text-center text-sm'>
        <a
          className='hover:underline hover:underline-offset-2'
          href='https://github.com/Carlosaac23'
          target='_blank'
        >
          Carlos Acosta
        </a>{' '}
        {new Date().getFullYear()} &copy; Rights Reserved
      </p>
    </footer>
  );
}
