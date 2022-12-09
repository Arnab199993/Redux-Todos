
import { Col, Row } from 'antd';
import Search from './components/Search';
import {useSelector} from "react-redux";
import Images from "./components/Images";
import {Spin} from "antd"


function App() {
  const aireducer=useSelector(state=>state.aireducer);
  console.log(aireducer)
  return (
   
    <Row style={{marginTop:"150px"}}>
    <Col span={12}>

      <Search/>
    </Col>
    <Col span={12}>
  {
    aireducer.loading? <Spin size="large" />:""
  }

    {

      
aireducer.images.map(ele=>(
  <Images url={ele.url}/>
))
    }
    

    </Col>
  </Row>
  )
}

export default App;