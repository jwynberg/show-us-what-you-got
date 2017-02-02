import BossHog from "./bosshog";
import sinon from "sinon";
import { expect } from "chai";

describe("BossHog", () => {
    
    let bosshog;

    beforeEach(() => {
        bosshog = new BossHog();
    });

    describe("BossHog Translations", () => {

        it("should return BossHog if divisible by both 3 and 5", () => {
            //Arrange
            let testNumber = 30;
            let output;

            //Act
            output = bosshog.translate(testNumber);

            //Assert
            expect(output).to.equal("BossHog");
        });

        it("should return Hog if divisible by 5", () => {
            //Arrange
            let testNumber = 20;
            let output;

            //Act
            output = bosshog.translate(testNumber);

            //Assert
            expect(output).to.equal("Hog");
        });

        it("should return Boss if divisible by 3", () => {
            //Arrange
            let testNumber = 9;
            let output;

            //Act
            output = bosshog.translate(testNumber);

            //Assert
            expect(output).to.equal("Boss");
        });

        it("should return the input number if none of the previous conditions are met", () => {
            //Arrange
            let testNumber = 7;
            let output;

            //Act
            output = bosshog.translate(testNumber);

            //Assert
            expect(output).to.equal(7);
        });

    });

    describe("BossHog Run", () => {

        let consoleLogSpy;

        before(() => {
            consoleLogSpy = new sinon.spy(console, "log");
        });

        after(() => {
            consoleLogSpy.restore();
        });

        it("should execute BossHog translations up to the number requested, and log them out to the console", () => {
            //Arrange
            let testNumber = 5;

            //Act
            bosshog.run(testNumber);

            //Assert
            expect(consoleLogSpy.callCount).to.equal(testNumber);
        });

    });

});