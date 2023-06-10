import express from "express";
import KPI from "../models/KPI.js"; // importing the model of API

const router = express.Router();

router.get("/kpis", async (req, res) => { // this is the actual route
  try {
    const kpis = await KPI.find(); // grab the KPI data from the database using mongoose which is ODM(object document mapping). creates a model which helps to grab info from db
    res.status(200).json(kpis); //200 means success
  } catch (error) { // if there is an error
    res.status(404).json({ message: error.message });
  }
});

export default router;
