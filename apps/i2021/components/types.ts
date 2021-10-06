export type dataProps = {
  location: string;
  title: string;
  type: string;
  date: Array<string>;
  img: {
    slug: string;
    width: number;
    height: number;
  };
  vs?: string;
  extended?: string;
  video?: string;
};

export type blockProps = dataProps & {
  playVideo?: (a: string) => void;
};
