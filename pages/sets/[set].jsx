import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Link from "next/link";

export const getStaticPaths = async () => {
  // const yearSets = {
  //   2023: ["ONE"],
  //   2022: ["NEO", "SNC", "DMU", "BRO"],
  //   2021: ["KHM", "STX", "AFR", "MID", "VOW"],
  //   2020: ["THB", "IKO", "M21", "ZNR"],
  //   2019: ["RNA", "WAR", "M20", "ELD"],
  //   2018: ["RIX", "DOM", "M19", "GRN"],
  // };
  // const pathParams = Object.values(yearSets).flat().map((set) => ({params: {set: set}}));
  return {
    paths
    // : pathParams
    : [
      { params: { set: "one" }},
      { params: { set: "neo" }},
      { params: { set: "snc" }},
      { params: { set: "dmu" }},
      { params: { set: "bro" }},
      { params: { set: "khm" }},
      { params: { set: "stx" }},
      { params: { set: "afr" }},
      { params: { set: "mid" }},
      { params: { set: "vow" }},
      { params: { set: "thb" }},
      { params: { set: "iko" }},
      { params: { set: "m21" }},
      { params: { set: "znr" }},
      { params: { set: "rna" }},
      { params: { set: "war" }},
      { params: { set: "m20" }},
      { params: { set: "eld" }},
      { params: { set: "rix" }},
      { params: { set: "dom" }},
      { params: { set: "m19" }},
      { params: { set: "grn" }},
    ]
    ,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const { default: cards } = await import(
    "/data/" + context.params.set + ".json",
    { assert: { type: "json" } }
  );
  return {
    props: {
      cards,
    },
  };
};

const set = ({ cards }) => {
  return (
    <>
      <Link href="/">
        <Button variant="contained">TOP</Button>
      </Link>
      <Grid container spacing={0.5} style={{ marginTop: 5 }}>
        {cards.map((card, idx) => (
          <Grid key={idx} item xs={3} md={2}>
            <div>
              <img
                width="100%"
                src={card.image_uris}
                style={card.is_collected ? { opacity: "0.3" } : {}}
              />
            </div>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default set;
