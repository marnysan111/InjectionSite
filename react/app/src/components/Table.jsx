import {Table, TableBody, Paper, TableHead, TableRow, TableCell, TableContainer} from '@mui/material';


export default function UserTable(props) {
    const user = props.user
    
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 850 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">ID</TableCell>
                        <TableCell align="center">ユーザ名</TableCell>
                        <TableCell align="center">メールアドレス</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {user.map((item) => {
                    return (
                        <TableRow key={item}>
                        {item.map((subitem) => 
                            <TableCell component="th" scope="row" align="center" key={subitem}>
                                {subitem}
                            </TableCell>
                        )}
                        </TableRow>
                    )
                })}
                </TableBody>
            </Table>
        </TableContainer>
    )
}