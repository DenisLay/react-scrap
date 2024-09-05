import { Box, Typography } from '@mui/material';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div hidden={value !== index}>
        {
            value === index && (
            <Box>
                {children}
            </Box>
            )
        }
        </div>
    )
}

export default TabPanel;