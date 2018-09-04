import React from 'react';
import '../App.css';
// import styles from '../index.css';
import 'antd/dist/antd.css';
import logo from '../matheka.jpg';
import addplan from '../addplan.jpg';
import roadmap from '../roadmap.jpg';



// import add from '../addcurr.png';
import report from '../document.png';
import patient from '../Psychologist With Patient.svg';
import addcurriculum from '../FreeVector-Documents-Icon.jpg'
// import Therapist from 'Therapist';

import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Menu, Icon } from 'antd';
import { Card, Avatar } from 'antd';
import { Calendar, Badge } from 'antd';
import { Input } from 'antd';
// import { Form, Select, Input, Button } from 'antd';


const { Header, Footer, Sider, Content } = Layout;

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

function getListData(value) {
    let listData;
    switch (value.date()) {
      case 8:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
        ]; break;
      case 10:
        listData = [
          { type: 'warning', content: 'This is warning event.' },
          { type: 'success', content: 'This is usual event.' },
          { type: 'error', content: 'This is error event.' },
        ]; break;
      case 15:
        listData = [
          { type: 'warning', content: 'This is warning event' },
          { type: 'success', content: 'This is very long usual event。。....' },
          { type: 'error', content: 'This is error event 1.' },
          { type: 'error', content: 'This is error event 2.' },
          { type: 'error', content: 'This is error event 3.' },
          { type: 'error', content: 'This is error event 4.' },
        ]; break;
      default:
    }
    return listData || [];
  }
  
  function dateCellRender(value) {
    const listData = getListData(value);
    return (
      <ul className="events">
        {
          listData.map(item => (
            <li key={item.content}>
              <Badge status={item.type} text={item.content} />
            </li>
          ))
        }
      </ul>
    );
  }
  
  function getMonthData(value) {
    if (value.month() === 8) {
      return 1394;
    }
  }
  
  function monthCellRender(value) {
    const num = getMonthData(value);
    return num ? (
      <div className="notes-month">
        <section>{num}</section>
        <span>Backlog number</span>
      </div>
    ) : null;
  }

function handleClick(e) {
    console.log('click', e);
  }
  
  const { Meta } = Card;

  const Search = Input.Search;

