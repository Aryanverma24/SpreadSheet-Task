import React, { useState } from "react";
import tableData from "../data/tableData.json";

export default function SpreadsheetTable() {
  const [columns] = useState(tableData.columns);
  const [rows, setRows] = useState(tableData.rows);

  const extraCols = 40; // Extra blank columns like Excel
  const restrows = 50;  // Extra blank rows

  const updateCell = (rowIndex, colIndex, newValue) => {
    const updatedRows = [...rows];
    if (!updatedRows[rowIndex]) updatedRows[rowIndex] = [];
    updatedRows[rowIndex][colIndex] = newValue;
    setRows(updatedRows);
  };

  const renderRow = (row = [], rIdx) => {
    const totalCols = columns.length + extraCols;

    return (
      <tr key={`row-${rIdx}`} >
        {/* Row number */}
        <td
          className="px-2 py-1 border text-center text-gray-500 bg-gray-50 font-medium sticky left-0 z-10"
          style={{ backgroundColor: "#f9fafb", minWidth: "50px" }}
        >
          {rIdx + 1}
        </td>

        {Array.from({ length: totalCols }).map((_, cIdx) => {
          const value = row[cIdx] || "";
          const colName = columns[cIdx]; // undefined for blank cols

          // Priority pill class
          let priorityClass = "";
          if (colName === "Priority") {
            if (value === "Low") priorityClass = "bg-blue-100 text-blue-700";
            else if (value === "Medium") priorityClass = "bg-yellow-100 text-yellow-800";
            else if (value === "High") priorityClass = "bg-red-100 text-red-700";
          }

          // Status pill class
          let statusClass = "";
          if (colName === "Status") {
            if (value === "Completed") statusClass = "bg-green-100 text-green-800";
            else if (value === "In process") statusClass = "bg-yellow-100 text-yellow-800";
            else if (value === "Need to start") statusClass = "bg-gray-100 text-gray-700";
            else if (value === "In review") statusClass = "bg-purple-100 text-purple-700";
            else if (value === "Blocked") statusClass = "bg-red-100 text-red-700";
          }

          const pillClass =
            colName === "Priority"
              ? priorityClass
              : colName === "Status"
              ? statusClass
              : "";

          return (
            <td
              key={`cell-${rIdx}-${cIdx}`}
              className="px-2 py-1 border cursor-text min-w-[120px] text-xs hover:bg-green-100"
              contentEditable
              suppressContentEditableWarning
              onBlur={(e) => updateCell(rIdx, cIdx, e.target.innerText)}
            >
              {(colName === "Priority" || colName === "Status") && value ? (
                <span
                  className={`px-1.5 py-0.5 rounded-full text-xs font-medium ${pillClass}`}
                >
                  {value}
                </span>
              ) : (
                value
              )}
            </td>
          );
        })}
      </tr>
    );
  };

  return (
    <div className="overflow-x-auto border rounded-lg mt-1 max-h-[75vh] overflow-y-scroll">
      <div className="w-full overflow-auto">
        <table className="min-w-[1800px] text-xs text-left text-gray-800 border border-gray-300">
          <thead className="bg-gray-100 uppercase sticky top-0 z-20">
            <tr>
              {/* Sticky row number header */}
              <th
                className="px-2 py-1 border bg-white text-center sticky left-0 z-30"
                style={{ backgroundColor: "#f9fafb", minWidth: "50px" }}
              >
                #
              </th>

              {/* Column headers */}
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-2 py-1 border  bg-gray-200 text-stone-950 font-semibold"
                  style={{ minWidth: "100px" }}
                >
                  {col}
                </th>
              ))}

              {/* Extra column headers (empty) */}
              {Array.from({ length: extraCols }).map((_, i) => (
                <th
                  key={`extra-col-${i}`}
                  className="px-2 py-1 border bg-gray-200 text-stone-950 font-medium"
                  style={{ minWidth: "100px" }}
                />
              ))}
            </tr>
          </thead>

          <tbody>
            {/* Actual data rows */}
            {rows.map((row, rIdx) => renderRow(row, rIdx))}

            {/* Blank rows */}
            {Array.from({ length: restrows }).map((_, rIdx) =>
              renderRow([], rows.length + rIdx)
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
