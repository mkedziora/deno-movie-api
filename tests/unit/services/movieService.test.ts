import { getMovies, getRandomMovie } from "../../../src/services/movie.ts";
import { assert, assertExists } from "https://deno.land/std@0.199.0/assert/mod.ts";
import { getRandomItemFromArray } from "../../../src/utils/array.ts";



// getRandomMovie() tests
Deno.test("getRandomMovie() should return random movie from file", async () => {
  const result = await getRandomMovie();
  assertExists(result);
});


// getMovies() tests
Deno.test("getMovies() should return one random movie if only duration is present", async () => {
    const result = await getMovies([], 100);
    assertExists(result);
    assert(result.length === 1);
    assert(Number(result[0].runtime) > 90 );
    assert(Number(result[0].runtime) < 110 );
})

Deno.test("getMovies() if only genre is presesnt should return an array of movies with a given genre",async () => {
    const result = await getMovies(["Comedy"], 0);
    assertExists(result);
    assert(result.length > 0);
    const randomMovie = getRandomItemFromArray(result);
    assert(randomMovie?.genres.includes("Comedy"))
})

Deno.test("getMovies() should return an array of movies with a given genre and respected duration",async () => {
    const result = await getMovies(["Comedy"], 100);
    assertExists(result);
    assert(result.length > 0);
    const randomMovie = getRandomItemFromArray(result);
    assert(randomMovie?.genres.includes("Comedy"));
    assert(Number(randomMovie?.runtime) > 90 && Number(randomMovie?.runtime) < 110);

})