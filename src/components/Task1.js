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
    render() {
        return (
            <Stack px={14} py={2}>
                <Typography variant='h3' sx={{ textAlign: "center"}}>Bar chart</Typography>
                <Grid mt={4} mb={4} columnSpacing={18} container>
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
                            <Typography variant='h5'>Comparison of Total COVID-19 Deaths per Million in European Union Countries </Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                            Bar chart was used to compare the total number of deaths per million between European Union countries and the following results can extract from the analysis of this chart:
According to the chart, the range of total deaths per million varies from approximately 1300 in the Netherlands to around 6000 in Bulgaria. This indicates significant differences in the impact of the pandemic across these countries. In the overview of the Highest Total Deaths per Million, Bulgaria has the highest total deaths per million, followed by Hungary, Slovakia, and Slovenia. These countries have experienced a higher number of COVID-19 related fatalities per million population. From a regional view, Central European Countries like Austria, Czech Republic, Slovakia, and Slovenia have relatively high total deaths per million compared to other countries in the region. Nordic Countries: Denmark, Estonia, Finland, and Sweden have lower total deaths per million compared to many other countries in Europe, suggesting better control measures or healthcare systems in place. Western European Countries: Belgium, France, Germany, Italy, Luxembourg, the Netherlands, and Spain have moderate to high total deaths per million. These countries have faced significant challenges in managing the COVID-19 pandemic.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
                <Divider />
                <Grid container columnSpacing={18} mt={4} mb={4}>
                    <Grid item xl={6} lg={6} md={6} sm={12} xs={12}>
                        <Stack
                            direction="column"
                            justifyContent="center"
                            alignItems="flex-start"
                            spacing={2}>
                            <Typography variant='h5'>Comparison of Total COVID-19 Cases per Million in European Union Countries</Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                            Bar chart was used to compare the total cases per million between European Union countries and the following results can extract from the analysis of this chart:
According to the chart, the range of total cases per million varies from approximately 100,000 in Poland to around 800,000 in Cyprus. This indicates significant differences in the spread and testing rates of COVID-19 across these countries. In the overview of the Highest Total Cases per Million, Cyprus has the highest total cases per million, followed by Slovenia, Sweden, and Belgium. These countries have a higher number of reported COVID-19 cases per million population. From a regional view, Eastern European Countries: Countries like Bulgaria, Romania, Slovakia, and Slovenia have relatively high total cases per million compared to other countries in the region. Western European Countries: Belgium, France, Germany, Italy, the Netherlands, and Spain have moderate to high total cases per million. These countries have faced significant challenges in managing the spread of the COVID-19 virus. Nordic Countries: Denmark, Estonia, Finland, and Sweden have relatively lower total cases per million compared to many other countries in Europe. However, it's essential to consider their population size and testing capacity in interpreting these numbers.
                            </Typography>
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
                <Grid container columnSpacing={18} mt={4} mb={4}>
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
                            <Typography variant='h5'>Comparison of Total COVID-19 Vaccinations per Hundred in European Union Countries</Typography>
                            <Typography sx={{ textAlign: 'justify' }}>
                            Bar chart was used to compare the total cases per million between European Union countries and the following results can extract from the analysis of this chart:
According to the chart, the range of total vaccinations per hundred varies from approximately 60 in Bulgaria to around 280 in Portugal. This indicates differences in the vaccination rates and strategies adopted by these countries. In the overview of the Highest Total Vaccinations per Hundred, Portugal has the highest total vaccinations per hundred, followed by Malta, Belgium, and Spain. These countries have made significant progress in vaccinating their populations against COVID-19. From a regional view, Central and Western European Countries like Austria, Belgium, France, Germany, and the Netherlands have relatively high total vaccinations per hundred compared to other countries in the region. Eastern European Countries: Bulgaria, Romania, and Slovakia have lower total vaccinations per hundred compared to many other countries. These countries may have faced challenges in vaccine distribution or uptake. Nordic Countries: Denmark, Finland, and Sweden have relatively high total vaccinations per hundred, indicating successful vaccination campaigns.
                            </Typography>
                        </Stack>
                    </Grid>
                </Grid>
            </Stack>
        );
    }
    async componentDidMount() {
        let task1Data = await Helper.getTask1Data(1);
        this.setState({data1_1 : task1Data[0]});
        this.changeTask1_1Data(defaultTask1_1, task1Data[0]);
        this.setState({data1_2 : task1Data[1]});
        this.changeTask1_2Data(defaultTask1_2, task1Data[1]);
        this.setState({data1_3 : task1Data[2]});
        this.changeTask1_3Data(defaultTask1_3, task1Data[2]);
    }
    changeTask1_1Data(key , mainData = this.state.data1_1){
        if(key=="op5"){
            let data = mainData.slice(0, 5);
            this.setState({data1_1temp : data});
        }
        else if(key == "op10"){
            let data = mainData.slice(0, 10);
            this.setState({data1_1temp : data});
        }
        else{
            let data = mainData;
            this.setState({data1_1temp : data});
        }
    }
    changeTask1_2Data(key, mainData = this.state.data1_2){
        if(key=="op5"){
            let data = mainData.slice(0, 5);
            this.setState({data1_2temp : data});
        }
        else if(key == "op10"){
            let data = mainData.slice(0, 10);
            this.setState({data1_2temp : data});
        }
        else{
            let data = mainData;
            this.setState({data1_2temp : data});
        }
    }
    changeTask1_3Data(key, mainData = this.state.data1_3){
        if(key=="op5"){
            let data = mainData.slice(0, 5);
            this.setState({data1_3temp : data});
        }
        else if(key == "op10"){
            let data = mainData.slice(0, 10);
            this.setState({data1_3temp : data});
        }
        else{
            let data = mainData;
            this.setState({data1_3temp : data});
        }
    }
}

export default Task1;