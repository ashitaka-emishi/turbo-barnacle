// MIT License
// https://github.com/ashitaka-emishi/turbo-barnacle/blob/master/LICENSE
//
// Copyright (c) 2020 Emishi Ashitaka

/* global test, expect */
import React from "react";
import renderer from "react-test-renderer";

import App from "../src/app";

test("App renders", () => {
  const className = "app-classname";
  const component = renderer.create(<App className={className} />);
  const tree = component.toJSON();

  expect(tree.children.length).toBe(2);
  expect(tree.props.className).toBe(className);
  expect(tree.type).toBe("div");
});
