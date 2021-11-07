import { Button, Modal, Table } from 'antd'
import SensorControl from '../SensorControl/SensorControl'
import './Sensors.css'
import { useState } from 'react'
import { ControlOutlined } from '@ant-design/icons'

const Sensors = props => {
  const [isControlVisible, setisControlVisible] = useState(false)

  const sensorSource = [
    {
      key: '1',
      id: '123123312',
      building: 'Building A',
      level: '3',
      temperature: '40'
    },
    {
      key: '2',
      id: '2311232',
      building: 'Building B',
      level: '1',
      humidity: '67'
    }
  ]

  const sensorcolumns = [
    {
      title: 'Sensor ID',
      dataIndex: 'id',
      key: 'id'
    },
    {
      title: 'Building',
      dataIndex: 'building',
      key: 'building'
    },
    {
      title: 'Level',
      dataIndex: 'level',
      key: 'level'
    },
    {
      title: 'Rain',
      dataIndex: 'rain',
      key: 'rain'
    },
    {
      title: 'Humidity',
      dataIndex: 'humidity',
      key: 'humidity'
    },
    {
      title: 'Temperature',
      dataIndex: 'temperature',
      key: 'temperature'
    },
    {
      title: 'Noise',
      dataIndex: 'noise',
      key: 'noise'
    },
    {
      title: 'Wind',
      dataIndex: 'wind',
      key: 'wind'
    },
    {
      title: 'Action',
      dataIndex: '',
      key: 'x',
      render: () => (
        <div>
          <Button
            onClick={() => {
              setisControlVisible(true)
            }}
            icon={<ControlOutlined />}
          ></Button>
          <SensorControl
            isControlVisible={isControlVisible}
            setisControlVisible={setisControlVisible}
          />
        </div>
      )
    }
  ]
  return (
    <Modal
      title='Sensors'
      visible={props.isSensorVisible}
      okText='Confirm'
      onOk={() => {
        props.setisSensorVisible(false)
      }}
      onCancel={() => {
        props.setisSensorVisible(false)
      }}
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
      width={1200}
      zIndex='1'
    >
      <Table dataSource={sensorSource} columns={sensorcolumns} />
    </Modal>
  )
}

export default Sensors
