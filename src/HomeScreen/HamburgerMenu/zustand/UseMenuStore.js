import {create} from 'zustand';
import {Animated} from 'react-native';

export const useMenuStore = create((set, get) => ({
  isOpen: false,
  topLine: new Animated.Value(0),
  bottomLine: new Animated.Value(0),

  toggleMenu: () => {
    const {isOpen, topLine, bottomLine} = get();
    set({isOpen: !isOpen});

    Animated.parallel([
      Animated.timing(topLine, {
        toValue: isOpen ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
      Animated.timing(bottomLine, {
        toValue: isOpen ? 0 : 1,
        duration: 300,
        useNativeDriver: true,
      }),
    ]).start();
  },
}));

export const useProfileStore = create((set, get) => ({
  isOpened: false,

  toggleMenu: () => {
    const {isOpened} = get();
    set({isOpened: !isOpened});
  },
}));
export const useNotificationStore = create((set, get) => ({
  showNotifications: false,

  toggleMenu: () => {
    const {showNotifications} = get();
    set({showNotifications: !showNotifications});
  },
}));
