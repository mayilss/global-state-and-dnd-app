export type Smiley = {
  id: string;
  icon: (selected: string) => JSX.Element;
  label: string;
};
