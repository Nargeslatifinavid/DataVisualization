import React, { Component } from 'react';
import { Stack, Grid, Avatar, Typography, Button, Divider, Card, AppBar, Toolbar, Container } from '@mui/material';
import Task1 from './Task1';
import Task2 from './Task2';
import Task3 from './Task3';
import Task4 from './Task4';
import Task5 from './Task5';
import '../styles.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          className="header"
          sx={{ height: "100vh" }}
          spacing={0}
        >
          <Stack
            mt={4}
            direction="row"
            justifyContent="space-between"
            alignItems="flex-start"
            sx={{ width: "100%" }}
            spacing={0}>
            <a href="." className="no-a">
              <Typography
                variant="h2"
                ml={8}
                sx={{
                  background: "linear-gradient(90.26deg, #D9D9D9 0.22%, rgba(237, 242, 1, 0.898478) 28.16%, rgba(187, 7, 250, 0.778498) 31.44%, #31C98F 55.93%, #FFFFFF 91.58%, rgba(217, 217, 217, 0) 142.83%)",
                  backgroundClip: "text",
                  textFillColor: "transparent",
                  fontSize: "45px",
                  fontWeight: "bold"
                }}
              >
                Data Visualization
              </Typography>
            </a>
            <Stack
              mr={8}
              direction="row-reverse"
              justifyContent="flex-start"
              alignItems="center"
              spacing={3}
            >
              <Button href="#chart" size="lg" variant="contained" sx={{
                backgroundColor: '#FFFFFF',
                color: '#000000',
                '&:hover': {
                  backgroundColor: '#000000',
                  color: '#FFFFFF'
                },
                borderRadius: '10px',
                padding: '12px 24px'
              }}>Get Started !</Button>
              <a href="#assignment" className="no-a"><Typography variant="h6" sx={{ color: '#FFFFFF' }}>Projects</Typography></a>
              <a href="#contact" className="no-a"><Typography variant="h6" sx={{ color: '#FFFFFF' }}>Contact</Typography></a>
            </Stack>
          </Stack>

          <img
            src="/images/Virus.png"
            style={{
              marginTop: "30px",
              width: '300px',
              height: 'auto',
            }}
            alt="Virus"
          />
          <Typography
            variant="h3"
            sx={{
              marginTop: '16px',
              marginBottom: '16px',
              color: '#FFFFFF'
            }}
          >
            COVID-19
          </Typography>
          <Typography
            variant="body1"
            mb={6}
            sx={{
              textAlign: 'justify',
              color: '#ebebeb',
              width: "60%"
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipiscing elit Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur attis ligula eu dolor.
          </Typography>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          mx={6}
          my={4}
          spacing={0}>
          <img src="/images/BC.png" alt="Bar chart" className="imageZoom" />
          <img src="/images/PC.png" alt="Pire chart" className="imageZoom" />
          <img src="/images/LC.png" alt="Line chart" className="imageZoom" />
          <img src="/images/LHC.png" alt="Bar chart horizontal" className="imageZoom" />
          <img src="/images/WC.png" alt="Waffle chart" className="imageZoom" />
        </Stack>
        <Stack py={5} spacing={5}>
          <Divider />
          <Stack
            id="chart"
            direction="column"
            justifyContent="flex-start"
            alignItems="center"
            spacing={2}>
            <Task1 />
            <Task2 />
            <Task3 />
            <Task4 />
            <Task5 />
          </Stack>
        </Stack>
        <Stack
          direction="column"
          justifyContent="flex-start"
          alignItems="center"
          spacing={0}
        >
          <Stack
            id="contact"
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={8}
            sx={{ backgroundColor: "black", borderRadius: '20px', zIndex: 999 }}
            my={20}
            mx={10}
            py={4}
            px={20}
          >
            <img
              src="/images/Nargessi.png"
              style={{
                width: 'auto',
                height: "200px",
                borderRadius: '50%',
              }}
              alt="me"
            />
            <Stack
              direction="column"
              justifyContent="flex-start"
              alignItems="flex-start"

              spacing={1}
            >
              <Typography variant="h4" sx={{ color: '#c3a3f8' }}>Narges Latifinavid</Typography>
              <Typography variant="h6" sx={{ color: '#acacac' }}>Master of Computer Science</Typography>
              <Typography variant="h6" sx={{ color: '#acacac' }}>S5269860@studenti.unige.it</Typography>

            </Stack>
          </Stack>
          <Stack
            id="assignment"
            direction="column-reverse"
            justifyContent="flex-start"
            alignItems="center"
            spacing={0}
            mt="-300px"
            className="footer">
            <Typography mb={2} variant="h6" sx={{ color: '#acacac' }}>Copyright © Data Visualization Final Project 2023</Typography>
            <Stack
              direction="row"
              justifyContent="space-around"
              alignItems="flex-start"
              spacing={25}
              mb={10}
            >
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              >
                <a href="https://github.com/behnamartss/Lioninside" className="no-a">
                <img className='iconZoom'
                  src="/images/Github.png"
                  style={{
                    width: '100px',
                    height: 'auto',
                  }}
                  alt="github"/>
                  </a>
                <a className="footer-link" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }} href="https://github.com/behnamartss/Lioninside">Assignment Github</a>
              </Stack>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}>
                  <a href="https://behnamartss.github.io/Lioninside/" className="no-a">
                <img className='iconZoom'
                  src="/images/world-wide.png"
                  style={{
                    width: '100px',
                    height: 'auto',
                  }}
                  alt="github" />
                  </a>
                <a className="footer-link" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }} href="https://behnamartss.github.io/Lioninside/">Assignment Repository</a>
              </Stack>
              <Stack
                direction="column"
                justifyContent="flex-start"
                alignItems="center"
                spacing={3}
              >
                <a href="." className="no-a">
                <img className='iconZoom'
                  src="/images/Github.png"
                  style={{
                    width: '100px',
                    height: 'auto',
                  }}
                  alt="github" />
                  </a>
                <a className="footer-link" style={{ color: "white", textDecoration: 'none', fontSize: "18px" }} href="">Project Github</a>
              </Stack>
            </Stack>
          </Stack>

        </Stack>

      </div>
    );
  }
}

export default App;
