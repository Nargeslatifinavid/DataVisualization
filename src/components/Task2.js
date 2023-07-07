import React, { Component } from 'react';
import LineChart from './Linechart';
import { Grid, Stack, Typography , Divider } from '@mui/material';
import Helper from '../helper/helper';

class Task2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data2: []
    }
}
  render() {
    return (
      <Stack px={14} py={2}>
        <Divider />
        <Typography mt={6} variant='h3' sx={{ textAlign: "center"}}>Line chart</Typography>
      <Grid mt={4} mb={4} columnSpacing={18} container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={2}>
                      <Typography variant='h5'>Comparison of Total COVID-19 Deaths per Million in 6 selected European Union Countries in a 6-month interval from 2020 to 2023</Typography>
                      <Typography sx={{ textAlign: 'justify' }}>
                      The line chart provides a visual representation of the variations in total COVID-19 deaths per million in the selected European Union countries over time. Overall Italy had the highest total COVID-19 deaths per million throughout most periods, followed by Belgium and Spain. Poland, Germany, France, and the Netherlands had lower total deaths per million compared to the other countries. By considering the time intervals, in the first half of 2020 (Jan-Jun'20), Italy had a significantly higher death rate compared to other countries. From July to December 2020, Poland and Germany experienced a surge in total deaths per million. In the first half of 2021 (Jan-Jun'21), Italy and Spain showed a significant decrease in death rates compared to the previous year. The second half of 2021 (Jul-Dec'21) saw a decline in total deaths per million for all countries. In the first half of 2022 (Jan-Jun'22), the death rates remained relatively low for all countries. The second half of 2022 (Jul-Dec'22) showed a continued decline in total deaths per million. In the first half of 2023 (Jan-Jun'23), the death rates remained relatively low across all countries. The results related to country comparison show, Italy consistently had the highest total COVID-19 deaths per million, followed by Spain and Belgium. Poland, Germany, France, and the Netherlands had lower death rates compared to the other countries.
                      </Typography>
                  </Stack>
              </Grid>
        <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
              <Stack
                  sx={{ background: "radial-gradient(52% 52% at 50% 50%,rgb(41 178 209 / 53%) 0%,rgba(255,255,255,0) 100%);" }}
                  direction="row"
                  justifyContent="center"
                  alignItems="center">
                  <LineChart data={this.state.data2} />
              </Stack>
          </Grid>

      </Grid>
     </Stack>
    );
  }
  async componentDidMount() {
    let task2Data = await Helper.getTask2Data();
    this.setState({data2 : task2Data});
  }
}

export default Task2;