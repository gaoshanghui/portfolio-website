import Link from 'next/link';

const Menu = ({ menuIsOpen }) => {
  return (
    <div
      className={`fixed top-[69px] z-20 bg-white w-full pt-16 pb-20 pl-28 ${
        menuIsOpen ? 'block ' : 'hidden'
      }`}
    >
      <ul className="space-y-10">
        <li>
          <Link href="/">
            <a className="text-gray-900 text-xl leading-7 font-bold">
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-gray-900 text-xl leading-7 font-bold">About</a>
          </Link>
        </li>
        <li>
          <Link href="/">
            <a className="text-gray-900 text-xl leading-7 font-bold">Resume</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;