import React from 'react'
import { Skeleton, Box } from '@mui/material'

const First = () => {
    return (
        <div>
            <Box sx={{ pt: 0.5, background: "white", padding: 5 }} height={300}>
                <Skeleton variant='rounded' />
                <Skeleton height={250} />
            </Box>
        </div>
    )
}

export default First