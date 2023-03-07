import Table from "./Table";

const Display = ({ tableHeadRow, options, i }) => {
  return (
    <>

      {Object.values(options).map((data, j) => (
        <Table
          key={data + i + j}
          title={
            (j == 0 && "Site Status") ||
            (j == 1 && "Warehouse Details") ||
            (j == 12 && "GST Details") ||
            (j == 15 && "Agreement Details") ||
            (j == 33 && "Compliance Details")
          }
          data={data}
          j={j}
          tableHeadRow={tableHeadRow}
        />

        // <div key={data + i + j}>
        //   {tableHeadRow[j]} ==== {data}
        // </div>
      ))}
    </>
  );
};

export default Display;
