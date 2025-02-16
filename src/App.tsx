import './App.css'
import * as React from "react";
import { Input, Button, Flex, Breadcrumb, Space, Typography } from 'antd';
const { Text, Title } = Typography;
import { StarFilled, LinkedinFilled, GithubFilled } from '@ant-design/icons';

export const App: React.FC = () => {
    return (
        <>
        <div className="container">
            <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                <Flex gap="small">
                    <Input placeholder="Enter repo URL" />
                    <Button>Load issues</Button>
                </Flex>
                <Flex gap="large">
                    <Breadcrumb
                        separator=">"
                        items={[
                            {
                                title: <a href="" style={{ color: '#4f61c6' }}>Facebook</a>,
                            },
                            {
                                title: <a href="" style={{ color: '#4f61c6' }}>React</a>,
                            },
                        ]}
                    />
                    <Space>
                        <StarFilled style={{ color: '#d87d2e' }} />
                        <Text>194K stars</Text>
                    </Space>
                </Flex>
            </Space>

            <Flex gap="large" justify="space-between" style={{ width: '100%', alignItems: 'flex-start' }}>
                <Space direction="vertical" style={{ display: 'flex', justifyContent: 'center', flex: 1 }}>
                    <Title level={5} className="column-name">ToDo</Title>
                    <Flex gap="large" style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', padding: '20px', borderRadius: '10px', backgroundColor: '#cfd4d9', maxHeight: '65vh', minHeight: '65vh', overflowY: 'auto' }}>
                       <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px'  }}>
                           <Text className="title-todo">Text 1</Text>
                           <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                           <Space>
                               <Text type="secondary">Admin</Text>
                               <Text type="secondary">|</Text>
                               <Text type="secondary">Comments: 3</Text>
                           </Space>
                       </Space>
                        <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px'  }}>
                            <Text className="title-todo">Text 1</Text>
                            <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                            <Space>
                                <Text type="secondary">Admin</Text>
                                <Text type="secondary">|</Text>
                                <Text type="secondary">Comments</Text>
                            </Space>
                        </Space>
                        <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px'  }}>
                            <Text className="title-todo">Text 1</Text>
                            <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                            <Space>
                                <Text type="secondary">Admin</Text>
                                <Text type="secondary">|</Text>
                                <Text type="secondary">Comments</Text>
                            </Space>
                        </Space>
                        <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px'  }}>
                            <Text className="title-todo">Text 1</Text>
                            <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                            <Space>
                                <Text type="secondary">Admin</Text>
                                <Text type="secondary">|</Text>
                                <Text type="secondary">Comments</Text>
                            </Space>
                        </Space>
                        <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px'  }}>
                            <Text className="title-todo">Text 1</Text>
                            <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                            <Space>
                                <Text type="secondary">Admin</Text>
                                <Text type="secondary">|</Text>
                                <Text type="secondary">Comments</Text>
                            </Space>
                        </Space>
                    </Flex>
                </Space>
                <Space direction="vertical" style={{ display: 'flex', justifyContent: 'center', flex: 1, height: '100%' }}>
                    <Title level={5} className="column-name">In Progress</Title>
                    <Flex gap="large" style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', borderRadius: '10px', backgroundColor: '#cfd4d9', padding: '20px', maxHeight: '65vh', minHeight: '65vh', overflowY: 'auto' }}>
                        <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px'  }}>
                            <Text className="title-todo">Text 1</Text>
                            <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                            <Space>
                                <Text type="secondary">Admin</Text>
                                <Text type="secondary">|</Text>
                                <Text type="secondary">Comments</Text>
                            </Space>
                        </Space>
                    </Flex>
                </Space>
                <Space direction="vertical" style={{ display: 'flex', justifyContent: 'center', flex: 1, height: '100%' }}>
                    <Title level={5} className="column-name">Done</Title>
                    <Flex gap="large" style={{ display: 'flex', flexDirection: 'column', border: '1px solid black', borderRadius: '10px', backgroundColor: '#cfd4d9', padding: '20px', maxHeight: '65vh', minHeight: '65vh', overflowY: 'auto' }}>
                        <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>
                            <Text className="title-todo">Text 1</Text>
                            <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                            <Space>
                                <Text type="secondary">Admin</Text>
                                <Text type="secondary">|</Text>
                                <Text type="secondary">Comments</Text>
                            </Space>
                        </Space>
                        <Space direction="vertical" style={{ display: 'flex', backgroundColor: 'white', padding: '10px', borderRadius: '10px' }}>
                            <Text className="title-todo">Text 1</Text>
                            <Text type="secondary" className="information-todo">#315 opened 3 days ago</Text>
                            <Space>
                                <Text type="secondary">Admin</Text>
                                <Text type="secondary">|</Text>
                                <Text type="secondary">Comments</Text>
                            </Space>
                        </Space>
                    </Flex>
                </Space>
            </Flex>
        </div>

        <Flex justify="space-between" style={{ boxSizing: 'border-box', backgroundColor: '#cfd4d9', padding: '20px 30px', height: '62px' }}>
            <Text strong>Created by <a href='https://github.com/LiliiaVol' style={{ color: 'black', textDecoration: 'underline' }}>Liliia Borodina</a></Text>
            <Space size="large">
                <a href="https://www.linkedin.com/in/liliia-borodina-012a33334/" style={{ color: 'black'}}>
                    <LinkedinFilled />
                </a>
                <a href="" style={{ color: 'black'}}>
                    <GithubFilled />
                </a>
            </Space>
        </Flex>
        </>
    );
};
