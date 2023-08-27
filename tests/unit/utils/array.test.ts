import { getRandomItemFromArray } from "../../../src/utils/array.ts";
import { assertEquals } from "https://deno.land/std@0.199.0/assert/assert_equals.ts";

// getRandomItemFromArray() tests
Deno.test("getRandomItemFromArray() should return random item from array", () => {
    const arr = [1]
    const result = getRandomItemFromArray(arr)
    assertEquals(result, 1)
  });

Deno.test("getRandomItemFromArray() should return null if array is empty", () => {
    const arr = new Array<number>;
    const result = getRandomItemFromArray(arr);
    assertEquals(result, null)
  });