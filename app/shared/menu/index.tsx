import { Divider, Drawer } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const Menu = () => {
  const [open, setOpen] = useState(false);
  const navigate = useRouter();
  const handleScroll = (id: string) => {
    const element = document.getElementById(id) as Element;
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setOpen(false);
  };

  return (
    <div className="lg:hidden">
      <label className="hamburger z-50">
        <input type="checkbox" checked={open} onChange={event => setOpen(event.target.checked)} />
        <svg viewBox="0 0 32 32">
          <path
            className="line line-top-bottom stroke-black dark:stroke-white"
            d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
          ></path>
          <path className="line stroke-black dark:stroke-white" d="M7 16 27 16"></path>
        </svg>
      </label>

      <Drawer
        open={open}
        anchor="right"
        onClose={() => setOpen(false)}
        PaperProps={{
          className: 'dark:!text-white !bg-white dark:!bg-secondary',
        }}
      >
        <span className="flex items-center justify-between px-3 pt-3">
          <p className="text-3xl font-bold">
            ManiKantSharma<span className="text-primary">.</span>
          </p>
          <label className="hamburger">
            <input
              type="checkbox"
              checked={open}
              onChange={event => setOpen(event.target.checked)}
            />
            <svg viewBox="0 0 32 32">
              <path
                className="line line-top-bottom stroke-black dark:stroke-white"
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              ></path>
              <path className="line stroke-black dark:stroke-white" d="M7 16 27 16"></path>
            </svg>
          </label>
        </span>
        <div className="flex w-screen flex-col p-3">
          <button
            className="p-2 !text-start font-semibold transition-all duration-300 hover:text-primary"
            onClick={() => navigate.push('/')}
          >
            Home
          </button>
          <Divider />
          <button
            className="p-2 !text-start font-semibold transition-all duration-300 hover:text-primary"
            onClick={() => handleScroll('skills')}
          >
            My Skills
          </button>
          <Divider />
          <button
            className="p-2 !text-start font-semibold transition-all duration-300 hover:text-primary"
            onClick={() => handleScroll('contributions')}
          >
            Contributions
          </button>
          <Divider />
          <button
            className="p-2 !text-start font-semibold transition-all duration-300 hover:text-primary"
            onClick={() => handleScroll('aboutus')}
          >
            About Us
          </button>
          <Divider />
          <button
            className="p-2 !text-start font-semibold transition-all duration-300 hover:text-primary"
            onClick={() => navigate.push('/blog')}
          >
            Blog
          </button>
          <Divider />
          <button className="relative flex items-center justify-start gap-2 rounded bg-primary p-2 pr-6 font-bold text-neutral-50 duration-500 hover:bg-primary">
            <svg
              className="h-8 w-8 fill-neutral-50"
              height="100"
              preserveAspectRatio="xMidYMid meet"
              viewBox="0 0 100 100"
              width="100"
              x="0"
              xmlns="http://www.w3.org/2000/svg"
              y="0"
            >
              <path d="M92.86,0H7.12A7.17,7.17,0,0,0,0,7.21V92.79A7.17,7.17,0,0,0,7.12,100H92.86A7.19,7.19,0,0,0,100,92.79V7.21A7.19,7.19,0,0,0,92.86,0ZM30.22,85.71H15.4V38H30.25V85.71ZM22.81,31.47a8.59,8.59,0,1,1,8.6-8.59A8.6,8.6,0,0,1,22.81,31.47Zm63,54.24H71V62.5c0-5.54-.11-12.66-7.7-12.66s-8.91,6-8.91,12.26V85.71H39.53V38H53.75v6.52H54c2-3.75,6.83-7.7,14-7.7,15,0,17.79,9.89,17.79,22.74Z"></path>
            </svg>
            <span className="border-l-2 px-1">Mani Kant Sharma</span>
          </button>
        </div>
      </Drawer>
    </div>
  );
};

export default Menu;
