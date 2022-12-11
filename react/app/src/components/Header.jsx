import React from 'react'
import AppBar from '@mui/material/AppBar';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import {Toolbar} from '@mui/material';
import {List, ListItemButton, ListItem} from '@mui/material';
import { Link } from 'react-router-dom';
import '../static/header.css'

function Header() {
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
            <Toolbar>
                <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                >
                ATKK
                </Typography>

                <List>
                    <ListItem disablePadding>
                        <ListItemButton 
                            sx={{ textAlign: 'center' }}
                            component={Link}
                            to="/"
                        >
                            Home
                        </ListItemButton>
                        <ListItemButton 
                            sx={{ textAlign: 'center' }}
                            component={Link}
                            to="/insert"
                        >
                            新規登録
                        </ListItemButton>
                        <ListItemButton 
                            sx={{ textAlign: 'center' }}
                            component={Link}
                            to="/userOne"
                        >
                            ユーザ検索
                        </ListItemButton>
                    </ListItem>
                </List>

            </Toolbar>
        </AppBar>
      </Box>
    )
}

export default Header
