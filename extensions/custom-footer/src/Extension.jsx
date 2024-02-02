import {
  Icon,
  InlineLayout,
  InlineStack,
  Link,
  ListItem,
  Text,
  useShop,
} from "@shopify/ui-extensions-react/checkout";

// [START custom-footer.render]
export default function Extension() {
  const { storefrontUrl } = useShop();

  return (
    <InlineLayout
      blockAlignment="center"
      columns={["auto", "fill"]}
      accessibilityRole="navigation"
    >
      <InlineStack
        spacing="extraTight"
        blockAlignment="center"
        accessibilityRole="orderedList"
      >
        <InlineStack
          accessibilityRole="listItem"
          blockAlignment="center"
          spacing="extraTight"
        >
          <Link to={storefrontUrl}>Home</Link>
          <Icon source="chevronRight" size="extraSmall" />
        </InlineStack>
        <InlineStack
          accessibilityRole="listItem"
          blockAlignment="center"
          spacing="extraTight"
        >
          <Link to={new URL("/collections", storefrontUrl).href}>Shop</Link>
          <Icon source="chevronRight" size="extraSmall" />
        </InlineStack>
        <InlineStack accessibilityRole="listItem">
          <Text appearance="subdued">Checkout</Text>
        </InlineStack>
      </InlineStack>

      <InlineStack
        spacing="tight"
        inlineAlignment="end"
        accessibilityRole="orderedList"
      >
        <ListItem>
          <Link to={new URL("/sizing", storefrontUrl).href}>Sizing</Link>
        </ListItem>
        <ListItem>
          <Link to={new URL("/terms", storefrontUrl).href}>Terms</Link>
        </ListItem>
        <ListItem>
          <Link to={new URL("/privacy", storefrontUrl).href}>Privacy</Link>
        </ListItem>
        <ListItem>
          <Link to={new URL("/faq", storefrontUrl).href}>FAQ</Link>
        </ListItem>
        <ListItem>
          <Link to={new URL("/accessibility", storefrontUrl).href}>
            Accessibility
          </Link>
        </ListItem>
      </InlineStack>
    </InlineLayout>
  );
}
// [END custom-footer.render]
