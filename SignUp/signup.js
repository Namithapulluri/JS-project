// import {exampleModal} from "../Navbar/navbar"
// export const exampleModal = document.getElementById('exampleModal')
//  if (exampleModal) {
//   exampleModal.addEventListener('show.bs.modal', event => {
//     // Button that triggered the modal
//     export  const button = event.relatedTarget
//     // Extract info from data-bs-* attributes
//     export  const recipient = button.getAttribute('data-bs-whatever')
//     // If necessary, you could initiate an Ajax request here
//     // and then do the updating in a callback.

//     // Update the modal's content.
//     export const modalTitle = exampleModal.querySelector('.modal-title')
//     export const modalBodyInput = exampleModal.querySelector('.modal-body input')

//     modalTitle.textContent = `New message to ${recipient}`
//     modalBodyInput.value = recipient
//   })
// }


// Export the exampleModal element
export const exampleModal = document.getElementById('exampleModal');

if (exampleModal) {
  exampleModal.addEventListener('show.bs.modal', (event) => {
    // Button that triggered the modal
    const button = event.relatedTarget;
    // Extract info from data-bs-* attributes
    const recipient = button.getAttribute('data-bs-whatever');
    // Update the modal's content
    const modalTitle = exampleModal.querySelector('.modal-title');
    const modalBodyInput = exampleModal.querySelector('.modal-body input');

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  });
}
