import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Button, Card } from "@mui/material";
import "./box.css"
import Note from "../../src/Note/Note"
import {Link} from "react-router-dom"



export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
    <div>
      <Card className="card1">
      <Box>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography sx={{ width: '90%', flexShrink: 0 , fontSize:"20px", fontFamily:'Satoshi',fontWeight:"500"}}>
           Creater Name
            <Button>Pending</Button>
          </Typography>
          <Typography >
        June21,2022
      </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
        <h3>ABOUT</h3>
          <Typography>
          ABOUT
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 
          

   </Typography>
        </AccordionDetails>
      </Accordion>
      
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        
>    
          <Typography sx={{ width: '90%', flexShrink: 0 , fontSize:"20px", fontFamily:'Satoshi',fontWeight:"500"}}  >
      
      Creater Name
       <Button>Pending</Button>

      
          </Typography>
          <Typography >
        June21,2022
      </Typography>
         
        </AccordionSummary>
        <AccordionDetails>
      <h3>ABOUT</h3>
          <Typography>
          ABOUT
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas, ac scelerisque ante pulvinar. 

          </Typography>
          <h4>EMAIL ADDRESS</h4>
   <h5>creaters@mail.com</h5>

   <h4>TWITTER HANDLE</h4>
   <h5 >https://twitter.com/elonmusk</h5>
   
   <h4>INSTAGRAM HANDLE</h4>
   <h5 >
https://www.instagram.com/kalsdkmfklasmdklfmklsadmfklmlaksfmklmsdklfmksdmlf
</h5>
   <h4>DRIBBBLE HANDLE</h4>
   <h5 >https://dribbble.com/shots/18551776-Damascus-Techwear-Apparel-2022-web-redesign-concept</h5>
   
   <h4>BEHANCE HANDLE</h4>
   <h5 >https://www.behance.net/gallery/119045577/DE_FORM?tracking_source=for_you_feed_featured_category</h5>
   
   <hq>Accepted</hq>
 <Note/>
  
        </AccordionDetails>
      </Accordion>
     
      </Box>
      </Card>
    </div>
    </div>
  );
}
