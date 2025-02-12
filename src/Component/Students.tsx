import { Box, Container, Typography } from "@mui/material";
import student_example from '../images/stud_example.png';
import cheshbonit from '../images/reciept.jpg';
import todo from '../images/todo.jpg';
export default function Students(){
    return<><Container sx={{marginTop:"5%", marginBottom:"5%", marginLeft:"10%", marginRight:"10%"}}>
    <Typography variant="h4">
        ממשק דוגמא לניהול תלמידים
    </Typography>
    <Typography align="right" variant="h5" gutterBottom>
  ניהול תלמידים, הקורסים שרכשו והשיעורים שנקבעו יכול להיות מסובך למורה פרטי. אין צורך בשביל זה לשכור מזכירה! על ידי כמה גליונות אקסל תוכל לאחוז ראש ולעקוב אחר העסק שלך
    </Typography>
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
ניהול נתונים
      </Typography>
    <Typography align="right" variant="h6" gutterBottom>
  גליונות האקסל השונים שבממשק מאפשרים לך לעקוב אחר התשלומים, השיעורים שנמסרו, ואחר ההתקדמות של כל תלמיד
    </Typography>
    <img src={student_example} style={{ maxWidth: '100%', objectFit: 'contain', height: '400px', width: '100%' }} />
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
קביעת לו"ז
      </Typography>
    <Typography align="right" variant="h6" gutterBottom>
        הממשק יעזור לך לקבוע מערכת מסודרת של שיעורים שקדם הן את התלמידים והן תעזור לך להתמודד עם עומסים
    </Typography>
    <img src={todo} style={{ maxWidth: '100%', objectFit: 'contain', height: '400px', width: '100%' }} />
    <Box sx={{marginBottom:"5%"}}/>
    <Typography align="right" sx={{ fontWeight: 'bold' }} variant="h5" gutterBottom>
הפקת מסמכים
      </Typography>
    <Typography align="right" variant="h6" gutterBottom>
  הממשק יפיק עבורך חשבוניות עבור כל תשלום, סיכומים שונים ואף תעודות
    </Typography>
    <img src={cheshbonit} style={{ maxWidth: '100%', objectFit: 'contain', height: '400px', width: '100%' }} />
    <Typography align="right" variant="h5" gutterBottom>
וכמובן שזה לא הכל! הממשק מסוגל לשלוח מיילים אוטומטיים, לספק פונקציות חישוב מורכבות לצרכים שונים, לסרוק ולנתח מסמכים וגם להציג פילוח נתונים
      </Typography>
     </Container> </>
}