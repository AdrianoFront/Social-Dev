import { useController } from 'react-hook-form'

import TextArea from './TextArea'

const ControlledTextarea = ({ name, control, defaultValue = '', ...props }) => {
    const { 
      field: { value, onChange }
    } = useController({ name, control, defaultValue })

  return (
    <TextArea {...props} value={value} onChange={onChange} />
  )
}

export default ControlledTextarea