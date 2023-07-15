import { useEffect, useState } from "react";
import { Modal, ModalHeader, ModalBody, Form, FormGroup, Label, Input, Button, ModalFooter } from "reactstrap";

const modeloAlumno = {
    idAlumno: 0,
    nombre: "",
    ap_pat: "",
    ap_mat: "",
    cal: ""
}

const ModalAlumno = ({ mostrarModal, setMostrarModal, guardarAlumno, editar, setEditar, editarAlumno }) => {

    const [alumno, setAlumno] = useState(modeloAlumno);

    const actualizaDato = (e) => {
        console.log(e.target.name + " : " + e.target.value)
        setAlumno(
            {
                ...alumno,
                [e.target.name]: e.target.value
            }
        )
    }

    const enviarDatos = () => {

        if (alumno.idAlumno == 0) {
            guardarAlumno(alumno)
        }
        else {
            editarAlumno(alumno)
        }

    }

    useEffect(() => {
        if (editar != null) {
            setAlumno(editar)
        }
        else {
            setAlumno(modeloAlumno)
        }
    }, [editar])

    const cerrarModal = () => {
        setMostrarModal(!mostrarModal)
        setEditar(null)
    }

    return (

        <Modal isOpen={mostrarModal}>
            <ModalHeader>
                {alumno.idAlumno == 0 ? "Alumno Nuevo" : "Editar Alumno"}
            </ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label>Nombre</Label>
                        <Input name="nombre" onChange={(e) => actualizaDato(e)} value={alumno.nombre} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido Paterno</Label>
                        <Input name="ap_pat" onChange={(e) => actualizaDato(e)} value={alumno.ap_pat} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Apellido Materno</Label>
                        <Input name="ap_mat" onChange={(e) => actualizaDato(e)} value={alumno.ap_mat} />
                    </FormGroup>
                    <FormGroup>
                        <Label>Calificacion</Label>
                        <Input name="cal" onChange={(e) => actualizaDato(e)} value={alumno.cal} />
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" size="sm" onClick={enviarDatos}>Guardar</Button>
                <Button color="danger" size="sm" onClick={cerrarModal}>Cerrar</Button>
            </ModalFooter>
        </Modal>

    )

}

export default ModalAlumno;