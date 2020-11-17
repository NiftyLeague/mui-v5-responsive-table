import React, { Component } from "react";
import { DataGrid, ColDef, ValueGetterParams } from "@material-ui/data-grid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { CellRenderer, LabelRenderer } from "./Renderer";
import NoContent from "./NoContent";
import Pagination from "./Pagination";
import _isEqual from "lodash.isequal";

/**
 * Material-ui DataGrid component
 */
export default class DataTable extends Component {
  shouldComponentUpdate(nextProps) {
    const { enableShouldComponentUpdate, data } = this.props;
    if (enableShouldComponentUpdate) {
      return !_isEqual(nextProps.data, data);
    }
    return true;
  }

  handleChangePage = (params) => this.props.onChangePage(params);

  getRowClass = (index) => {
    const { rowsClassArray } = this.props;
    return rowsClassArray && rowsClassArray[index] ? rowsClassArray[index] : "";
  };

  render() {
    const {
      columns,
      count,
      data,
      noContentText,
      page,
      rowsPerPage,
      showPagination,
      DataGridProps,
      TableBodyCellProps,
      TableBodyProps,
      TableBodyRowProps,
      TableHeadCellProps,
      TableHeadProps,
      TableHeadRowProps,
      TablePaginationProps,
      TableProps,
    } = this.props;

    // if (
    //   !Array.isArray(data) ||
    //   data.length === 0 ||
    //   !Array.isArray(columns) ||
    //   columns.length === 0
    // ) {
    //   return <NoContent text={noContentText} />;
    // }

    return (
      <DataGrid
        columns={columns}
        rows={data}
        pageSize={rowsPerPage}
        page={page}
        rowCount={count}
        onPageChange={this.handleChangePage}
        {...DataGridProps}
      />
    );

    // return (
    //   <Table {...TableProps}>
    //     <TableHead {...TableHeadProps}>
    //       <TableRow {...TableHeadRowProps}>
    //         {columns.map((column, index) => (
    //           <TableCell
    //             key={`${column.label}-${index}`}
    //             {...TableHeadCellProps}
    //           >
    //             <LabelRenderer column={column} data={data} />
    //           </TableCell>
    //         ))}
    //       </TableRow>
    //     </TableHead>
    //     <TableBody {...TableBodyProps}>
    //       {data.map((row, rowIndex) => (
    //         <TableRow key={rowIndex} className={this.getRowClass(rowIndex)} {...TableBodyRowProps}>
    //           {columns.map((column, columnIndex) => (
    //             <TableCell
    //               key={`${rowIndex}-${columnIndex}`}
    //               {...TableBodyCellProps}
    //             >
    //               <CellRenderer column={column} row={row} data={data} />
    //             </TableCell>
    //           ))}
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //     {
    //       showPagination &&
    //       <TableFooter>
    //         <TableRow>
    //           <Pagination
    //             count={count}
    //             rowsPerPage={rowsPerPage}
    //             page={page}
    //             TablePaginationProps={TablePaginationProps}
    //             onChangePage={this.handleChangePage}
    //           />
    //         </TableRow>
    //       </TableFooter>
    //     }
    //   </Table>
    // )
  }
}
