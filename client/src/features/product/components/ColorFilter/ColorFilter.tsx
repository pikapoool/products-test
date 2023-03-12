import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import { useFilterByColor } from '../../hooks/useFilterByColor';
import { Styled } from './styled';

const checkboxes = ['Black', 'Red', 'White', 'Blue', 'Gray', 'Brown'];

export const ColorFilter = () => {
  const { filterBy, colorChange } = useFilterByColor();

  const handleChange = (filterType: string) => {
    colorChange(filterType);
  };

  return (
    <fieldset>
      <legend>Color:</legend>
      <FormGroup>
        {checkboxes.map((el, i) => (
          <FormControlLabel
            key={i}
            control={<Styled.Checkbox />}
            checked={!!filterBy && filterBy?.includes(el)}
            onChange={() => handleChange(el)}
            label={el}
            data-testid={`filter-by-${el.toLowerCase()}`}
          />
        ))}
      </FormGroup>
    </fieldset>
  );
}
