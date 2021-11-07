import { Modal } from 'antd'

import './GraphDisplay.css'

const GraphDisplay = props => {
  return (
    <Modal
      title='Graph Display Setting'
      visible={props.isGraphVisible}
      okText='Confirm'
      onOk={() => {
        props.setisGraphVisible(false)
      }}
      onCancel={() => {
        props.setisGraphVisible(false)
      }}
      zIndex='1'
    ></Modal>
  )
}

export default GraphDisplay
