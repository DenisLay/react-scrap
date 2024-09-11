import Drawer from "@mui/material/Drawer";
import {Button, Divider, Typography} from "@mui/material";
import {NavLink} from "react-router-dom";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { useNavigate } from "react-router-dom";

const SideBar = (props) => {

    const navigate = useNavigate();
    const menuItems = [
        {
            id: 0,
            label: 'Lab',
            link: '/'
        },
        {
          id: 1,
          label: 'Script',
          link: '/script'
      }
    ]

    return (
        <Drawer anchor='left'
                open={props.sideBarVisibility}
                onClose={() => props.setSideBarVisibility(!props.sideBarVisibility)}>
          <div style={{width: 200}}>
            <List>
                <ListItem>
                    <Typography level="h2">Navigation</Typography>
                </ListItem>
            </List>
            <Divider/>
            <List sx={{padding: '10px 0'}}>
              {
                menuItems.map(item => (
                  <ListItem key={item.id} sx={{padding: '0'}}>
                      <ListItemButton onClick={() => navigate(item.link)}>{item.label}</ListItemButton>
                  </ListItem>
                ))
              }
            </List>
          </div>
        </Drawer>
    )
}

export default SideBar;