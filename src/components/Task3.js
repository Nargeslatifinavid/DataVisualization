import React, { Component } from 'react';
import { Grid, Stack, Typography, Divider , List, ListItem, ListItemText , Box , ListItemIcon } from '@mui/material';
import Helper from '../helper/helper';
import HorizontalBarChart from './Horizontalbarchart';
const colors = ["#2bdfdf", "#78d140", "#ff8d00", "#e8f705", "#c840d1"];

class Task3 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      data3: []
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
      <Stack py={2}>
        <Divider />
        <Typography mt={6} variant='h3' sx={{ textAlign: "center" }}>Multiple bar chart</Typography>
        <Grid mt={4} mb={4} container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Stack
              direction="row"
              justifyContent="center"
              alignItems="center">
              {this.state.data3?.map((d, i) =>
                <HorizontalBarChart colorBar={colors[i]} country={d.country} data={d.dataBarchart} />
              )}
            </Stack>
          </Grid>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="flex-start"
            px={26}
            mt={6}>
            <Typography variant='h5'>Comparison Covid19 vaccination statistics between different age groups for 4 countries and all countries in the European Union</Typography>
            <Typography mt={2} sx={{ textAlign: 'justify' }}>
            A multiple bar chart is a combination of a stack chart and a bar chart. It is used for comparison between different categories. This chart  here is compare Covid19 vaccination statistics between different age groups for 4 countries and all countries in the European Union.
            </Typography>
      <Typography mt={2} variant="h6" component="header">France:</Typography>
      <List sx={{marginLeft: "20px"}}>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The highest vaccination rates are observed in the 70-79 age group, with 93.75% of the population in this age range vaccinated" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 80+ age group also has a high vaccination rate of 87.11%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 0-17 age group has the lowest vaccination rate of 28.02%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 18-24, 25-49, 50-59, and 60-69 age groups have similar vaccination rates ranging from 89.15% to 91.78%" /></ListItem>
      </List>
      <Typography mt={2} variant="h6" component="header">Sweden:</Typography>
      <List sx={{marginLeft: "20px"}}>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The highest vaccination rates are observed in the 70-79 age group, with 94.48% of the population in this age range vaccinated" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 80+ age group has a high vaccination rate of 89.31%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 0-17 age group has the lowest vaccination rate of 75.95%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 18-24, 25-49, 50-59, and 60-69 age groups have vaccination rates ranging from 79.56% to 92.32%" /></ListItem>
      </List>
      <Typography mt={2} variant="h6" component="header">Italy:</Typography>
      <List sx={{marginLeft: "20px"}}>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The highest vaccination rates are observed in the 80+ age group, with 96.96% of the population in this age range vaccinated" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 70-79 and 60-69 age groups also have high vaccination rates of 93.27% and 92.75% respectively" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 0-17 age group has the lowest vaccination rate of 50.12%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 18-24, 25-49, and 50-59 age groups have vaccination rates ranging from 85.54% to 89.98%" /></ListItem>
      </List>
      <Typography mt={2} variant="h6" component="header">Romania:</Typography>
      <List sx={{marginLeft: "20px"}}>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The highest vaccination rates are observed in the 50-59 age group, with 56% of the population in this age range vaccinated" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 0-17 age group has the lowest vaccination rate of 7.1%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 18-24, 25-49, 60-69, 70-79, and 80+ age groups have vaccination rates ranging from 43.49% to 54.09%" /></ListItem>
      </List>
      <Typography mt={2} variant="h6" component="header">European Union:</Typography>
      <List sx={{marginLeft: "20px"}}>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The highest vaccination rates are observed in the 60-69 and 70-79 age groups, with 93.56% and 91.43% of the population in these age ranges vaccinated respectively" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 80+ age group also has a high vaccination rate of 85.9%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 0-17 age group has the lowest vaccination rate of 57.89%" /></ListItem>
        <ListItem disablePadding><ListItemIcon><Box sx={circleStyle}/></ListItemIcon>
        <ListItemText primary="The 18-24, 25-49, and 50-59 age groups have vaccination rates ranging from 76.34% to 82.76%" /></ListItem>
      </List>
      <Typography mt={2} sx={{ textAlign: 'justify' }}>
      Overall, the analysis reveals that higher vaccination rates are generally observed in older age groups, while the vaccination rates for younger age groups tend to be lower. This could be due to the prioritization of vulnerable populations and older individuals in the vaccination rollout. However, it's important to note that vaccination rates can vary based on several factors, including vaccine availability, distribution strategies, and vaccine hesitancy among different age groups
      </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    );
  }
  async componentDidMount() {
    let task3Data = await Helper.getTask3Data();
    this.setState({ data3: task3Data });
  }
}

export default Task3;