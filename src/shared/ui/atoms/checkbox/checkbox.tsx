import * as RCheckBox from '@radix-ui/react-checkbox';

import type { FC, PropsWithChildren } from 'react';

import { styled } from '../../stitches';

type CheckboxProps = PropsWithChildren<{
  value: boolean;

  onChange: (value: boolean) => void;
}>;

const Checkbox: FC<CheckboxProps> = ({ children, value, onChange }) => (
  <Container>
    <Root checked={value} onCheckedChange={() => onChange(!value)}>
      <Indicator>{value ? '+' : ''}</Indicator>
    </Root>

    <Label>{children}</Label>
  </Container>
);

const Root = styled(RCheckBox.Root, {
  size: '20px',

  background: '$white',

  variants: {
    checked: {
      true: {
        background: '$red'
      }
    }
  }
});

const Indicator = styled(RCheckBox.Indicator, {});

const Container = styled('div', {
  display: 'flex',

  alignItems: 'center'
});

const Label = styled('label', {
  fontSize: '$body-1',

  lineHeight: '$body-1'
});

export type { CheckboxProps };

export { Checkbox };
