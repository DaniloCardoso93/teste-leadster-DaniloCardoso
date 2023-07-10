interface IItemList {
  id: number;
  image: string;
  comment: string;
  description: string;
  video: string;
}

interface IItemListProps {
  items: IItemList[];
}
