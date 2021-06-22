import Swal from 'sweetalert2';


const deleteConfirm = async (props) =>{
    return ({result: await Swal.fire({
        title: 'Dese eliminar la tarea?',
        text: "Este cambio no podrá revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor:  ' #acb6ae',
        confirmButtonText: 'Si, eliminar!',
        cancelButtonText: 'Cancelar',
        footer: 'No volver a preguntar &nbsp<input type="checkbox" id="remember" />'
    }), deleteConfirmOption:(document.getElementById('remember').checked)})
}

const deletedAlert = () =>{
    Swal.fire(
        'Eliminada!',
        'La tarea ha sido eliminada.',
        'success'
    )
}



const badCredentialsAlert = ()=>{
    Swal.fire({
    icon: 'error',
    title: 'Incorrect credentials!',
    text: 'Please insert your username and password',
  })
}

const inValidTaskName = (text)=>{
    Swal.fire({
    icon: 'error',
    title: 'Error al cargar la tarea',
    text: text,
  })
}

export {deleteConfirm, deletedAlert, inValidTaskName, badCredentialsAlert}