import React from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import mainImage from "../../common/img/main.png";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";

const MainTopSection = (props) => {
  return (
    <Container maxWidth="lg">
      <section>
        <Grid container justify="center">
          <Grid xs={12} sm={7} md={5}>
            <Box mb={3}>
              <img src={mainImage}></img>
            </Box>
          </Grid>
        </Grid>
        <Typography
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
          marginTop={5}
        >
          <b>All-in-one workspace</b>
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" paragraph>
          One tool for your whole team. Write, plan, and get organized.
        </Typography>
        <Grid container spacing={6} justify="center">
          <Grid item>
            <Button
              className="button is-warning"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ThumbUpIcon />}
            >
              เริ่มต้นใช้งานฟรี
            </Button>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default MainTopSection;
