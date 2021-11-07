import { Modal, Radio, Row, Select } from 'antd'

import { useState } from 'react'

import './Building.css'

const Building = props => {
  const [value, setValue] = useState(true)

  const { Option } = Select

  const onChange = e => {
    setValue(e.target.value)
  }

  return (
    <Modal
      title='Select Building'
      visible={props.isBuildingVisible}
      okText='Confirm'
      onOk={() => {
        props.setisBuildingVisible(false)
      }}
      onCancel={() => {
        props.setisBuildingVisible(false)
      }}
      zIndex='1'
    >
      <Row style={{ justifyContent: 'center' }}>
        <Select placeholder='Select Value' style={{ width: 120 }}>
          <Option value='Building A'>Building A</Option>
          <Option value='Building B'>Building B</Option>
          <Option value='Building C'>Building C</Option>
        </Select>
      </Row>

      <Row style={{ justifyContent: 'center', marginTop: 10 }}>
        <Radio.Group onChange={onChange}>
          <Radio value='false'>Restricted</Radio>
          <Radio value='true'>Full Access</Radio>
        </Radio.Group>
      </Row>
    </Modal>
  )
}

export default Building
