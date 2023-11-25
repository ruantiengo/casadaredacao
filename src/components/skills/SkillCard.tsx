import React from 'react'
import { Button } from '../ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/card'

type SkilldCardProps = {
    title: string
    description: string
    content: string
}
const SkillCard = ({content, description,title}: SkilldCardProps
    ) => {
  return (
    <Card>
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p>{content}</p>
    </CardContent>
    <CardFooter>
      <Button>Saiba mais</Button>
    </CardFooter>
  </Card>
  )
}

export default SkillCard