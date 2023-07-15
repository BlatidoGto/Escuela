import { Table, Button } from "reactstrap"

const TablaAlumno = ({ data, setEditar, mostrarModal, setMostrarModal, eliminarAlumno }) => {

    const enviarDatos = (alumno) => {
        setEditar(alumno)
        setMostrarModal(!mostrarModal)
    }

    return (
        <Table striped responsive>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido Paterno</th>
                    <th>Apellido Materno</th>
                    <th>Calificacion</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    (data.length < 1) ? (
                        <tr>
                            <td colSpan="5">Sin registros</td>
                        </tr>
                    ) : (
                        data.map((item) => (
                            <tr key={item.idAlumno}>
                                <td>{item.nombre}</td>
                                <td>{item.ap_pat}</td>
                                <td>{item.ap_mat}</td>
                                <td>{item.cal}</td>
                                <td>
                                    <Button color="primary" size="sm" className="me-2" onClick={() => enviarDatos(item)}>Editar</Button>
                                    <Button color="danger" size="sm" onClick={() => eliminarAlumno(item.idAlumno)}>Eliminar</Button>
                                </td>
                            </tr>
                        ))
                    )
                }
            </tbody>
        </Table>
    )
}

export default TablaAlumno;