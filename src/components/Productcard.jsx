import React from 'react'
import { Card, CardBody, Image, Stack, Text, Heading, Divider, CardFooter, ButtonGroup, Button} from '@chakra-ui/react'
const Productcard = (props) => {
    const {images, title, description, id, name, price, category,instock}=props;
    return (
    <div><Card maxW='sm'>
    <CardBody>
      <Image
        src={images[0]}
        alt='Green double couch with wooden legs'
        borderRadius='lg'
      />
      <Stack mt='3' spacing='2'>
        <Heading size='md'>{title}</Heading>
        <Text className='line-clamp-2'>
         {description}
        </Text>
        <Text color='blue.600' fontSize='lg'>
         {price}
        </Text>
      </Stack>
      <ButtonGroup spacing='2'>
        <Button variant='solid' colorScheme='blue'>
          Buy now
        </Button>
        <Button variant='ghost' colorScheme='blue'>
          Add to cart
        </Button>
      </ButtonGroup>
    </CardBody>
  </Card>
  </div>
  )
}

export default Productcard