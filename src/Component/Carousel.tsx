import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

export default function Carousel(props: { images: any }) {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = props.images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: '100%', flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {props.images.map((step: any, index: number) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box sx={{ position: 'relative' }}>
                <Box
                  component="img"
                  sx={{
                    height: '500px',
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                  }}
                  src={step.img}
                  alt={step.label}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    right: '5%',  // Align to the right bottom
                    bottom: '10%', // Align to the bottom
                    color: 'black', // Change text color to white for better contrast on green background
                    background: 'rgba(144, 238, 144, 0.7)', // Light green background with transparency
                    padding: '10px',
                    borderRadius: '5px',
                    maxWidth: '80%',
                  }}
                >
                   <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 'bold',
                      fontFamily: "'Roboto', sans-serif", // Elegant font
                      fontSize: '2rem', // Larger font size
                      letterSpacing: '1px', // Add some letter spacing for a sleek look
                      color: 'black', // Cool blue tone (cyan)
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Optional text shadow for effect
                    }}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "'Roboto', sans-serif", // Elegant font
                      fontSize: '1.5rem', // Larger font size
                      color: 'black', // Cool blue tone (cyan)
                      letterSpacing: '0.5px', // Slight letter spacing
                      textShadow: '1px 1px 2px rgba(0, 0, 0, 0.5)', // Optional text shadow for effect
                    }}
                  >
                    {step.content}
                  </Typography>
                </Box>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
      
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{color:"forestgreen"}}
          >
            Next
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft />
            ) : (
              <KeyboardArrowRight />
            )}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0} sx={{color:"forestgreen"}}>
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight />
            ) : (
              <KeyboardArrowLeft />
            )}
            Back
          </Button>
        }
      />
    </Box>
  );
}


