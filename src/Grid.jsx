import React from 'react'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import OutlinedCard from './Card'
import BasicCard from './BasicCard'
import Example from './chart/Chart'
import './chart/Chart.css'

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Item>
                            <div className="chart-container">
                                <Example />
                            </div>
                        </Item>
                    </Grid>
                    <Grid item xs={12}>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12}>

                                </Grid>
                                <Grid item xs={4}>
                                    <Item><OutlinedCard name={'umilia'} /></Item>
                                </Grid>
                                <Grid item xs={8}>
                                    <Item>
                                        <BasicCard name={'godzolla'} description={'this is a best variant'} />
                                    </Item>
                                </Grid>

                                <Grid item xs={4}>
                                    <Item>xs=4</Item>
                                </Grid>
                                <Grid item xs={8}>
                                    <Item>xs=8</Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}