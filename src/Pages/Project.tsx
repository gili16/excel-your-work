import { ImageList, ImageListItem, Typography } from '@mui/material';
import * as React from 'react';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import { useParams } from 'react-router-dom';
import diet from '../images/diet3.jpeg'
import todo from '../images/todo.jpg'
import budget from '../images/budget.png'
import { projects } from '../data/projects';
import {fileToBase64, downloadBase64File} from '../utils'
import Supermarket from '../Component/Supermarket';
import Students from '../Component/Students';
function DownloadButton(props:{url:string, name:string}) {
  const handleDownload = () => {
    // Logic for handling download
    // fetch(props.url)
    // .then(response => {
    //   if (!response.ok) {
    //     throw new Error("File not found");
    //   }
    //   return response.blob();  // Read the file as a blob
    // })
    // .then(blob => {
    //   const link = document.createElement('a');
    //   link.href = URL.createObjectURL(blob);  // Create an object URL for the blob
    //   link.download =props.name+".xlsm";  // Specify the download name
    //   console.log(link.download)
    //   link.click();
    // })
    // .catch(error => {
    //   console.error("Error downloading file:", error);
    // });
    fileToBase64(props.url)
    .then((base64String: string) => {
      console.log("Base64 String: ", base64String);
      // You can now use this Base64 string for your download function
      // For example, call your downloadBase64File function to download it.
      downloadBase64File(base64String,props.name)
    })
    .catch((error: any) => {
      console.error("Failed to convert file to Base64:", error);
    });
  };

  return (
    <IconButton onClick={handleDownload} color="primary" sx={{margin:"20px"}}>
        Download
      <DownloadIcon />
    </IconButton>
  );
}
function ProjectContent( props:{image:any, title:string,explain:string, fileUrl:string }){
return <>

          <img
            src={props.image}
            alt={props.fileUrl}
            style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain',margin:"20px", height:"400px", width:"500px" }}
          />
       
 <Typography variant="h4" sx={{margin:"20px"}}>
    {props.title}
 </Typography>
 <Typography variant="body1" sx={{margin:"20px"}}>
    {props.explain}
 </Typography>
 <DownloadButton url={props.fileUrl} name={props.title} />
</>
}

function Project(){
  const params:any=useParams()
  let component=<></>

  if(params.option=="diet"){
  component=<ProjectContent image={projects.diet.image} title={projects.diet.title} explain={projects.diet.content} fileUrl="../downloads/מחשבון קלוריות.xlsm"/> 
  }else{
    if(params.option=="todo"){
        component= <ProjectContent image={projects.todo.image} title={projects.todo.title} explain={projects.todo.content} fileUrl=""/>
    }else{
      if(params.option=="supermarket"){
component=<Supermarket/>
      }else{
        if(params.option=="students"){
component=<Students/>
        }else{
          component= <ProjectContent image={projects.budget.image} title={projects.budget.title} explain={projects.budget.content} fileUrl=""/>

        }
      }
      }
  }
  return component
}
export default Project

