var expect = chai.expect;

  describe("Probando funcion calculate", function() {
    it("Funcionamiento del CSV", function() {
      var mensaje = 'producto'
      var resultado = calculate(mensaje);
      expect(resultado[0].value[0]).to.equal('producto');
    });
  });
