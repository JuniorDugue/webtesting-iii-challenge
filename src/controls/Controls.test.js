// Test away!
import React from "react";
import * as rtl from "react-testing-library";
import "jest-dom/extend-expect";
// import "@testing-library/jest-dom/extend-expect";
import Controls from "./Controls";

afterEach(rtl.cleanup);

describe('Controls', () => {
  it('should be defined', () => {
    expect(Controls).toBeDefined();
  });
  //   expect(Controls).toMatchSnapshot();
  // });
 });