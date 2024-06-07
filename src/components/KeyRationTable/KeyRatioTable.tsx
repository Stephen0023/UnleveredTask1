import React from "react";
import { motion } from "framer-motion";
import Loading from "../Loading/Loading";
import { useSectionInView } from "../../hooks/useSectionInView";
import { useFinancialData } from "../../hooks/useFinancialData";
import { useTheme } from "../../context/theme-context";
import "./KeyRationTable.css";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function KeyRatioTable() {
  const { ref } = useSectionInView("Table");
  const { data, loading, error } = useFinancialData();
  const { theme } = useTheme();

  if (loading || !data) {
    return <Loading />;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section ref={ref} id="table" className="ratio-table-container">
      <div className="ratio-title">Key Ratio</div>
      <Paper>
        <TableContainer>
          <Table
            aria-label="key ratios table"
            sx={{
              ...(theme === "dark" && {
                backgroundColor: "#1a202c",
                color: "white",
              }),
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Metric
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Value
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Metric
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Value
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Current Ratio
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.current_ratio}
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Debt to Equity Ratio
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.debt_to_equity_ratio}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  EPS
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.eps}
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Market Cap
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.market_ap}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  P/B Ratio
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.pb_ratio}
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  P/E Ratio
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.pe_ratio}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  PEG Ratio
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.peg_ratio}
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  P/S Ratio
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.ps_ratio}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  Shares Outstanding
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                >
                  {data.shares_outstanding}
                </TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                ></TableCell>
                <TableCell
                  sx={{
                    ...(theme === "dark" && {
                      color: "#f7fafc",
                    }),
                  }}
                ></TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </section>
  );
}
