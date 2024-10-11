module.exports = {
  // Outras configurações do Cypress
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        deleteFileIfExists(filePath) {
          const fs = require('fs');

          try {
            // Verifica se o arquivo existe antes de tentar deletar
            fs.accessSync(filePath, fs.constants.F_OK);
            fs.unlinkSync(filePath);
            console.log(`Arquivo deletado com sucesso: ${filePath}`);
          } catch (error) {
            if (error.code === 'ENOENT') {
              console.log(`Arquivo ${filePath} não encontrado. Ignorando a deleção.`);
            } else {
              console.error(`Erro ao deletar arquivo: ${filePath}`, error);
              // Outros tratamentos de erro
            }
          }

          return null;
        },
      });

      return config;
    },
    downloadsFolder: "cypress/downloads",
  }
};