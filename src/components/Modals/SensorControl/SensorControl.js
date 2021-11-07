import {
  Modal,
  Radio,
  Row,
  Col,
  InputNumber,
  Select
} from 'antd'
import { useState } from 'react'
import './SensorControl.css'

const SensorControl = (props) => {
  const [value, setValue] = useState(true)

  const { Option } = Select

  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <Modal
      title='Sensor A'
      visible={props.isControlVisible}
      okText='Confirm'
      onOk={() => {
        props.setisControlVisible(false)
      }}
      onCancel={() => {
        props.setisControlVisible(false)
      }}
      zIndex='10'
    >
      <Row gutter={[16, 24]}>
        <Col>Status:</Col>
        <Col>
          <Radio.Group onChange={onChange}>
            <Radio value='true'>On</Radio>
            <Radio value='false'>Off</Radio>
          </Radio.Group>
        </Col>
      </Row>

      <Row gutter={[16, 24]} style={{ marginTop: 10 }}>
        <Col>Sample rate:</Col>
        <Col>
          <InputNumber size='small'></InputNumber>
        </Col>
        <Col>
          <Select placeholder='Select Value' style={{ width: 120 }}>
            <Option value='Hours'>Hours</Option>
            <Option value='Minutes'>Minutes</Option>
            <Option value='Seconds'>Seconds</Option>
          </Select>
        </Col>
        <Col span={12}></Col>
      </Row>
    </Modal>
  )
}

export default SensorControl
