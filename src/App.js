import logo from "./logo.svg";
import "./App.css";
import { Accordion, Button, Card } from "react-bootstrap";

function App() {
  return (
    <div>
      <h1 className="bg-primary text-light p-2">React Bootstrap</h1>

      <h2 className="bg-info text-dark p-2 mb-1">React Bootstrap Accordion</h2>

      <Accordion defaultActiveKey="0">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>Hello! I'm the React bootstrap </Card.Body>
          </Accordion.Collapse>
        </Card>
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="1">
              Click me!
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="1">
            <Card.Body>Hello! I'm the React Bootstrap</Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </div>
  );
}

export default App;
