import { Modal, Table } from 'antd'
import './Workers.css'

const Workers = props => {
  const dataSource = [
    {
      key: '1',
      name: 'Mike',
      company: 'Company ABC',
      number: '2134143423',
      time: '0700'
    },
    {
      key: '2',
      name: 'John',
      company: 'Company CBC',
      number: '2132135123',
      time: '0800'
    }
  ]

  const columns = [
    {
      title: 'Worker Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Worker Company',
      dataIndex: 'company',
      key: 'company'
    },
    {
      title: 'Worker Number',
      dataIndex: 'number',
      key: 'number'
    },
    {
      title: 'Time In',
      dataIndex: 'time',
      key: 'time'
    }
  ]

  return (
    <Modal
      title='Workers'
      visible={props.isWorkerVisible}
      okText='Confirm'
      onOk={() => {
        props.setisWorkerVisible(false)
      }}
      onCancel={() => {
        props.setisWorkerVisible(false)
      }}
      cancelButtonProps={{ style: { display: 'none' } }}
      okButtonProps={{ style: { display: 'none' } }}
      width={1200}
    >
      <Table dataSource={dataSource} columns={columns} />
    </Modal>
  )
}

export default Workers
