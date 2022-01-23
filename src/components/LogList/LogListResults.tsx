import {
    Box,
    Card,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from '@mui/material';
import { LogAttributes, LogDetails } from '../../external_data_mock/types'

export const LogListResults = (props: { list: LogDetails[] }) => {
    return (
        <Card>
            <Box>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                {LogAttributes.datetime}
                            </TableCell>
                            <TableCell>
                                {LogAttributes.severity}
                            </TableCell>
                            <TableCell>
                                {LogAttributes.message}
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {(props.list).map((value: { [key: string]: string }, key: number) => (
                            <TableRow
                                hover
                                key={key}
                            >
                                <TableCell>
                                    {value.datetime}
                                </TableCell>
                                <TableCell>
                                    {value.severity}
                                </TableCell>
                                <TableCell>
                                    {value.message}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </Box>
        </Card>
    );
};
