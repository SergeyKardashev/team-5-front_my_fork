import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { useFormikContext } from 'formik';
import { getIsNewAmbassadorAdding } from '../services/selectors/ambassadorSelector';
import './DropdownField.scss';

function DropdownField({
  options, labelText, htmlFor,
}) {
  const { errors, touched } = useFormikContext();
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(''); // Track selected option
  const dropdownError = useSelector((state) => state.dropdown.errorDropdown);
  const errorMessage = useSelector((state) => state.dropdown.errorMessageDropdown);
  // const isAmbassadorDataEditing = useSelector(getIsAmbassadorDataEditing);
  const isNewAmbassadorAdding = useSelector(getIsNewAmbassadorAdding);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isNewAmbassadorAdding) {
      switch (htmlFor) {
        case 'studyProgramm':
          setSelectedOption('UI/UX дизайнер');
          break;
        case 'country':
          setSelectedOption('Россия');
          break;
        case 'city':
          setSelectedOption('Санкт-Петербург');
          break;
        case 'clothingSize':
          setSelectedOption('M');
          break;
        default:
          break;
      }
    }
  }, [dispatch, htmlFor, isNewAmbassadorAdding]);

  const handleSelect = (htmlFor, option) => {
    switch (htmlFor) {
      case 'studyProgramm':
        setSelectedOption(option);
        break;
      case 'country':
        setSelectedOption(option);
        break;
      case 'city':
        setSelectedOption(option);
        break;
      case 'clothingSize':
        setSelectedOption(option);
        break;
      default:
        break;
    }
    setIsOpen(false);
    setSelectedOption(option);
    console.log('handleSelect', htmlFor, option);
  };

  return (
    <div className="select">
      <label htmlFor={htmlFor} className="select__label">{labelText}</label>
      <div className="select__wrapper">
        <button
          className={`select__button ${errors[htmlFor] && touched[htmlFor] && 'select__button_error'} ${!selectedOption ? 'select__button_empty' : ''}`}
          type="button"
          id={htmlFor}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        >
          {selectedOption || 'Выберете из списка'}
        </button>
        <div className="select__error-container">
          {dropdownError && (
            <span className="select__error">
              {errorMessage}
            </span>
          )}
        </div>
      </div>
      {isOpen && (
        <div className="select__menu">
          {options.map((option) => (
            <button
              key={option}
              className="select__option"
              type="button"
              onClick={() => handleSelect(htmlFor, option)}
            >
              {option}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

DropdownField.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  labelText: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
};

export default DropdownField;
