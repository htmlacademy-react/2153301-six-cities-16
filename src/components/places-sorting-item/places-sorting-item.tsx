interface PlacesSortingItemProps {
  sortingItem: string;
}

export default function PlacesSortingItem({sortingItem}: PlacesSortingItemProps): JSX.Element {
  return (
    <li className="places__option" tabIndex={0}>{sortingItem}</li>
  );
}
