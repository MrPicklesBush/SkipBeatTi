// import {create} from "zustand";
// import {Song} from "@/types";

// interface PlayerStore {
//     currentSong: Song | null;
//     isPlaying: Boolean;
//     queue: Song[];
//     currentIndex: number;

//     intializeQueue; (songs: Song[]) => void;
//     playAlbum: (songs: Song[], startIndex?: number) => {},
//     setCurrentSong: (songs: Song[], startIndex?: number) => void,
//     togglePlay: () => void,
//     playNext: () => void,
//     playPrevious: () => void,
// }

// export const usePlayerStore = create<PlayerStore>((set,get) => ([
//     currentSong: null,
//     isPlaying: false,
//     queue: [],
//     currentIndex: -1,

//     initializeQueue: (songs: Song[]) => {
//         set({
//             queue:songs,
//             currentSong: get().currentSong || songs[0],
//             currentIndex: get().currentIndex === -1 ? 0 : get.currentIndex
//         });
//     },
//     playAlbum: (songs: Song[], startIndex = 0) => {
//         if(songs.length === 0) return;

//         const song = songs[startIndex];

//         set({
//             queue:songs,
//             currentSong: song,
//             currentIndex: startIndex,
//             isPlaying: true,
//         });
//     },
//     setCurrentSong: (songs: Song | null) => {
//         if(!song) return;

//         cont songIndex = get().queue.findIndex(s => s._id === song._id);
        
//         set({
//             currentSong: song,
//             isPlaying: true,
//             currentIndex: song Index !== -1 ? songIndex: get().currentIndex
//         });
//     },
//     togglePlay: () => {
//         const wilStartPlaying = !get().isPlaying;

//         set({
//             isPlaying: wilStartPlaying,
//         });
//     },
//     playNext: () => {
//         const { currentIndex, queue} = get()
//         const nextIndex = currentIndex +1

//         // If is nextg song, play it
//         if (nextIndex < queue.length) {
//             const nextSong = queue[nextIndex]

//             set({
//                 currentSong: nextSong,
//                 currentIndex: nextIndex,
//                 isPlaying: true,
//             });
//         } else {
//             set({ isPlaying: false});
//         }
//     },
//     playPrevious: () => {
//         const { currentIndex, queue } = get();
//         const prevIndex = currentIndex - 1;

//         if(prevIndex >=0) {
//             const prevSong = queue[prevIndex];

//             set({
//                 currentSong: prevSong,
//                 currentIndex: prevIndex,
//                 isPlaying: true,
//             })
//         } else {
//             // no previous song
//             set ({ isPlaying: false});
//         }
//     },
// ])


import { create } from "zustand";

export const usePlayerStore = create((set, get) => ({
  currentSong: null,
  isPlaying: false,
  queue: [],
  currentIndex: -1,

  initializeQueue: (songs) => {
    set({
      queue: songs,
      currentSong: get().currentSong || songs[0],
      currentIndex: get().currentIndex === -1 ? 0 : get().currentIndex,
    });
  },

  playAlbum: (songs, startIndex = 0) => {
    if (songs.length === 0) return;

    const song = songs[startIndex];

    set({
      queue: songs,
      currentSong: song,
      currentIndex: startIndex,
      isPlaying: true,
    });
  },

  setCurrentSong: (song) => {
    if (!song) return;

    const songIndex = get().queue.findIndex((s) => s._id === song._id);

    set({
      currentSong: song,
      isPlaying: true,
      currentIndex: songIndex !== -1 ? songIndex : get().currentIndex,
    });
  },

  togglePlay: () => {
    const willStartPlaying = !get().isPlaying;

    set({
      isPlaying: willStartPlaying,
    });
  },

  playNext: () => {
    const { currentIndex, queue } = get();
    const nextIndex = currentIndex + 1;

    // If there is a next song, play it
    if (nextIndex < queue.length) {
      const nextSong = queue[nextIndex];

      set({
        currentSong: nextSong,
        currentIndex: nextIndex,
        isPlaying: true,
      });
    } else {
      set({ isPlaying: false });
    }
  },

  playPrevious: () => {
    const { currentIndex, queue } = get();
    const prevIndex = currentIndex - 1;

    if (prevIndex >= 0) {
      const prevSong = queue[prevIndex];

      set({
        currentSong: prevSong,
        currentIndex: prevIndex,
        isPlaying: true,
      });
    } else {
      // No previous song
      set({ isPlaying: false });
    }
  },
}));