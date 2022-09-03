import { styled } from '../../stitches';

const Card = styled('div', {
  padding: '$4',
  borderRadius: '12px',
  background: 'white',
  boxShadow: `1px 1px 0 3px rgba(255, 255, 255, 0.1)`,
  backgroundColor: 'white'
});

const Fieldset = styled('div', {
  display: 'flex',
  alignItems: 'stretch',
  flexDirection: 'column'
});

export { Card, Fieldset };
