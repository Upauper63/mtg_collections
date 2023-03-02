import React from "react";
import Grid from "@mui/material/Grid";
import Data from "/data/neo.json";
import Button from "@mui/material/Button";
import Link from 'next/link'

export async function getStaticProps() {
  const cards = Data;

  return {
    props: {
      cards,
    },
  };
}


const one = ({ cards }) => {
  return (
    <>
      <Link href='/'><Button variant="contained">TOP</Button></Link>
      <Grid container spacing={0.5} style={{marginTop: 5}}>
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

export default one;
