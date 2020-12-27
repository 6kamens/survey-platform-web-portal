import mainImage from "../../common/img/main.png";
import styled from "styled-components";

const Image = styled.img`
  width: 50%;
  height: 50%;
`;

const ProductSection = (props) => {
  const products = [
    {
      name: "สอบถามความพึงพอใจ",
      title: "สอบถามความพึงพอใจ",
      content: "สำรวจความพึงพอใจที่ลูกค้ามีต่อสินค้าของท่าน",
      img:
        "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/engineering.png",
    },
    {
      name: "สอบถามข้อมูล",
      title: "สอบถามข้อมูล",
      content: "เก็บข้อมูล",
      img:
        "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/product.png",
    },
    {
      name: "สอบถามความพึงพอใจ",
      title: "สอบถามความพึงพอใจ",
      content: "สำรวจความพึงพอใจที่ลูกค้ามีต่อสินค้าของท่าน",
      img:
        "https://prod-notion-assets.s3-us-west-2.amazonaws.com/front/shared/illustrations/use-case-objects/design.png",
    },
    
  ];

  return (
    <section className="pt-6 has-text-centered">
      <h1 className="title is-4">บริการของเรา</h1>
      <h4 className="subtitle is-8">สร้างเเบบสำรวจได้หลากหลายตามที่คุณต้องการ</h4>
      <div className="columns is-centered is-mobile-only ">
        {products.map((product) => (
          <div className="column has-text-centered m-0 p-0">
            <div>
              <div>
                <Image src={product.img}></Image>
              </div>
              <div className="card-content">
                <h1 className="title is-size-5">{product.title}</h1>
                <p className="is-size-6 subtitle">{product.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;
