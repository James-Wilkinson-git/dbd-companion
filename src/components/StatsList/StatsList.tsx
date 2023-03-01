import React, { FC } from "react";
import { ListGroup } from "react-bootstrap";

export const StatsList: FC<{
  statsList: StatsEntity[];
  statsListLookup?: StatsLookup;
}> = ({ statsList, statsListLookup }) => {
  return (
    <ListGroup variant="flush">
      {statsList?.map((stat, i) => {
        return (
          <ListGroup.Item key={i}>
            {statsListLookup ? (
              <>
                {statsListLookup[stat.name]} : {stat.value}
              </>
            ) : (
              <>
                {stat.name} : {stat.value}
              </>
            )}
          </ListGroup.Item>
        );
      })}
    </ListGroup>
  );
};
