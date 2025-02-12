import { Box, Card, CardContent, Typography } from "@mui/material";

function Contact(){

return (
    <Card sx={{ minWidth: 275 ,width:"500px", marginLeft:"35%", marginTop:"5%", marginBottom:"5%"}}>
      <CardContent>
        <Typography variant="h4">
          ליצירת קשר
        </Typography>
        <Box sx={{height:"20px"}}></Box>
        <Typography variant="h5" component="div">
          gililandau@gmail.com : במייל
        </Typography>
        <Box sx={{height:"20px"}}></Box>
        <Typography variant="h5" component="div">
          0504102071 : בטלפון          
        </Typography>
        <Box sx={{height:"20px"}}></Box>
        <Typography variant="h5" component="div">
        0545785151 : טלפון נוסף
        </Typography>
        </CardContent>
    </Card>
  );

}
export default Contact