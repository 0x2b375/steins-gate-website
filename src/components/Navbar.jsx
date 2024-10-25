// src/components/Navbar.jsx
import { ConfigProvider, Menu, Layout } from "antd";
import { HashLink as Link } from "react-router-hash-link";
import WorldLineSwitcher from "./WorldLineSwitcher";

const { Header } = Layout;

const items = [
  {
    key: "home",
    label: (
      <Link smooth to='#hero' className='nav-item' data-text='Home'>
        Home
      </Link>
    ),
  },

  {
    key: "lab",
    label: (
      <Link smooth to='#interactive' className='nav-item' data-text='Lab'>
        Lab
      </Link>
    ),
  },
  {
    key: "timeline",
    label: (
      <Link smooth to='#timeline' className='nav-item' data-text='Timeline'>
        Timeline
      </Link>
    ),
  },
  {
    key: "about",
    label: (
      <Link smooth to='#about' className='nav-item' data-text='About'>
        About
      </Link>
    ),
  },
];

const Navbar = () => (
  <ConfigProvider
    theme={{
      components: {
        Menu: { darkItemSelectedBg: "#000", darkItemSelectedColor: "#fb923c" },
      },
    }}
  >
    <Header className='flex justify-between items-center bg-primary p-0'>
      <Menu
        mode='horizontal'
        theme='dark'
        className='shadow-md bg-primary flex-grow'
        items={items}
      />
      <div className='mr-4'>
        <WorldLineSwitcher />
      </div>
    </Header>
  </ConfigProvider>
);

export default Navbar;
