    import React from 'react'
    import NavbarProfile from '../../../../layout/navbar/NavbarProfile'
    import { useParams } from 'react-router-dom';
    import { Box, Typography } from '@mui/material';
    const FloorInformation = ({setMyMode}) => {
        const { shade, type } = useParams(); 
    return (
        <div>
        <NavbarProfile setMyMode={setMyMode}/>
        <Box sx={{ padding: '2rem' }}>
                <Typography variant="h4" gutterBottom>
                    Floor Details
                </Typography>
                <Typography variant="h6">
                    Shade: {shade}
                </Typography>
                <Typography variant="h6">
                    Type: {type}
                    
                </Typography>
                
            </Box>
        </div>
    )
    }

    export default FloorInformation
