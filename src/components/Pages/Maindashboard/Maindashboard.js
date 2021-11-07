import { Layout, Button, Row } from 'antd'
import { useState } from 'react'
import './Maindashboard.css'
import Navbar from '../../Navbar/Navbar'
import Building from '../../Modals/Buildings/Building'
import Workers from '../../Modals/Workers/Workers'
import Sensors from '../../Modals/Sensors/Sensors'
import GraphDisplay from '../../Modals/GraphDisplay/GraphDisplay'
import SiderBar from '../../SiderBar/SiderBar'

export const Maindashboard = () => {
  const { Content } = Layout

  const [isWorkerVisible, setisWorkerVisible] = useState(false)

  const [isSensorVisible, setisSensorVisible] = useState(false)

  const [isBuildingVisible, setisBuildingVisible] = useState(false)

  const [isGraphVisible, setisGraphVisible] = useState(false)

  return (
    <Layout>
      <Navbar />
      <Layout>
        <SiderBar />
        <Content className='layout'>
          <div className='groupedbuttons'>
            <Row>
              <Button
                onClick={() => {
                  setisSensorVisible(true)
                }}
                style={{height:100,width:300}}
              >
                Sensors
              </Button>
              <Sensors
                isSensorVisible={isSensorVisible}
                setisSensorVisible={setisSensorVisible}
              />
            </Row>
            <Row>
              <Button
                onClick={() => {
                  setisWorkerVisible(true)
                }}
                style={{height:100,width:300}}
              >
                Worker
              </Button>
              <Workers
                isWorkerVisible={isWorkerVisible}
                setisWorkerVisible={setisWorkerVisible}
              />
            </Row>
          </div>
          <Button
            onClick={() => {
              setisBuildingVisible(true)
            }}
          >
            Buildings
          </Button>
          <Building
            isBuildingVisible={isBuildingVisible}
            setisBuildingVisible={setisBuildingVisible}
          />
          <Button
            onClick={() => {
              setisGraphVisible(true)
            }}
          >
            Graph Display
          </Button>
          <GraphDisplay
            isGraphVisible={isGraphVisible}
            setisGraphVisible={setisGraphVisible}
          />
        </Content>
      </Layout>
    </Layout>
  )
}

export default Maindashboard
