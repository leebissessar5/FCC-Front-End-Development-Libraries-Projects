import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, FormControl, Card } from 'react-bootstrap'
import Markdown from 'marked-react'
import './App.scss'

const App = () => {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        // Set default markdown content
        const defaultMarkdown = `
      # Heading 1
      ## Heading 2
      [Link](https://www.example.com)
      \`inline code\`
      \`\`\`
      // Code block
      function greet() {
        console.log('Hello!');
      }
      \`\`\`
      - List item
      > Blockquote
      ![Image](https://via.placeholder.com/150)
      **Bold text**
    `
        setMarkdown(defaultMarkdown)
    }, [])

    const handleInputChange = (event) => {
        setMarkdown(event.target.value)
    }

    console.log(markdown)

    return (
        <Container>
            <Row>
                <Col>
                    <h1 className="text-center">Markdown Previewer</h1>
                </Col>
            </Row>
            <Row>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <FormControl
                                    as="textarea"
                                    id="editor"
                                    value={markdown}
                                    onChange={handleInputChange}
                                />
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        <Card.Body>
                            <div id="preview">
                                <Markdown value={markdown} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    )
}

export default App
