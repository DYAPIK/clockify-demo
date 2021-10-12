import { block } from 'bem-cn';
import { useStore } from 'effector-react';

import { useFeatureModel } from '../../context';

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const b = block('users-report');

function UsersReport() {
  const { report$ } = useFeatureModel();

  const report = useStore(report$);

  if (report === null) {
    return null;
  }

  return (
    <div className={b()}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>User name</TableCell>
              <TableCell>Hours amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {report.groupOne.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.duration / 60 / 60}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
    </TableContainer>
    </div>
  );
}

export { UsersReport };
