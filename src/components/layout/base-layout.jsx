import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CodeSharpIcon from '@mui/icons-material/CodeSharp';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from 'react-router-dom'

const drawerWidth = 240;

export function BaseLayout(props) {
    const navigate = useNavigate()
    const handleClick = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }
    const drawer = (
        <div className="sidebarcolor">
            <Toolbar />
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigate('/products') }}>
                        <ListItemIcon>
                            < CodeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Products'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigate('/categories') }}>
                        <ListItemIcon>
                            < CodeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Categories'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigate('/shippment') }}>
                        <ListItemIcon>
                            < CodeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Shippment'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigate('/sales-orders') }}>
                        <ListItemIcon>
                            < CodeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Sales&Orders'} />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => { navigate('/users') }}>
                        <ListItemIcon>
                            < CodeSharpIcon />
                        </ListItemIcon>
                        <ListItemText primary={'Users'} />
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
        </div>
    );

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}>
                <Toolbar style={{ background: 'white' }}>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}>
                        <MenuIcon />
                    </IconButton>
                    <div className='flex' >
                        <div className='flex-grow'></div>
                        <div className='top-bar-buttons'>
                            <button style={{ marginRight: '10px', color: 'white', borderRadius: '40px', width: '90px', height: '40px' }} onClick={handleClick}>Logout</button>
                            <button style={{ color: 'white', borderRadius: '40px', width: '90px', height: '40px' }}>User Name</button>
                        </div>
                    </div>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}>
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open>
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}>
                <Toolbar />
                {props.children}
            </Box>
        </Box>
    )
}
