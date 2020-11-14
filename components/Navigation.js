import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import { menuItems } from '../data/data';

const drawerWidth = 200;
const headerHeight = 70;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    width: '100%',
  },
  list: {
    paddingTop: 0,
  },
  toolbar: {
    maxHeight: headerHeight,
    minHeight: headerHeight,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  logo: {
    width: '28%',
    [theme.breakpoints.up('sm')]: {
      width: '15%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '10%',
    },
  },
  textLogo: {
    width: '38%',
    [theme.breakpoints.up('sm')]: {
      width: '25%',
    },
    [theme.breakpoints.up('lg')]: {
      width: '20%',
    },
  },
  selected: {
    backgroundColor: '#d7a22a80 !important',
  },
  drawerPaper: {
    width: drawerWidth,
    marginTop: headerHeight + 3,
  },
}));

export default function Navigation() {
  const router = useRouter();
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleMenuClick = url => {
    router.push(url);
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <List classes={{ root: classes.list }}>
        {menuItems.map(item => (
          <React.Fragment key={item.name}>
            <ListItem
              button
              classes={{ selected: classes.selected }}
              disabled={!item.active}
              onClick={() => handleMenuClick(item.url)}
              selected={router.pathname === item.url}
            >
              <ListItemText
                primary={item.name}
                secondary={item.active ? '' : 'Coming Soon!'}
              />
            </ListItem>
            <Divider />
          </React.Fragment>
        ))}
      </List>
    </div>
  );

  return (
    <div className={classes.root}>
      <AppBar position="fixed" color="default" className={classes.appBar}>
        <Toolbar classes={{ root: classes.toolbar }}>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <img
            className={classes.logo}
            src="/static/logos/website-As.png"
            alt="armstrong welding logo"
          />
          <img
            className={classes.textLogo}
            src="/static/logos/armstrong-weld-fab.png"
            alt="armstrong name"
          />
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer}>
        <Hidden smUp implementation="css">
          <Drawer
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true,
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </div>
  );
}
