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
      <Grid mt={16} mb={20} columnSpacing={18} container>
      <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                  <Stack
                      direction="column"
                      justifyContent="center"
                      alignItems="flex-start"
                      spacing={2}>
                      <Typography variant='h5'>I am header</Typography>
                      <Typography sx={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat, libero interdum facilisis cursus, sem neque tincidunt nibh, ut consectetur odio leo at lorem. Cras a dictum magna, in aliquam metus. Curabitur fringilla purus a neque malesuada, vel maximus purus dignissim. In interdum, ex a dignissim lacinia, massa urna mattis augue, id facilisis enim sapien sit amet dolor. Phasellus vel maximus tortor, quis pulvinar diam. Mauris sapien mi, commodo id vulputate vitae, rutrum nec neque. Proin turpis augue, auctor id est vel, volutpat tincidunt libero. Nam vel augue facilisis, mattis felis eu, gravida massa. Cras vel purus mi. Aliquam id libero velit. In hac habitasse platea dictumst. Pellentesque a accumsan velit, eu tristique magna. Vestibulum consequat tincidunt vehicula. Morbi eu justo accumsan, ultricies augue et, efficitur magna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat, libero interdum facilisis cursus, sem neque tincidunt nibh, ut consectetur odio leo at lorem. Cras a dictum magna, in aliquam metus. Curabitur fringilla purus a neque malesuada, vel maximus purus dignissim. In interdum, ex a dignissim lacinia, massa urna mattis augue, id facilisis enim sapien sit amet dolor. Phasellus vel maximus tortor, quis pulvinar diam. Mauris sapien mi, commodo id vulputate vitae, rutrum nec neque. Proin turpis augue, auctor id est vel, volutpat tincidunt libero. Nam vel augue facilisis, mattis felis eu, gravida massa. Cras vel purus mi. Aliquam id libero velit. In hac habitasse platea dictumst. Pellentesque a accumsan velit, eu tristique magna. Vestibulum consequat tincidunt vehicula. Morbi eu justo accumsan, ultricies augue et, efficitur magna.</Typography>
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