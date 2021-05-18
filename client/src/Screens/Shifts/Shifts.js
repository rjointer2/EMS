
import React, { useState } from 'react';
import Sidebar from '../../Components/Sidebar/Sidebar';


import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import DoneIcon from '@material-ui/icons/Done';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const Shifts = () => {

    const useStyles = makeStyles((theme) => ({
        table: {
          minWidth: 650,
        },
        tableContainer: {
            border: 15,
            margin: '10px 10px',
            maxWidth: 950
        },
        tableHeader: {
            backgroundColor: '#2F4050',
        },
        cellStyle: {
            color: 'white'
        }
      }));
      
    // fake users for now
    
    let department = ['Guest Service', 'Market', 'Gen Merch', 'Cafe', 'Fulfull', 'Cleaning'];
    
    
    console.log(department)

    const classes = useStyles();

    const [ checked, setCheck ] = useState(false);

    return (
        <div align="center">
            <Sidebar />
            
            <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow className={classes.tableHeader}>
                            <TableCell style={{color: 'white'}}>Shifts for Sale</TableCell>
                            <TableCell className={classes.cellStyle} align="right">Request Shift</TableCell>
                            <TableCell className={classes.cellStyle} align="right">Time Schedule</TableCell>
                            <TableCell className={classes.cellStyle} align="right">Comments</TableCell>
                            <TableCell className={classes.cellStyle} align="right"></TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {department.map((day) => (
                            <TableRow key={day}>
                            <TableCell component="th" scope="row">
                                {day}
                            </TableCell>
                            <TableCell align="right">
                            <FormControlLabel 
                        control={
                            <Checkbox
                                onChange={() => {
                                    checked ? setCheck(false) : setCheck(true)
                                }}
                                name="checkBox"
                                color='primary'
                            />
                        }
                        label="Take Shift?"
                        style={{paddingTop: 10}}
                    />
                            </TableCell>
                            <TableCell align="right">{12}pm  {8}pm</TableCell>
                            <TableCell align="right">Pending</TableCell>
                            <TableCell align="right">Scheduled</TableCell>
                            </TableRow>
                        ))}
                            
                        </TableBody>
                    </Table>
                </TableContainer>

        </div>
    )
}

export default Shifts;