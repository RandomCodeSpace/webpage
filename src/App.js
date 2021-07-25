import React from 'react';
import {Button, Card, Modal, PageHeader, Typography} from 'antd';
import HomePage from "./component/HomePage";
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";

const App = () => {
    const modal = (content) => {
        return Modal.success({
            icon: null,
            content: content,
            maskClosable: true,
            destroyOnClose: true,
            centered: true
        });
    }

    return (
        <Card bordered={false}>
            <PageHeader
                title={<Typography.Title style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }} keyboard>Random Code OSS</Typography.Title>}
                extra={[<Button type="link" onClick={() => {
                    modal(<AboutUs/>)
                }}>About Us</Button>,
                    <Button type="link" onClick={() => {
                        modal(<ContactUs/>)
                    }}>Contact Us</Button>]}
            />
            <HomePage/>
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