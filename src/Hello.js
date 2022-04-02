import * as React from "react";
import { Text, Box, Pressable } from "native-base";
import {Image} from "native-base"

// Add Props in Hello({navigation})
export default function Hello({ navigation }) {
  return (
    <Box
      bg="primary.500"
      flex={1}
      alignItems="center"
      justifyContent="center"
      p={10}
    >
      <Text color="white" fontFamily="body" fontWeight={400} fontStyle="italic" fontSize={30}>
        SELAMAT DATANG
      </Text>
    </Box> 
  );
}
