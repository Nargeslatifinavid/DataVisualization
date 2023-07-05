import { Grid, Stack, Typography, FormControl, InputLabel, MenuItem, Select, Divider } from '@mui/material';
import React, { Component } from 'react';
import BarChart from './Barchart';
import Helper from '../helper/helper';

const defaultTask1_1 = "op5";
const defaultTask1_2 = "op5";
const defaultTask1_3 = "op5";
class Task1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data1_1temp: [],
            data1_1: [],
            data1_2temp: [],
            data1_2: [],
            data1_3temp: [],
            data1_3: [],
        }
    }
    changeTask1_1Data(key) {
        if (key == "op5") {
            let data = this.state.data1_1.slice(0, 5);
            this.setState({ data1_1temp: data });
        }
        else if (key == "op10") {
            let data = this.state.data1_1.slice(0, 10);
            this.setState({ data1_1temp: data });
        }
        else {
            let data = this.state.data1_1;
            this.setState({ data1_1temp: data });
        }
    }
    changeTask1_2Data(key) {
        if (key == "op5") {
            let data = this.state.data1_2.slice(0, 5);
            this.setState({ data1_2temp: data });
        }
        else if (key == "op10") {
            let data = this.state.data1_2.slice(0, 10);
            this.setState({ data1_2temp: data });
        }
        else {
            let data = this.state.data1_2;
            this.setState({ data1_2temp: data });
        }
    }
    changeTask1_3Data(key) {
        if (key == "op5") {
            let data = this.state.data1_3.slice(0, 5);
            this.setState({ data1_3temp: data });
        }
        else if (key == "op10") {
            let data = this.state.data1_3.slice(0, 10);
            this.setState({ data1_3temp: data });
        }
        else {
            let data = this.state.data1_3;
            this.setState({ data1_3temp: data });
        }
    }
    render() {
        return (
            <Stack px={14} py={2}>
                <Typography variant='h3' sx={{ textAlign: "center"}}>Bar chart</Typography>
                <Grid mt={16} mb={20} columnSpacing={18} container>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Stack direction="row"
                            mb={3}
                            justifyContent="flex-start"
                            alignItems="center">
                            <FormControl>
                                <InputLabel sx={{ position: "relative", top: "15px" }}>Country count</InputLabel>
                                <Select size="small" sx={{ width: 200 }} defaultValue={defaultTask1_1} onChange={(op) => { this.changeTask1_1Data(op.target.value); }}>
                                    <MenuItem value="op5">5</MenuItem>
                                    <MenuItem value="op10">10</MenuItem>
                                    <MenuItem value="opall">all</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack
                            sx={{ background: "radial-gradient(52% 52% at 50% 50%,rgb(41 178 209 / 53%) 0%,rgba(255,255,255,0) 100%);" }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <BarChart data={this.state.data1_1temp} yAxisLabel="total deaths per million" colorBar="#4cfefe" />
                        </Stack>
                    </Grid>
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
                </Grid>
                <Divider />
                <Grid container columnSpacing={18} mt={16} mb={20}>
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
                        <Stack direction="row"
                            mb={3}
                            justifyContent="flex-start"
                            alignItems="center">
                            <FormControl>
                                <InputLabel sx={{ position: "relative", top: "15px" }}>Country count</InputLabel>
                                <Select size="small" sx={{ width: 200 }} defaultValue={defaultTask1_2} onChange={(op) => {
                                    this.changeTask1_2Data(op.target.value);
                                }}>
                                    <MenuItem value="op5">5</MenuItem>
                                    <MenuItem value="op10">10</MenuItem>
                                    <MenuItem value="opall">all</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack
                            sx={{ background: "radial-gradient(52% 52% at 50% 50%,rgb(191 41 209 / 53%) 0%,rgba(255,255,255,0) 100%)" }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <BarChart data={this.state.data1_2temp} yAxisLabel="total cases per million" colorBar="#e94cb9" />
                        </Stack>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container columnSpacing={18} mt={16} mb={20}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Stack direction="row"
                            mb={3}
                            justifyContent="flex-start"
                            alignItems="center">
                            <FormControl>
                                <InputLabel sx={{ position: "relative", top: "15px" }}>Country count</InputLabel>
                                <Select size="small" sx={{ width: 200 }} defaultValue={defaultTask1_3} onChange={(op) => {
                                    this.changeTask1_3Data(op.target.value);
                                }}>
                                    <MenuItem value="op5">5</MenuItem>
                                    <MenuItem value="op10">10</MenuItem>
                                    <MenuItem value="opall">all</MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                        <Stack
                            sx={{ background: "radial-gradient(52% 52% at 50% 50%,rgb(41 209 178 / 53%) 0%,rgba(255,255,255,0) 100%)" }}
                            direction="row"
                            justifyContent="center"
                            alignItems="center">
                            <BarChart data={this.state.data1_3temp} yAxisLabel="total vaccinations per hundred" colorBar="#9c27b0" />
                        </Stack>
                    </Grid>
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
                </Grid>
            </Stack>
        );
    }
    async componentDidMount() {
        let task1_1Data = await Helper.getTask1Data(1);
        this.setState({ data1_1: task1_1Data });
        this.changeTask1_1Data(defaultTask1_1);

        let task1_2Data = await Helper.getTask1Data(2);
        this.setState({ data1_2: task1_2Data });
        this.changeTask1_2Data(defaultTask1_2);

        let task1_3Data = await Helper.getTask1Data(3);
        this.setState({ data1_3: task1_3Data });
        this.changeTask1_3Data(defaultTask1_3);
    }
}

export default Task1;