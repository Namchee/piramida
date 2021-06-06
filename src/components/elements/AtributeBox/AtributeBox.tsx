import * as React from 'react';

import { Heading, Text } from '@chakra-ui/react';

export type AtributeBoxProps = {
  title: string;
  type: 'string' | 'object' | 'number';
  description: string;
};

function AtributeBox({ title, type, description }: React.PropsWithoutRef<AtributeBoxProps>) {
  return (
    <>
      <Heading as="dt" fontFamily="monospace" fontWeight={600} fontSize="lg" textColor="gray.600" lineHeight="tall">
        {title} <Text as="code" textColor="gray.500">{type}</Text>
      </Heading>

      <Text as="dd" textColor="gray.600" mt={1}>
        {description}
      </Text>
    </>
  );
}

export default AtributeBox;
