import React from 'react';
import {Card, Tabs, Typography} from 'antd';
import HomePage from "./component/HomePage";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";

const {TabPane} = Tabs;
const App = () => {
    return (
        <Card bordered={false}>
            <Typography.Title style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            }} keyboard>Random Code OSS</Typography.Title>
            <Tabs defaultActiveKey="1" type="card" size={"large"} tabPosition={"top"} centered>
                <TabPane tab={<Typography.Text underline>Home</Typography.Text>} key="1">
                    <Card bordered={false}>
                        <HomePage/>
                    </Card>
                </TabPane>
                <TabPane tab={<Typography.Text underline>About Us</Typography.Text>} key="2">
                    <Card bordered={false}>
                        <AboutUs/>
                    </Card>
                </TabPane>
                <TabPane tab={<Typography.Text underline>Contact Us</Typography.Text>} key="3">
                    <Card bordered={false}>
                        <ContactUs/>
                    </Card>
                </TabPane>
            </Tabs>
            <h6 style={{
                position: "fixed", left: 0,
                bottom: 0,
                right: 0
            }}>
                Copyright © 2021 Random Code OSS - All Rights Reserved.
            </h6>
        </Card>

    );
}

export default App;