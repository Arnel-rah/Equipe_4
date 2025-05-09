import { expect } from "chai";
import { describe,it } from "mocha";
import { countMaxBobsleigh } from "../ex01.js";
describe("count the number of bobsleighs can park in the Central Park ",()=>{
   
    it("should return error if N or map is not defind or void ",()=>{
        expect(countMaxBobsleigh(["...X","x...",".....",".x...",".xx.."])).to.throw("N is not defind")
        expect(countMaxBobsleigh(5)).to.throw("Map is not defind")
        expect(countMaxBobsleigh(5,[])).to.throw("Map is void")
    })
    it("should return 4 if N equal 6 and map is ['....xx','..xxxx','..x...','x.....','x....x','.....x']",()=>{
        expect(countMaxBobsleigh(6,["....xx","..xxxx","..x...","x.....","x....x",".....x"])).to.be.equal(4)
    })
    it("should return error if N is not equal to map.length",()=>{
        expect(countMaxBobsleigh(5,["....X","....."])).to.throw("The park have to be a square")
    })
    it("should return error if N is not equal to the length of the string even if it's equal to the map.length",()=>{
        expect(countMaxBobsleigh(5,["...X","x...",".....",".x...",".xx.."])).to.throw("The park have to be a square")
    }) 
})