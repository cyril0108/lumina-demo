import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

import Camera from './model/Camera';

import {deviceData} from './data/Device';

function App() {

  return (
    <Container fluid>
      <Row>
          <Col>all_usb_devices</Col>
          {
            deviceData[0].all_usb_devices.map((data, key) => {
              return (
                <Camera key={key} data={data}></Camera>
              );
            })
          }
      </Row>
      <Row>
          <Col>raw_camera_active</Col>
          <Col>{deviceData[0].raw_camera_active.toString()}</Col>
      </Row>
      <Row>
          <Col>raw_microphone_active</Col>
          <Col>{deviceData[0].raw_microphone_active.toString()}</Col>
      </Row>
      <Row>
          <Col>raw_exposure</Col>
          <Col>{deviceData[0].raw_exposure}</Col>
      </Row>
      <Row>
          <Col>raw_mirror</Col>
          <Col>{deviceData[0].raw_mirror.toString()}</Col>
      </Row>
      <Row>
          <Col>raw_lumina_firmware_version</Col>
          <Col>{deviceData[0].raw_lumina_firmware_version}</Col>
      </Row>
      <Row>
          <Col>virtual_camera_used</Col>
          <Col>{deviceData[0].virtual_camera_used.toString()}</Col>
      </Row>
      <Row>
          <Col>imgpipe_face_xywh</Col>
          <Col>{deviceData[0].imgpipe_face_xywh.toLocaleString()}</Col>
      </Row>
      <Row>
          <Col>imgpipe_cameraman_active</Col>
          <Col>{deviceData[0].imgpipe_cameraman_active.toString()}</Col>
      </Row>
      <Row>
          <Col>imgpipe_cameraman_zoom</Col>
          <Col>{deviceData[0].imgpipe_cameraman_zoom}</Col>
      </Row>
      <Row>
          <Col>imgpipe_blur_active</Col>
          <Col>{deviceData[0].imgpipe_blur_active.toString()}</Col>
      </Row>
      <Row>
          <Col>imgpipe_blur_weight</Col>
          <Col>{deviceData[0].imgpipe_blur_weight}</Col>
      </Row>
      <Row>
          <Col>imgpipe_input_resolution</Col>
          <Col>{deviceData[0].imgpipe_input_resolution.toLocaleString()}</Col>
      </Row>
      <Row>
          <Col>error</Col>
          <Col>{deviceData[0].error}</Col>
      </Row>
    </Container>

  );
}

export default App;
