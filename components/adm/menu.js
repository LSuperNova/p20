
import {
    Menu, Button, Layout, Image
} from 'antd';

const { Sider } = Layout
import { useRouter } from 'next/router';

import { useState } from 'react';

import {
    AppstoreOutlined,
    MenuUnfoldOutlined,
    ContainerOutlined,
    MenuFoldOutlined,
    DesktopOutlined,
    PieChartOutlined
} from '@ant-design/icons';

const { SubMenu } = Menu;

const AdMenu = ({SelectKey,OpenSubKey}) => {

    const router = useRouter();

    const [collapsed, setCollapsed] = useState(false);

    const toggleCollapsed = () => {
        setCollapsed(!collapsed);
    }


    function getItem(label, key, icon, children, type) {
        return {
            key,
            icon,
            children,
            label,
            type
        };
    }

    const RouterEnum = {
        '1': '',
        '21': '/pr',
        '22': '/pr/brg',
        '31': '/ae/top',
        '32': '/ae/list',
        '4': '/ca',
      };
    const items = [

        getItem("首页管理", "1", <PieChartOutlined />,),
        getItem("榜样力量", "2", <PieChartOutlined />, [
            getItem('榜样管理', '21'),
            getItem('弹幕管理', '22'),
        ]),
        getItem("文章管理", "3", <PieChartOutlined />, [
            getItem('置顶管理', '31'),
            getItem('文章列表', '32'),
        ]),
        getItem("红色影院", "4", <ContainerOutlined />)

    ]


    return (
        <Sider theme='light'
            style={{ overflow: 'hidden' }}
            collapsed={collapsed}
            onMouseEnter={() => {
                setCollapsed(false)
            }}
            onMouseLeave={() => {
                setCollapsed(true)
            }}
        >
            {/* <Button type="primary" onClick={toggleCollapsed} style={{ margin: 16 }}>
                {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            </Button> */}
            {
                <Image width={280} /* className={styles.logo} */ alt={'党'} preview={false} src={'/img/logo.png'} />
            }

            <Menu
                style={{ marginTop: '5vh' }}
                onClick = {({ key, keyPath,domEvent }) => {
                    console.log(key,keyPath,domEvent)
                    router.push('/adm'+RouterEnum[key])
                }}
                defaultSelectedKeys={[SelectKey ?? "1"]}
                defaultOpenKeys={[OpenSubKey ?? ""]}
                mode="inline"
                theme="light"
                items={items}
            />

        </Sider>
    );
};

export default AdMenu;