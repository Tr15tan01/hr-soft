import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const card = (
    <React.Fragment>
        <CardContent >
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                Main Text After
            </Typography>
            <Typography variant="h5" component="div">
                Charts and Other
            </Typography>
        </CardContent>
        <CardActions >
            <Button size="small" variant="contained">Learn More</Button>
        </CardActions>
    </React.Fragment>
);

export default function OutlinedCard(props) {
    console.log(props)
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined">{card}</Card>
        </Box>
    );
}
