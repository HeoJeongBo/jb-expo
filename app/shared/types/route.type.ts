export type BottomScreenParams = {
  Home: undefined;
  Home2: undefined;
};

export type NormalScreenParams = {
  test1: {
    id: number;
  };
  test2: {
    title: string;
  };
};

export type AllScreenParams = BottomScreenParams & NormalScreenParams;
