import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import MuiListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import EventAvailableOutlinedIcon from '@material-ui/icons/EventAvailableOutlined';
import ReceiptOutlinedIcon from '@material-ui/icons/ReceiptOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import DirectionsCarOutlinedIcon from '@mui/icons-material/DirectionsCarOutlined';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import CompareIcon from '@mui/icons-material/Compare';
import CarRentalIcon from '@mui/icons-material/CarRental';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal';
import { useHistory } from 'react-router';


const drawerWidth = 290;

const useStyles = makeStyles((theme) => ({
    root: {

        display: 'flex',

    },

    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        overflow: 'hidden',


    },
    drawerPaper: {
        width: drawerWidth,
    },


    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },

    userIcon: {
        marginTop: 130,
        marginLeft: 30,
        fontSize: 50,
        color: '#656565'
    },

    header: {
        marginLeft: 95,
        marginTop: -47

    },
    heading: {

    },

    name: {
        fontSize: 18,
        marginTop: -15
    },

    itemlist: {
        marginTop: 50,
        marginLeft: 15,

    },

    items: {

        marginBottom: 20
    },

    itemText: {
        fontSize: 20,
    },

    logoutItem: {
        marginTop: 55,
        marginLeft: 15
    }
}));

const ListItem = withStyles({
    root: {
        "&$selected": {
            backgroundColor: "white",
            color: "#f48915",
            textDecoration: "underline",
            "& .MuiListItemIcon-root": {
                color: "#f48915"
            }
        },
        "&$selected:hover": {
            backgroundColor: "white",
            color: "#f48915",
            "& .MuiListItemIcon-root": {
                color: "#f48915"
            }
        },
        "&:hover": {
            backgroundColor: "#656565",
            color: "white",
            "& .MuiListItemIcon-root": {
                color: "white"
            }
        }
    },
    selected: {}
})(MuiListItem);


const SideBar = (props) => {
    const classes = useStyles();

    const [selectedIndex, setSelectedIndex] = React.useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };


    const history = useHistory();
    const handleSubmit = () => {
        localStorage.removeItem('@admin')
        history.push('/admin-login')
    }
    return (
        <div className={classes.root}>

            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <PersonOutlineOutlinedIcon className={classes.userIcon} />
                <div className={classes.header}>
                    <h3 className={classes.heading}>Welcome</h3>
                    <p className={classes.name}>{props.name}</p>
                </div>


                <List className={classes.itemlist}>

                    <ListItem button
                        selected={selectedIndex === 0}
                        onClick={(event) => {
                            handleListItemClick(event, 0)
                            history.push('/home/Registeration')
                        }} className={classes.items}>
                        <ListItemIcon><AddCircleOutlineOutlinedIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='Registration' />
                    </ListItem>


                    <ListItem button
                        selected={selectedIndex === 1}
                        onClick={(event) => {
                            handleListItemClick(event, 1)
                            history.push('/home/ShowDriverReg')
                        }} className={classes.items}>
                        <ListItemIcon><AirlineSeatReclineNormalIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='Driver Details' />
                    </ListItem>

                    <ListItem button
                        selected={selectedIndex === 2}
                        onClick={(event) => {
                            handleListItemClick(event, 2)
                            history.push('/home/CarRegistration')
                        }} className={classes.items}>
                        <ListItemIcon><DirectionsCarOutlinedIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='Vehicle Registration' />
                    </ListItem>

                    <ListItem button
                        selected={selectedIndex === 3}
                        onClick={(event) => {
                            handleListItemClick(event, 3)
                            history.push('/home/ShowVehicleDetails')
                        }} className={classes.items}>
                        <ListItemIcon><CarRentalIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='Vehicle Details' />
                    </ListItem>

                    <ListItem button
                        selected={selectedIndex === 4}
                        onClick={(event) => {
                            handleListItemClick(event, 4)
                            history.push('/home/Booking')
                        }} className={classes.items} >
                        <ListItemIcon><EventAvailableOutlinedIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='Booking' />
                    </ListItem>

                    <ListItem button
                        selected={selectedIndex === 5}
                        onClick={(event) => {
                            handleListItemClick(event, 5)
                            history.push('/home/Billing')
                        }} className={classes.items} >
                        <ListItemIcon><ReceiptOutlinedIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='Billing' />
                    </ListItem>

                    <ListItem button
                        selected={selectedIndex === 6}
                        onClick={(event) => {
                            handleListItemClick(event, 6)
                            history.push('/home/Complain')
                        }} className={classes.items} >
                        <ListItemIcon><PsychologyAltIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='Complain' />
                    </ListItem>

                    <ListItem button
                        selected={selectedIndex === 7}
                        onClick={(event) => {
                            handleListItemClick(event, 7)
                            history.push('/home/CompareImage')
                        }} className={classes.items} >
                        <ListItemIcon><CompareIcon style={{ fontSize: 30 }} /></ListItemIcon>
                        <ListItemText primary='CompareImage' />
                    </ListItem>

                </List>

                <List className={classes.itemlogout}>

                    <ListItem button key='LogOut' className={classes.logoutItem} onClick={handleSubmit}>
                        <ListItemIcon><ExitToAppOutlinedIcon style={{ fontSize: 30, color: "#f48915" }} /></ListItemIcon>
                        <ListItemText primary='LogOut' style={{ color: "#f48915" }} />
                    </ListItem>

                </List>
            </Drawer>

        </div>
    );
}

export default SideBar