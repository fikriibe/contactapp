import IconButton from '@material-ui/core/IconButton'
import Delete from '@material-ui/icons/Delete'
import Edit from '@material-ui/icons/Edit'
import React from 'react'
import { getFullName } from '../../configs/utils/logicHelper'
import ImageProfile from '../ImageProfile'
import useStyles from "./useStyles";
const { useCallback } = React

const RowContact = ({ item, onClick }) => {
    const classes = useStyles()
    const { age, photo, id } = item

    const handleClick = useCallback((key) => onClick(id, key), [id, onClick])

    const fullName = getFullName(item)
    return (
        <div className={classes.container} >
            <div className="d-flex align-items-center is-link" onClick={() => handleClick("detail")}>
                <ImageProfile className="image" src={photo} alt={fullName} />
                <div>
                    <p className="title">{fullName}</p>
                    <p className="desc" style={{ fontSize: 13, marginBottom: 0 }}>{age} age</p>
                </div>
            </div>

            <div className='action-item'>
                <IconButton onClick={() => handleClick("edit")}>
                    <Edit />
                </IconButton>
                <IconButton onClick={() => handleClick("delete")}>
                    <Delete />
                </IconButton>
            </div>
        </div>
    )
}

export default RowContact
