import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  private readonly squareBracketReg = /\[([^\]]+)\]/g;
  private readonly curlyBracketReg = /\{([^\}]+)\}/g;
    
  public textInput = '';
  public highlightedText = '';

  changeTextControl(value: string) {
    let highlightedTextInput = value;

    // Find all square bracket matches.
    let squareBracketMatches = this.squareBracketReg.exec(value);
    while (squareBracketMatches !== null) {
      const matchText = squareBracketMatches[0];
      const matchValue = squareBracketMatches[1];

      highlightedTextInput = highlightedTextInput.replace(matchText, `<span class="square">&#91;${matchText}&#93;</span>`);
      highlightedTextInput = highlightedTextInput.replace(matchText, matchValue);

      squareBracketMatches = this.squareBracketReg.exec(value);
    }

    // Find all curly bracket matches.
    let curlyBracketMatches = this.curlyBracketReg.exec(value);
    while (curlyBracketMatches !== null) {
      const matchText = curlyBracketMatches[0];
      const matchValue = curlyBracketMatches[1];

      highlightedTextInput = highlightedTextInput.replace(matchText, `<span class="curly">&#123;${matchText}&#125;</span>`);
      highlightedTextInput = highlightedTextInput.replace(matchText, matchValue);

      curlyBracketMatches = this.curlyBracketReg.exec(value);
    }

    this.highlightedText = highlightedTextInput;
  }
}
