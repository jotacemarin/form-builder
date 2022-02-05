import Container from "emerald-ui/lib/Container";
import Row from "emerald-ui/lib/Row";
import Col from "emerald-ui/lib/Col";
import Panel from "emerald-ui/lib/Panel";
import FormBuilder from "../../components/FormBuilder";
import { FORM_JSON_CUSTOM_RULE } from "../../utils/mocks";

import "./styles.scss";
import { useState } from "react";

const App = () => {
  const [formJson, setFormJson] = useState(FORM_JSON_CUSTOM_RULE)
  return (
    <Container>
      <Row>
        <Col className="my-1">
          <Panel>
            <Panel.Body>
              <FormBuilder fields={formJson} setFormJson={setFormJson}  />
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
      <Row>
        <Col className="my-1">
          <Panel>
            <Panel.Body>
              <h2>raw fields</h2>
              <pre>
                <code>{JSON.stringify(formJson, null, 2)}</code>
              </pre>
            </Panel.Body>
          </Panel>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
