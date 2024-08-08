import { faker } from "@faker-js/faker";
class Pagamento {
	irParaOPagamento() {
		cy.get('a[href="/payment"]').click();
	}
	preencherDadosERealizarPagamento() {
		cy.get('[data-qa="name-on-card"]').type(faker.person.fullName());
		cy.get('[data-qa="card-number"]').type(faker.finance.creditCardNumber());
		cy.get('[data-qa="cvc"]').type(faker.finance.creditCardCVV());
		cy.get('[data-qa="expiry-month"]').type(faker.number.int({ min: 1, max: 12 }));
		cy.get('[data-qa="expiry-year"]').type(faker.number.int({ min: 2050, max: 2100 }));
		cy.get('[data-qa="pay-button"]').click();
	}
	validarPagementoConcluidoComSucesso() {
		cy.get('[data-qa="order-placed"]').should("be.visible");
		cy.url().should("contain", "payment_done");
	}

	invoiceDownload() {
		cy.get(".btn.btn-default.check_out").should("be.visible").click();
	}

	validarDownloadInvoiceComSucesso(downloadsFolder, fileName) {
		cy.readFile(`${downloadsFolder}/${fileName}`, { timeout: 15000 }) // Espere o download
			.should("exist"); // Verifique se o arquivo existe
	}
}

export default new Pagamento();
