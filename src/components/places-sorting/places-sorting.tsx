import {sortingItems} from '@constants';
import {spaceToUnderscore} from '@utils/utils';
import PlacesSortingItem from "@components/places-sorting-item";

function PlacesSorting(): JSX.Element {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
                  Popular
        <svg className="places__sorting-arrow" width="7" height="4">
          <use href="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {sortingItems.map((item) => <PlacesSortingItem sortingItem={item} key={spaceToUnderscore(item)}/>)}
      </ul>
    </form>
  );
}

export default PlacesSorting;