const Dashboard = (props) => {
    return (
        
      <div class="theradash">  

        <Layout>
            <Row>

                {/* header  */}
                    <Row>
                        <Header style={{height: '15vh'}} >
                            <h1 style={{ color:'white', fontFamily:'Slabo 27px' }} >SEMAFRICA</h1>
                        </Header>
                    </Row>
                {/* end of header */}
                

                {/* navigation */}

                <Row>
                    <Col span={4}>
                        <Sider>
                            <h1 style={{ height: '11.75vh', color:'white'}} >Dashboard</h1>
                            <Menu onClick={handleClick} style={{ }} mode="vertical">
                                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>SLTAs</span></span>}>
                                    {/* <MenuItemGroup title="Item 1"> */}
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                    {/* </MenuItemGroup> */}
                                    <MenuItemGroup title="Iteom 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>PATIENTS</span></span>}>
                                    <MenuItemGroup title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Iteom 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>TREATMENT PLANS</span></span>}>
                                    <MenuItemGroup title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Iteom 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key="sub1" title={<span><Icon type="mail" /><span>CURRICULUMS</span></span>}>
                                    <MenuItemGroup title="Item 1">
                                    <Menu.Item key="1">Option 1</Menu.Item>
                                    <Menu.Item key="2">Option 2</Menu.Item>
                                    </MenuItemGroup>
                                    <MenuItemGroup title="Iteom 2">
                                    <Menu.Item key="3">Option 3</Menu.Item>
                                    <Menu.Item key="4">Option 4</Menu.Item>
                                    </MenuItemGroup>
                                </SubMenu>
                                <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>REPORTS</span></span>}>
                                    <Menu.Item key="5">Option 5</Menu.Item>
                                    <Menu.Item key="6">Option 6</Menu.Item>
                                <SubMenu key="sub3" title="Submenu">
                                    <Menu.Item key="7">Option 7</Menu.Item>
                                    <Menu.Item key="8">Option 8</Menu.Item>
                                </SubMenu>
                                </SubMenu>
                                <SubMenu key="sub4" title={<span><Icon type="setting" /><span>LOGIN</span></span>}>
                                    <Menu.Item key="9">Option 9</Menu.Item>
                                    <Menu.Item key="10">Option 10</Menu.Item>
                                    <Menu.Item key="11">Option 11</Menu.Item>
                                    <Menu.Item key="12">Option 12</Menu.Item>
                                </SubMenu>
                            </Menu> 
                        </Sider>
                </Col>
                {/* end of navigation */}

                {/* main content */}
                <Content>
                    <Col span={20}>
                        <Col span={6}>
                            <Card  
                                style={{ margin: 5 }}
                                cover={<img alt="example" style={{height:200}}
                                src={addplan}
                                />}
                                

                                actions={[
                                
                                <Icon type="plus" theme="outlined"/>,
                                <Icon type="edit" />, 
                               
                                ]}
                                >
                                <Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                style={{ margin: 5, width:'auto', fontFamily:'Slabo 27px, serif'}}
                                title=" TREATMENT PLANS"
                                description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card 
                                style={{ margin: 5, width:'auto', fontFamily:'Slabo 27px, serif'}} 
                                cover={<img alt="example" style={{height:200}}
                                src={patient}
                                />}

                                actions={[
                                <Icon type="edit" />,
                                ]}
                                >
                                <Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                style={{ margin: 5, width:'auto', fontFamily:'Slabo 27px, serif'}} 
                                title="PATIENTS"
                                description="This is the description"
                                />
                                
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card 
                                style={{ margin: 5 }}
                                cover={<img alt="example" style={{height:200}}
                                src={addcurriculum}
                                />}

                                actions={[
                                <Icon type="plus" theme="outlined"/>,
                                <Icon type="edit" />,
                                ]}
                                >
                                <Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                style={{ margin: 5, width:'auto', fontFamily:'Slabo 27px, serif'}}
                                title="CURRICULUMS"
                                description="This is the description"
                                />
                            </Card>
                        </Col>
                        <Col span={6}>
                            <Card 
                                style={{ margin: 5 }} 
                                cover={<img alt="example" style={{height:200}}
                                src={report}
                                />}

                                actions={[
                                <Icon type="plus" theme="outlined"/>,
                                <Icon type="edit" />, 
                                ]}
                                >
                                <Meta
                                // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                style={{ margin: 5, width:'auto', fontFamily:'Slabo 27px, serif'}}
                                title="REPORTS"
                                description="This is the description"
                                />
                            </Card>
                        </Col>

                       
                        <Col span={12}>
                            <h2> PLANNER</h2>
                            <Calendar style={{ marginRight: 20,fontFamily:'Slabo 27px, serif'  }}  dateCellRender={dateCellRender} monthCellRender={monthCellRender}/>
                        </Col>
                        <Col span={12}>
                            <h2>ASSISTANTS</h2>
                            <Search

                            placeholder="input search text"
                            onSearch={value => console.log(value)}
                            style={{ marginBottom: 20 }}
                            />
                            <Card  
                                cover={<img alt="example" 
                                src={roadmap}
                                />}

                                actions={[<Icon type="setting" />, 
                                <Icon type="edit" />, 
                                <Icon type="ellipsis" />
                                ]}
                                >
                                <Meta
                                avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                                title="Card title"
                                description="This is the description"
                                />
                            </Card>
                        </Col>
                    </Col>
                </Content>
                    
            </Row>

                    {/* end of content */}
        </Row>
      
    <Layout>
            
        {/* footer */}
        
        <Footer>Footer</Footer>

      </Layout>
    </Layout>
    </div>
      
        
        
    );
}

export default Dashboard;
