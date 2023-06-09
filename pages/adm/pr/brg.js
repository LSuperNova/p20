
import styles from '../../../styles/adm/adm.module.css'

import { useEffect } from 'react'

import AdMenu from '../../../components/adm/menu.js'

import {
  Image, theme,
  Layout, Typography,
} from 'antd';

import hostConfig from '../../../config/host.js'

const { apihost, domain } = hostConfig

import axios from 'axios';

const { Content, Sider, Header } = Layout;
const { Title, Text } = Typography;

export default function Home({ }) {

  useEffect(() => {

  }, [])


  return (
    <Layout className={styles.container}>

      <AdMenu SelectKey={"22"} OpenSubKey={'2'} />

      <Content className={styles.Content}
        style={{
          margin: '24px 16px',
          padding: '5vh 5vw 10vh',
          minHeight: '50vh',
        }}
      >
        <Title level={2}>弹幕管理</Title>

      </Content>

    </Layout>
  )
}

export const getStaticProps = async (ctx) => {


  try {
    const response = await axios.post(
      apihost + '/v1/posterstands/fetch',
      {},
      {
        timeout: 4000
      }
    )
    if (response.data?.code === 0) {

    }

  } catch (error) {
    console.error(error);
  }

  return {
    props: {
    }
  }
}