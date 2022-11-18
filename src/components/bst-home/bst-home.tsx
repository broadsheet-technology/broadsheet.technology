import { Component, h, Prop } from "@stencil/core";
import { Theme, Template } from "@webpress/core";

@Component({
  tag: "bst-home",
  styleUrl: "bst-home.scss",
})
export class BstHome {
  @Prop() theme: Theme;
  @Prop() query: Template.Query;

  render() {
    if (!this.query) {
      return;
    }
    return <bst-header />;
  }
}
