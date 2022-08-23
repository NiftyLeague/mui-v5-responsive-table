# mui-v5-responsive-table

[![npm Package](https://img.shields.io/npm/v/mui-v5-responsive-table.svg)](https://www.npmjs.com/package/mui-v5-responsive-table)

This project provides read-only responsive table for [Material-UI][material-ui].

Table is shown for desktop screen, list of expandable items - for tablet and mobile.

![Demo](demo.gif)

## Installation

```
npm i --save mui-v5-responsive-table
```

## Usage

```jsx
import ResponsiveTable from 'mui-v5-responsive-table'

const columns = [
  { field: 'id',
    headerName: 'ID',
    width: 90,
    primary: true
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    primary: true
  },
    {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
  },
]

const data = [
  { id: 1, lastName: 'Snow', firstName: 'Jon' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei'},
  { id: 3, lastName: 'Lannister', firstName: 'Jaime' },
]

<ResponsiveTable
  columns={columns}
  data={data}
/>
```

## ResponsiveTable Properties

| Name          | Type     | Default        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| ------------- | -------- | -------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| columns       | `array`  |                | Array of objects with <br/> _ Required column id (`key`) - used for detecting value for body cells <br/> _ Required column name (`name`) - shown in table header <br/> _ Optional render function (`render: (value, column, row, data)`) - allows to customize cell value for all cells in specific column <br/> _ Optional primary boolean (`primary`) - detects the column, which value has to be shown in the expandable list item summary (can be marked for 2 or more columns - in summary they are divided by ` `. |
| data          | `array`  |                | Array of objects with keys that corresponds column id and value that should be shown in cell.                                                                                                                                                                                                                                                                                                                                                                                                                            |
| noContentText | `string` | `'No Content'` | Override the default text if no columns/rows presented.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |

## License

The files included in this repository are licensed under the MIT license.

[material-ui]: https://material-ui-next.com/
