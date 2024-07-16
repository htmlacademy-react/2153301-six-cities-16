export default function PlacesSortingItem ({sortingItem}: string) : JSX.Element {
  return (
    <li className="places__option" tabIndex="0">{sortingItem}</li>
  );
}
