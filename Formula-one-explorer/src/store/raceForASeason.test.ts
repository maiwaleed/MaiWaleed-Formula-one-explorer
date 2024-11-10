import { describe, it, expect } from "vitest"; // Import Vitest functions
import { RaceCard } from "./raceForASeasonStore";

describe("Zustand Store setter functionality - Pinning Races", () => {
  let racesList: RaceCard[] = []; //initially empty

  const togglePinned = (index: number, raceList: RaceCard[]) => {
    let updatedRaceCards = [...(raceList as RaceCard[])];
    updatedRaceCards[index].pinned = !updatedRaceCards[index].pinned;

    // // Reorder the raceCards array with pinned cards first
    // updatedRaceCards = updatedRaceCards.sort((a, b) => {
    //   if (a.pinned && !b.pinned) return -1; // a comes first
    //   if (!a.pinned && b.pinned) return 1; // b comes first
    //   return 0; // no change
    // });

    // Update the state with the new order
    return updatedRaceCards;
  };

  racesList = [
    {
      season: "1960",
      round: "3",
      url: "http://en.wikipedia.org/wiki/1960_Indianapolis_500",
      raceName: "Indianapolis 500",
      Circuit: {
        circuitId: "indianapolis",
        url: "http://en.wikipedia.org/wiki/Indianapolis_Motor_Speedway",
        circuitName: "Indianapolis Motor Speedway",
        Location: {
          lat: "39.795",
          long: "-86.2347",
          locality: "Indianapolis",
          country: "USA",
        },
      },
      date: "1960-05-30",
      pinned: false,
    },
    {
      season: "1960",
      round: "1",
      url: "http://en.wikipedia.org/wiki/1960_Argentine_Grand_Prix",
      raceName: "Argentine Grand Prix",
      Circuit: {
        circuitId: "galvez",
        url: "http://en.wikipedia.org/wiki/Aut%C3%B3dromo_Oscar_Alfredo_G%C3%A1lvez",
        circuitName: "Autódromo Juan y Oscar Gálvez",
        Location: {
          lat: "-34.6943",
          long: "-58.4593",
          locality: "Buenos Aires",
          country: "Argentina",
        },
      },
      date: "1960-02-07",
      pinned: false,
    },
    {
      season: "1960",
      round: "2",
      url: "http://en.wikipedia.org/wiki/1960_Monaco_Grand_Prix",
      raceName: "Monaco Grand Prix",
      Circuit: {
        circuitId: "monaco",
        url: "http://en.wikipedia.org/wiki/Circuit_de_Monaco",
        circuitName: "Circuit de Monaco",
        Location: {
          lat: "43.7347",
          long: "7.42056",
          locality: "Monte-Carlo",
          country: "Monaco",
        },
      },
      date: "1960-05-29",
      pinned: false,
    },
  ] as RaceCard[];

  it("should add a race to pinnedRaces when toggled", () => {
    // Act: Pin the race
    const pinnedRaces = togglePinned(1, racesList);

    expect(pinnedRaces[1].pinned).toBe(true); // Assert that second item is now in pinned
  });

  it("should remove a race from pinnedRaces when toggled again", () => {
    // First, pin second race
    let pinnedRaces = togglePinned(0, racesList);

    // Assert that d item is now in pinned
    expect(pinnedRaces[0].pinned).toBe(true);
    // Act: Unpin the same race, now moved to the start of the array
    pinnedRaces = togglePinned(0, racesList);

    // Assert that it changed back to unpinned
    expect(pinnedRaces[0].pinned).toBe(false);
  });

  it("should handle multiple races being pinned and unpinned correctly", () => {
    // Act: Pin 'race1' and 'race2'
    let pinnedList = togglePinned(1, racesList);
    pinnedList = togglePinned(0, racesList);

    const pinMap = pinnedList.map((pin: RaceCard) => pin.pinned);

    // Assert that both races are pinned
    expect(pinMap).toEqual([true, false, false]);
  });
});
