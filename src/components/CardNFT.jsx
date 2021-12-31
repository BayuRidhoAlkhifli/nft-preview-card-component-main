import React from 'react'
import { Card } from 'antd'

import { CardContent, FooterCard, ImageCard } from './CardComponent'

export const CardNFT = () => {
  return (
    <Card bordered={false}>

      <ImageCard />
      
      <CardContent />

      <FooterCard />
      
    </Card>
  )
}
