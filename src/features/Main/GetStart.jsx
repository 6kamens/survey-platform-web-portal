import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import Container from "@material-ui/core/Container";
import { Box } from "@material-ui/core";

const GetStartStyle = styled.section`
  background-color: ${(props) => props.backgroundColor || "#fffefd"};
  padding: 50px;
  margin-top: 50px;
  margin_bottom: 50px;
  height: 200px;
`;

const GetStart = (props) => {
  return (
    <GetStartStyle backgroundColor="#185072">
      <Grid
        container
        justify="center"
        spacing="3"
        direction="column"
        alignItems="center"
      >
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
    </GetStartStyle>
  );
};

export default GetStart;
