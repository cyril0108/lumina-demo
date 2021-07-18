import {Col} from 'react-bootstrap';

function Camera(props) {

    const style = {
        font: 'inherit',
        border: '1px solid blue',
        padding: '8px',
        cursor: 'pointer'
    };

    return (
        <Col style={style}>
            <p>{props.data.device_name}</p>
            <p>{props.data.device_port}</p>
        </Col>
    );

}

export default Camera;