import { Box, Container, Grid, Typography } from "@mui/material";
import workers from '../images/workers.png';
import customers from '../images/customer.png';
import sales from '../images/sale.png';
import saledetail from '../images/saledetails.png';
import roles from '../images/roles.png';
import sapakim from '../images/sapkim.png';
import products from '../images/product.png';
import departments from '../images/departments.png';
import cheshbonit from '../images/reciept.jpg';
import mail from '../images/gmail.png';
import graph1 from '../images/salegraph.png';
import graph2 from '../images/salegraph2.jpg';
import add_cust from "../images/add_cust.png";
export default function Supermarket(){
    return<><Container sx={{marginTop:"5%", marginBottom:"5%"}}>
    <Typography variant="h4">
        ממשק דוגמא לניהול סופרמרקט
    </Typography>
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" variant="h6" gutterBottom>
?ניהול חנות גדולה יכול להיות קשה מסובך, להכיר את הלקוחות הקבועים, לדעת את מצב העובדים, לבצע הזמנות מספקים... אז, למה לא להקל על כל העבודה הקשה הזאת באמצעות ממשק אקסל נוח לשימוש
    </Typography>
    <Typography align="right" variant="h6" gutterBottom>
  :הממשק מספק מספר כלים המקילים על ניהול חנות 
    </Typography>
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
  ניהול נתונים
    </Typography>
    <Typography align="right" variant="h6" gutterBottom>
  על ידי גליונות אקסל, תוכל לנהל את נתוני הלקוחות הקבועים, העובדים השונים והמלאי. הגליונות בנויים כך שניתן בקלות להוסיף אליהם נתונים, לעדכן, ולמחוק
    </Typography>
    <img src={add_cust} style={{ maxWidth: '100%', objectFit: 'contain', height: '400px', width: '100%' }} />
  
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
  הפקת מסמכים
      </Typography>
    <Typography align="right" variant="h6" gutterBottom>
  על ידי לחיצה פשוטה על כפתור תוכל להפיק חשבוניות לקנייה, ולשחזר חשבוניות ישנות על פי הנתונים שנמרו בממשק
    </Typography>
    <img src={cheshbonit} style={{ maxWidth: '100%', objectFit: 'contain', height: '400px', width: '100%' }} />
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
  מיילים אוטומטיים
      </Typography>
    <Typography align="right" variant="h6" gutterBottom>
  הממשק בודק כל זמן קבוע את המלאי בחנות ושולח מייל אוטומטי לספק הרלוונטי להשלמת המלאי
    </Typography>
    <img src={mail} style={{ maxWidth: '100%', objectFit: 'contain', height: '400px', width: '100%' }} />
    
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
      ניתוח נתונים
      </Typography>
    <Typography align="right" variant="h6" gutterBottom>
      הממשק מספק כלים לפילוח הנתונים בצורות שונות, כך תוכל להתכונן לתקופות עמוסות, לעודד עובדים מצטיינים ולהשוות בין מכירות של מוצרים שונים
    </Typography>
    <img src={graph1} style={{ maxWidth: '100%', objectFit: 'contain', height: '400px', width: '100%' }} />
    <Typography align="right" variant="h5" gutterBottom>
וכמובן שזה לא הכל! הממשק מסוגל לספק פונקציות חישוב מורכבות לצרכים שונים, לסרוק ולנתח מסמכים וגם לספק מערכת לניהול חשבונות 
      </Typography>
       </Container> </>
}