import { View, Text } from 'dripsy'
import { TextLink } from 'solito/link'

export function UserNested() {
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}>
        User Nested
      </Text>

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
