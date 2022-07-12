import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";
import _isEqual from "lodash.isequal";
import Box from "@mui/material/Box";

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
      <Box
        sx={{
          height: 52 * (rowsPerPage + 1) + 86,
          width: "100%",
          ".MuiDataGrid-cell:focus, .MuiDataGrid-columnHeader:focus, .MuiDataGrid-columnHeader:focus-within ":
            {
              outline: "none !important",
            },
          ".MuiDataGrid-root, .MuiDataGrid-footerContainer ": {
            border: "none",
          },
          ".MuiDataGrid-columnHeaders, .MuiDataGrid-cell": {
            borderBottom: "1px solid #d5d9e915 !important",
            zIndex: 1,
          },
          ".MuiDataGrid-iconSeparator": {
            display: "none",
          },
        }}
      >
        <DataGrid
          columns={columns}
          rows={data}
          pageSize={rowsPerPage}
          page={page}
          disableSelectionOnClick
          disableColumnMenu
          rowCount={count}
          onPageChange={this.handleChangePage}
          getRowId={(row) => row.rank}
          {...DataGridProps}
        />
      </Box>
    );
  }
}
