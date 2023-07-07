import React, { Component } from 'react';
import { Grid, Stack, Typography , Divider , List, ListItem, ListItemText, Box, ListItemIcon } from '@mui/material';
import WaffleChart from './WaffleChart';
import Helper from '../helper/helper';

class Task5 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data5: []
    }
  }
  render() {
    const circleStyle = {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'black',
      marginRight: '0px',
    };
    return (
      <Stack px={14} py={2}>
        <Divider />
        <Typography mt={6} variant='h3' sx={{ textAlign: "center"}}>Waffle chart</Typography>
        <Grid mt={3} container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container>
              {this.state.data5?.map((d,i) => {
              return <Grid item xs={i==0?4:2}>
                  <WaffleChart hasLegend={i==0?true:false} data={d.data} title={d.title} />
              </Grid>
              })}
            </Grid>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Stack
             direction="column"
             justifyContent="center"
             alignItems="flex-start"
             px={26}
             mt={6}>
             <Typography variant='h5'>Distribution of COVID-19 Vaccine in 10 Populous Countries of the European Union</Typography>
             <Typography mt={2} sx={{ textAlign: 'justify' }}>
             The waffle charts provide a visual representation of the distribution of COVID-19 vaccine doses in each country. They help identify the dominant vaccines and highlight the availability of different vaccine types across the European Union. To analyze the data and provide insights on the waffle charts for each country, let's take a closer look at the distribution of COVID-19 vaccine doses
             </Typography>
             <Typography mt={2} variant="h6" component="header">Germany:</Typography>
             <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding>
                <ListItemText primary="Pfizer/BioNTech and Moderna vaccines have the highest distribution, followed by Oxford/AstraZeneca and Johnson-Johnson. Other vaccines, such as Novavax and Covaxin, have a smaller distribution, while some vaccines have not been distributed in Germany" /></ListItem>
                </List>
                <Typography mt={2} variant="h6" component="header">France:</Typography>
             <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding>
                <ListItemText primary="Pfizer/BioNTech is the most widely distributed vaccine, followed by Moderna and Oxford/AstraZeneca. Johnson-Johnson, Novavax, Sanofi/GSK, and other vaccines have smaller distributions" /></ListItem>
                </List>
                <Typography mt={2} variant="h6" component="header">Italy:</Typography>
             <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding>
                <ListItemText primary="Pfizer/BioNTech and Moderna vaccines are highly distributed in Italy, with Oxford/AstraZeneca also having a significant distribution. Johnson-Johnson and Novavax have smaller distributions, while other vaccines have negligible or no distribution in Italy" /></ListItem>
                </List>
                <Typography mt={2} variant="h6" component="header">Spain:</Typography>
             <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding>
                <ListItemText primary="Pfizer/BioNTech and Moderna vaccines have the highest distribution in Spain. Oxford/AstraZeneca is also distributed, while Johnson-Johnson and other vaccines have no distribution" /></ListItem>
                </List>
                <Typography mt={2} variant="h6" component="header">Poland:</Typography>
             <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding>
                <ListItemText primary="Pfizer/BioNTech is the most distributed vaccine in Poland, followed by Oxford/AstraZeneca and Johnson-Johnson. Moderna and other vaccines have smaller distributions" /></ListItem>
                </List>
                <Typography mt={2} variant="h6" component="header">Romania, Netherlands, Belgium, Portugal, and Sweden:</Typography>
             <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding>
                <ListItemText primary="Pfizer/BioNTech is the most widely distributed vaccine in these countries, followed by Moderna and Oxford/AstraZeneca. Johnson-Johnson, Novavax, and other vaccines have smaller distributions, while some vaccines have not been distributed in these countries" /></ListItem>
                </List>
                <Typography mt={2} variant="h6" component="header">European Union:</Typography>
             <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding>
                <ListItemText primary="Pfizer/BioNTech is the most widely distributed vaccine in the European Union, followed by Moderna and Oxford/AstraZeneca. Johnson&Johnson, Sputnik V, Sinovac, and other vaccines have smaller distributions" /></ListItem>
                </List>
          </Stack>
          </Grid>
        </Grid>
      </Stack>
    );
  }
  async componentDidMount() {
    let task5Data = await Helper.getTask5Data();
    this.setState({data5 : task5Data});
  }
}

export default Task5;