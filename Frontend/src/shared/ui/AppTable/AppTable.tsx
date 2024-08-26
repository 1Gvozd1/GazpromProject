import {
  TableContainer,
  Paper,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  styled,
  tableCellClasses,
} from "@mui/material";
import { DataSchema } from "../../../entities/Data";

// Стилизация заголовков таблицы
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

// Чередование цветов строк и стилизация последней строки
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

interface CustomTableProps {
  records: DataSchema[];
}

export const AppTable = ({ records }: CustomTableProps) => {
  return (
    <TableContainer component={Paper} elevation={3} sx={{ borderRadius: 2, boxShadow: 3 }}>
      <Table sx={{ minWidth: 650 }} aria-label="styled table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="left">articleid</StyledTableCell>
            <StyledTableCell align="left">subarticleid</StyledTableCell>
            <StyledTableCell align="left">articlename</StyledTableCell>
            <StyledTableCell align="left">external_str_id</StyledTableCell>
            <StyledTableCell align="left">ecrlongname</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {records.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="left">{row.articleid}</StyledTableCell>
              <StyledTableCell align="left">{row.subarticleid}</StyledTableCell>
              <StyledTableCell align="left">{row.articlename}</StyledTableCell>
              <StyledTableCell align="left">{row.external_str_id}</StyledTableCell>
              <StyledTableCell align="left">{row.ecrlongname}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
