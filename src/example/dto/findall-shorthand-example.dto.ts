export class FindAllShorthandExampleDto {
  constructor(public items: FindAllShorthandExampleItemDto[]) {}
}

export class FindAllShorthandExampleItemDto {
  name: string;
}
