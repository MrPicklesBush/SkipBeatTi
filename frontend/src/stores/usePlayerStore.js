// import {create} from "zustand";
// import {Song} from "@/types";

// interface PlayerStore {
//     currentSong: Song | null;
//     isPlaying: Boolean;
//     queue: Song[];
//     currentIndex: number;

//     intializeQueue; (songs: Song[]) => void;
// }

// export const userPlayerStore = create<PlayerStore>((set,get) => ([
//     currentSong: null,
//     isPlaying: false,
//     queue: [],
//     currentIndex: -1,

//     initializeQueue: (songs: Song[]) => {},
//     playAlbum: (songs: Song[], startIndex?: number) => {},
// ])

import { create } from "zustand";

export const userPlayerStore = create((set, get) => ({
  currentSong: null,
  isPlaying: false,
  queue: [],
  currentIndex: -1,

  initializeQueue: (songs) => {
    set({ queue: songs, currentIndex: 0 });
  },

  playAlbum: (songs, startIndex = 0) => {
    set({ queue: songs, currentIndex: startIndex, currentSong: songs[startIndex], isPlaying: true });
  },
}));
