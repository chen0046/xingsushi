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
import {MenuCard}  from '../Components/MenuCard'


export const Menu = () => {


  return (
    
    <div>
      <MenuCard/>

    </div>
  )
}
