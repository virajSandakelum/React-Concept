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
};

export const useCatStore = create<TCateStore>()
    (
        immer(
            (set) => ({
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
                    })
            })
        )
    );


// https://www.npmjs.com/package/immer