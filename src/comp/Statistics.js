import ReactApexChart from "react-apexcharts";
import { Button, Col, Flex, Form, Input, Layout, Row } from "antd";
import { useState } from "react";
import axios from "axios";

function Statistics() {
  const [data1, setData1] = useState([]);
  const [date, setDate] = useState("");
  const select = async () => {
    const activity = await axios.get("http://localhost:8000/capstone/status");

    const data = activity.data;
    const fields = data[data.length - 1]["fields"];

    setDate(fields["Date"]);
    setData1([
      fields["walking"],
      fields["resting"],
      fields["running"],
      fields["accumulatedMeal"],
    ]);
  };

  return (
    <Layout className="layout">
      <Layout.Header className="header">
        <h1>강아지 활동량보기</h1>
      </Layout.Header>
      <Layout.Content className="content">
        <Flex gap="middle" align="start" vertical style={{ marginTop: "50px" }}>
          <Flex
            justify={"space-evenly"}
            align={"center"}
            style={{ width: "100%" }}
          >
            <Row>
              <Col span={20}>
                <Form name="basic" autoComplete="off">
                  <Form.Item label={"Date :" + date}></Form.Item>
                </Form>
              </Col>
              <Col span={4}>
                <Button onClick={() => select()}>검색</Button>
              </Col>
              <Col span={24}>
                <ReactApexChart
                  type="bar"
                  width={"100%"}
                  height={400}
                  options={{
                    plotOptions: {
                      bar: {
                        columnWidth: "45%",
                        distributed: true,
                      },
                    },
                    dataLabels: {
                      enabled: false,
                    },
                    legend: {
                      show: false,
                    },
                    xaxis: {
                      categories: [
                        ["walk", ""],
                        ["rest", ""],
                        ["run", ""],
                        ["mealAmount", ""],
                      ],
                      labels: {
                        style: {
                          fontSize: "12px",
                        },
                      },
                    },
                  }}
                  series={[
                    {
                      data: data1,
                    },
                  ]}
                />
              </Col>
            </Row>
          </Flex>
        </Flex>
      </Layout.Content>
    </Layout>
  );
}

export default Statistics;
