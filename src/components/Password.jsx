import { InputGroup, Input, InputRightElement, Button} from "@chakra-ui/react"
import { useState } from "react"
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';

function PasswordInput(props) {
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)
    const {value, onChange, placeholder}=props
    return (
      <InputGroup size='md'>
        <Input
          pr='4.5rem'
          type={show ? 'text' : 'password'}
          placeholder= {placeholder}
          value = {value}
          onChange ={onChange}
        />
        <InputRightElement width='4.5rem'>
          <Button h='1.75rem' size='sm' onClick={handleClick}>
            {show ? <EyeOff/> : <Eye/>}
          </Button>
        </InputRightElement>
      </InputGroup>
    )
  }
  export default PasswordInput