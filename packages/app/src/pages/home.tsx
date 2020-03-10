import React from 'react';
import { Box, Flex, Text } from '@blockstack/ui';
import { LogoWithName } from '@components/logo-with-name';
import { SignOut } from '@components/sign-out';

import { useDispatch } from 'react-redux';
import { useWallet } from '@common/hooks/use-wallet';
import { doSignOut } from '@store/wallet';

const SignedOut = () => (
  <Flex flexDirection="column" pb="120px" align="center" justify="center" flexGrow={1}>
    <Box>
      <Text fontSize="20px" lineHeight="28px" fontWeight="500">
        You&apos;re signed out of Secret Key
      </Text>
    </Box>
    <Box pt={2}>
      <Text fontSize="14px" lineHeight="20px" color="blue" position="relative">
        <a
          href="https://app.co/blockstack"
          target="_blank"
          rel="noopener noreferrer"
          title="Find an app to use"
          style={{ position: 'absolute', left: 0, top: 0, height: '100%', width: '100%' }}
        />
        Find an app to use
      </Text>
    </Box>
  </Flex>
);

export const Home = () => {
  const dispatch = useDispatch();
  const { identities } = useWallet();
  const isSignedIn = identities.length > 0;

  return (
    <Flex wrap="wrap" py={5} px={4} flexDirection="column" height="100vh">
      <LogoWithName />
      <Flex flex={1} mt={10} justifyContent={[null, 'center']}>
        {isSignedIn ? (
          <SignOut
            maxWidth={[null, '396px']}
            buttonMode="secondary"
            signOut={() => {
              dispatch(doSignOut());
            }}
          />
        ) : (
          <SignedOut />
        )}
      </Flex>
    </Flex>
  );
};