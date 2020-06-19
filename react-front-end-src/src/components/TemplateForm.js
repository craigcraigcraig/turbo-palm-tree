import React from "react";

export class TemplateForm extends React.Component {
  state = {
    name: "Paste template here...",
    cfnlintResponse: "",
  };

  handleChange = (event) => {
    console.log(event.target.value);
    this.setState({ name: event.target.value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const requestOptions = {
      method: "POST",
      //headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ template: this.state.name }),
    };

    const url = "http://127.0.0.1/";
    const response = await fetch(url, requestOptions);
    const data = await response.json();
    console.log(data.message);
    this.setState({ cfnlintResponse: data.message });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div class="row">
            <div class="column">
              1
              <textarea
                class="text"
                value={this.state.name}
                onChange={this.handleChange}
              />
            </div>
            <div class="column">
              2
              <textarea
                class="text"
                name="response"
                value={this.state.cfnlintResponse}
              />
            </div>
            <div class="column">
              3<button type="submit">submit</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
