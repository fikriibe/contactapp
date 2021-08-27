import { Button, Dialog, DialogActions, DialogContent } from '@material-ui/core'
import React, { useCallback, useImperativeHandle } from 'react'
import { useState } from 'react'
import { forwardRef } from 'react'

const ModalDeleteContact = forwardRef(({ onDelete }, ref) => {
    const [state, setState] = useState("")
    const open = Boolean(state)

    const handleModal = useCallback((e = "") => setState(e), [])

    const handleDelete = useCallback(() => {
        onDelete(state)
        handleModal()
    }, [handleModal, onDelete, state])

    useImperativeHandle(ref, () => ({ handleModal }))
    return (
        <Dialog open={open} onClose={() => handleModal()}>
            <DialogContent>
                Yakin ingin Menghapus Contact
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleModal()}>
                    Tidak
                </Button>
                <Button onClick={handleDelete} >
                    Iya
                </Button>
            </DialogActions>
        </Dialog>
    )
})

export default ModalDeleteContact
