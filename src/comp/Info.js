import { useEffect, useState } from "react";
import image1 from "../images/1.png";
import { Card, Flex, Form, Image, Layout } from "antd";
import axios from "axios";

function Info() {
  const [info, setInfo] = useState();
  const select = async () => {
    const infoRes = await axios.get("http://localhost:8000/capstone/dogSearch");
    const data = infoRes.data;
    const fields = data[data.length - 1]["fields"];
    setInfo(fields);
  };

  useEffect(() => {
    select();
  }, []);

  return (
    <Layout className="layout">
      <Layout.Header className="header">
        <h1>강아지 정보보기</h1>
      </Layout.Header>
      <Layout.Content className="content">
        <Flex gap="middle" align="start" vertical style={{ marginTop: "50px" }}>
          <Flex
            justify={"space-evenly"}
            align={"center"}
            style={{ width: "100%" }}
          >
            {/* Age : 12 Breed : "poodle" Height : 50 Name : "Choco" Weight : 8 ip :
            "local" */}
            <Card size="small" style={{ width: 600 }}>
              <Image src={image1}></Image>
              <Form name="basic" autoComplete="off">
                <Form.Item label="나이 :">{info.Age}</Form.Item>
              </Form>
              <Form name="basic" autoComplete="off">
                <Form.Item label="이름 :">{info.Name}</Form.Item>
              </Form>
              <Form name="basic" autoComplete="off">
                <Form.Item label="종 :">{info.Breed}</Form.Item>
              </Form>
              <Form name="basic" autoComplete="off">
                <Form.Item label="몸무게 :">{info.Weight}kg</Form.Item>
              </Form>
              <Form name="basic" autoComplete="off">
                <Form.Item label="키 :">{info.Height}cm</Form.Item>
              </Form>
            </Card>
          </Flex>
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default Info;
