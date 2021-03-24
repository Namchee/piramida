import * as React from 'react';

import { Button, FormControl, Input, Flex } from '@chakra-ui/react';

function SearchInput() {
  return (
    <Flex>
      <FormControl id="search-investments">
        <Input
          placeholder="Cari investasi atau perusahaan"
          outlineColor="primary"
          size="lg"
          type="text" />
      </FormControl>

      <Button ml={4} px={8} size="lg" bg="primary" color="white" fontWeight={500} letterSpacing={0.5}>
        Periksa
      </Button>
    </Flex>
  );
}

export default SearchInput;
