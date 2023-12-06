import { Link } from "react-router-dom";
import image1 from "../images/1.png";
import image2 from "../images/2.png";
import image3 from "../images/3.png";
import image4 from "../images/4.png";
import { Avatar, Carousel, Flex, Layout } from "antd";

function Main() {
  const contentStyle = {
    width: "50%",
    display: "inline-block",
  };
  return (
    <Layout className="layout">
      <Layout.Header className="header">
        <h1>No Move , No Food</h1>
      </Layout.Header>
      <Layout.Content className="content">
        <Carousel autoplay>
          <div>
            <img src={image1} style={contentStyle} alt="image1" />
            <img src={image2} style={contentStyle} alt="image2" />
          </div>
          <div>
            <img src={image3} style={contentStyle} alt="image3" />
            <img src={image4} style={contentStyle} alt="image4" />
          </div>
        </Carousel>
        <Flex gap="middle" align="start" vertical style={{ marginTop: "50px" }}>
          <Flex
            justify={"space-evenly"}
            align={"center"}
            style={{ width: "100%" }}
          >
            <Avatar size={200} style={{ background: "#001529" }}>
              <Link to="/info" style={{ color: "#fff" }}>
                강아지 정보보기
              </Link>
            </Avatar>
            <Avatar size={200} style={{ background: "#001529" }}>
              <Link to="/statistics" style={{ color: "#fff" }}>
                강아지 활동량보기
              </Link>
            </Avatar>
            <Avatar size={200} style={{ background: "#001529" }}>
              <Link style={{ color: "#fff" }}>****</Link>
            </Avatar>
          </Flex>
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default Main;
