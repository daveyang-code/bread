import React, { useState } from "react";
import logo from "./breadcalc.png";
import { recipes } from "./recipes";
import {
  TextField,
  Select,
  MenuItem,
  Typography,
  Grid,
  Box,
  Stack,
  Container,
} from "@mui/material";

function App() {
  const [flourWeight, setFlourWeight] = useState("");
  const [saltWeight, setSaltWeight] = useState("");
  const [fatWeight, setFatWeight] = useState("");
  const [waterPercentage, setWaterPercentage] = useState("");
  const [waterWeight, setWaterWeight] = useState("");
  const [saltPercentage, setSaltPercentage] = useState("");
  const [fatPercentage, setFatPercentage] = useState("");
  const [doughWeight, setDoughWeight] = useState("", [
    flourWeight,
    waterWeight,
    waterPercentage,
    saltWeight,
    saltPercentage,
    fatWeight,
    fatPercentage,
  ]);

  const handlePresetChange = (event) => {
    const recipe = recipes.filter((bread) => event === bread.breadType)[0];
    setWaterPercentage(recipe.liquid * 100);
    setSaltPercentage(recipe.salt * 100);
    setFatPercentage(recipe.fat * 100);
    setWaterWeight(recipe.liquid * flourWeight);
    setSaltWeight(recipe.salt * flourWeight);
    setFatWeight(recipe.fat * flourWeight);
    setDoughWeight(
      (
        Number(flourWeight) +
        Number(waterWeight) +
        Number(saltWeight) +
        Number(fatWeight)
      ).toFixed(2)
    );
  };

  const handleFlourWeightChange = (event) => {
    if (event.target.value >= 0) {
      setFlourWeight(event.target.value);
      setWaterWeight((waterPercentage / 100) * flourWeight);
      setSaltWeight((saltPercentage / 100) * flourWeight);
      setFatWeight((fatPercentage / 100) * flourWeight);
      setDoughWeight(
        (
          Number(flourWeight) +
          Number(waterWeight) +
          Number(saltWeight) +
          Number(fatWeight)
        ).toFixed(2)
      );
    }
  };

  const handleWaterPercentageChange = (event) => {
    if (event.target.value >= 0) {
      setWaterPercentage(event.target.value);
      setWaterWeight((event.target.value / 100) * flourWeight);
      setDoughWeight(
        (
          Number(flourWeight) +
          Number(waterWeight) +
          Number(saltWeight) +
          Number(fatWeight)
        ).toFixed(2)
      );
    }
  };

  const handleSaltPercentageChange = (event) => {
    if (event.target.value >= 0) {
      setSaltPercentage(event.target.value);
      setSaltWeight((event.target.value / 100) * flourWeight);
      setDoughWeight(
        (
          Number(flourWeight) +
          Number(waterWeight) +
          Number(saltWeight) +
          Number(fatWeight)
        ).toFixed(2)
      );
    }
  };

  const handleFatPercentageChange = (event) => {
    if (event.target.value >= 0) {
      setFatPercentage(event.target.value);
      setFatWeight((event.target.value / 100) * flourWeight);
      setDoughWeight(
        (
          Number(flourWeight) +
          Number(waterWeight) +
          Number(saltWeight) +
          Number(fatWeight)
        ).toFixed(2)
      );
    }
  };

  return (
    <div className="App">
      <Container maxWidth="sm">
        <Box textAlign={"center"} sx={{ mt: 5 }}>
          <img src={logo} width="100px" alt="logo" />
          <Typography fontFamily={"Homemade Apple"} variant="h5" sx={{ mb: 5 }}>
            Bread Calculator
          </Typography>
        </Box>

        <Stack
          direction={"row"}
          spacing={2}
          sx={{ mb: 5 }}
          alignItems={"center"}
          justifyContent={"flex-end"}
        >
          <Typography fontFamily={"Shadows Into Light"} variant="h5">
            Presets
          </Typography>
          <Select
            sx={{ minWidth: 170 }}
            size="small"
            onChange={(e) => handlePresetChange(e.target.value)}
          >
            <MenuItem value="">None</MenuItem>
            {recipes.map((recipe) => (
              <MenuItem value={recipe.breadType}>{recipe.breadType}</MenuItem>
            ))}
          </Select>
        </Stack>

        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Flour (g)"
              variant="outlined"
              type="number"
              fullWidth
              value={flourWeight}
              onChange={handleFlourWeightChange}
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Water (g)"
              variant="outlined"
              type="number"
              value={waterWeight}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Water (%)"
              variant="outlined"
              type="number"
              value={waterPercentage}
              onChange={handleWaterPercentageChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Salt (g)"
              variant="outlined"
              type="number"
              value={saltWeight}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Salt (%)"
              variant="outlined"
              type="number"
              value={saltPercentage}
              onChange={handleSaltPercentageChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={8}>
            <TextField
              label="Fat (g)"
              variant="outlined"
              type="number"
              value={fatWeight}
              fullWidth
            />
          </Grid>
          <Grid item xs={4}>
            <TextField
              label="Fat (%)"
              variant="outlined"
              type="number"
              value={fatPercentage}
              onChange={handleFatPercentageChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Dough Weight (g)"
              variant="outlined"
              fullWidth
              value={doughWeight}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
