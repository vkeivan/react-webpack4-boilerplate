import classNames from 'classnames';
import React, {Fragment} from 'react';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

const drawerWidth = 240;

const styles =  theme => ({
    root: {
        flexGrow: 1,
    },
    flex: {
        flex: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaper: {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing.unit * 7,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing.unit * 9,
        },
    },
});

const navItemStyle = {
    textDecoration: 'none'
};

export const renderNavItems = onNavigate => (
    <div>
        <ListItem
            className={'nav-item'}
            button
            key="home"
            onClick={() => onNavigate('home')}
            >
            <ListItemIcon>
                <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
        </ListItem>
        <ListItem button className={'nav-item'} key="cards"
                  onClick={() => onNavigate('cards')}
        >
            <ListItemIcon>
                <StarIcon />
            </ListItemIcon>
            <ListItemText primary="Cards" />
        </ListItem>
    </div>
);


class AppHeader extends React.Component {
    state = {
        auth: true,
        anchorEl: null,
        drawer: false
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    onNavigate = (key) => {
        const {history} = this.props;
        switch (key) {
            case 'home':
                history.push('/');
                break;
            case 'cards':
                history.push('/boards');
                break;
            default:
                history.push('/');
        }
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
            drawer: open
        });
    };

    render() {
        const {classes,history} = this.props;
        console.log(history);
        const {auth, anchorEl, drawer} = this.state;
        const open = Boolean(anchorEl);

        return (
            <Fragment>
                <AppBar
                    position="absolute"
                    color="primary"
                >
                    <Toolbar>
                        <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                            <MenuIcon onClick={this.toggleDrawer('left', true)}/>
                        </IconButton>
                        <Typography variant="title" color="inherit" className={classes.flex}>
                            Photo Gallery
                        </Typography>
                        {auth && (
                            <div>
                                <IconButton
                                    aria-owns={open ? 'menu-appbar' : null}
                                    aria-haspopup="true"
                                    onClick={this.handleMenu}
                                    color="inherit"
                                >
                                    <AccountCircle />
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorEl}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={open}
                                    onClose={this.handleClose}
                                >
                                    <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                                    <MenuItem onClick={this.handleClose}>My account</MenuItem>
                                </Menu>
                            </div>
                        )}
                    </Toolbar>
                </AppBar>
                <SwipeableDrawer
                    variant={'temporary'}
                    open={drawer}
                    onClose={this.toggleDrawer('left', false)}
                    onOpen={this.toggleDrawer('left', true)}
                >
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >
                        <List>
                            {renderNavItems(this.onNavigate)}
                        </List>
                    </div>
                </SwipeableDrawer>
            </Fragment>
        );
    }
}

AppHeader.propTypes = {
    classes: PropTypes.object.isRequired,
    history: PropTypes.object
};

export default withRouter(withStyles(styles)(AppHeader));
