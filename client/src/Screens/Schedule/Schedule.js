
import Sidebar from '../../Components/Sidebar/Sidebar';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import SettingsIcon from '@material-ui/icons/Settings';


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

let days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];


console.log(days)

const AdminDashBoard = () => {

    

    const classes = useStyles();

    return (
        <div align="center">
            <Sidebar/>

            <TableContainer component={Paper} className={classes.tableContainer}>
                <Table className={classes.table} aria-label="simple table">
                    <TableHead>
                    <TableRow className={classes.tableHeader}>
                        <TableCell style={{color: 'white'}}>One Week Out</TableCell>
                        <TableCell className={classes.cellStyle} align="right">Edit</TableCell>
                        <TableCell className={classes.cellStyle} align="right">Time Schedule</TableCell>
                        <TableCell className={classes.cellStyle} align="right">Attendance</TableCell>
                        <TableCell className={classes.cellStyle} align="right">Status</TableCell>
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {days.map((day) => (
                        <TableRow key={day}>
                        <TableCell component="th" scope="row">
                            {day}
                        </TableCell>
                        <TableCell align="right">
                            <SettingsIcon/>
                        </TableCell>
                        <TableCell align="right">{12}pm {8}pm</TableCell>
                        <TableCell align="right">Pending</TableCell>
                        <TableCell align="right">Scheduled</TableCell>
                        </TableRow>
                    ))}
                        <TableCell component="th" scope="row">
                            Stats
                        </TableCell>
                        <TableCell align="right"></TableCell>
                        <TableCell align="right">40hrs</TableCell>
                        <TableCell align="right">100%</TableCell>
                        <TableCell align="right">$600 Earned</TableCell>
                    </TableBody>
                </Table>
                </TableContainer>  

                <TableContainer component={Paper} className={classes.tableContainer}>
                    <Table className={classes.table} aria-label="simple table">
                        <TableHead>
                        <TableRow className={classes.tableHeader}>
                            <TableCell style={{color: 'white'}}>Two Week Out</TableCell>
                            <TableCell className={classes.cellStyle} align="right">Edit</TableCell>
                            <TableCell className={classes.cellStyle} align="right">Time Schedule</TableCell>
                            <TableCell className={classes.cellStyle} align="right">Attendance</TableCell>
                            <TableCell className={classes.cellStyle} align="right">Status</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {days.map((day) => (
                            <TableRow key={day}>
                            <TableCell component="th" scope="row">
                                {day}
                            </TableCell>
                            <TableCell align="right">
                                <SettingsIcon/>
                            </TableCell>
                            <TableCell align="right">{12}pm  {8}pm</TableCell>
                            <TableCell align="right">Pending</TableCell>
                            <TableCell align="right">Scheduled</TableCell>
                            </TableRow>
                        ))}
                            <TableCell component="th" scope="row">
                                Stats
                            </TableCell>
                            <TableCell align="right"></TableCell>
                            <TableCell align="right">40hrs</TableCell>
                            <TableCell align="right">100%</TableCell>
                            <TableCell align="right">$600 Earned</TableCell>
                        </TableBody>
                    </Table>
                </TableContainer>          
            
        </div>
    )
}

export default AdminDashBoard;