import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import mainImage from "../../common/img/main.png";
import styled from "styled-components";
import Typography from "@material-ui/core/Typography";

const Description = styled.div`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const SubHeadingSpan = styled.span`
  font-size: 15px;
`;

const Image = styled.img`
  padding: 50px;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

const ProductSection = (props) => {
  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "30px", marginBottom: "50px" }}
    >
      <section>
        <Grid container>
          <Grid xs={12} sm={6}>
              <Image src={mainImage}></Image>
          </Grid>
          <Grid xs={12} sm={6}>
            <Description>
              <SubHeadingSpan>CLOUDFLARE FOR INFRASTRUCTURE</SubHeadingSpan>
              <Typography gutterBottom variant="h6" component="h6">
                <b>Protect your Internet presence.</b>
              </Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              architecto cum, quasi officiis aliquid, harum est ad ullam ipsam
              assumenda molestiae corrupti quia corporis totam iusto earum quis,
              veritatis illum.
            </Description>
          </Grid>
        </Grid>
      </section>
    </Container>
  );
};

export default ProductSection;
