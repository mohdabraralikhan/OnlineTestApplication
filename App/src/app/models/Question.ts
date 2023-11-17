export class Question
{
  constructor(
    public ID:number,
    public QUESTION: string,
    public A: string,
    public B: string,
    public C: string,
    public D: string,
    public E: string,
    public selectedOption: 'A' | 'B' | 'C' | 'D' | 'E' | undefined
  ) { }

  setSelectedOption(option: 'A' | 'B' | 'C' | 'D' | 'E'|undefined) {
    this.selectedOption = option;
  }

}
