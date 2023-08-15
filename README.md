# React Hook for Handling Long Button Presses

Altough the title states "Button Presses", `useHold` can be used for any HTML element supporting `onclick` event. With `useHold` hook, you can make a function call on N'th millisecond of a mouse click, suppressing the normal click event.

## Installation

```bash
$ npm i @technarts/react-use-hold
```

## Usage

Below code exemplifies a button that whose regular clicks are handled as well as long clicks up to `500ms`. It also demonstrates how to handle the release, which is fired at the end of the long click.

```typescript
import React from "react";
import { useHold } from "@technarts/react-use-hold";

const App = () => {
  const [clicked, setClicked] = React.useState<boolean>(false)
  const [clicking, setClicking] = React.useState<boolean>(false)
  
  const events = useHold({
    ms: 500,
    onClick: () => {
      setClicked(true);
    },
    onHold: () => {
      setClicking(true);
    },
    onRelease: () => {
      setClicked(false);
      setClicking(false);
    },
  })

  return (
    <>
      <button {...events} >Click and keep clicking</button>
      <p>Clicked: {clicked ? "Yes" : "No"}</p>
      <p>Clicking: {clicking ? "Yes" : "No"}</p>
    </>
  )
}
```

## Types

### `useHold(params: Params) => void`

```typescript
type Params = {
  onClick?: React.MouseEventHandler, // This one will be called for clicks shorter than ms.
  onHold?: (event: React.MouseEvent<Element>, target: EventTarget) => void, // ...for clicks longer than ms.
  onRelease?: () => void, // Fired just after onHold.
  ms: number, // The measurement of longness for clicking and holding.
}
```

## Inspiration

Inspired by (and highly recommended reading): https://spacejelly.dev/posts/how-to-detect-long-press-gestures-in-javascript-events-in-react (Author: Colby Fayock, thanks.)

