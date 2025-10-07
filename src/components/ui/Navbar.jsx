"use client";

import React, { useState } from 'react'
import { ArrowBack, AutoAwesomeMosaic, Close, Construction, Home, Info, Menu, Pending, QuestionMark } from '@mui/icons-material';
import { Button, IconButton, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import logo from "../../../public/icons/LOGO.png"


const links = [
  {
    id: 1,
    title: 'خانه',
    path: "/",
    icon: <Home color='primary.main' />
  },
  {
    id: 2,
    title: 'نمونه کارها',
    path: "/portfolio",
    icon: <Construction color='primary.main' />
  },
  {
    id: 3,
    title: 'درباره ما',
    path: "/aboutus",
    icon: <Info color='primary.main' />
  },
  {
    id: 4,
    title: 'محصولات',
    path: "/products",
    icon: <AutoAwesomeMosaic color='primary.main' />
  },
]

const Navbar = ({ }) => {

  const pathname = usePathname()

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ left: open });
  };

  return (
    <>
      <div className="container !w-[95%] mx-auto z-50 shadow bg-gray-300/50 px-5 py-2 md:py-0  fixed top-2 md:top-5 rounded-3xl backdrop-blur-sm right-0 left-0">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-0">
            <Image src={logo} alt="logo" className='object-cover w-12 h-12 md:w-23 md:h-23' width={100} height={100} />
            <p className='text-lg md:text-xl lg:text-2xl font-bold' >گچ ثمین سمنان </p>
          </div>
          <ul className='hidden md:flex items-center gap-4 bg-white border-y border-gray-300 rounded-2xl py-2 px-4 shadow'>
            {
              links.map(link => (
                <Button key={link.id} variant="text" sx={{ color: pathname === link.path ? "primary.main" : "black" }}>
                  <Link href={link.path}>
                    <li>
                      {link.title}
                    </li>
                  </Link>
                </Button>
              ))
            }
          </ul>
          <div className="flex items-center gap-1">

            <a href="https://wa.me/989029820513?text=سلام%20من%20از%20سایت%20شما%20پیام%20می‌دم%20و%20می‌خواستم%20درباره%20محصولاتتون%20بپرسم" target="_blank">
              <Button variant='contained' className='text-center rounded-lg p-0 !hidden lg:!inline'>
                <span className='hidden lg:inline'>درخواست مشاوره</span>
                <Pending className='' />
              </Button>
              <IconButton sx={{bgcolor : 'primary.main' , color : 'white'}} className='lg:!hidden' size='small'>
                <QuestionMark fontSize='small'/>

              </IconButton>
            </a>
            <div className="md:hidden">
              <IconButton size='large' onClick={toggleDrawer(true)}>
                {
                  state.left ? (<Close sx={{ color: 'gray' }}  fontSize='large' />) : (<Menu sx={{ color: 'gray' }} fontSize='large' />)
                }
              </IconButton>
            </div>
          </div>

        </div>
      </div>

      <React.Fragment>
        <SwipeableDrawer
          anchor={"left"}
          open={state.left}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
          >
            <List>
              {links.map((text, index) => (
                <Link href={text.path} key={text.id} >
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>
                        {text.icon}
                      </ListItemIcon>
                      <ListItemText primary={text.title} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
            <Divider />

          </Box>
        </SwipeableDrawer>
      </React.Fragment>
    </>
  )
}

export default Navbar