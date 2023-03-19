export enum Color {
  BLUE,
  RED,
  BLACK,
  GREEN,
  YELLOW,
}

export interface Hero {
  name: string;
  canFly: boolean;
  color: Color | Color[];
}
