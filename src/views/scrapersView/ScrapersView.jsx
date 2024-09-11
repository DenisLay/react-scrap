import { Typography, Button } from '@mui/material';
import { useSelector } from 'react-redux';
import ModalWindow from "../../components/modal/Modal";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TerminalIcon from '@mui/icons-material/Terminal';
import EditIcon from '@mui/icons-material/Edit';
import {useEffect, useState} from 'react';

const ScrapersView = (props) => {
	const scrapers = useSelector((state) => state.scrapers.scrapers)
	const [open, setOpen] = useState(false);

    return (
		<div>
            <Typography>Scrapers</Typography>

			<Button
				variant="outlined"
				color="neutral"
				onClick={() => setOpen(true)}
			>
				New scraper
			</Button>

			<ModalWindow open={open} setOpen={setOpen} />

			<Box sx={{ bgcolor: 'background.paper' }}>
				<List variant="outlined"
            		sx={{ maxWidth: '100%', borderRadius: 'sm' }}>
					{
						scrapers.map(item => (
							<ListItem
									disablePadding
									key={item.payload.id}>
								<ListItemButton
									sx={{ height: '70px', width: '90%' }}
									onClick={() => props.next(item.payload.id)}
								>
									<ListItemIcon>
										<TerminalIcon />
									</ListItemIcon>
									<ListItemText primary={item.payload.name} />
								</ListItemButton>
								<ListItemButton>
									<ListItemIcon sx={{ height: '50px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
										<EditIcon />
									</ListItemIcon>
								</ListItemButton>
							</ListItem>
						))
					}
				</List>
			</Box>
        </div>
    )
}

export default ScrapersView;