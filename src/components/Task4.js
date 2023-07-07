import React, { Component } from 'react';
import PieChart from './Piechart';
import { Grid, Stack, Typography, Divider, List, ListItem, ListItemText, Box, ListItemIcon } from '@mui/material';
import Helper from '../helper/helper';

class Task4 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data4: []
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
        <Typography mt={6} variant='h3' sx={{ textAlign: "center" }}>Pie chart</Typography>
        <Grid mt={4} mb={4} columnSpacing={18} container>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Stack
              sx={{ background: "radial-gradient(52% 52% at 50% 50%,rgb(41 178 209 / 53%) 0%,rgba(255,255,255,0) 100%);" }}
              direction="row"
              justifyContent="center"
              alignItems="center">
              <PieChart data={this.state.data4} />
            </Stack>
          </Grid>
          <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
            <Stack
              direction="column"
              justifyContent="center"
              alignItems="flex-start"
              spacing={2}>
              <Typography variant='h5'>Comparison of the use of different types of Covid19 vaccines in the European Union</Typography>
              <Typography sx={{ textAlign: 'justify' }}>
                The pie chart represents the distribution of COVID-19 vaccine doses among different manufacturers in the European Union. Here is the analysis:
              </Typography>
              <List sx={{ marginLeft: "20px" }}>
                <ListItem disablePadding><ListItemIcon><Box sx={circleStyle} /></ListItemIcon>
                  <ListItemText primary="Pfizer/BioNTech and Moderna: These two manufacturers dominate the distribution of COVID-19 vaccine doses in the European Union. They account for the majority of the doses administered" /></ListItem>
                <ListItem disablePadding><ListItemIcon><Box sx={circleStyle} /></ListItemIcon>
                  <ListItemText primary="Oxford/AstraZeneca, Johnson-Johnson, and other manufacturers: These manufacturers have a significant but relatively smaller share of the vaccine doses. They contribute to the overall vaccination efforts in the European Union" /></ListItem>
                <ListItem disablePadding><ListItemIcon><Box sx={circleStyle} /></ListItemIcon>
                  <ListItemText primary="Other Manufacturers: To simplify the pie chart and enhance readability, the values representing the percentage below 2% have been grouped together as -Other Manufacturers-. This category includes Sputnik V, Sinovac, Sinopharm/Beijing, CanSino, Novavax, Covaxin, Medicago, Sanofi/GSK, SKYCovione, and Valneva" /></ListItem>
                <ListItem disablePadding><ListItemIcon><Box sx={circleStyle} /></ListItemIcon>
                  <ListItemText primary="Pfizer/BioNTech and Moderna vs. Other Manufacturers: The chart highlights the concentration of vaccine doses from Pfizer/BioNTech and Moderna, indicating their significance in the vaccination campaign in the European Union" /></ListItem>
                <ListItem disablePadding><ListItemIcon><Box sx={circleStyle} /></ListItemIcon>
                  <ListItemText primary="Importance of Diverse Vaccine Portfolio: While Pfizer/BioNTech and Moderna have a substantial share, it's crucial for the European Union to maintain a diverse portfolio of vaccine manufacturers to ensure vaccine availability and address potential supply chain challenges" /></ListItem>
              </List>
            </Stack>
          </Grid>
        </Grid>
      </Stack>
    );
  }
  async componentDidMount() {
    let task4Data = await Helper.getTask4Data();
    this.setState({ data4: task4Data });
  }
}

export default Task4;