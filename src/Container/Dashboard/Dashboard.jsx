import React, { lazy, Suspense } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EditAttributesIcon from '@material-ui/icons/EditAttributes';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import EqualizerIcon from '@material-ui/icons/Equalizer';

import { useStyles } from './Dashboard.style';

import {
    Route,
    Redirect,
    BrowserRouter as Router,
    Switch,
    useLocation,
    Link,
} from 'react-router-dom';



const PostList = lazy(() => import('./../../features/postManagement/View/PostList'));
const PostForm = lazy(() => import('./../../features/postManagement/View/PostForm'));
const IdeaStatistics = lazy(() => import('./../../features/ideaStatistics/View/IdeaStatistics'));


export default function Dashboard() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Suspense fallback={<div>loading</div>}>
            <Router>
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar
                        position="fixed"
                        className={clsx(classes.appBar, {
                            [classes.appBarShift]: open,
                        })}
                    >
                        <Toolbar>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                onClick={handleDrawerOpen}
                                edge="start"
                                className={clsx(classes.menuButton, {
                                    [classes.hide]: open,
                                })}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" noWrap>
                                Cuộc thi Ý Tưởng Khởi Nghiệp
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        variant="permanent"
                        className={clsx(classes.drawer, {
                            [classes.drawerOpen]: open,
                            [classes.drawerClose]: !open,
                        })}
                        classes={{
                            paper: clsx({
                                [classes.drawerOpen]: open,
                                [classes.drawerClose]: !open,
                            }),
                        }}
                    >
                        <div className={classes.toolbar}>
                            <IconButton onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                            </IconButton>
                        </div>
                        <Divider />
                        <List>

                            <Link to="/Dashboard/PostList" style={{ textDecoration: "none", color: "black" }}>
                                <ListItem button>
                                    <ListItemIcon><FormatListBulletedIcon /></ListItemIcon>
                                    <ListItemText primary="Danh sách ý tưởng" />
                                </ListItem>
                            </Link>

                            <Link to="/Dashboard/PostForm" style={{ textDecoration: "none", color: "black" }}>
                                <ListItem button>
                                    <ListItemIcon><EditAttributesIcon /></ListItemIcon>
                                    <ListItemText primary="Thêm ý tưởng" />
                                </ListItem>
                            </Link>

                            <Link to="/Dashboard/IdeaStatistics" style={{ textDecoration: "none", color: "black" }}>
                                <ListItem button>
                                    <ListItemIcon><EqualizerIcon /></ListItemIcon>
                                    <ListItemText primary="Thống kê" />
                                </ListItem>
                            </Link>
                        </List>
                    </Drawer>
                    <main className={classes.content}>
                        <div className={classes.toolbar} />
                        <Switch>
                            <Route path="/Dashboard/PostList" component={PostList} />
                            <Route path="/Dashboard/PostForm" component={PostForm} />
                            <Route path="/Dashboard/IdeaStatistics" component={IdeaStatistics} />


                        </Switch>
                    </main>
                </div>


            </Router>
        </Suspense>

    );
}