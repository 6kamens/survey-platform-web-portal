import mainImage from "../../common/img/main.png";
import styled from "styled-components";
import form from "../../common/icon/form.png";
import customer from "../../common/icon/customer.png";
import report from "../../common/icon/report.png";

const Image = styled.img`
  width: 80px;
  height: 80px;
`;

const ProductSection = (props) => {
  const products = [
    {
      name: "สอบถามความพึงพอใจ",
      title: "สอบถามความพึงพอใจ",
      content:
        "เเบบสำรวจความพึงพอใจที่ลูกค้ามีต่อสินค้าหรือบริการของคุณ ที่สามารถนำไปวางเเผนการตลาดต่อไปได้",
      img: customer,
    },
    {
      name: "สอบถามข้อมูล",
      title: "สอบถามข้อมูล",
      content:
        "เเบบสอบถามเพื่อเก็บข้อมูลตามจุดประสงค์ต่างๆ รวบรวมข้อมูลได้ตรงตามความต้องการ",
      img: form,
    },
    {
      name: "รายงานผลการสอบถาม",
      title: "รายงานผลการสอบถาม",
      content: "ให้คุณสามารถนำผลการสอบถามไปใช้งานต่อได้อย่าง่ายดาย",
      img: report,
    },
  ];

  return (
    <section className="pt-6 has-text-centered hero-body">
      <div className="container">
        <h1 className="title is-4">บริการของเรา</h1>
        <h4 className="subtitle is-8">
          สร้างเเบบสำรวจได้หลากหลายตามที่คุณต้องการ
        </h4>
        <br></br>
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
      </div>
    </section>
  );
};

export default ProductSection;
