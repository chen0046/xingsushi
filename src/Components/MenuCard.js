import { collection, getDocs } from 'firebase/firestore';
import React, { useState, useEffect } from 'react'
import {db} from '../firebase-connection'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

export const MenuCard = () => {

  
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };

  const open = Boolean(anchorEl);

  const id = open ? 'PartyMenu' : undefined;

  const [menus,setMenus] = useState([]);
  const menusCollection = collection(db,"menus");
  useEffect(() =>{
    const getMenus = async () => {
      const data = await getDocs(menusCollection);
      setMenus(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getMenus();
  },[]);

  const [menus2,setMenus2] = useState([]);
  const menus2Collection = collection(db,"menus2");
  useEffect(() =>{
    const getMenus2 = async () => {
      const data = await getDocs(menus2Collection);
      setMenus2(data.docs.map((doc) => ({...doc.data(),id: doc.id})));
    };
    getMenus2();
  },[]);


  return (
    <div>
    <Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      height="140"
      image ='../PartyMenu.png'
      alt="Menu 1"
    />
    <CardContent>
      <Typography variant="h4" >
        Party Menu
      </Typography>
      <Typography variant="body2" color="text.secondary">
        A Menu for parties more than 6 person
      </Typography>
    </CardContent>
    <CardActions>
    <Button  variant="contained" onClick={handleClick}>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose} 
      >
          <div>
        {menus.map((menu) => {
      return(
        <div>
          <h1>{menu.partyMenu}</h1>
        </div>
      );
     })} 
    </div>
      </Popover>
        See More
      </Button>    
    </CardActions>
    
  </Card>

      <div>
    <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="140"
      image ='../PartyMenu.png'
      alt="Menu 1"
    />
    <CardContent>
      <Typography variant="h4" >
        Party Menu
      </Typography>
      <Typography variant="body2" color="text.secondary">
        A Menu for parties more than 6 person
      </Typography>
    </CardContent>
    <CardActions>
    <Button  variant="contained" onClick={handleClick}>
        See More
      </Button>    
    </CardActions>
    <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose} 
      >
          <div>
        {menus2.map((menu2) => {
      return(
        <div>
          <h1>{menu2.sashimiMenu}</h1>
        </div>
      );
     })} 
    </div>
      </Popover>
  </Card>

     

  </div>

     


    </div>

  )
}

