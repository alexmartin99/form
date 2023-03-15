import React from "react";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetail from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
  const {
    firstName,
    lastName,
    contact,
    bbrand,
    btype,
    srno,
    vbrand,
    vtype,
    vno,
    claimType,
    upload1,
    upload2,
  } = formData;

  return (
    <Container maxWidth='sm'>
      <h3>Review</h3>
      <RenderAccordion summary="Names" go={ go } details={[
        { 'First Name': firstName },
        { 'Last Name': lastName },
        { 'Contact No': contact },
      ]} />
      <RenderAccordion summary="Battery Details" go={ go } details={[
        { 'Battery Brand': bbrand },
        { 'Battery Type': btype },
        { 'Serial No': srno },
        { 'Claim Type': claimType },
      ]} />
      <RenderAccordion summary="Vehicle Details" go={ go } details={[
        { 'Vehicle Brand': vbrand },
        { 'Vehicle Model': vtype},
        { 'Vehicle Reg-No': vno },
      ]} />
      <RenderAccordion summary="Upload" go={ go } details={[
        { 'Warranty Card Front': upload1 },
        { 'Warranty Card Back': upload2 },
      ]} />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: '1.5rem' }}
        onClick={() => go('submit')}
      >
        Submit
      </Button>

    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary
      expandIcon={<ExpandMoreIcon />}
    >{summary}</AccordionSummary>
    <AccordionDetail>
      <div>
        { details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>

        }) }
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        ><EditIcon /></IconButton>
      </div>
    </AccordionDetail>
  </Accordion>
)
