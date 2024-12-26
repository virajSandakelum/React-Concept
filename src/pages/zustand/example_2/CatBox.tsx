import { useCatStore } from "../../../zustand/example_2/CatStore"

const CatBox = () => {
    // const bigCats = useCatStore((state) => state.cats.bigCats)
    // const smallCats = useCatStore((state) => state.cats.smallCats)
    // const increaseBigCats = useCatStore(state => state.increaseBigcats)
    // const increaseSmallCats = useCatStore(state => state.increaseSmallCats)

    // const immerBigCats = useCatStore((state) => state.immerCats.immerBigCats)
    // const immerSmallCats = useCatStore((state) => state.immerCats.immerSmallCats)
    // const immerIncreaseBigcats = useCatStore(state => state.immerIncreaseBigcats)
    // const immerIncreaseSmallCats = useCatStore(state => state.immerIncreaseSmallCats)

    // const catSummary = useCatStore(state => state.summary)

    const {
      cats:{bigCats, smallCats},
      immerCats:{immerBigCats, immerSmallCats},
      increaseBigcats, 
      increaseSmallCats, 
      immerIncreaseBigcats, 
      immerIncreaseSmallCats, 
      summary
    } = useCatStore();


  return (
    <div>
        <h1>Cats</h1>
        <p>Big Cats: {bigCats}</p>
        <p>Small Cats: {smallCats}</p>
        <div>
            <button onClick={increaseBigcats}>add big cats</button>
            <button onClick={increaseSmallCats}>add small cats</button>
        </div>

        <br/>

        <h1>Immer Apply Cats</h1>
        <p>Immer Big Cats: {immerBigCats}</p>
        <p>Immer Small Cats: {immerSmallCats}</p>
        <div>
            <button onClick={immerIncreaseBigcats}>Immer add big cats</button>
            <button onClick={immerIncreaseSmallCats}>Immer add small cats</button>
        </div>

        <br/>

        <h3>{summary()}</h3>
    </div>
  )
}

export default CatBox