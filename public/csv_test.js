var expect = chai.expect;

  describe("Probando funcion calculate", function() {
    var sandbox;

    beforeEach(function() {
      sandbox = sinon.sandbox.create();
      sandbox.stub(window.console, "log");
      sandbox.stub(window.console, "error");
      });

      afterEach(function() {
        sandbox.restore();
      });

    it("Funcionamiento del CSV", function() {
      var mensaje = 'producto'
      var resultado = calculate(mensaje);
      expect(resultado[0].value[0]).to.equal('producto');
    });
  });
