import { UserOutlined } from '@ant-design/icons/lib/icons'
import { Card, Col, Divider, Image, Row, Space, Typography } from 'antd'
import Avatar from 'antd/lib/avatar/avatar'
import React from 'react'
import { FaEthereum } from 'react-icons/fa'
import { RiTimeFill } from 'react-icons/ri'
import { MdRemoveRedEye } from 'react-icons/md'


import ImgEquilib from '../assets/images/image-equilibrium.jpg'
import ImgAvatar from '../assets/images/image-avatar.png'

export const CardNFT = () => {
  return (
    <Card bordered={false}>
      <Image
        src={ImgEquilib}
        preview={{
          mask: <MdRemoveRedEye style={{ fontSize: 40 }} />
        }}
      />

      <Typography.Title level={5} className='link'>
        Equilibrium #3429
      </Typography.Title>

      <Typography.Text className='secondary-text'>
        Our Equilibrium collection promotes balance and calm.
      </Typography.Text>

      <Row justify="space-between" style={{ marginTop: 15 }}>
        <Col>
          <Typography.Text strong>
            <div className='align-items-center'>
              <FaEthereum style={{ marginBottom: 2, marginRight: 3 }} /> 0.041ETH
            </div>
          </Typography.Text>
        </Col>
        <Col>
          <Typography.Text>
            <div className='align-items-center secondary-text'>
              <RiTimeFill style={{ marginRight: 5, fontSize: 13.5 }} /> 3 days left
            </div>
          </Typography.Text>
        </Col>
      </Row>

      <Divider />

      <Space size={'middle'}>
        <Avatar src={ImgAvatar} />
        <span>
          <Typography.Text className='secondary-text'>Creation of</Typography.Text> <Typography.Text className='link'>Jules Wyvern</Typography.Text>
        </span>
      </Space>
    </Card>
  )
}
