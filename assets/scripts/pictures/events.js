'use strict'
const onCreatePicture = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.onCreatePicture(data)
    .then(ui.createPictureSuccess)
    .catch(ui.createPictureFailure)
}

const addHandlers = function () {
  $('#create').on('submit', onCreatePicture)
}

module.exports = {
  addHandlers
}
