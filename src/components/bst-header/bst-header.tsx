import { Component, h } from "@stencil/core";

@Component({
  tag: "bst-header",
  styleUrl: "bst-header.scss",
})
export class BSTHeader {
  render() {
    return [
      <h1 slot="left">
        <a href="/">
          <b>broadsheet technology</b>
        </a>
      </h1>,
      <p>A (tiny) unincorporated firm focused on editorial software</p>,
      <bst-print-press />,
    ];
  }
}
