import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { useDeleteBooksMutation } from '../features/apiSlice';

const Popup = ({ id }) => {
  const navigate = useNavigate();
  const [deleteBooks, response] = useDeleteBooksMutation();
  return Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.isConfirmed) {
      deleteBooks(id).then(() => navigate('/'));
      Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
    } else if (
      /* Read more about handling dismissals below */
      result.dismiss === Swal.DismissReason.cancel
    ) {
      Swal.fire('Cancelled', 'Your imaginary file is safe :)', 'error');
    }
  });
};

export default Popup;
