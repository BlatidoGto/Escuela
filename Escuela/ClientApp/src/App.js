import { useEffect, useState } from "react"
import { Container, Row, Col, Card, CardHeader, CardBody, Button } from "reactstrap"
import ModalAlumno from "./components/ModalAlumno"
import TablaAlumno from "./components/TablaAlumno"


const App = () => {

    const [alumnos, setAlumnos] = useState([])
    const [mostrarModal, setMostrarModal] = useState(false)
    const [editar, setEditar] = useState(null)

    const mostrarAlumnos = async () => {

        const response = await fetch("api/alumno/Lista")
        if (response.ok) {
            const data = await response.json();
            setAlumnos(data)
        }
        else {
            console.log("Error en los datos de la lista")
        }

    }

    useEffect(() => {
        mostrarAlumnos()
    }, [])

    const guardarAlumno = async (alumno) => {

        const response = await fetch("api/alumno/Guardar", {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    const editarAlumno = async (alumno) => {

        const response = await fetch("api/alumno/Editar", {

            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify(alumno)
        })

        if (response.ok) {
            setMostrarModal(!mostrarModal);
            mostrarAlumnos();
        }
    }

    const eliminarAlumno = async (id) => {

        var respuesta = window.confirm("Eliminar Alumno?")

        if (!respuesta) {
            return;
        }

        const response = await fetch("api/alumno/Eliminar/" + id, {
            method: 'DELETE'
        })

        if (response.ok) {
            mostrarAlumnos();
        }
    }


    return (
        <Container>
            <Row className="mt-5">
                <Col sm="12">
                    <Card>
                        <CardHeader>
                            <h5>Lista de Alumnos</h5>
                        </CardHeader>
                        <CardBody>
                            <Button size="sm" color="success" onClick={() => setMostrarModal(!mostrarModal)}>Alumno Nuevo</Button>
                            <hr></hr>
                            <TablaAlumno data={alumnos}
                                setEditar={setEditar}
                                mostrarModal={mostrarModal}
                                setMostrarModal={setMostrarModal}
                                eliminarAlumno={eliminarAlumno}
                            />
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            <ModalAlumno
                mostrarModal={mostrarModal}
                setMostrarModal={setMostrarModal}
                guardarAlumno={guardarAlumno}
                editar={editar}
                setEditar={setEditar}
                editarAlumno={editarAlumno}
            />
        </Container>
    )
}

export default App;