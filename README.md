# ExcelJS Dynamic Filter Bug

Demonstrate a bug where ExcelJS cannot read a dynamic filter in a table.

## Steps to Reproduce

1. Install dependencies `npm ci`
2. Run `node index.js`

It'll result in:

```
exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xform\table\filter-column-xform.js:72
        throw new Error(`Unexpected xml node in parseOpen: ${JSON.stringify(node)}`);
              ^

Error: Unexpected xml node in parseOpen: {"name":"dynamicFilter","attributes":{"type":"aboveAverage","val":"14.5"},"isSelfClosing":true}
    at FilterColumnXform.parseOpen (exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xform\table\filter-column-xform.js:72:15)
    at AutoFilterXform.parseOpen (exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xform\table\auto-filter-xform.js:37:19)
    at TableXform.parseOpen (exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xform\table\table-xform.js:57:19)
    at TableXform.parse (exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xform\base-xform.js:63:16)
    at async XLSX._processTableEntry (exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xlsx.js:165:19)
    at async XLSX.load (exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xlsx.js:393:15)
    at async XLSX.readFile (exceljs-dynamicfilter-bug\node_modules\exceljs\lib\xlsx\xlsx.js:55:24)
```

## Sample File

Sample file is stored in `files/workbook-with-dynamic-filter-in-table.xlsx`, but can also be created by following these steps:

1. Open Excel
2. Create a new workbook
3. Add sample data

ID | Age
-- | --
1 | 10
2 | 11
3 | 12
4 | 13
5 | 14
6 | 15
7 | 16
8 | 17
9 | 18
10 | 19

4. Convert to a table: `Insert` -> `Table`
5. Select the `Age` filter and choose: `Number filters` -> `Above Average`

