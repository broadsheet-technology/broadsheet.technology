import { Component, h, Host } from "@stencil/core";

@Component({
  tag: "bst-print-press",
})
export class BSTPrintPress {
  private style(color) {
    return {
      width: "24px",
      height: "24px",
      display: "block",
      background: color,
      margin: "2px",
    };
  }
  render() {
    return (
      <Host style={{ textAlign: "center", width: "100%", display: "block" }}>
        <span class="c" style={this.style("#598597")} />
        <span class="y" style={this.style("#d1a230")} />
        <span class="m" style={this.style("#b5576b")} />
        <span class="k" style={this.style("#d6cdd5")} />
      </Host>
    );
  }
}
