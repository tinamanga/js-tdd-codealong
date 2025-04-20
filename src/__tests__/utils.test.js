import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 1984;
    const expectedAge = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });

  it("returns the current year for a person born in year 0", () => {
    // Arrange
    const currentYear = new Date().getFullYear();
    const birthYear = 0;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(currentYear);
  });
});
