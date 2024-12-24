import { useBearStore } from '../../../zustand/example_2/BearStore'

const BearBox = () => {
  // const bears = useBearStore((state) => state.bears);
  // const increasePopulation = useBearStore((state) => state.increasePopulation);
  // const removeAllBears = useBearStore((state) => state.removeAllBears)

  const { bears, increasePopulation, removeAllBears } = useBearStore(); // this also work

  return (
    <div>
      <h1>Bear</h1>
      <p>bears: {bears}</p>
      <div>
        <button onClick={increasePopulation}>add bear</button>
        <button onClick={removeAllBears}>remove all bear</button>
      </div>
    </div>
  )
}

export default BearBox