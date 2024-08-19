const swaggerJSDoc = require("swagger-jsdoc");
const fs = require("fs");
const yaml = require("js-yaml");
const path = require("path");

const options = {
  swaggerDefinition: {
    openapi: "3.0.1",
    info: {
      title: "HSNM Payment GW",
      version: "1.0.0",
      description: "HSNM GW",
      license: { name: "WIFI HSNM", url: "https://hsnm.ttcl.co.tz" },
      contact: {
        name: "TTCL - Developers",
        url: "https://hsnm.ttcl.co.tz",
        email: "boniphace.mkindi@ttcl.co.tz",
      },
    },
    servers: [
      { url: "http://10.0.7.20:5010/wifi/v1", },
      { url: "http://localhost:5010/wifi/v1",  },
            ],
  },
  apis: [path.join(__dirname, "../def/**/*.js")], // adjust the path as needed
};

const swaggerSpec = swaggerJSDoc(options);
const swaggerJSONPath = path.join(__dirname, "swagger.json");
const swaggerYAMLPath = path.join(__dirname, "swagger.yaml");

try {
  fs.writeFileSync(swaggerJSONPath, JSON.stringify(swaggerSpec, null, 2));
  console.log("Swagger JSON file has been generated.");
  fs.writeFileSync(swaggerYAMLPath, yaml.dump(swaggerSpec, { indent: 2 }));
  console.log("Swagger YAML file has been generated.");
} catch (error) {
  console.error("Error writing Swagger files:", error);
}
