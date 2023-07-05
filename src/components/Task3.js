import React, { Component } from 'react';
import { Grid, Stack, Typography, Divider } from '@mui/material';
import Helper from '../helper/helper';
import HorizontalBarChart from './Horizontalbarchart';
const colors = ["blue", "green", "red", "yellow", "purple"];

class Task3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data3: []
    }

  }
  render() {

    return (
      <Stack py={2}>
        <Divider />
        <Typography mt={6} variant='h3' sx={{ textAlign: "center" }}>Multiple bar chart</Typography>
        <Grid mt={16} mb={20} container>
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
              mt={6}
              spacing={2}>
              <Typography variant='h5'>I am header</Typography>
              <Typography sx={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat, libero interdum facilisis cursus, sem neque tincidunt nibh, ut consectetur odio leo at lorem. Cras a dictum magna, in aliquam metus. Curabitur fringilla purus a neque malesuada, vel maximus purus dignissim. In interdum, ex a dignissim lacinia, massa urna mattis augue, id facilisis enim sapien sit amet dolor. Phasellus vel maximus tortor, quis pulvinar diam. Mauris sapien mi, commodo id vulputate vitae, rutrum nec neque. Proin turpis augue, auctor id est vel, volutpat tincidunt libero. Nam vel augue facilisis, mattis felis eu, gravida massa. Cras vel purus mi. Aliquam id libero velit. In hac habitasse platea dictumst. Pellentesque a accumsan velit, eu tristique magna. Vestibulum consequat tincidunt vehicula. Morbi eu justo accumsan, ultricies augue et, efficitur magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat, libero interdum facilisis cursus, sem neque tincidunt nibh, ut consectetur odio leo at lorem. Cras a dictum magna, in aliquam metus. Curabitur fringilla purus a neque malesuada, vel maximus purus dignissim. In interdum, ex a dignissim lacinia, massa urna mattis augue, id facilisis enim sapien sit amet dolor. Phasellus vel maximus tortor, quis pulvinar diam. Mauris sapien mi, commodo id vulputate vitae, rutrum nec neque. Proin turpis augue, auctor id est vel, volutpat tincidunt libero. Nam vel augue facilisis, mattis felis eu, gravida massa. Cras vel purus mi. Aliquam id libero velit. In hac habitasse platea dictumst. Pellentesque a accumsan velit, eu tristique magna. Vestibulum consequat tincidunt vehicula. Morbi eu justo accumsan, ultricies augue et, efficitur magna.</Typography>
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