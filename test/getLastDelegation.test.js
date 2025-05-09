import { expect } from "chai";
import { describe, it } from "mocha";
import { getLastDelegation } from "../src/getLastDelegation.js";

describe('Get the last delegation', () => {

    it('Should return a void array if the input is void', () => {
        const input = [];
        expect(getLastDelegation(input)).to.deep.equal([]);
    });

    it('Should return a void array if the input null or undefined', () => {
        const input = undefined;
        expect(getLastDelegation(input)).to.deep.equal([]);
    });    

    it('Should return an error if two speed equals', () => {
        const input = ["America 110 2", "Madagascar 110 2", "Chillie 50 3"];
        expect(() => getLastDelegation(input)).to.throw('There are two delegations that have egality');
    });

    it('Should return an error if we can find any speed', () => {
        const input = ["America 110"];
        expect(() => getLastDelegation(input)).to.throw('No speed are in the input');
    });

    it('Should return an error if we can find any distance', () => {
        const input = ["America 110"];
        expect(() => getLastDelegation(input)).to.throw("No distance are in the input");
    });
})