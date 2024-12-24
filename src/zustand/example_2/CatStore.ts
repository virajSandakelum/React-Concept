import { create } from "zustand";
import { immer } from "zustand/middleware/immer";


type TCateStore = {
    cats: {
        bigCats: number;
        smallCats: number;
    };
    immerCats: {
        immerBigCats: number
        immerSmallCats: number
    }
    increaseBigcats: () => void;
    increaseSmallCats: () => void;
    immerIncreaseBigcats: () => void
    immerIncreaseSmallCats: () => void
    summary:() => string
};

export const useCatStore = create<TCateStore>()
    (
        immer(
            (set, get) => ({
                cats: {
                    bigCats: 0,
                    smallCats: 0,
                },
                immerCats: {
                    immerBigCats: 0,
                    immerSmallCats: 0,
                },
                increaseBigcats: () =>
                    set((state) => ({
                        cats: {
                            ...state.cats,
                            bigCats: state.cats.bigCats + 1,
                        },
                    })),
                increaseSmallCats: () =>
                    set((state) => ({
                        cats: {
                            ...state.cats,
                            smallCats: state.cats.smallCats + 1,
                        },
                    })),
                immerIncreaseBigcats: () =>
                    set((state) => {
                        state.immerCats.immerBigCats++
                    }),
                immerIncreaseSmallCats: () =>
                    set((state) => {
                        state.immerCats.immerSmallCats++
                    }),
                summary: () => {
                    // const total = state.cats.bigCats + state.cats.smallCats // in here cannot get state, but using the get(), we can get
                    const total = get().cats.bigCats + get().cats.smallCats + get().immerCats.immerBigCats + get().immerCats.immerSmallCats
                    return `There ara ${total} cats in total.`;
                }
            })
        )
    );


// https://www.npmjs.com/package/immer

// by using the immer middleware - can update immutable objects as mutable object