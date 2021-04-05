import React, { createContext, useState } from 'react'
import { Snackbar } from '@material-ui/core'
import Alert from '@material-ui/lab/Alert'
import PropTypes from 'prop-types'
export const SnackContext = createContext({
  snack: { open: false, message: '', color: '' },
  setSnack: ({
    open = PropTypes.bool,
    message = PropTypes.string,
    color = PropTypes.string,
  }) => {},
})

function SnackProvider({ children }) {
  const [snack, setSnack] = useState({
    open: false,
    message: '',
    color: '',
  })
  return (
    <SnackContext.Provider value={{ snack, setSnack }}>
      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() =>
          setSnack((prevState) => ({
            ...prevState,
            open: false,
          }))
        }
      >
        <Alert variant='filled' severity={snack.color}>
          {snack.message}
        </Alert>
      </Snackbar>
      {children}
    </SnackContext.Provider>
  )
}
SnackProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
export default SnackProvider
