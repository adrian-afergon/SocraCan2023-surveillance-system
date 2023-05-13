import { describe, it, expect } from "vitest"
import { myFunction } from "./main.js"

describe("Default test", () => {
  it("should not work", () => {
    const result = myFunction()

    expect(result).toBe(true)
  })
})
