import { Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
})
export class CategoryComponent {
  selected: string = 'allCategory';
  constructor(private renderer: Renderer2) {}
  ngOnInit(): void {
    const firstItemBackground =
      document.getElementsByClassName('allCategoryLi')[0];
    const firstItemText = document.getElementsByClassName('allCategoryTxt')[0];
    this.renderer.setStyle(firstItemBackground, 'background', '#F1F6F9');
    this.renderer.setStyle(firstItemText, 'color', '#393053');
  }
  setSeleted(selected: string): void {
    if (selected === this.selected) {
      return;
    }
    const oldSelectedBackground: Element = document.getElementsByClassName(
      `${this.selected}Li`
    )[0];
    const oldSelectedText: Element = document.getElementsByClassName(
      `${this.selected}Txt`
    )[0];
    const newSelectedBackground: Element = document.getElementsByClassName(
      `${selected}Li`
    )[0];
    const newSelectedText: Element = document.getElementsByClassName(
      `${selected}Txt`
    )[0];
    this.renderer.setStyle(oldSelectedBackground, 'background', '#393053');
    this.renderer.setStyle(oldSelectedText, 'color', '#fff');
    this.renderer.setStyle(newSelectedBackground, 'background', '#F1F6F9');
    this.renderer.setStyle(newSelectedText, 'color', '#393053');
    this.selected = selected;
    return;
  }
}
