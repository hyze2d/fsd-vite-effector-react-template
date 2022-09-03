import { createEvent, restore } from 'effector';

import { useUnit } from 'effector-react';

import { Button } from '@/shared/ui/atoms/button';

import { Input } from '@/shared/ui/atoms/input';

import { Fieldset } from '@/shared/ui/quarks/layout';

import { Card } from '@/shared/ui/quarks/layout';

import { styled } from '@/shared/ui/stitches';

const createField = () => {
  const changed = createEvent<string>();

  const $value = restore(changed, '');

  return {
    $value,
    changed
  };
};

const useField = (field: ReturnType<typeof createField>) =>
  useUnit({
    value: field.$value,
    onChange: field.changed
  });

const fields = {
  email: createField(),

  password: createField()
};

const HomePage = () => {
  const email = useField(fields.email);

  const password = useField(fields.password);

  return (
    <Layout>
      <Presentation>
        <Fieldset>
          <Input.Container {...email}>
            <Input.Label>Email</Input.Label>

            <Input.Control />
          </Input.Container>

          <Input.Container {...password} hasError error='Wrong password'>
            <Input.Label>Password</Input.Label>

            <Input.Control />
          </Input.Container>

          <Button>Submit</Button>
        </Fieldset>
      </Presentation>
    </Layout>
  );
};

const Layout = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '100vh',
  minWidth: '100vw'
});

const Presentation = styled(Card, {
  width: '100%',
  maxWidth: '320px',
  margin: '0 auto'
});

export { HomePage };
