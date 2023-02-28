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
  const [flourWeight, setFlourWeight] = useState(0);
  const [saltWeight, setSaltWeight] = useState(0);
  const [fatWeight, setFatWeight] = useState(0);
  const [waterPercentage, setWaterPercentage] = useState(0);
  const [waterWeight, setWaterWeight] = useState(0);
  const [saltPercentage, setSaltPercentage] = useState(0);
  const [fatPercentage, setFatPercentage] = useState(0);
  const [doughWeight, setDoughWeight] = useState(0);
  const [preset, setPreset] = useState("");

  const handlePresetChange = (event) => {
    
    setPreset(event);

    if (event) {

      const recipe = recipes.filter((bread) => event === bread.breadType)[0];
      const newWaterWeight = parseFloat((recipe.liquid * flourWeight).toFixed(2));
      const newSaltWeight = parseFloat((recipe.salt * flourWeight).toFixed(2));
      const newFatWeight = parseFloat((recipe.fat * flourWeight).toFixed(2));
      
      setWaterPercentage(recipe.liquid * 100);
      setSaltPercentage(recipe.salt * 100);
      setFatPercentage(recipe.fat * 100);
      setWaterWeight(newWaterWeight);
      setSaltWeight(newSaltWeight);
      setFatWeight(newFatWeight);
      setDoughWeight(
        parseFloat(
          Number(flourWeight) + newWaterWeight + newSaltWeight + newFatWeight
        ).toFixed(2)
      );

    }
  };

  const handleFlourWeightChange = (event) => {
    
    if (event.target.value >= 0) {
      
      const newWaterWeight = parseFloat(
        ((event.target.value * waterPercentage) / 100).toFixed(2)
      );
      const newSaltWeight = parseFloat(
        ((event.target.value * saltPercentage) / 100).toFixed(2)
      );
      const newFatWeight = parseFloat(
        ((event.target.value * fatPercentage) / 100).toFixed(2)
      );
      
      setFlourWeight(event.target.value);
      setWaterWeight(newWaterWeight);
      setSaltWeight(newSaltWeight);
      setFatWeight(newFatWeight);
      setDoughWeight(
        (
          Number(event.target.value) +
          newWaterWeight +
          newSaltWeight +
          newFatWeight
        ).toFixed(2)
      );

    }
  };

  const handleWaterPercentageChange = (event) => {
    
    if (event.target.value >= 0) {
      
      const newWaterWeight = parseFloat(
        ((event.target.value * flourWeight) / 100).toFixed(2)
      );
      
      setWaterPercentage(Number(event.target.value));
      setWaterWeight(newWaterWeight);
      setDoughWeight(
        (Number(flourWeight) + newWaterWeight + saltWeight + fatWeight).toFixed(
          2
        )
      );
    
    }
  };

  const handleSaltPercentageChange = (event) => {
    
    if (event.target.value >= 0) {
    
      const newSaltWeight = parseFloat(
        ((event.target.value * flourWeight) / 100).toFixed(2)
      );
    
      setSaltPercentage(Number(event.target.value));
      setSaltWeight(newSaltWeight);
      setDoughWeight(
        (Number(flourWeight) + waterWeight + newSaltWeight + fatWeight).toFixed(
          2
        )
      );
    
    }
  };

  const handleFatPercentageChange = (event) => {
    
    if (event.target.value >= 0) {
    
      const newFatWeight = parseFloat(
        ((event.target.value * flourWeight) / 100).toFixed(2)
      );
    
      setFatPercentage(Number(event.target.value));
      setFatWeight(newFatWeight);
      setDoughWeight(
        (Number(flourWeight) + waterWeight + saltWeight + newFatWeight).toFixed(
          2
        )
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
            value={preset}
            onChange={(e) => handlePresetChange(e.target.value)}
          >
            <MenuItem key="None" value="">
              None
            </MenuItem>
            {recipes.map((recipe) => (
              <MenuItem key={recipe.breadType} value={recipe.breadType}>
                {recipe.breadType}
              </MenuItem>
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
