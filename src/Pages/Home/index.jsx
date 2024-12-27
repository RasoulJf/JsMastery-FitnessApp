import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../../Components/HeroBanner";
import SearchExercises from "../../Components/SearchExercises";
import Exercises from "../../Components/Exercises";
export default function Home() {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState("all");

  return (
    <Box>
      <HeroBanner />
      <SearchExercises
        setExercises={setExercises}
        setBodyPart={setBodyPart}
        bodyPart={bodyPart}
      />
      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}
