"use strict";

const express = require("express");
const port = process.env.PORT || 3000;

// Inizialitions

const app = express();

// Settings

app.set("port", port);

// middleware - admite los use [No admite img o archivos]

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes - Todo app

module.exports = app;
