import { blackA, red } from '@radix-ui/colors';

import type { ComponentProps, FC, HTMLAttributes } from 'react';

import { useContext } from 'react';

import { useMemo } from 'react';

import { createContext } from 'react';

import { Fieldset } from '../../quarks/layout';

import { Card } from '../../quarks/layout';

import { TextBox } from '../../quarks/text-box';

import { styled } from '../../stitches';

type ContainerProps = Omit<
  HTMLAttributes<HTMLDivElement>,
  'onChange' | 'value'
> & {
  value: string;

  error?: string;

  hasError?: boolean;

  onChange: (value: string) => void;
};

const InputContext = createContext<Pick<ContainerProps, 'onChange' | 'value'>>({
  value: '',

  onChange: () => {}
});

const Label = styled('div', {
  fontSize: 15,
  fontWeight: 500,
  marginBottom: '$1',
  color: 'white',
  userSelect: 'none',

  [`${Card} &`]: {
    color: blackA.blackA12
  }
});

const Control: FC<ComponentProps<typeof TextBox>> = ({ ...props }) => {
  const { value, onChange } = useContext(InputContext);

  return (
    <TextBox
      value={value}
      onChange={event => onChange(event.currentTarget.value)}
      {...props}
    />
  );
};

const Container: FC<ContainerProps> = ({
  onChange,
  value,
  children,
  hasError,
  error,
  ...props
}) => {
  const context = useMemo(
    () => ({
      value,
      error,
      hasError,
      onChange
    }),

    [onChange, value, hasError, error]
  );

  return (
    <InputContext.Provider value={context}>
      <ContainerBox {...props}>
        {children}

        {hasError && error?.length > 0 && <Message>{error}</Message>}
      </ContainerBox>
    </InputContext.Provider>
  );
};

const ContainerBox = styled('div', {
  position: 'relative',
  width: '100%',

  [`${Fieldset} &`]: {
    marginBottom: '$3'
  }
});

const Message = styled('div', {
  position: 'absolute',
  top: 'calc(100% + 4px)',
  left: 0,
  fontSize: 12,
  color: red.red8,
  whiteSpace: 'nowrap'
});

const Input = {
  Label,
  Control,
  Container,

  ContainerBox
};

export { Input };
