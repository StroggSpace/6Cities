import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setSorting } from '../../store/action';
import { useSelector } from 'react-redux';
import { getSorting } from '../../store/selectors';

export const SortingOptions = () => {
  const activeOption = useSelector(getSorting);
  const [isOpened, setIsOpened] = useState(false);
  const dispatch = useDispatch();
  const wrapperRef = useRef<HTMLFormElement | null>(null);

  type Options = {
    [key: string]: string;
  };

  const options: Options = {
    POPULAR: 'Popular',
    LOW_TO_HIGH: 'Price: low to high',
    HIGH_TO_LOW: 'Price: high to low',
    TOP_RATED_FIRST: 'Top rated first',
  };

  const handleOptionClick = (key: string) => {
    dispatch(setSorting(key));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpened(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [wrapperRef]);

  return (
    <form
      className="places__sorting"
      action="#"
      method="get"
      onClick={() => setIsOpened(!isOpened)}
      ref={wrapperRef}
    >
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {options[activeOption]}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isOpened ? 'places__options--opened' : ''
        }`}
      >
        {Object.entries(options).map(([sortType, option], index) => (
          <li
            className={`places__option ${
              sortType === activeOption ? 'places__option--active' : ''
            }`}
            tabIndex={index}
            key={option}
            onClick={() => handleOptionClick(sortType)}
          >
            {option}
          </li>
        ))}
      </ul>
    </form>
  );
};
