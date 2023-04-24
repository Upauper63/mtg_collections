import styles from "../styles/Home.module.css";
import Button from "@mui/material/Button";
import Link from "next/link";

export default function Home() {
  const yearSets = {
      2023: ["ONE", "MOM"],
      2022: ["NEO", "SNC", "DMU", "BRO"],
      2021: ["KHM", "STX", "AFR", "MID", "VOW"],
      2020: ["THB", "IKO", "M21", "ZNR"],
      2019: ["RNA", "WAR", "M20", "ELD"],
      2018: ["RIX", "DOM", "M19", "GRN"],
    };
  return (
    <>
      {Object.keys(yearSets).map((year) => (
        <div style={{marginTop: 10}} key={year}>
          <h1>{year}</h1>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-around",
            }}
          >
            {yearSets[year].map((set) => (
              <Link href={"/sets/" + set.toLowerCase()} key={set}>
                <Button variant="contained">{set}</Button>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}
