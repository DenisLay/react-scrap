import {useState} from "react";
import { ModalClose } from '@mui/joy';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Input from '@mui/joy/Input';
import ModalDialog from '@mui/joy/ModalDialog';
import DialogTitle from '@mui/joy/DialogTitle';
import DialogContent from '@mui/joy/DialogContent';
import { Button, Stack, Modal } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { push } from '../../states/scrapers/scrapersSlice';

const ModalWindow = (props) => {
	const scrapers = useSelector((state) => state.scrapers.scrapers)
	const dispatch = useDispatch()
    const [name, setName] = useState('')
	const [description, setDescription] = useState('')

    return (
        <Modal
				open={props.open}
				onClose={() => props.setOpen(false)}>
				<ModalDialog>
					<DialogTitle>Create new scraper</DialogTitle>
					<ModalClose variant="plain" sx={{ m: 1 }} onClick={() => props.setOpen(false)} />
					<DialogContent>Fill in the information of the scraper.</DialogContent>
					<form
						onSubmit={(event) => {
							event.preventDefault();
							props.setOpen(false);
						}}
					>
						<Stack spacing={2}>
						<FormControl>
							<FormLabel>Name</FormLabel>
							<Input
								autoFocus
								required
								value={name}
								onChange={(event) => setName(event.target.value)}
							/>
						</FormControl>
						<FormControl>
							<FormLabel>Description</FormLabel>
							<Input
								required
								value={description}
								onChange={(event) => setDescription(event.target.value)}
							/>
						</FormControl>
						<Button type="submit"
								onClick={() => {
										dispatch(push({id: Math.floor(Math.random() * (1000 + 1)), name: name, description: description}));
										setName('');
										setDescription('');
										props.setOpen(false);
									}
								}>
							Create
						</Button>
						</Stack>
					</form>
				</ModalDialog>
        </Modal>
    )
}

export default ModalWindow;