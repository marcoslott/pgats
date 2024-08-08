class TestCases {
	validarSeEstaNaTelaDeTestCases() {
		cy.contains(".title", "Test Cases").should("be.visible");
	}
}

export default new TestCases();
