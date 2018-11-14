// x-view: react-native's View like element
// See https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/View/index.js#L72-L84
import "./elements/x-view";
import "./elements/x-pane";

// Run
const root = document.querySelector(".root");
if (root) {
  root.innerHTML = `
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
`;
}
