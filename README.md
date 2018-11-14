# web-components playground

- `<x-view />` : React Native's `View` like element
- `<x-pane />` : Area filled version of `x-view`

## Example

```html
<x-view style="height: 300px;">
  <x-view style="flex: 2; background: gray;">
    <x-pane style="color: green;">Pane0</x-pane>
  </x-view>
  <x-view style="flex: 1;">
    <x-view style="flex-direction: row; height: 100%;">
      <x-view style="flex: 3; background: #a88;">
        <x-pane>Pane1</x-pane>
      </x-view>
      <x-view style="flex: 1; background: #8a8;">
        <x-pane>Pane2</x-pane>
      </x-view>
    </x-view>
  </x-view>
</x-view>
```

![](https://gyazo.com/ee945134cf79415a4372e5b206ff5c1c)

## How to dev

- `yarn dev`: Start application server on `http://localhost:1234`
- `yarn build`: Generate `dist`
- `yarn test`: Run jest
- `yarn deploy`: Deploy to netlify (need netlify account)

## LICENSE

MIT
