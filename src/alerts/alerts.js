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
    

export {deleteConfirm, deletedAlert}