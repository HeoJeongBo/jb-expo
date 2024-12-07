export type NormalNavigatorParams = {
  test1: {
    id: number;
  };
  test2: {
    title: string;
  };
};

export type BottomNavigatorParams = {
  index: undefined;
  explore: undefined;
};

export type AllNavigatorParams = BottomNavigatorParams & NormalNavigatorParams;
