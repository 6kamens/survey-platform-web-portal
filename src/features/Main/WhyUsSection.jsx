import React, { useState } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import PhoneIcon from '@material-ui/icons/Phone';
 
const LongSection = styled.section`
  background-color: ${(props) => props.backgroundColor || "#fffefd"};
  padding: 50px;
  margin-top: 50px;
  margin_bottom: 50px;
`;

const WhyUsSection = (props) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <section className="hero mt-6" style={{ backgroundColor: "#e6dcd3" }}>
      <div className="hero-body p-2">
        <div className="container">
          <div className="columns">
            <div className="column is-5 has-text-centered-desktop has-text-centered">
                <Tabs
                  value={value}
                  indicatorColor="primary"
                  textColor="primary"
                  onChange={handleChange}
                >
                    <Tab icon={<PhoneIcon />} style={{fontFamily:"Kanit",fontSize:"1.25em",color:"black"}} label="1.สร้าง" />
                    <Tab icon={<PhoneIcon />}  style={{fontFamily:"Kanit",fontSize:"1.25em",color:"black"}} label="2.เเชร์" />
                    <Tab icon={<PhoneIcon />} style={{fontFamily:"Kanit",fontSize:"1.25em",color:"black"}}  label="3.ดูผล" />
                </Tabs>
              <TabPanel value={value} index={0}>
                    Item One
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    Item Two
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    Item Three
              </TabPanel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
