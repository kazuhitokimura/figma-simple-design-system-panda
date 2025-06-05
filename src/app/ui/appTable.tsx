import { css } from "../../../styled-system/css";

// TableCellコンポーネント
const TableCell = ({
  value,
  isLink = false,
  width = "160px",
}: {
  value: string;
  isLink?: boolean;
  width?: string;
}) => (
  <td
    className={css({
      width,
      padding: "300", // 12px
      background: "background.default", // panda token
      borderBottom: "1px solid",
      borderLeft: "1px solid",
      borderColor: "border.default", // panda token
      textStyle: "body.base", // style_DQ6DZ0
      color: "text.default", // panda token
      fontWeight: 400,
      fontFamily: "Inter, sans-serif",
      fontSize: "16px",
      lineHeight: "1em",
      textAlign: "left",
    })}
  >
    {isLink ? (
      <a
        href="#"
        className={css({
          textDecoration: "underline",
        })}
        tabIndex={0}
      >
        {value}
      </a>
    ) : (
      value
    )}
  </td>
);

export const AppTable = () => {
  // ヘッダーのモックデータ
  const headerData = [
    { value: "Column-1" },
    { value: "Column-2" },
    { value: "Column-3" },
    { value: "Column-4" },
    { value: "Column-5" },
  ];

  // モックデータ: 5x5のテーブル、isLinkはランダムにtrue/false
  const mockData: { value: string; isLink?: boolean }[][] = [
    [
      { value: "Cell 1-1", isLink: true },
      { value: "Cell 1-2", isLink: true },
      { value: "Cell 1-3", isLink: true },
      { value: "Cell 1-4", isLink: true },
      { value: "Cell 1-5", isLink: true },
    ],
    [
      { value: "Cell 2-1", isLink: true },
      { value: "Cell 2-2", isLink: true },
      { value: "Cell 2-3", isLink: true },
      { value: "Cell 2-4", isLink: true },
      { value: "Cell 2-5", isLink: true },
    ],
    [
      { value: "Cell 3-1", isLink: true },
      { value: "Cell 3-2", isLink: true },
      { value: "Cell 3-3", isLink: true },
      { value: "Cell 3-4", isLink: true },
      { value: "Cell 3-5", isLink: true },
    ],
    [
      { value: "Cell 4-1", isLink: true },
      { value: "Cell 4-2", isLink: true },
      { value: "Cell 4-3", isLink: true },
      { value: "Cell 4-4", isLink: true },
      { value: "Cell 4-5", isLink: true },
    ],
    [
      { value: "Cell 5-1", isLink: true },
      { value: "Cell 5-2", isLink: true },
      { value: "Cell 5-3", isLink: true },
      { value: "Cell 5-4", isLink: true },
      { value: "Cell 5-5", isLink: true },
    ],
  ];

  // 各列のwidth（例としてすべて160px）
  const columnWidths = ["160px", "160px", "160px", "160px", "160px"];

  return (
    <table
      className={css({
        width: "800px", // layout_B7DYS4
        borderCollapse: "collapse",
        background: "background.default", // panda token
        borderWidth: "border", // stroke_8O2DTT (1px)
        borderColor: "border.default", // panda token
        borderStyle: "solid",
      })}
    >
      <thead>
        <tr>
          {headerData.map((header, i) => (
            <th
              key={i}
              className={css({
                width: columnWidths[i],
                padding: "300", // 12px (layout_78CNCA)
                background: "background.secondary", // panda token
                borderBottom: "1px solid",
                borderLeft: "1px solid",
                borderColor: "border.default", // panda token
                textStyle: "body.base", // style_DQ6DZ0
                color: "text.default", // panda token
                fontWeight: 400,
                fontFamily: "Inter, sans-serif",
                fontSize: "16px",
                lineHeight: "1em",
                textAlign: "left",
              })}
            >
              {header.value}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {mockData.map((row, rowIdx) => (
          <tr key={rowIdx}>
            {row.map((cell, colIdx) => (
              <TableCell
                key={colIdx}
                value={cell.value}
                isLink={cell.isLink}
                width={columnWidths[colIdx]}
              />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
