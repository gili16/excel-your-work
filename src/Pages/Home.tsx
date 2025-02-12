import * as React from 'react'
import Carousel from '../Component/Carousel';
import management from '../images/management2.jpg';
import data from '../images/data.jpg';
import opportuninty from '../images/opportunity.png';
import { Box, Grid, Typography } from '@mui/material';
import CardRound from '../Component/CardRound';
import diet from '../images/diet3.jpeg'
import todo from '../images/todo.jpg'
import budget from '../images/budget.png'
import supermarket from '../images/supermarket.jpg'
import students from '../images/students.avif';
import personal from '../images/personal_development.png';
const images = [
    { img: management, label: 'Image 1', title: 'כלים ניהוליים ', content: 'אקסל מאפשר לכם מגוון של כלים לניהול העסק שלכם' },
    { img: data, label: 'Image 2', title: 'ניתוח מידע', content: 'הפק את המירב מהנתונים שלך' },
    { img: opportuninty, label: 'Image 3', title: 'הזדמנויות אינסופיות', content: 'אקסל מאפשר לך כלי עוצמתי, רב יכולות, קל להפעלה' },
    {img:personal, label:'Image 4', title:'פיתוח אישי', content:'יחד נפתח כלים שמתאימים עבורך בדיוק ויזניקו את העסק שלך קדימה'}
    
  ];
function Home(){
return <>
<Carousel images={images}/>
<Box sx={{height:"100px"}}></Box>
<Typography align="right" sx={{marginRight:"5%"}} variant="h5" gutterBottom>
:הנה מספר דוגמאות למה שהכלים שאנחנו מפתחים יכולים לעשות
      </Typography>
      <Box sx={{height:"100px"}}></Box>
<Grid container spacing={4}>
        <Grid item xs={12} md={6}>
            <CardRound image={supermarket} title={"ניהול חנות"} text={" כך תוכלו באמצעות ממשק נוח, לנהל את החנות שלכם"} url="supermarket"/>
        </Grid>
        <Grid item xs={12} md={6}>
            <CardRound image={students} title={"ניהול קורסים"} text={"עקבו בקלות אחר התקדמות התלמידים שלכם"} url="students"/>
        </Grid>
       
        
    </Grid>
    <Box sx={{height:"100px"}}></Box>
</>
}
export default Home