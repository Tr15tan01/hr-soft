import * as React from 'react';
// import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function BasicCard(props) {
    console.log(props)
    return (
        <Card sx={{ minWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {props.name}
                </Typography>
                <Typography variant="h5" component="div">
                    {props.description}
                </Typography>

            </CardContent>
            <CardActions>
                <Button size="small" variant="contained">Learn More</Button>
            </CardActions>
        </Card>
    );
}
