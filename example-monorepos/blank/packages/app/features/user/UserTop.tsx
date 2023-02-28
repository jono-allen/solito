import { View, Text } from 'dripsy'
import { TextLink } from 'solito/link'

export function UserTop() {
  return (
    <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}>
        User Top
      </Text>
      <View sx={{ height: 32 }} />

      <TextLink href="/user1/userNested">Go to User Nested 👉</TextLink>
      <View sx={{ height: 32 }} />

      <TextLink href="/">👈 Go Home</TextLink>
    </View>
  )
}
