import '../../components/app/App.css';
import { Typography, Button, Stack, Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { push } from '../../states/scrapers/scrapersSlice';
import ModalWindow from "../../components/modal/Modal";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import LabelIcon from '@mui/icons-material/Label';
import TerminalIcon from '@mui/icons-material/Terminal';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from 'react';

function ScriptPage() {
	const scrapers = useSelector((state) => state.scrapers.scrapers)
	const dispatch = useDispatch()
	const [open, setOpen] = useState(false);

	useEffect(() => {
		console.log(scrapers)
	})

	return (
		<div className='app-body' style={{'padding-top': '20px'}}>
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
									sx={{ height: '70px', width: '90%' }}>
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
	);
}

export default ScriptPage;
