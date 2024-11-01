const { defineConfig } = require("cypress");
const mochawesome = require("cypress-mochawesome-reporter/plugin");
const timestamp = new Date()
  .toLocaleString("pt-BR")
  .replace(/\//g, "")
  .replace(/, /g, "-")
  .replace(/:/g, "");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      mochawesome(on);

      on("task", {
        deleteFileIfExists(filePath) {
          const fs = require("fs");

          try {
            fs.accessSync(filePath, fs.constants.F_OK);
            fs.unlinkSync(filePath);
            console.log(`Arquivo deletado com sucesso: ${filePath}`);
          } catch (error) {
            if (error.code === "ENOENT") {
              console.log(
                `Arquivo ${filePath} não encontrado. Ignorando a deleção.`,
              );
            } else {
              console.error(`Erro ao deletar arquivo: ${filePath}`, error);
            }
          }

          return null;
        },
      });

      config.reporter = "../node_modules/cypress-mochawesome-reporter";
      config.reporterOptions = {
        overwrite: true,
        html: true,
        json: false,
        reportDir: "cypress/reports",
        reportFilename: `report-${timestamp}`,
      };

      return config;
    },
    downloadsFolder: "cypress/downloads",
    screenshotsFolder: "cypress/reports/screenshots",
    screenshotOnRunFailure: true,
  },
});
