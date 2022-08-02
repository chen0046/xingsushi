import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import {db} from '../firebase-connection'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import '../css_files/menucard.css';

export const MenuCard = () => {

  ///First PopUP
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);

  ///Second PopUp
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };
  const handleClose2 = () => {
    setAnchorEl2(null);
  };
  const open2 = Boolean(anchorEl2);

  ///Third PopUp
  const [anchorEl3, setAnchorEl3] = React.useState(null);
  const handleClick3 = (event) => {
    setAnchorEl3(event.currentTarget);
  };
  const handleClose3 = () => {
    setAnchorEl3(null);
  };
  const open3 = Boolean(anchorEl3);

  ///PartyMenu Collection
  const [menus,setMenus] = useState([]);
  const menusCollection = collection(db,"menus");
  useEffect(() =>{
    const getMenus = async () => {
      const data = await getDocs(menusCollection);
      setMenus(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getMenus();
  },[menusCollection]);

  ///SashimiMenu Collection
  const [menus2,setMenus2] = useState([]);
  const menus2Collection = collection(db,"menus2");
  useEffect(() =>{
    const getMenus2 = async () => {
      const data = await getDocs(menus2Collection);
      setMenus2(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getMenus2();
  },[menus2Collection]);

  ///FamilyMenu Collection
  const [menus3,setMenus3] = useState([]);
  const menus3Collection = collection(db,"menus3");
  useEffect(() =>{
    const getMenus3 = async () => {
      const data = await getDocs(menus3Collection);
      setMenus3(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getMenus3();
  },[menus2Collection]);


  return (
    <div>
      <Card sx={{ maxWidth: 345 }} className='card'>
        <CardMedia
          component="img"
          image='../FamilyMenu.jpg'
          alt="FamilyMenu"
        />
        <CardContent>
          <Typography variant="h4" >
            Family Menu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A Menu For Family
          </Typography>
        </CardContent>
        <CardActions>
          <button variant="contained" onClick={handleClick} className='seeMoreButton'>
            See More
          </button>
        </CardActions>
        <Popover

          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
        >
          <div>
            {menus3.map((menu3) => {
              return (
                <div>
                  <h1>{menu3.familyMenu}</h1>
                </div>
              );
            })}
          </div>
        </Popover>
      </Card>

   
      <Card sx={{ maxWidth: 345 }} className='card2'>
        <CardMedia
          component="img"
          image='../Sashimi.png'
          alt="SashimiMenu"
          height={200}
        />
        <CardContent>
          <Typography variant="h4" >
            Sashimi Menu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A Sashimi Menu With Fresh Salmon, Tuna & Shrimp
          </Typography>
        </CardContent>
        <CardActions>
          <button variant="contained" onClick={handleClick2} className='seeMoreButton'>
            See More
          </button>
        </CardActions>
        <Popover

          open={open2}
          anchorEl={anchorEl2}
          onClose={handleClose2}
        >
          <div>
            {menus2.map((menu2) => {
              return (
                <div>
                  <h1>{menu2.sashimiMenu}</h1>
                </div>
              );
            })}
          </div>
        </Popover>
      </Card>

     
      <Card sx={{ Width: 450 }} className='card3'>
        <CardMedia
          component="img"
          image='../PartyMenu.png'
          alt="PartyMenu"
          height={220}
          width={400}
        />
        <CardContent>
          <Typography variant="h4" >
            Party Menu
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A Party Menu For More Than 5 Person
          </Typography>
        </CardContent>
        <CardActions>
          <button variant="contained" onClick={handleClick3} className='seeMoreButton'>
            See More
          </button>
        </CardActions>
        <Popover

          open={open3}
          anchorEl={anchorEl3}
          onClose={handleClose3}
        >
          <div>
            {menus.map((menu) => {
              return (
                <div>
                  <h1>{menu.partyMenu}</h1>
                </div>
              );
            })}
          </div>
        </Popover>
      </Card>



    </div>

  )
}

