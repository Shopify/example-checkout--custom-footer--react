import {
  Icon,
  InlineLayout,
  InlineStack,
  Link,
  Text,
  useShop,
} from '@shopify/ui-extensions-react/checkout';

export default function Extension() {
  const { storefrontUrl } = useShop();

  return (
    <InlineLayout columns={['auto','fill']}>
      <InlineStack spacing="extraTight" blockAlignment="center">
        <Link to={storefrontUrl}>Home</Link>
        <Icon source="chevronRight" size="extraSmall" />
        <Link to={new URL('/collections', storefrontUrl).href}>Shop</Link>
        <Icon source="chevronRight" size="extraSmall" />
        <Text appearance="subdued">Checkout</Text>
      </InlineStack>

      <InlineStack spacing="tight" inlineAlignment='end'>
        <Link to={new URL('/sizing', storefrontUrl).href}>Sizing</Link>
        <Link to={new URL('/terms', storefrontUrl).href}>Terms</Link>
        <Link to={new URL('/privacy', storefrontUrl).href}>Privacy</Link>
        <Link to={new URL('/faq', storefrontUrl).href}>FAQ</Link>
        <Link to={new URL('/accessibility', storefrontUrl).href}>Accessibility</Link>
      </InlineStack>
    </InlineLayout>
  );
}
