import React from "react";
import Grid from "@mui/material/Grid";
import Data from "/data/one.json";
import CheckIcon from "@mui/icons-material/Check";

export async function getStaticProps() {
  const cards = Data;

  return {
    props: {
      cards,
    },
  };
}

const isCollectedImgStyle = {
  opacity: "0.5",
};

const one = ({ cards }) => {
  return (
    <>
      <Grid container spacing={0.5}>
        {cards.map((card, idx) => (
          <Grid key={idx} item xs={3} md={2}>
            <div style={{ position: "relative" }}>
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

export default one;
