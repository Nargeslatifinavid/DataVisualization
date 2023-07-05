import React, { Component } from 'react';
import { Grid, Stack, Typography , Divider } from '@mui/material';
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
    return (
      <Stack px={14} py={2}>
        <Divider />
        <Typography mt={6} variant='h3' sx={{ textAlign: "center"}}>Waffle chart</Typography>
        <Grid mt={10} container>
          <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <Grid container>
              {this.state.data5?.map((d,i) => {
              return <Grid item xs={i==0?4:2}>
                  <WaffleChart hasLegend={i==0?true:false} data={d.data} title={d.title} />
              </Grid>
              })}
            </Grid>
          </Grid>
          <Grid  item xl={12} lg={12} md={12} sm={12} xs={12}>
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
    let task5Data = await Helper.getTask5Data();
    this.setState({data5 : task5Data});
  }
}

export default Task5;