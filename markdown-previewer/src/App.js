import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Form, FormControl, Card } from 'react-bootstrap'
import Markdown from 'marked-react'
import './App.scss'

const Footer = () => (
    <div className="footer">
        Markdown Previewer App created by Lee Bissessar
        <p>Built using React, Bootstrap, and Sass</p>
    </div>
)

const App = () => {
    const [markdown, setMarkdown] = useState('')

    useEffect(() => {
        // Set default markdown content
        const defaultMarkdown =
            // eslint-disable-next-line no-multi-str
            "# Heading 1 \
        \n\n## Heading 2 \
      \n\n[Link](https://www.example.com) \
      \n`inline code` \
      \n\n ``` \
      \n\n// Code block \
      \n\nfunction greet() { \
      \n\n  console.log('Hello!'); \
      \n\n} \
      \n\n``` \
      \n\n- List item \
      \n\n> Blockquote \
      \n\n![Image](https://via.placeholder.com/150) \
      \n\n**Bold text**"

        setMarkdown(defaultMarkdown)
    }, [])

    const handleInputChange = (event) => {
        setMarkdown(event.target.value)
    }

    return (
        <Container>
            <Row>
                <Col md={6} lg={4}>
                    <Card>
                        <Card.Body>
                            <Form>
                                <Form.Label htmlFor="editor">Editor</Form.Label>
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
                <Col md={6} lg={8}>
                    <Card>
                        <Card.Body>
                            <Form.Label htmlFor="preview">Previewer</Form.Label>
                            <div id="preview">
                                <Markdown value={markdown} breaks={true} />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Footer />
        </Container>
    )
}

export default App
